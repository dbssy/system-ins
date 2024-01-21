import * as RdxDropdownMenu from '@radix-ui/react-dropdown-menu';

import { cn } from '@/app/utils/cn';

function DropdownMenuRoot({ children }: { children: React.ReactNode }) {
  return <RdxDropdownMenu.Root>{children}</RdxDropdownMenu.Root>;
}

function DropdownMenuTrigger({ children }: { children: React.ReactNode }) {
  return (
    <RdxDropdownMenu.Trigger asChild className="cursor-pointer outline-none">
      {children}
    </RdxDropdownMenu.Trigger>
  );
}

interface IDropdownMenuContentProps {
  className?: string;
  children: React.ReactNode;
}

function DropdownMenuContent({
  className,
  children,
}: IDropdownMenuContentProps) {
  return (
    <RdxDropdownMenu.Portal>
      <RdxDropdownMenu.Content
        className={cn(
          'bg-white shadow-md border rounded-md min-w-[8rem] p-1 z-50 overflow-hidden',
          'data-[side=top]:animate-slide-down-and-fade',
          'data-[side=bottom]:animate-slide-up-and-fade',
          className,
        )}
      >
        {children}
      </RdxDropdownMenu.Content>
    </RdxDropdownMenu.Portal>
  );
}

interface IDropdownMenuItemProps {
  onSelect?(): void;
  className?: string;
  children: React.ReactNode;
}

function DropdownMenuItem({
  onSelect,
  className,
  children,
}: IDropdownMenuItemProps) {
  return (
    <RdxDropdownMenu.Item
      onSelect={onSelect}
      className={cn(
        'data-[highlighted]:bg-gray-100 text-gray-800 rounded-lg text-sm min-h-[40px] px-4 py-2 flex items-center outline-none cursor-pointer transition-colors',
        className,
      )}
    >
      {children}
    </RdxDropdownMenu.Item>
  );
}

export const DropdownMenu = {
  Root: DropdownMenuRoot,
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
};
