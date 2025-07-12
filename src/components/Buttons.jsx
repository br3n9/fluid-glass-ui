"use client";

import { useState } from "react";
import { Star, Heart, Download, Play } from "lucide-react";
import Button from "./Button"; // Import the new Button component

export default function Buttons() {
  const [loading, setLoading] = useState(false);

  const handleLoadingDemo = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Button variant="primary" startContent={<Star size={16} />}>
          Primary
        </Button>

        <Button variant="outline" startContent={<Heart size={16} />}>
          Outline
        </Button>

        <Button variant="ghost" startContent={<Download size={16} />}>
          Ghost
        </Button>

        <Button
          variant="primary"
          isLoading={loading}
          onClick={handleLoadingDemo}
          startContent={!loading && <Play size={16} />}
        >
          {loading ? "Loading..." : "Action"}
        </Button>
      </div>
      <div className="mt-4 flex gap-2">
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </div>
    </div>
  );
}
