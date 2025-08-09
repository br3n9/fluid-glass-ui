"use client";

import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { useMemo, useState } from "react";
import Checkbox from "./Checkbox";
import IconButton from "./IconButton";
import Input from "./Input";
import Pagination from "./Pagination";
import Select from "./Select";

export default function InteractiveTable({
  data = [],
  columns = [],
  actions = [],
  title = "Table Interactive",
  itemsPerPage = 5,
  selectable = true,
  onRowSelect,
  onRowClick,
  customFilters = null,
  filterConfig = [],
  onFilterChange,
}) {
  const [sortField, setSortField] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [tableData, setTableData] = useState(data);
  const [filters, setFilters] = useState({});

  // Update table data when the data prop changes
  useMemo(() => {
    setTableData(data);
  }, [data]);

  const handleSort = (field) => {
    const newDirection =
      sortField === field && sortDirection === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortDirection(newDirection);

    setTableData((prevData) =>
      [...prevData].sort((a, b) => {
        if (a[field] < b[field]) return newDirection === "asc" ? -1 : 1;
        if (a[field] > b[field]) return newDirection === "asc" ? 1 : -1;
        return 0;
      })
    );
  };

  const handleSelectItem = (id) => {
    const newSelectedItems = selectedItems.includes(id)
      ? selectedItems.filter((item) => item !== id)
      : [...selectedItems, id];

    setSelectedItems(newSelectedItems);

    if (onRowSelect) {
      const selectedRows = tableData.filter((item) =>
        newSelectedItems.includes(item.id)
      );
      onRowSelect(selectedRows);
    }
  };

  const handleSelectAll = (e) => {
    const newSelectedItems = e.target.checked
      ? currentPageData.map((item) => item.id)
      : [];

    setSelectedItems(newSelectedItems);

    if (onRowSelect) {
      const selectedRows = tableData.filter((item) =>
        newSelectedItems.includes(item.id)
      );
      onRowSelect(selectedRows);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Handle filter changes
  const handleFilterChange = (field, value) => {
    const newFilters = { ...filters, [field]: value };
    setFilters(newFilters);

    if (onFilterChange) {
      onFilterChange(newFilters);
    }
  };

  // Filter data based on search term and filters
  const filteredData = useMemo(() => {
    let result = tableData;

    // Apply search filter
    if (searchTerm) {
      const searchableColumns = columns
        .filter((col) => col.searchable)
        .map((col) => col.field);

      result = result.filter((item) => {
        return searchableColumns.some((field) =>
          String(item[field]).toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
    }

    // Apply custom filters
    Object.entries(filters).forEach(([field, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        result = result.filter((item) => {
          // Handle array values (multi-select)
          if (Array.isArray(value)) {
            return value.length === 0 || value.includes(item[field]);
          }
          // Handle single values
          return item[field] === value;
        });
      }
    });

    return result;
  }, [tableData, searchTerm, columns, filters]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Get current page data
  const currentPageData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredData, currentPage, itemsPerPage]);

  return (
    <section className="glass-card">
      {title && <h3 className="text-xl font-semibold mb-6">{title}</h3>}

      {/* Contrôles */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row gap-4 mb-4 items-end">
          {/* Barre de recherche */}
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Rechercher..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              startIcon={<Search size={20} />}
            />
          </div>

          {/* Filtres générés automatiquement */}
          {filterConfig && filterConfig.length > 0 && (
            <div className="flex flex-wrap gap-2 items-center">
              {filterConfig.map((filter) => (
                <div key={filter.field} className="min-w-[150px]">
                  <Select
                    label={filter.label}
                    options={filter.options}
                    value={filters[filter.field] || ""}
                    onChange={(value) =>
                      handleFilterChange(filter.field, value)
                    }
                    placeholder={
                      filter.placeholder || `Sélectionner ${filter.label}`
                    }
                  />
                </div>
              ))}
            </div>
          )}

          {/* Filtres personnalisés */}
          {customFilters && (
            <div className="flex items-center">{customFilters}</div>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              {selectable && (
                <th className="text-left p-3 w-10">
                  <Checkbox
                    checked={
                      currentPageData.length > 0 &&
                      currentPageData.every((item) =>
                        selectedItems.includes(item.id)
                      )
                    }
                    onChange={handleSelectAll}
                  />
                </th>
              )}

              {columns.map((column) => (
                <th
                  key={column.field}
                  className={`text-left p-3 ${
                    column.sortable ? "cursor-pointer hover:bg-gray-50" : ""
                  }`}
                  onClick={() => column.sortable && handleSort(column.field)}
                >
                  <div className="flex items-center gap-2">
                    {column.header}
                    {column.sortable &&
                      sortField === column.field &&
                      (sortDirection === "asc" ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      ))}
                  </div>
                </th>
              ))}

              {actions && actions.length > 0 && (
                <th className="text-right p-3">Actions</th>
              )}
            </tr>
          </thead>
          <tbody>
            {currentPageData.length === 0 ? (
              <tr>
                <td
                  colSpan={
                    selectable
                      ? columns.length + (actions.length > 0 ? 2 : 1)
                      : columns.length + (actions.length > 0 ? 1 : 0)
                  }
                  className="p-6 text-center text-gray-500"
                >
                  Aucune donnée disponible
                </td>
              </tr>
            ) : (
              currentPageData.map((item) => (
                <tr
                  key={item.id}
                  className={`border-b border-gray-100 hover:bg-gray-50 ${
                    onRowClick ? "cursor-pointer" : ""
                  }`}
                  onClick={() => onRowClick && onRowClick(item)}
                >
                  {selectable && (
                    <td className="p-3" onClick={(e) => e.stopPropagation()}>
                      <Checkbox
                        checked={selectedItems.includes(item.id)}
                        onChange={() => handleSelectItem(item.id)}
                      />
                    </td>
                  )}

                  {columns.map((column) => (
                    <td key={`${item.id}-${column.field}`} className="p-3">
                      {column.renderCell ? (
                        column.renderCell(item)
                      ) : (
                        <span className="text-gray-600">
                          {item[column.field]}
                        </span>
                      )}
                    </td>
                  ))}

                  {actions && actions.length > 0 && (
                    <td
                      className="p-3 text-right"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex justify-end gap-1">
                        {actions.map((action, index) => (
                          <IconButton
                            key={index}
                            onClick={() => action.onClick(item)}
                            title={action.label}
                          >
                            {action.icon}
                          </IconButton>
                        ))}
                      </div>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Selection indicator */}
      {selectedItems.length > 0 && (
        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-700">
            {selectedItems.length} élément{selectedItems.length > 1 ? "s" : ""}{" "}
            sélectionné{selectedItems.length > 1 ? "s" : ""}
          </p>
        </div>
      )}

      {/* Pagination */}
      {filteredData.length > itemsPerPage && (
        <div className="mt-6">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            totalResults={filteredData.length}
            resultsPerPage={itemsPerPage}
          />
        </div>
      )}
    </section>
  );
}
