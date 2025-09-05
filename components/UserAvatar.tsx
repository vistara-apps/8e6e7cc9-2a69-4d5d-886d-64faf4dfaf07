'use client';

interface UserAvatarProps {
  size?: 'small' | 'medium';
  avatar?: string;
  name?: string;
}

export function UserAvatar({ size = 'medium', avatar = '👤', name }: UserAvatarProps) {
  const sizeClasses = {
    small: 'w-8 h-8 text-sm',
    medium: 'w-12 h-12 text-lg'
  };

  return (
    <div className={`${sizeClasses[size]} bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center font-medium`}>
      {avatar}
    </div>
  );
}
