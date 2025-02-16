import React from 'react';

export type BadgeProps = {
  label: string;
  varient?: 'primary' | 'secondary';
  size?: 'xs' | 'sm' | 'md';
  color?: 'blue' | 'gray' | 'green' | 'red' | 'yellow' | 'purple' | 'white' | 'black' | 'none';
  badgeStyle?: string;
  children?: React.ReactNode;
};

const colorClasses = {
  blue: 'text-blue-700 border-blue-700 bg-blue-700',
  gray: 'text-gray-900 border-gray-900 bg-gray-900',
  green: 'text-green-700 border-green-700 bg-green-700',
  red: 'text-red-700 border-red-700 bg-red-700',
  yellow: 'text-amber-400 border-amber-400 bg-amber-400',
  purple: 'text-purple-700 border-purple-700 bg-purple-700',
  white: 'text-slate-50 border-slate-50 bg-slate-50',
  black: 'text-slate-900 border-slate-900 bg-slate-900',
  none: '',
};

const sizeClasses = {
  xs: 'text-xs py-0.5 px-1.5 xs:text-sm xs:py-1 xs:px-2',
  sm: 'text-sm py-1 px-2.5 sm:text-md sm:py-1.5 sm:px-3',
  md: 'text-md py-1.5 px-3.5 md:text-lg md:py-2 md:px-4',
};

const baseClasses = 'font-semibold rounded-full';

export const Badge: React.FC<BadgeProps> = ({
  label,
  varient = 'primary',
  color = 'blue',
  size = 'sm',
  badgeStyle,
  children,
}) => {
  const isSecondary = varient === 'secondary';

  const colorClass = isSecondary
    ? `${colorClasses[color].replace(/bg-\S+/g, '')} border`
    : `${colorClasses[color].replace(/text-\S+/g, 'text-white')}`;

  const sizeClass = sizeClasses[size];

  return (
    <div
      className={`inline ${baseClasses} ${colorClass} ${sizeClass} ${badgeStyle}`}
    >
      {children}
      {label}
    </div>
  );
};
