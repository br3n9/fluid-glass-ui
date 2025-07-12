"use client";

import { useState } from "react";
import ProgressBar from "./ProgressBar";

export default function ProgressBars() {
  const [progress, setProgress] = useState(65);

  return (
    <section className="glass-card">
      <h3 className="text-xl font-semibold mb-6">Progress Bars</h3>
      <div className="space-y-6">
        <ProgressBar label="Progression" value={progress} />
        <ProgressBar label="Téléchargement" value={85} />
        <ProgressBar label="Installation" value={40} />
      </div>
      <div className="flex gap-2 mt-6">
        <button
          onClick={() => setProgress(Math.max(0, progress - 10))}
          className="btn-fluid btn-ghost text-sm"
        >
          -10%
        </button>
        <button
          onClick={() => setProgress(Math.min(100, progress + 10))}
          className="btn-fluid btn-ghost text-sm"
        >
          +10%
        </button>
      </div>
    </section>
  );
}
