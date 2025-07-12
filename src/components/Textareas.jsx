"use client";

import { useState } from "react";
import Textarea from "./Textarea";

export default function Textareas() {
  const [message, setMessage] = useState("");

  return (
    <section className="glass-card">
      <h3 className="text-xl font-semibold mb-6">Textareas</h3>
      <Textarea
        label="Message"
        name="message"
        placeholder="Écrivez votre message ici..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        maxLength={500}
      />
    </section>
  );
}
