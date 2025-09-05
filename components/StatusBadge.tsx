'use client';

interface StatusBadgeProps {
  status: 'open' | 'accepted' | 'in_progress' | 'completed' | 'cancelled';
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const getStatusConfig = () => {
    switch (status) {
      case 'open':
        return { label: 'Open', className: 'status-open' };
      case 'accepted':
        return { label: 'Accepted', className: 'status-accepted' };
      case 'in_progress':
        return { label: 'In Progress', className: 'status-in-progress' };
      case 'completed':
        return { label: 'Completed', className: 'status-completed' };
      case 'cancelled':
        return { label: 'Cancelled', className: 'status-cancelled' };
      default:
        return { label: 'Unknown', className: 'status-open' };
    }
  };

  const { label, className } = getStatusConfig();

  return (
    <span className={`status-badge ${className}`}>
      {label}
    </span>
  );
}
