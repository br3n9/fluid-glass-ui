"use client";

import { useState } from "react";
import RadioGroup from "./RadioGroup";

export default function RadioButtons() {
  const [selectedValue, setSelectedValue] = useState("option1");

  const radioOptions = [
    { value: "option1", label: "Première option" },
    { value: "option2", label: "Deuxième option" },
    { value: "option3", label: "Troisième option" },
  ];

  return (
    <section className="glass-card">
      <h3 className="text-xl font-semibold mb-6">Radio Buttons</h3>
      <RadioGroup
        options={radioOptions}
        name="radio-demo"
        selectedValue={selectedValue}
        onChange={setSelectedValue}
      />
    </section>
  );
}
