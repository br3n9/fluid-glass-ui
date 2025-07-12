"use client";

import StackComponent from './StackComponent';

export default function Stack() {
  const DemoBox = ({ children }) => (
    <div className="glass-surface p-4 rounded text-center w-full">
      {children}
    </div>
  );

  return (
    <section className="glass-card">
      <h3 className="text-xl font-semibold mb-6">Stack et Espacement</h3>

      <div className="space-y-8">
        <div>
          <h4 className="font-medium mb-4">Stack Vertical (spacing 2)</h4>
          <StackComponent direction="vertical" spacing={2}>
            <DemoBox>Élément 1</DemoBox>
            <DemoBox>Élément 2</DemoBox>
            <DemoBox>Élément 3</DemoBox>
          </StackComponent>
        </div>

        <div>
          <h4 className="font-medium mb-4">Stack Vertical (spacing 4)</h4>
          <StackComponent direction="vertical" spacing={4}>
            <DemoBox>Élément 1</DemoBox>
            <DemoBox>Élément 2</DemoBox>
            <DemoBox>Élément 3</DemoBox>
          </StackComponent>
        </div>

        <div>
          <h4 className="font-medium mb-4">Stack Horizontal (spacing 4)</h4>
          <StackComponent direction="horizontal" spacing={4}>
            <DemoBox>Élément 1</DemoBox>
            <DemoBox>Élément 2</DemoBox>
            <DemoBox>Élément 3</DemoBox>
          </StackComponent>
        </div>
      </div>
    </section>
  );
}
