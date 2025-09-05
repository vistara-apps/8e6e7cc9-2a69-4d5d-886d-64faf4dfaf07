import { Bounty, User } from './types';

export const mockUsers: User[] = [
  {
    userId: '1',
    walletAddress: '0x1234...5678',
    rating: 4.8,
    isActive: true,
    role: 'customer',
    name: 'Alice Johnson',
    avatar: '👩‍💼'
  },
  {
    userId: '2',
    walletAddress: '0x9876...5432',
    rating: 4.9,
    isActive: true,
    role: 'provider',
    name: 'Bob Smith',
    avatar: '🚗'
  }
];

export const mockBounties: Bounty[] = [
  {
    bountyId: '1',
    customerId: '1',
    providerId: undefined,
    pickupLocation: 'Downtown Coffee Shop, 123 Main St',
    dropoffLocation: 'Tech Office, 456 Innovation Ave',
    itemDescription: 'Coffee order for team meeting',
    bountyAmount: 15.50,
    status: 'open',
    createdAt: new Date('2024-01-15T10:30:00'),
    updatedAt: new Date('2024-01-15T10:30:00'),
    urgency: 'high',
    distance: '2.3 km',
    estimatedTime: '15 min'
  },
  {
    bountyId: '2',
    customerId: '1',
    providerId: '2',
    pickupLocation: 'Electronics Store, 789 Tech Blvd',
    dropoffLocation: 'Residential Area, 321 Home St',
    itemDescription: 'Laptop charger - urgent replacement',
    bountyAmount: 25.00,
    status: 'accepted',
    createdAt: new Date('2024-01-15T09:15:00'),
    updatedAt: new Date('2024-01-15T09:45:00'),
    urgency: 'high',
    distance: '4.1 km',
    estimatedTime: '25 min'
  },
  {
    bountyId: '3',
    customerId: '1',
    providerId: '2',
    pickupLocation: 'Pharmacy, 555 Health Ave',
    dropoffLocation: 'Senior Center, 777 Care Rd',
    itemDescription: 'Prescription medication delivery',
    bountyAmount: 20.00,
    status: 'completed',
    createdAt: new Date('2024-01-14T14:20:00'),
    updatedAt: new Date('2024-01-14T15:30:00'),
    urgency: 'medium',
    distance: '3.2 km',
    estimatedTime: '20 min'
  },
  {
    bountyId: '4',
    customerId: '1',
    providerId: undefined,
    pickupLocation: 'Grocery Store, 999 Food St',
    dropoffLocation: 'Apartment Complex, 111 Living Ln',
    itemDescription: 'Weekly grocery shopping',
    bountyAmount: 35.75,
    status: 'open',
    createdAt: new Date('2024-01-15T08:00:00'),
    updatedAt: new Date('2024-01-15T08:00:00'),
    urgency: 'low',
    distance: '5.7 km',
    estimatedTime: '35 min'
  }
];
