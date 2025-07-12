"use client";

import Tabs from './Tab';

export default function TabNavigation() {
  const tabContent = (tabName) => (
    <div className="p-4 glass-surface rounded-lg">
      <h4 className="font-medium mb-2">Contenu de l&apos;onglet {tabName}</h4>
      <p className="text-sm text-gray-600">
        Contenu spécifique à l&apos;onglet sélectionné
      </p>
    </div>
  );

  const tabsData = [
    { id: 'general', label: 'General', content: tabContent('General') },
    { id: 'security', label: 'Security', content: tabContent('Security') },
    {
      id: 'notifications',
      label: 'Notifications',
      content: tabContent('Notifications'),
    },
    { id: 'billing', label: 'Billing', content: tabContent('Billing') },
  ];

  return (
    <section className="glass-card">
      <h3 className="text-xl font-semibold mb-6">Navigation par Onglets</h3>
      <Tabs tabs={tabsData} />
    </section>
  );
}
