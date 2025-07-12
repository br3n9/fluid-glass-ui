"use client";

import IconButton from './IconButton';
import { Play, Pause, Heart, Download } from 'lucide-react';

export default function IconButtons() {
  return (
    <div className="flex gap-4">
      <IconButton icon={Play} />
      <IconButton icon={Pause} />
      <IconButton icon={Heart} />
      <IconButton icon={Download} />
    </div>
  );
}
