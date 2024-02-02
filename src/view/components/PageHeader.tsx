import { LucideIcon } from 'lucide-react';

interface IPageHeaderProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function PageHeader({
  icon: Icon,
  title,
  description,
}: IPageHeaderProps) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2">
        <Icon />

        <h2 className="text-gray-900 text-2xl font-semibold">{title}</h2>
      </div>

      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
}
