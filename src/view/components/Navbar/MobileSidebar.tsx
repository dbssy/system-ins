import { Menu } from 'lucide-react';

import { Sidebar } from '@/view/components/Sidebar';
import { Sheet, SheetContent, SheetTrigger } from '@/view/components/ui/Sheet';

export function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden hover:opacity-75 pr-2 transition">
        <Menu />
      </SheetTrigger>

      <SheetContent side="left" className="bg-white p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}
