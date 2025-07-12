"use client";

import { useState } from 'react';
import RadioGroup from './RadioGroup';

export default function ExperienceForm() {
  const [experience, setExperience] = useState('1-3');

  const experienceLevels = [
    { value: '0-1', label: "Moins d'1 an" },
    { value: '1-3', label: '1-3 ans' },
    { value: '3-5', label: '3-5 ans' },
    { value: '5+', label: 'Plus de 5 ans' },
  ];

  return (
    <div className="glass-surface p-4 rounded-lg">
      <h4 className="font-medium mb-4">Expérience</h4>
      <RadioGroup
        name="experience"
        label="Années d'expérience"
        options={experienceLevels}
        value={experience}
        onChange={setExperience}
      />
    </div>
  );
}
