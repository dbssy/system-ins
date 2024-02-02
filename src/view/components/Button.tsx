import { ComponentProps } from 'react';

import { cn } from '@/app/utils/cn';
import { Spinner } from '@/view/components/Spinner';

interface IButtonProps extends ComponentProps<'button'> {
  isLoading?: boolean;
  variant?: 'danger' | 'ghost';
}

export function Button({
  className,
  isLoading,
  disabled,
  variant,
  children,
  ...props
}: IButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={cn(
        'bg-blue-500 hover:bg-blue-600 text-white rounded-xl w-full h-12 px-6 flex items-center justify-center font-medium disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed transition-all',
        variant === 'danger' && 'bg-red-500 hover:bg-red-400',
        variant === 'ghost' &&
          'bg-transparent hover:bg-gray-800/5 text-gray-800 border border-gray-800',
        className,
      )}
    >
      {!isLoading && children}
      {isLoading && <Spinner className="w-6 h-6" />}
    </button>
  );
}
