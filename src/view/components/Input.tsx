import { XCircle } from 'lucide-react';
import { ComponentProps, forwardRef } from 'react';

import { cn } from '@/app/utils/cn';

interface IInputProps extends ComponentProps<'input'> {
  name: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ name, id, placeholder, error, className, ...props }, ref) => {
    const inputId = id ?? name;

    return (
      <div className="relative">
        <input
          {...props}
          name={name}
          id={inputId}
          ref={ref}
          placeholder=" "
          className={cn(
            'bg-white text-gray-800 border border-gray-500 focus:border-gray-800 rounded-lg w-full h-[52px] px-3 pt-4 placeholder-shown:pt-0 peer outline-none transition-all',
            error && '!border-red-500',
            className,
          )}
        />

        <label
          htmlFor={inputId}
          className="text-gray-700 text-xs top-2 left-[13px] absolute pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all"
        >
          {placeholder}
        </label>

        {error && (
          <div className="text-red-500 flex items-center gap-2 mt-2">
            <XCircle />

            <span className="text-xs">{error}</span>
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';
