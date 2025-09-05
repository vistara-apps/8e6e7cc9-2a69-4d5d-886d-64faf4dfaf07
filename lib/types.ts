export interface User {
  userId: string;
  walletAddress: string;
  rating: number;
  isActive: boolean;
  role: 'customer' | 'provider';
  name?: string;
  avatar?: string;
}

export interface Bounty {
  bountyId: string;
  customerId: string;
  providerId?: string;
  pickupLocation: string;
  dropoffLocation: string;
  itemDescription: string;
  bountyAmount: number;
  status: 'open' | 'accepted' | 'in_progress' | 'completed' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
  urgency?: 'low' | 'medium' | 'high';
  distance?: string;
  estimatedTime?: string;
}

export interface Review {
  reviewId: string;
  fromUserId: string;
  toUserId: string;
  bountyId: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

export interface MapLocation {
  lat: number;
  lng: number;
  address: string;
}
