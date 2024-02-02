import {
  Gavel,
  Home,
  LibrarySquare,
  MessageCircleWarning,
  PieChart,
  Presentation,
  SquarePen,
  Users,
} from 'lucide-react';

import { SidebarItem } from './SidebarItem';

const mainRoutes = [
  {
    icon: Home,
    label: 'Início',
    href: '/',
  },
  {
    icon: MessageCircleWarning,
    label: 'Tutoriais e Apostilas',
    href: '/tutoriais',
  },
  {
    icon: Users,
    label: 'Membros',
    href: '/membros',
  },
  {
    icon: SquarePen,
    label: 'Requerimentos',
    href: '/requerimentos',
  },
];

const lessonsRoutes = [
  {
    icon: Presentation,
    label: 'Script de Aulas',
    href: '/aulas',
  },
  {
    icon: PieChart,
    label: 'Desempenhos',
    href: '/desempenhos',
  },
];

const legalRoutes = [
  {
    icon: LibrarySquare,
    label: 'Regimento Interno',
    href: '/regimento-interno',
  },
  {
    icon: Gavel,
    label: 'Código Penal',
    href: '/codigo-penal',
  },
];

export function SidebarRoutes() {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-gray-600 text-xs uppercase font-semibold pl-6">
          Geral
        </h2>

        {mainRoutes.map((route) => (
          <SidebarItem
            key={route.href}
            icon={route.icon}
            label={route.label}
            href={route.href}
          />
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-gray-600 text-xs uppercase font-semibold pl-6">
          Aulas
        </h2>

        {lessonsRoutes.map((route) => (
          <SidebarItem
            key={route.href}
            icon={route.icon}
            label={route.label}
            href={route.href}
          />
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-gray-600 text-xs uppercase font-semibold pl-6">
          Jurídico
        </h2>

        {legalRoutes.map((route) => (
          <SidebarItem
            key={route.href}
            icon={route.icon}
            label={route.label}
            href={route.href}
          />
        ))}
      </div>
    </div>
  );
}
