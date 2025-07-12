"use client";

"use client";

import TabsComponent from './Tab';

export default function Tabs() {
  const tabsData = [
    {
      id: 1,
      label: 'Onglet 1',
      content: <p className="text-gray-600">Contenu de l&apos;onglet 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>,
    },
    {
      id: 2,
      label: 'Onglet 2',
      content: <p className="text-gray-600">Contenu de l&apos;onglet 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>,
    },
    {
      id: 3,
      label: 'Onglet 3',
      content: <p className="text-gray-600">Contenu de l&apos;onglet 3. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>,
    },
  ];

  return (
    <section className="glass-card p-6">
      <h3 className="text-xl font-semibold mb-6">Tabs</h3>
      <TabsComponent tabs={tabsData} />
    </section>
  );
}
