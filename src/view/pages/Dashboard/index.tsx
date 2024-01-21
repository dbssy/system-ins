import { Navbar } from '@/view/components/Navbar';
import { Sidebar } from '@/view/components/Sidebar';

export function Dashboard() {
  return (
    <div className="h-full">
      <div className="w-full h-20 md:pl-64 inset-y-0 z-50 fixed">
        <Navbar />
      </div>

      <div className="hidden md:flex w-64 h-full flex-col inset-y-0 z-50 fixed">
        <Sidebar />
      </div>

      <main className="h-full md:pl-64 pt-20">
        <h1>Dashboard Page</h1>
      </main>
    </div>
  );
}
