"use client";

import { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
} from 'lucide-react';
import Input from './Input';
import Button from './Button';
import Checkbox from './Checkbox';
import Badge from './Badge';
import IconButton from './IconButton';

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

export default function InteractiveTable() {
  const [sortField, setSortField] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [data, setData] = useState(initialData);

  const handleSort = (field) => {
    const newDirection =
      sortField === field && sortDirection === 'asc' ? 'desc' : 'asc';
    setSortField(field);
    setSortDirection(newDirection);

    setData((prevData) =>
      [...prevData].sort((a, b) => {
        if (a[field] < b[field]) return newDirection === 'asc' ? -1 : 1;
        if (a[field] > b[field]) return newDirection === 'asc' ? 1 : -1;
        return 0;
      })
    );
  };

  const handleSelectItem = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedItems(filteredData.map((item) => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="glass-card">
      <h3 className="text-xl font-semibold mb-6">Table Interactive</h3>

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
        <Button variant="ghost">
          <Filter size={16} />
          Filtrer
        </Button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left p-3">
                <Checkbox
                  checked={
                    selectedItems.length === filteredData.length &&
                    filteredData.length > 0
                  }
                  onChange={handleSelectAll}
                />
              </th>
              <th
                className="text-left p-3 cursor-pointer hover:bg-gray-50"
                onClick={() => handleSort('name')}
              >
                <div className="flex items-center gap-2">
                  Nom
                  {sortField === 'name' &&
                    (sortDirection === 'asc' ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    ))}
                </div>
              </th>
              <th className="text-left p-3">Email</th>
              <th className="text-left p-3">Rôle</th>
              <th className="text-left p-3">Statut</th>
              <th
                className="text-left p-3 cursor-pointer hover:bg-gray-50"
                onClick={() => handleSort('date')}
              >
                <div className="flex items-center gap-2">
                  Date
                  {sortField === 'date' &&
                    (sortDirection === 'asc' ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    ))}
                </div>
              </th>
              <th className="text-right p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="p-3">
                  <Checkbox
                    checked={selectedItems.includes(item.id)}
                    onChange={() => handleSelectItem(item.id)}
                  />
                </td>
                <td className="p-3 font-medium">{item.name}</td>
                <td className="p-3 text-gray-600">{item.email}</td>
                <td className="p-3">
                  <Badge variant={getRoleBadgeVariant(item.role)}>
                    {item.role}
                  </Badge>
                </td>
                <td className="p-3">
                  <Badge variant={getStatusBadgeVariant(item.status)}>
                    {item.status}
                  </Badge>
                </td>
                <td className="p-3 text-gray-600">{item.date}</td>
                <td className="p-3 text-right">
                  <div className="flex justify-end gap-1">
                    <IconButton>
                      <Eye size={16} />
                    </IconButton>
                    <IconButton>
                      <Edit size={16} />
                    </IconButton>
                    <IconButton>
                      <Trash2 size={16} className="text-red-600" />
                    </IconButton>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedItems.length > 0 && (
        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-700">
            {selectedItems.length} élément(s) sélectionné(s)
          </p>
        </div>
      )}
    </section>
  );
}
