"use client";

import Avatar from "./Avatar";
import { User } from "lucide-react";

export default function Avatars() {
  return (
    <section className="glass-card">
      <h3 className="text-xl font-semibold mb-6">Avatars</h3>
      <div className="flex items-center gap-4">
        <Avatar size="sm" icon={<User />} />
        <Avatar
          size="md"
          icon={<User />}
          className="bg-gradient-to-br from-accent-500 to-accent-600"
        />
        <Avatar
          size="lg"
          icon={<User />}
          className="bg-gradient-to-br from-blue-500 to-purple-600"
        />
        <Avatar
          size="xl"
          icon={<User />}
          className="bg-gradient-to-br from-green-500 to-teal-600"
        />
      </div>
    </section>
  );
}
