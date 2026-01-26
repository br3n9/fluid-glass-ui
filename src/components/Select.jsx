import { ArrowUpDown, ChevronDown, Loader2, Search } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Portal } from "../hooks/usePortal";

const Select = ({
  label,
  options = [],
  value,
  onChange,
  placeholder = "Sélectionner...",
  disabled = false,
  // Nouvelles props pour les fonctionnalités avancées
  searchable = false,
  sortable = false,
  sortOrder = "asc", // 'asc' | 'desc'
  onSortChange,
  loadOptions, // Fonction pour le chargement dynamique: (searchTerm, page) => Promise<options[]> | null
  searchPlaceholder = "Rechercher...",
  maxHeight = 240,
  error,
  helperText,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [internalOptions, setInternalOptions] = useState(options);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [menuStyle, setMenuStyle] = useState({});

  const selectRef = useRef(null);
  const searchInputRef = useRef(null);
  const optionsContainerRef = useRef(null);
  const observerRef = useRef(null);
  const dropdownRef = useRef(null);

  // Synchronisation des options avec les props quand elles changent
  useEffect(() => {
    if (!loadOptions) {
      setInternalOptions(options || []);
    }
  }, [options, loadOptions]);

  // Chargement initial des options si loadOptions est fourni
  useEffect(() => {
    if (loadOptions) {
      const loadInitialOptions = async () => {
        setIsLoading(true);
        try {
          const results = await loadOptions("", 1); // Première page sans recherche
          if (results && results.length > 0) {
            setInternalOptions(results);
            setHasMore(results.length > 0);
            setCurrentPage(1);
          } else {
            setInternalOptions([]);
            setHasMore(false);
          }
        } catch (error) {
          console.error("Erreur lors du chargement initial:", error);
          setInternalOptions([]);
          setHasMore(false);
        } finally {
          setIsLoading(false);
        }
      };

      loadInitialOptions();
    }
  }, [loadOptions]);

  // Calcul de la position du menu
  useEffect(() => {
    if (isOpen && selectRef.current) {
      const updatePosition = () => {
        const rect = selectRef.current.getBoundingClientRect();
        const scrollX = window.scrollX || window.pageXOffset;
        const scrollY = window.scrollY || window.pageYOffset;

        setMenuStyle({
          position: "absolute",
          top: `${rect.bottom + scrollY + 4}px`,
          left: `${rect.left + scrollX}px`,
          width: `${rect.width}px`,
          zIndex: 9999,
          maxHeight: `${maxHeight + 100}px`, // Marge pour la recherche/tri
          pointerEvents: "auto", // Re-enable clicks
        });
      };

      updatePosition();
      window.addEventListener("resize", updatePosition);
      window.addEventListener("scroll", updatePosition, true);

      return () => {
        window.removeEventListener("resize", updatePosition);
        window.removeEventListener("scroll", updatePosition, true);
      };
    }
  }, [isOpen, maxHeight]);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      if (!isOpen && searchable) {
        // Focus sur le champ de recherche quand on ouvre
        setTimeout(() => {
          searchInputRef.current?.focus();
        }, 100);
      }
    }
  };

  const handleSelect = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
    setSearchTerm("");
  };

  const handleClickOutside = (event) => {
    // Vérifier si le clic est en dehors du select ET du menu déroulant (qui est dans le portail)
    const isOutsideSelect =
      selectRef.current && !selectRef.current.contains(event.target);
    const isOutsideDropdown =
      dropdownRef.current && !dropdownRef.current.contains(event.target);

    if (isOutsideSelect && isOutsideDropdown) {
      setIsOpen(false);
      setSearchTerm("");
    }
  };

  const handleSearch = useCallback(
    async (term) => {
      // NE PAS faire setSearchTerm(term) ici pour éviter la boucle infinie !

      if (!loadOptions) return;

      setIsLoading(true);
      setCurrentPage(1);
      try {
        const results = await loadOptions(term, 1);
        if (results === null) {
          setInternalOptions([]);
          setHasMore(false);
        } else {
          setInternalOptions(results);
          setHasMore(results.length > 0);
        }
      } catch (error) {
        console.error("Erreur lors de la recherche:", error);
        setInternalOptions([]);
        setHasMore(false);
      } finally {
        setIsLoading(false);
      }
    },
    [loadOptions],
  );

  const handleSort = () => {
    if (sortable && onSortChange) {
      const newOrder = sortOrder === "asc" ? "desc" : "asc";
      onSortChange(newOrder);
    }
  };

  // Filtrage local des options si pas de fonction de chargement externe
  const filteredOptions = useMemo(() => {
    if (!searchable || loadOptions) {
      return internalOptions;
    }

    if (!searchTerm) {
      return internalOptions;
    }

    return internalOptions.filter((option) =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [internalOptions, searchTerm, searchable]);

  // Tri local des options si pas de fonction de tri externe
  const sortedOptions = useMemo(() => {
    if (!sortable || onSortChange) {
      return filteredOptions;
    }

    return [...filteredOptions].sort((a, b) => {
      const comparison = a.label.localeCompare(b.label);
      return sortOrder === "asc" ? comparison : -comparison;
    });
  }, [filteredOptions, sortable, sortOrder, onSortChange]);

  // Fonction de chargement de plus d'options
  const loadMoreOptions = useCallback(async () => {
    if (!hasMore || !loadOptions) return;

    setIsLoading(true);
    try {
      const nextPage = currentPage + 1;
      const results = await loadOptions(searchTerm, nextPage);

      if (results === null || results.length === 0) {
        setHasMore(false);
      } else {
        setInternalOptions((prev) => [...prev, ...results]);
        setCurrentPage(nextPage);
      }
    } catch (error) {
      console.error("Erreur lors du chargement:", error);
      setHasMore(false);
    } finally {
      setIsLoading(false);
    }
  }, [hasMore, loadOptions, currentPage, searchTerm]);

  // Ref pour accéder à la dernière version de loadMoreOptions sans créer de dépendance circulaire
  const loadMoreOptionsRef = useRef(loadMoreOptions);
  loadMoreOptionsRef.current = loadMoreOptions;

  // Intersection Observer pour le scroll infini
  const lastOptionRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore && loadOptions) {
          loadMoreOptionsRef.current();
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [isLoading, hasMore, loadOptions],
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const selectedOption = internalOptions.find(
    (option) => option.value === value,
  );

  return (
    <div className="relative w-full" ref={selectRef}>
      {label && (
        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <div className="relative">
        <button
          type="button"
          className={`input-fluid w-full text-left flex items-center justify-between ${
            disabled ? "bg-gray-100 dark:bg-gray-800 cursor-not-allowed" : ""
          } ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : ""
          }`}
          onClick={handleToggle}
          disabled={disabled}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <span
            className={`block truncate mr-2 ${selectedOption ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"}`}
          >
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronDown
            size={16}
            className={`transition-transform flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isOpen && (
          <Portal id="fluid-select-portal">
            <div
              ref={dropdownRef}
              className="glass-surface rounded-lg shadow-lg overflow-hidden"
              style={menuStyle}
            >
              {/* Barre de recherche et tri */}
              {(searchable || sortable) && (
                <div className="p-2 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex gap-2">
                    {searchable && (
                      <div className="flex-1 relative">
                        <Search
                          size={16}
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        />
                        <input
                          ref={searchInputRef}
                          type="text"
                          value={searchTerm}
                          onChange={(e) => {
                            setSearchTerm(e.target.value);
                            handleSearch(e.target.value);
                          }}
                          placeholder={searchPlaceholder}
                          className="w-full pl-9 pr-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    )}
                    {sortable && (
                      <button
                        type="button"
                        onClick={handleSort}
                        className="px-3 py-2 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition-colors flex items-center gap-1"
                        title={`Trier par ordre ${sortOrder === "asc" ? "décroissant" : "croissant"}`}
                      >
                        <ArrowUpDown size={14} />
                        {sortOrder === "asc" ? "A-Z" : "Z-A"}
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Liste des options */}
              <div
                ref={optionsContainerRef}
                className="py-1 overflow-y-auto"
                style={{ maxHeight: `${maxHeight}px` }}
              >
                {isLoading && sortedOptions.length === 0 ? (
                  <div className="flex items-center justify-center py-4">
                    <Loader2 size={16} className="animate-spin mr-2" />
                    <span className="text-sm text-gray-500">Chargement...</span>
                  </div>
                ) : sortedOptions.length === 0 ? (
                  <div className="px-4 py-3 text-sm text-gray-500 text-center">
                    {searchTerm
                      ? "Aucun résultat trouvé"
                      : "Aucune option disponible"}
                  </div>
                ) : (
                  sortedOptions.map((option, index) => {
                    const isLast = index === sortedOptions.length - 1;
                    return (
                      <button
                        key={option.value}
                        ref={
                          isLast && hasMore && loadOptions
                            ? lastOptionRef
                            : null
                        }
                        type="button"
                        className="w-full text-left px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-glass-light dark:hover:bg-glass-dark-light transition-colors focus:outline-none focus:bg-glass-light dark:focus:bg-glass-dark-light"
                        onClick={() => handleSelect(option.value)}
                        role="option"
                        aria-selected={value === option.value}
                      >
                        {option.label}
                      </button>
                    );
                  })
                )}

                {/* Indicateur de chargement pour le scroll infini */}
                {isLoading && hasMore && loadOptions && (
                  <div className="flex items-center justify-center py-2">
                    <Loader2 size={14} className="animate-spin mr-2" />
                    <span className="text-xs text-gray-500">Chargement...</span>
                  </div>
                )}
              </div>
            </div>
          </Portal>
        )}
      </div>

      {/* Messages d'aide et d'erreur */}
      {(error || helperText) && (
        <p
          className={`mt-1 text-sm ${
            error
              ? "text-red-600 dark:text-red-400"
              : "text-gray-500 dark:text-gray-400"
          }`}
        >
          {error || helperText}
        </p>
      )}
    </div>
  );
};

export default Select;
