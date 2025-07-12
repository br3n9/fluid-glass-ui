"use client";

import { useState } from "react";
import Toggle from "./Toggle";

export default function Toggles() {
  const [toggles, setToggles] = useState({
    notifications: false,
    darkMode: false,
    sync: true,
  });

  const handleToggleChange = (name) => {
    setToggles((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <section className="glass-card">
      <h3 className="text-xl font-semibold mb-6">Toggles</h3>
      <div className="space-y-4">
        <Toggle
          label="Notifications"
          checked={toggles.notifications}
          onChange={() => handleToggleChange("notifications")}
        />
        <Toggle
          label="Mode sombre"
          checked={toggles.darkMode}
          onChange={() => handleToggleChange("darkMode")}
        />
        <Toggle
          label="Synchronisation"
          checked={toggles.sync}
          onChange={() => handleToggleChange("sync")}
        />
      </div>
    </section>
  );
}
