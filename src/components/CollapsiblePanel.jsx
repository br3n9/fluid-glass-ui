"use client";

import { useState } from "react";
import Collapsible from "./Collapsible";
import Toggle from "./Toggle";

export default function CollapsiblePanel() {
  const [options, setOptions] = useState({
    option1: false,
    option2: true,
    option3: false,
  });

  const handleToggle = (option) => {
    setOptions((prev) => ({ ...prev, [option]: !prev[option] }));
  };

  return (
    <section className="glass-card">
      <h3 className="text-xl font-semibold mb-6">Panneau Collapsible</h3>
      <Collapsible title="Configuration Avancée">
        <div className="space-y-4">
          <Toggle
            label="Option 1"
            checked={options.option1}
            onChange={() => handleToggle("option1")}
          />
          <Toggle
            label="Option 2"
            checked={options.option2}
            onChange={() => handleToggle("option2")}
          />
          <Toggle
            label="Option 3"
            checked={options.option3}
            onChange={() => handleToggle("option3")}
          />
        </div>
      </Collapsible>
    </section>
  );
}
