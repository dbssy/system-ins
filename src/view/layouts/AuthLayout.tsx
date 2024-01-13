import { Outlet } from 'react-router-dom';

import { Logo } from '@/view/components/Logo';

export function AuthLayout() {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-sky-600 to-cyan-400 w-full h-full flex flex-col items-center justify-center relative">
      <Logo className="h-20 -mb-8 z-10 relative" />

      <div className="bg-white shadow-xl rounded-lg w-full max-w-[528px] p-12">
        <Outlet />
      </div>
    </div>
  );
}
