"use client";

"use client";

import { useState } from 'react';
import Snackbar from './Snackbar';

export default function Snackbars() {
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'Nouveau message reçu', time: '2 min' },
    { id: 2, message: 'Mise à jour disponible', time: '1 h' },
    { id: 3, message: 'Sauvegarde terminée', time: '3 h' },
  ]);

  const dismissNotification = (id) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  return (
    <section className="glass-card p-6">
      <h3 className="text-xl font-semibold mb-6">Snackbars</h3>
      <div className="space-y-3">
        {notifications.map((notification) => (
          <Snackbar
            key={notification.id}
            message={notification.message}
            time={notification.time}
            onDismiss={() => dismissNotification(notification.id)}
          />
        ))}
      </div>
    </section>
  );
}
