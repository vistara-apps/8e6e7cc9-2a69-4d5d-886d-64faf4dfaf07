'use client';

import { useState } from 'react';
import { BountyCard } from './BountyCard';
import { mockBounties } from '@/lib/mock-data';
import { Bounty } from '@/lib/types';
import { Filter, Search } from 'lucide-react';

export function BountyMarketplace() {
  const [bounties, setBounties] = useState<Bounty[]>(mockBounties);
  const [filter, setFilter] = useState<'all' | 'open' | 'accepted' | 'completed'>('all');

  const handleAcceptBounty = (bountyId: string) => {
    setBounties(prev => prev.map(bounty => 
      bounty.bountyId === bountyId 
        ? { ...bounty, status: 'accepted' as const, providerId: '2' }
        : bounty
    ));
  };

  const handleCompleteBounty = (bountyId: string) => {
    setBounties(prev => prev.map(bounty => 
      bounty.bountyId === bountyId 
        ? { ...bounty, status: 'completed' as const }
        : bounty
    ));
  };

  const filteredBounties = bounties.filter(bounty => {
    if (filter === 'all') return true;
    return bounty.status === filter;
  });

  const openBounties = filteredBounties.filter(b => b.status === 'open');
  const acceptedBounties = filteredBounties.filter(b => b.status === 'accepted');
  const completedBounties = filteredBounties.filter(b => b.status === 'completed');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Available Bounties</h2>
          <p className="text-white text-opacity-70">Find delivery opportunities near you</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white text-opacity-50" />
            <input
              type="text"
              placeholder="Search bounties..."
              className="pl-10 pr-4 py-2 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white placeholder-white placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          
          <button className="btn-secondary">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2">
        {(['all', 'open', 'accepted', 'completed'] as const).map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              filter === status
                ? 'bg-white bg-opacity-20 text-white'
                : 'text-white text-opacity-70 hover:text-white hover:bg-white hover:bg-opacity-10'
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
            <span className="ml-2 text-sm opacity-70">
              ({status === 'all' ? bounties.length : 
                status === 'open' ? openBounties.length :
                status === 'accepted' ? acceptedBounties.length :
                completedBounties.length})
            </span>
          </button>
        ))}
      </div>

      {/* Bounty Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBounties.map((bounty) => (
          <BountyCard
            key={bounty.bountyId}
            bounty={bounty}
            variant={bounty.status === 'open' ? 'open' : 
                    bounty.status === 'accepted' ? 'accepted' : 'completed'}
            onAccept={handleAcceptBounty}
            onComplete={handleCompleteBounty}
          />
        ))}
      </div>

      {filteredBounties.length === 0 && (
        <div className="text-center py-12">
          <div className="text-white text-opacity-50 text-lg mb-2">No bounties found</div>
          <p className="text-white text-opacity-30">Try adjusting your filters or check back later</p>
        </div>
      )}
    </div>
  );
}
