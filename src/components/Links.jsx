"use client";

import Link from './Link';
import { Home, Heart, ShoppingCart } from 'lucide-react';

export default function Links() {
  return (
    <section className="glass-card p-6">
      <h3 className="text-xl font-semibold mb-6">Links</h3>
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-4">
          <Link href="#">Lien standard</Link>
          <Link href="#" className="font-medium">Lien en gras</Link>
          <Link href="#" variant="discreet">Lien discret</Link>
          <Link href="#" variant="danger">Lien danger</Link>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="#" variant="icon" icon={Home}>Lien avec icône</Link>
          <Link href="#" variant="icon" icon={Heart}>Favoris</Link>
          <Link href="#" variant="icon" icon={ShoppingCart}>Panier</Link>
        </div>
      </div>
    </section>
  );
}
