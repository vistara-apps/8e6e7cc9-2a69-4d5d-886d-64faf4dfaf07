'use client';

import { useEffect, useState } from 'react';
import { useMiniKit } from '@coinbase/onchainkit/minikit';
import { AppShell } from '@/components/AppShell';
import { BountyMarketplace } from '@/components/BountyMarketplace';
import { ProviderDashboard } from '@/components/ProviderDashboard';
import { MapPreview } from '@/components/MapPreview';
import { Plus, TrendingUp, Users, Package } from 'lucide-react';

export default function HomePage() {
  const { setFrameReady } = useMiniKit();
  const [activeView, setActiveView] = useState<'marketplace' | 'dashboard' | 'overview'>('overview');

  useEffect(() => {
    setFrameReady();
  }, [setFrameReady]);

  const renderContent = () => {
    switch (activeView) {
      case 'marketplace':
        return <BountyMarketplace />;
      case 'dashboard':
        return <ProviderDashboard />;
      default:
        return <OverviewContent setActiveView={setActiveView} />;
    }
  };

  return (
    <AppShell>
      {renderContent()}
    </AppShell>
  );
}

function OverviewContent({ setActiveView }: { setActiveView: (view: 'marketplace' | 'dashboard' | 'overview') => void }) {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Ship & Earn
        </h1>
        <p className="text-xl text-white text-opacity-80 mb-8 max-w-2xl mx-auto">
          Decentralized delivery bounties, powered by you. Connect with local providers or earn by delivering items in your area.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => setActiveView('marketplace')}
            className="btn-primary text-lg px-8 py-4"
          >
            <Package className="w-5 h-5 mr-2" />
            Browse Bounties
          </button>
          <button 
            onClick={() => setActiveView('dashboard')}
            className="btn-secondary text-lg px-8 py-4"
          >
            <TrendingUp className="w-5 h-5 mr-2" />
            Provider Dashboard
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <Package className="w-6 h-6 text-white" />
          </div>
          <div className="text-2xl font-bold text-white mb-2">127</div>
          <div className="text-white text-opacity-70">Active Bounties</div>
        </div>

        <div className="glass-card p-6 text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div className="text-2xl font-bold text-white mb-2">1,247</div>
          <div className="text-white text-opacity-70">Active Providers</div>
        </div>

        <div className="glass-card p-6 text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div className="text-2xl font-bold text-white mb-2">$47K</div>
          <div className="text-white text-opacity-70">Total Earned</div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Delivery Network</h3>
          <MapPreview variant="interactive" />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">How It Works</h3>
          <div className="space-y-4">
            <div className="glass-card p-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Post a Bounty</h4>
                  <p className="text-white text-opacity-70 text-sm">Create a delivery request with pickup/dropoff locations and set your bounty amount.</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Provider Accepts</h4>
                  <p className="text-white text-opacity-70 text-sm">Local providers browse and accept bounties that match their preferences.</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Secure Delivery</h4>
                  <p className="text-white text-opacity-70 text-sm">Track progress and complete delivery with automatic payment release.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="glass-card p-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Ready to Start?</h3>
        <p className="text-white text-opacity-70 mb-6">
          Join thousands of users already earning and shipping with our decentralized platform.
        </p>
        <button className="btn-primary">
          <Plus className="w-5 h-5 mr-2" />
          Create Your First Bounty
        </button>
      </div>
    </div>
  );
}
