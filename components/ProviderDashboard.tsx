'use client';

import { useState } from 'react';
import { MapPreview } from './MapPreview';
import { RatingStars } from './RatingStars';
import { UserAvatar } from './UserAvatar';
import { TrendingUp, Package, Clock, DollarSign } from 'lucide-react';

export function ProviderDashboard() {
  const [earnings] = useState({
    today: 156.50,
    thisWeek: 892.30,
    thisMonth: 3247.80,
    totalDeliveries: 127,
    rating: 4.8,
    completionRate: 98.5
  });

  const recentDeliveries = [
    { id: '1', item: 'Coffee order', amount: 15.50, time: '2 hours ago', rating: 5 },
    { id: '2', item: 'Laptop charger', amount: 25.00, time: '4 hours ago', rating: 5 },
    { id: '3', item: 'Prescription delivery', amount: 20.00, time: '6 hours ago', rating: 4 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Provider Dashboard</h2>
          <p className="text-white text-opacity-70">Track your earnings and performance</p>
        </div>
        
        <div className="flex items-center gap-4">
          <UserAvatar size="medium" avatar="🚗" />
          <div>
            <div className="text-white font-semibold">Bob Smith</div>
            <RatingStars rating={earnings.rating} size="sm" />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-white text-opacity-70">Today's Earnings</div>
            <DollarSign className="w-5 h-5 text-green-400" />
          </div>
          <div className="text-2xl font-bold text-white">${earnings.today}</div>
          <div className="text-sm text-green-400 mt-1">+12.5% from yesterday</div>
        </div>

        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-white text-opacity-70">This Week</div>
            <TrendingUp className="w-5 h-5 text-blue-400" />
          </div>
          <div className="text-2xl font-bold text-white">${earnings.thisWeek}</div>
          <div className="text-sm text-blue-400 mt-1">+8.3% from last week</div>
        </div>

        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-white text-opacity-70">Total Deliveries</div>
            <Package className="w-5 h-5 text-purple-400" />
          </div>
          <div className="text-2xl font-bold text-white">{earnings.totalDeliveries}</div>
          <div className="text-sm text-purple-400 mt-1">{earnings.completionRate}% completion rate</div>
        </div>

        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-white text-opacity-70">Avg. Rating</div>
            <Clock className="w-5 h-5 text-yellow-400" />
          </div>
          <div className="text-2xl font-bold text-white">{earnings.rating}</div>
          <RatingStars rating={earnings.rating} size="sm" />
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Map */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Current Area</h3>
          <MapPreview variant="interactive" />
        </div>

        {/* Recent Deliveries */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Recent Deliveries</h3>
          <div className="space-y-4">
            {recentDeliveries.map((delivery) => (
              <div key={delivery.id} className="glass-card p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-white font-medium">{delivery.item}</div>
                  <div className="text-white font-bold">${delivery.amount}</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-white text-opacity-70 text-sm">{delivery.time}</div>
                  <RatingStars rating={delivery.rating} size="sm" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
