import * as RdxSelect from '@radix-ui/react-select';
import { ChevronDown, ChevronUp, XCircle } from 'lucide-react';
import { useState } from 'react';

import { cn } from '@/app/utils/cn';

interface ISelectProps {
  placeholder?: string;
  value?: string;
  error?: string;
  className?: string;
  options: {
    value: string;
    label: string;
  }[];
  onChange?(value: string): void;
}

export function Select({
  placeholder,
  value,
  error,
  className,
  options,
  onChange,
}: ISelectProps) {
  const [selectedValue, setSelectedValue] = useState(value);

  // eslint-disable-next-line no-shadow
  function handleSelect(value: string) {
    setSelectedValue(value);
    onChange?.(value);
  }

  return (
    <div>
      <div className="relative">
        <label
          className={cn(
            'text-gray-700 top-1/2 left-3 -translate-y-1/2 z-10 absolute pointer-events-none',
            selectedValue &&
              'text-xs top-2 left-[13px] translate-y-0 transition-all',
          )}
        >
          {placeholder}
        </label>

        <RdxSelect.Root value={value} onValueChange={handleSelect}>
          <RdxSelect.Trigger
            className={cn(
              'bg-white text-gray-800 border border-gray-500 focus:border-gray-800 rounded-lg w-full h-[52px] px-3 pt-4 outline-none text-left relative transition-all',
              error && '!border-red-900',
              className,
            )}
          >
            <RdxSelect.Value />

            <RdxSelect.Icon className="top-1/2 right-3 -translate-y-1/2 absolute">
              <ChevronDown className="text-gray-800 w-6 h-6" />
            </RdxSelect.Icon>
          </RdxSelect.Trigger>

          <RdxSelect.Portal>
            <RdxSelect.Content className="bg-white shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] border border-gray-100 rounded-2xl w-full z-[99] overflow-hidden">
              <RdxSelect.ScrollUpButton className="bg-white text-gray-800 flex items-center justify-center h-6 cursor-default">
                <ChevronUp />
              </RdxSelect.ScrollUpButton>

              <RdxSelect.Viewport className="p-2">
                {options.map((option) => (
                  <RdxSelect.Item
                    key={option.value}
                    className="text-gray-800 text-sm rounded-lg p-2 outline-none data-[state=checked]:font-bold data-[highlighted]:bg-gray-50 transitions-colors"
                    value={option.value}
                  >
                    <RdxSelect.ItemText>{option.label}</RdxSelect.ItemText>
                  </RdxSelect.Item>
                ))}
              </RdxSelect.Viewport>

              <RdxSelect.ScrollDownButton className="bg-white text-gray-800 flex items-center justify-center h-6 cursor-default">
                <ChevronDown />
              </RdxSelect.ScrollDownButton>
            </RdxSelect.Content>
          </RdxSelect.Portal>
        </RdxSelect.Root>
      </div>

      {error && (
        <div className="text-red-900 flex items-center gap-2 mt-2">
          <XCircle />

          <span className="text-xs">{error}</span>
        </div>
      )}
    </div>
  );
}
