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
    'text-white bg-blue-700 hover:bg-blue-800  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none ',
  alternative:
    ' text-gray-900 focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700',
  dark: 'bg-gray-800 hover:bg-gray-900 focus:outline-none   dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700',
  light:
    'text-black-900  bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600',
  green:
    'text-white focus:outline-none  bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 ',
  red: 'text-white focus:outline-none bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 ',
  yellow:
    'text-white focus:outline-none bg-yellow-400 hover:bg-yellow-500 ',
  purple:
    'text-white focus:outline-none bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700',

  'gradient-blue':
    'text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none',
  'gradient-green':
    'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:outline-none',
  'gradient-cyan':
    'text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:outline-none',
  'gradient-teal':
    'text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:outline-none',
  'gradient-lime':
    'text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:outline-none',
  'gradient-red':
    'text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:outline-none',
  'gradient-pink':
    'text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:outline-non',
  'gradient-purple':
    'text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:outline-none',

  'shadow-blue':
    'text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 ',
  'shadow-green':
    'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:outline-none shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 ',
  'shadow-cyan':
    'text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:outline-none shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 ',
  'shadow-teal':
    'text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:outline-none shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 ',
  'shadow-lime':
    'text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:outline-none  shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 ',
  'shadow-red':
    'text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:outline-none shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 ',
  'shadow-pink':
    'text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:outline-none shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 ',
  'shadow-purple':
    'text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:outline-none shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 ',

  'outline-blue':
    'text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:outline-none dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 ',
  'outline-dark':
    'text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:outline-none dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 ',
  'outline-green':
    'text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:outline-none dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 ',
  'outline-red':
    'text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:outline-none dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 ',
  'outline-yellow':
    'text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:outline-none dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 ',
  'outline-purple':
    'text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:outline-none dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 ',

  'purple-blue':
    'text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none',
  'cyan-blue':
    'text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:outline-none',
  'green-blue':
    'text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:outline-none',
  'purple-pink':
    'text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:outline-none',
  'pink-orange':
    'text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:outline-none',
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
  variant,
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
      className={`${baseClasses} ${variantClasses[variant ?? 'default']} ${sizeClasses[size]} ${buttonStyle}`}
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
