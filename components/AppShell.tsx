'use client';

import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

interface AppShellProps {
  children: ReactNode;
  variant?: 'compact' | 'scrollable';
}

export function AppShell({ children, variant = 'scrollable' }: AppShellProps) {
  return (
    <div className="flex h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className={`flex-1 ${variant === 'scrollable' ? 'overflow-y-auto' : ''} p-6`}>
          <div className="max-w-[1200px] mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
