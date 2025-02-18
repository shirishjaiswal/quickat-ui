import { LoaderCircle } from 'lucide-react';
import React from 'react';

type ButtonVariant =
  | 'default'
  | 'alternative'
  | 'dark'
  | 'light'
  | 'green'
  | 'red'
  | 'yellow'
  | 'purple'
  | 'gradient-blue'
  | 'gradient-green'
  | 'gradient-cyan'
  | 'gradient-teal'
  | 'gradient-lime'
  | 'gradient-red'
  | 'gradient-pink'
  | 'gradient-purple'
  | 'shadow-blue'
  | 'shadow-green'
  | 'shadow-cyan'
  | 'shadow-teal'
  | 'shadow-lime'
  | 'shadow-red'
  | 'shadow-pink'
  | 'shadow-purple'
  | 'outline-blue'
  | 'outline-dark'
  | 'outline-green'
  | 'outline-red'
  | 'outline-yellow'
  | 'outline-purple'
  | 'purple-blue'
  | 'cyan-blue'
  | 'green-blue'
  | 'purple-pink'
  | 'pink-orange';

type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const variantClasses: Record<ButtonVariant, string> = {
  default:
    'text-white bg-blue-700 hover:bg-blue-800  ',
  alternative:
    ' text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10',
  dark: 'bg-gray-800 hover:bg-gray-900 ',
  light:
    'text-black-900 bg-white border border-gray-300 hover:bg-gray-100',
  green:
    'text-white  bg-green-700 hover:bg-green-800',
  red: 'text-white bg-red-700 hover:bg-red-800',
  yellow:
    'text-white bg-yellow-400 hover:bg-yellow-500 ',
  purple:
    'text-white bg-purple-700 hover:bg-purple-800',

  'gradient-blue':
    'text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br ',
  'gradient-green':
    'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br ',
  'gradient-cyan':
    'text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br ',
  'gradient-teal':
    'text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br ',
  'gradient-lime':
    'text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br ',
  'gradient-red':
    'text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br ',
  'gradient-pink':
    'text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:outline-non',
  'gradient-purple':
    'text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br ',

  'shadow-blue':
    'text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50',
  'shadow-green':
    'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br shadow-lg shadow-green-500/50 ',
  'shadow-cyan':
    'text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br shadow-lg shadow-cyan-500/50',
  'shadow-teal':
    'text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br shadow-lg shadow-teal-500/50',
  'shadow-lime':
    'text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br shadow-lg shadow-lime-500/50',
  'shadow-red':
    'text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br shadow-lg shadow-red-500/50',
  'shadow-pink':
    'text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br shadow-lg shadow-pink-500/50',
  'shadow-purple':
    'text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br shadow-lg shadow-purple-500/50',

  'outline-blue':
    'text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800',
  'outline-dark':
    'text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900',
  'outline-green':
    'text-green-700 hover:text-white border border-green-700 hover:bg-green-800 ',
  'outline-red':
    'text-red-700 hover:text-white border border-red-700 hover:bg-red-800',
  'outline-yellow':
    'text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500',
  'outline-purple':
    'text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800',

  'purple-blue':
    'text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl',
  'cyan-blue':
    'text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl',
  'green-blue':
    'text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl',
  'purple-pink':
    'text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l',
  'pink-orange':
    'text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl',
};

const sizeClasses: Record<ButtonSize, string> = {
  xs: 'px-3 py-2 text-xs sm:px-4 sm:py-2.5 sm:text-sm',
  sm: 'px-3 py-2 text-sm sm:px-5 sm:py-2.5 sm:text-base',
  md: 'px-5 py-2.5 text-sm md:px-6 md:py-3 md:text-base',
  lg: 'px-5 py-3 text-base lg:px-7 lg:py-3.5 lg:text-lg',
  xl: 'px-6 py-3.5 text-base xl:px-8 xl:py-4 xl:text-xl',
};

const baseClasses =
  'font-medium text-center rounded-lg focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';

export interface ClickButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  buttonStyle?: string;
}

export const ClickButton: React.FC<ClickButtonProps> = ({
  label = 'Click',
  variant = 'default',
  size = 'md',
  loading = false,
  disabled,
  onClick,
  buttonStyle,
  ...props
}) => {
  return (
    <button
      type="button"
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${buttonStyle}`}
      onClick={onClick}
      disabled={loading || disabled}
      {...props}
    >
      <>
        {loading && <LoaderCircle className="mr-2 inline animate-spin" />}
        {props.children ? props.children : label}
      </>
    </button>
  );
};
