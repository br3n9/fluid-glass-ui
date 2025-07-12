"use client";

import { useState } from 'react';
import Chip from './Chip';

export default function SkillsForm() {
  const [selectedSkills, setSelectedSkills] = useState([]);

  const skills = [
    'JavaScript',
    'React',
    'Node.js',
    'Python',
    'Vue.js',
    'Angular',
    'PHP',
    'Laravel',
  ];

  const toggleSkill = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill)
        ? prev.filter((s) => s !== skill)
        : [...prev, skill]
    );
  };

  return (
    <div className="glass-surface p-4 rounded-lg">
      <h4 className="font-medium mb-4">Compétences</h4>

      <div>
        <label className="block text-sm font-medium mb-2">
          Sélectionner vos compétences
        </label>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              selected={selectedSkills.includes(skill)}
              onClick={() => toggleSkill(skill)}
            />
          ))}
        </div>
        {selectedSkills.length > 0 && (
          <p className="text-sm text-gray-500 mt-2">
            {selectedSkills.length} compétence(s) sélectionnée(s)
          </p>
        )}
      </div>
    </div>
  );
}
