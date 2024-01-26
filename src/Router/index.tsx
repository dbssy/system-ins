import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthLayout } from '@/view/layouts/AuthLayout';
import { DashboardLayout } from '@/view/layouts/DashboardLayout';
import { Home } from '@/view/pages/Home';
import { Login } from '@/view/pages/Login';
import { Members } from '@/view/pages/Members';
import { Register } from '@/view/pages/Register';

import { AuthGuard } from './AuthGuard';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Route>

        <Route element={<AuthGuard isPrivate />}>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/members" element={<Members />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
