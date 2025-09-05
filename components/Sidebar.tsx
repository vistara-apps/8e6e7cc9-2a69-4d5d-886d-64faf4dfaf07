'use client';

import { 
  Home, 
  Package, 
  Users, 
  TrendingUp, 
  Folder, 
  Trophy, 
  BarChart3,
  MapPin
} from 'lucide-react';
import { useState } from 'react';

const sidebarItems = [
  { icon: Home, label: 'Home', id: 'home' },
  { icon: Package, label: 'Active Earn', id: 'active-earn' },
  { icon: Users, label: 'Providers', id: 'providers' },
  { icon: TrendingUp, label: 'Trends', id: 'trends' },
  { icon: Folder, label: 'Folders', id: 'folders' },
  { icon: Trophy, label: 'Trophies', id: 'trophies' },
  { icon: BarChart3, label: 'Status', id: 'status' },
  { icon: MapPin, label: 'Nearby', id: 'nearby' },
];

export function Sidebar() {
  const [activeItem, setActiveItem] = useState('active-earn');

  return (
    <div className="w-64 bg-black bg-opacity-20 backdrop-blur-md border-r border-white border-opacity-10 p-4">
      <div className="flex items-center gap-3 mb-8 px-2">
        <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
          <Package className="w-5 h-5 text-white" />
        </div>
        <span className="text-white font-semibold text-lg">Ship & Earn</span>
      </div>
      
      <nav className="space-y-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className={`sidebar-item ${activeItem === item.id ? 'active' : ''}`}
              onClick={() => setActiveItem(item.id)}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </div>
          );
        })}
      </nav>
    </div>
  );
}
