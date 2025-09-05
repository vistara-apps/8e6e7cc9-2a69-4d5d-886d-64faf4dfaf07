export const APP_CONFIG = {
  name: 'Ship & Earn',
  description: 'Decentralized delivery bounties, powered by you.',
  version: '1.0.0',
  chain: 'base',
} as const;

export const BOUNTY_STATUS = {
  OPEN: 'open',
  ACCEPTED: 'accepted',
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
} as const;

export const USER_ROLES = {
  CUSTOMER: 'customer',
  PROVIDER: 'provider',
} as const;

export const URGENCY_LEVELS = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
} as const;

export const PLATFORM_FEE_PERCENTAGE = 2.5; // 2.5% platform fee

export const MAX_BOUNTY_AMOUNT = 1000; // Maximum bounty amount in USD
export const MIN_BOUNTY_AMOUNT = 5; // Minimum bounty amount in USD

export const DEFAULT_MAP_CENTER = {
  lat: 37.7749,
  lng: -122.4194, // San Francisco coordinates
};

export const RATING_SCALE = {
  MIN: 1,
  MAX: 5,
} as const;
