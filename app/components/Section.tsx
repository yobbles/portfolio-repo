// app/components/Section.tsx
import { LucideIcon } from 'lucide-react';
import React from 'react';

interface SectionProps {
  id: string;
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}

export function Section({ id, icon: Icon, title, children }: SectionProps) {
  return (
    <section id={id} className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-gray-800 flex items-center justify-center">
          <Icon className="mr-2" /> {title}
        </h2>
        {children}
      </div>
    </section>
  );
}