"use client";

import { TrendingUp, TrendingDown } from 'lucide-react';

export default function StatCard({ title, value, change, trend }) {
  return (
    <div className="glass-surface p-4 rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-sm font-medium text-gray-600">{title}</h4>
        {trend === 'up' ? (
          <TrendingUp size={16} className="text-green-500" />
        ) : (
          <TrendingDown size={16} className="text-red-500" />
        )}
      </div>
      <p className="text-2xl font-bold mb-1">{value}</p>
      <p
        className={`text-sm ${
          trend === 'up' ? 'text-green-600' : 'text-red-600'
        }`}
      >
        {change} ce mois
      </p>
    </div>
  );
}
