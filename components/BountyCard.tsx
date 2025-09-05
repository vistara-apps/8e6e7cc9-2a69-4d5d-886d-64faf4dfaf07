'use client';

import { Bounty } from '@/lib/types';
import { MapPin, Clock, DollarSign, Package } from 'lucide-react';
import { StatusBadge } from './StatusBadge';
import { UserAvatar } from './UserAvatar';

interface BountyCardProps {
  bounty: Bounty;
  variant?: 'open' | 'accepted' | 'completed';
  onAccept?: (bountyId: string) => void;
  onComplete?: (bountyId: string) => void;
}

export function BountyCard({ bounty, variant = 'open', onAccept, onComplete }: BountyCardProps) {
  const handleAction = () => {
    if (variant === 'open' && onAccept) {
      onAccept(bounty.bountyId);
    } else if (variant === 'accepted' && onComplete) {
      onComplete(bounty.bountyId);
    }
  };

  const getActionButton = () => {
    switch (variant) {
      case 'open':
        return (
          <button 
            onClick={handleAction}
            className="btn-primary w-full"
          >
            Accept Bounty
          </button>
        );
      case 'accepted':
        return (
          <button 
            onClick={handleAction}
            className="btn-secondary w-full"
          >
            Mark Complete
          </button>
        );
      case 'completed':
        return (
          <div className="text-center text-white text-opacity-70">
            Completed
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bounty-card animate-fade-in">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <UserAvatar size="medium" />
          <div>
            <h3 className="text-white font-semibold">{bounty.itemDescription}</h3>
            <StatusBadge status={bounty.status} />
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-white">${bounty.bountyAmount}</div>
          <div className="text-white text-opacity-70 text-sm">Bounty</div>
        </div>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-start gap-2">
          <MapPin className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
          <div>
            <div className="text-white text-sm font-medium">Pickup</div>
            <div className="text-white text-opacity-70 text-sm">{bounty.pickupLocation}</div>
          </div>
        </div>
        
        <div className="flex items-start gap-2">
          <MapPin className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
          <div>
            <div className="text-white text-sm font-medium">Dropoff</div>
            <div className="text-white text-opacity-70 text-sm">{bounty.dropoffLocation}</div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4 text-sm">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-white text-opacity-70">
            <Clock className="w-4 h-4" />
            {bounty.estimatedTime}
          </div>
          <div className="flex items-center gap-1 text-white text-opacity-70">
            <Package className="w-4 h-4" />
            {bounty.distance}
          </div>
        </div>
        {bounty.urgency && (
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
            bounty.urgency === 'high' ? 'bg-red-500 bg-opacity-20 text-red-300' :
            bounty.urgency === 'medium' ? 'bg-yellow-500 bg-opacity-20 text-yellow-300' :
            'bg-green-500 bg-opacity-20 text-green-300'
          }`}>
            {bounty.urgency} priority
          </div>
        )}
      </div>

      {getActionButton()}
    </div>
  );
}
