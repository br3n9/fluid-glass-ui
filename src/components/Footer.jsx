"use client";

import { Heart, Star, Mail } from 'lucide-react';
import Link from './Link';
import IconButton from './IconButton';

const FooterLinkColumn = ({ title, links }) => (
  <div>
    <h4 className="font-medium mb-3">{title}</h4>
    <ul className="space-y-2 text-sm">
      {links.map((link) => (
        <li key={link.text}>
          <Link href={link.href} className="text-gray-600 hover:text-gray-800">
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const footerSections = [
  {
    title: 'Produit',
    links: [
      { text: 'Fonctionnalités', href: '#' },
      { text: 'Tarifs', href: '#' },
      { text: 'Documentation', href: '#' },
    ],
  },
  {
    title: 'Support',
    links: [
      { text: "Centre d'aide", href: '#' },
      { text: 'Contact', href: '#' },
      { text: 'Communauté', href: '#' },
    ],
  },
  {
    title: 'Entreprise',
    links: [
      { text: 'À propos', href: '#' },
      { text: 'Carrières', href: '#' },
      { text: 'Presse', href: '#' },
    ],
  },
  {
    title: 'Légal',
    links: [
      { text: 'Confidentialité', href: '#' },
      { text: 'Conditions', href: '#' },
      { text: 'Cookies', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <section className="glass-card">
      <h3 className="text-xl font-semibold mb-6">Pied de Page</h3>

      <div className="glass-surface p-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {footerSections.map((section) => (
            <FooterLinkColumn key={section.title} title={section.title} links={section.links} />
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © 2024 Fluid Glass Design. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <IconButton>
              <Heart size={16} />
            </IconButton>
            <IconButton>
              <Star size={16} />
            </IconButton>
            <IconButton>
              <Mail size={16} />
            </IconButton>
          </div>
        </div>
      </div>
    </section>
  );
}
