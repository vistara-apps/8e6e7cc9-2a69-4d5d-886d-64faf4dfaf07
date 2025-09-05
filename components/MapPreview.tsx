'use client';

import { MapPin } from 'lucide-react';

interface MapPreviewProps {
  variant?: 'static' | 'interactive';
  pickupLocation?: string;
  dropoffLocation?: string;
}

export function MapPreview({ variant = 'static', pickupLocation, dropoffLocation }: MapPreviewProps) {
  return (
    <div className="glass-card p-4 h-64 relative overflow-hidden">
      {/* Mock map background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 opacity-20"></div>
      
      {/* Mock map grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 grid-rows-8 h-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="border border-white border-opacity-20"></div>
          ))}
        </div>
      </div>

      {/* Mock locations */}
      <div className="relative h-full flex items-center justify-center">
        <div className="absolute top-1/4 left-1/3">
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
            <MapPin className="w-4 h-4 text-white" />
          </div>
          <div className="text-xs text-white mt-1 whitespace-nowrap">Pickup</div>
        </div>
        
        <div className="absolute bottom-1/4 right-1/3">
          <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
            <MapPin className="w-4 h-4 text-white" />
          </div>
          <div className="text-xs text-white mt-1 whitespace-nowrap">Dropoff</div>
        </div>

        {/* Mock route line */}
        <svg className="absolute inset-0 w-full h-full">
          <path
            d="M 33% 25% Q 50% 40% 67% 75%"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            className="animate-pulse"
          />
        </svg>
      </div>

      {variant === 'interactive' && (
        <div className="absolute top-2 right-2">
          <button className="btn-secondary text-xs px-2 py-1">
            View Full Map
          </button>
        </div>
      )}
    </div>
  );
}
