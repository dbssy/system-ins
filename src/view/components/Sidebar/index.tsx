import { Logo } from '@/view/components/Logo';

import { SidebarRoutes } from './SidebarRoutes';

export function Sidebar() {
  return (
    <aside className="bg-white shadow-sm border-r h-full flex flex-col items-center gap-10 overflow-y-auto">
      <div className="flex items-center gap-x-2 pt-6">
        <Logo />

        <span className="text-blue-800 text-lg font-medium">Instrutores</span>
      </div>

      <div className="w-full flex flex-col">
        <SidebarRoutes />
      </div>
    </aside>
  );
}
