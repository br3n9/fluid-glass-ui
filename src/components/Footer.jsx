"use client";

import Link from './Link';
import IconButton from './IconButton';

const FooterLinkColumn = ({ title, links }) => (
  <div>
    <h4 className="font-semibold text-base-content mb-4">{title}</h4>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.href + link.text}>
          <Link href={link.href} className="text-sm text-base-content/80 hover:text-primary transition-colors">
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer({ sections, socialLinks, copyrightText }) {
  if (!sections || !socialLinks || !copyrightText) {
    return null; 
  }

  return (
    <footer className="glass-surface p-8 rounded-lg w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {sections.map((section) => (
            <FooterLinkColumn key={section.title} title={section.title} links={section.links} />
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-base-300/50 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-base-content/70">
            {copyrightText}
          </p>
          <div className="flex items-center gap-2 mt-4 sm:mt-0">
            {socialLinks.map((social) => (
              <IconButton asChild key={social.label} aria-label={social.label} variant="ghost">
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  {social.icon}
                </a>
              </IconButton>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
