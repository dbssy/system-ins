import { LucideIcon } from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface ISidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

export function SidebarItem({ icon: Icon, label, href }: ISidebarItemProps) {
  return (
    <div className="hover:bg-blue-300/20 text-gray-500 hover:text-blue-600 text-sm font-medium flex items-center cursor-pointer transition-all">
      <NavLink to={href} className="flex items-center gap-x-2 pl-6 py-4">
        <Icon size={20} />

        {label}
      </NavLink>
    </div>
  );
}
