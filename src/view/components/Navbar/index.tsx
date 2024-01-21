import { UserMenu } from '@/view/components/UserMenu';

import { MobileSidebar } from './MobileSidebar';

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b h-full p-4 flex items-center justify-between">
      <MobileSidebar />

      <div className="ml-auto">
        <UserMenu />
      </div>
    </nav>
  );
}
