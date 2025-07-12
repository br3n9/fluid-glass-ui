"use client";

import Spinner from "./Spinner";

export default function Spinners() {
  return (
    <section className="glass-card">
      <h3 className="text-xl font-semibold mb-6">Spinners</h3>
      <div className="flex flex-wrap gap-8 items-center">
        <Spinner type="spin" size="md" />
        <Spinner type="pulse" size="md" />
        <Spinner type="dots" size="md" />
      </div>
    </section>
  );
}
