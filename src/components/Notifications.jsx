"use client";

import { useEffect, useState, useCallback } from 'react';
import { AlertCircle, CheckCircle, Info, X } from 'lucide-react';
import Notification from './Notification';
import Toast from './Toast';

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'info') => {
    const id = Date.now();
    const newToast = { id, message, type };
    setToast(newToast);

    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

    const removeNotification = useCallback((id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  const addNotification = useCallback((message, type = 'info') => {
    const id = Date.now();
    const newNotification = { id, message, type, timestamp: new Date() };
    setNotifications((prev) => [newNotification, ...prev]);

    setTimeout(() => {
      removeNotification(id);
    }, 5000);
  }, [removeNotification]);

  useEffect(() => {
    const timer = setTimeout(() => {
      addNotification('Bienvenue dans le système', 'info');
    }, 1000);

    return () => clearTimeout(timer);
  }, [addNotification]);

  return (
    <section className="glass-card p-6">
      <h3 className="text-xl font-semibold mb-6">Notifications & Toasts</h3>
      <div className="flex gap-2 mb-6">
        <button onClick={() => showToast('Information générale', 'info')} className="btn-fluid btn-ghost"><Info size={16} /> Info</button>
        <button onClick={() => showToast('Opération réussie', 'success')} className="btn-fluid btn-ghost"><CheckCircle size={16} /> Succès</button>
        <button onClick={() => showToast('Attention requise', 'warning')} className="btn-fluid btn-ghost"><AlertCircle size={16} /> Attention</button>
        <button onClick={() => showToast('Erreur survenue', 'error')} className="btn-fluid btn-ghost"><X size={16} /> Erreur</button>
      </div>

      <div className="h-48 relative space-y-2">
        {notifications.map((notification) => (
          <Notification
            key={notification.id}
            type={notification.type}
            message={notification.message}
            timestamp={notification.timestamp}
            onClose={() => removeNotification(notification.id)}
          />
        ))}
      </div>

      {toast && (
        <Toast 
          type={toast.type} 
          message={toast.message} 
          onClose={() => setToast(null)} 
        />
      )}
    </section>
  );
}
