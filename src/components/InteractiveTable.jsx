"use client";

import { useState, useMemo } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  SlidersHorizontal,
} from 'lucide-react';
import Input from './Input';
import Button from './Button';
import Checkbox from './Checkbox';
import Badge from './Badge';
import IconButton from './IconButton';
import Pagination from './Pagination';

// This would typically be passed as a prop
const initialData = [
  {
    id: 1,
    name: 'Jean Dupont',
    email: 'jean@example.com',
    role: 'Admin',
    status: 'Actif',
    date: '2024-01-15',
  },
  {
    id: 2,
    name: 'Marie Martin',
    email: 'marie@example.com',
    role: 'User',
    status: 'Inactif',
    date: '2024-01-10',
  },
  {
    id: 3,
    name: 'Pierre Durand',
    email: 'pierre@example.com',
    role: 'User',
    status: 'Actif',
    date: '2024-01-20',
  },
  {
    id: 4,
    name: 'Sophie Leroy',
    email: 'sophie@example.com',
    role: 'Moderator',
    status: 'Actif',
    date: '2024-01-05',
  },
  {
    id: 5,
    name: 'Thomas Petit',
    email: 'thomas@example.com',
    role: 'User',
    status: 'Suspendu',
    date: '2024-01-12',
  },
];

const getRoleBadgeVariant = (role) => {
  switch (role) {
    case 'Admin':
      return 'destructive';
    case 'Moderator':
      return 'warning';
    default:
      return 'default';
  }
};

const getStatusBadgeVariant = (status) => {
  switch (status) {
    case 'Actif':
      return 'success';
    case 'Inactif':
      return 'default';
    case 'Suspendu':
      return 'destructive';
    default:
      return 'default';
  }
};

export default function InteractiveTable({
  data = initialData,
  columns = [
    { field: 'name', header: 'Nom', sortable: true, searchable: true },
    { field: 'email', header: 'Email', searchable: true },
    { field: 'role', header: 'Rôle', renderCell: (item) => (
      <Badge variant={getRoleBadgeVariant(item.role)}>{item.role}</Badge>
    )},
    { field: 'status', header: 'Statut', renderCell: (item) => (
      <Badge variant={getStatusBadgeVariant(item.status)}>{item.status}</Badge>
    )},
    { field: 'date', header: 'Date', sortable: true },
  ],
  actions = [
    { icon: <Eye size={16} />, label: 'Voir', onClick: (item) => console.log('View', item) },
    { icon: <Edit size={16} />, label: 'Modifier', onClick: (item) => console.log('Edit', item) },
    { icon: <Trash2 size={16} className="text-red-600" />, label: 'Supprimer', onClick: (item) => console.log('Delete', item) },
  ],
  title = 'Table Interactive',
  itemsPerPage = 5,
  selectable = true,
  onRowSelect,
  onRowClick,
}) {
  const [sortField, setSortField] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [tableData, setTableData] = useState(data);

  // Update table data when the data prop changes
  useMemo(() => {
    setTableData(data);
  }, [data]);

  const handleSort = (field) => {
    const newDirection =
      sortField === field && sortDirection === 'asc' ? 'desc' : 'asc';
    setSortField(field);
    setSortDirection(newDirection);

    setTableData((prevData) =>
      [...prevData].sort((a, b) => {
        if (a[field] < b[field]) return newDirection === 'asc' ? -1 : 1;
        if (a[field] > b[field]) return newDirection === 'asc' ? 1 : -1;
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
      const selectedRows = tableData.filter(item => newSelectedItems.includes(item.id));
      onRowSelect(selectedRows);
    }
  };

  const handleSelectAll = (e) => {
    const newSelectedItems = e.target.checked
      ? currentPageData.map((item) => item.id)
      : [];
    
    setSelectedItems(newSelectedItems);
    
    if (onRowSelect) {
      const selectedRows = tableData.filter(item => newSelectedItems.includes(item.id));
      onRowSelect(selectedRows);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Filter data based on search term
  const filteredData = useMemo(() => {
    if (!searchTerm) return tableData;
    
    const searchableColumns = columns
      .filter(col => col.searchable)
      .map(col => col.field);
    
    return tableData.filter(item => {
      return searchableColumns.some(field => 
        String(item[field]).toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }, [tableData, searchTerm, columns]);
  
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
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1">
          <Input
            type="text"
            placeholder="Rechercher..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            startIcon={<Search size={20} />}
          />
        </div>
        <Button variant="ghost" startIcon={<SlidersHorizontal size={16} />}>
          Filtrer
        </Button>
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
                      currentPageData.every(item => selectedItems.includes(item.id))
                    }
                    onChange={handleSelectAll}
                  />
                </th>
              )}
              
              {columns.map((column) => (
                <th
                  key={column.field}
                  className={`text-left p-3 ${column.sortable ? 'cursor-pointer hover:bg-gray-50' : ''}`}
                  onClick={() => column.sortable && handleSort(column.field)}
                >
                  <div className="flex items-center gap-2">
                    {column.header}
                    {column.sortable && sortField === column.field && (
                      sortDirection === 'asc' ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )
                    )}
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
                  colSpan={selectable ? columns.length + (actions.length > 0 ? 2 : 1) : columns.length + (actions.length > 0 ? 1 : 0)}
                  className="p-6 text-center text-gray-500"
                >
                  Aucun résultat trouvé
                </td>
              </tr>
            ) : (
              currentPageData.map((item) => (
                <tr
                  key={item.id}
                  className={`border-b border-gray-100 hover:bg-gray-50 ${onRowClick ? 'cursor-pointer' : ''}`}
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
                        <span className={column.field === 'name' ? 'font-medium' : 'text-gray-600'}>
                          {item[column.field]}
                        </span>
                      )}
                    </td>
                  ))}
                  
                  {actions && actions.length > 0 && (
                    <td className="p-3 text-right" onClick={(e) => e.stopPropagation()}>
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
            {selectedItems.length} élément(s) sélectionné(s)
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
