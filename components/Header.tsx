'use client';

import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Name } from '@coinbase/onchainkit/identity';
import { Bell, Settings2 } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-black bg-opacity-10 backdrop-blur-md border-b border-white border-opacity-10 p-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Ship & Earn</h1>
          <p className="text-white text-opacity-70">Decentralized delivery bounties, powered by you.</p>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-lg bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-200">
            <Bell className="w-5 h-5 text-white" />
          </button>
          
          <Wallet>
            <ConnectWallet className="btn-primary">
              <Name />
            </ConnectWallet>
          </Wallet>
          
          <button className="btn-secondary">
            <Settings2 className="w-4 h-4 mr-2" />
            Settings
          </button>
        </div>
      </div>
    </header>
  );
}
