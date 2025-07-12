"use client";

import { useState } from "react";
import Drawer from "./Drawer";

export default function Drawers() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setDrawerOpen(true)} className="btn-fluid">
        Ouvrir Drawer
      </button>

      <Drawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        title="Paramètres"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm">Notifications</span>
            <button className="toggle-fluid active" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Mode sombre</span>
            <button className="toggle-fluid" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Synchronisation</span>
            <button className="toggle-fluid active" />
          </div>
        </div>
      </Drawer>
    </div>
  );
}
