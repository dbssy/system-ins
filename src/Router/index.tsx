import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthLayout } from '@/view/layouts/AuthLayout';
import { DashboardLayout } from '@/view/layouts/DashboardLayout';
import { Home } from '@/view/pages/Home';
import { Lessons } from '@/view/pages/Lessons';
import { Login } from '@/view/pages/Login';
import { Members } from '@/view/pages/Members';
import { MembersRequest } from '@/view/pages/MembersRequest';
import { Penalties } from '@/view/pages/Penalties';
import { Register } from '@/view/pages/Register';
import { Regulations } from '@/view/pages/Regulations';
import { Tutorials } from '@/view/pages/Tutorials';

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
            <Route path="/tutoriais" element={<Tutorials />} />
            <Route path="/membros" element={<Members />} />
            <Route path="/requerimentos" element={<MembersRequest />} />
            <Route path="/aulas" element={<Lessons />} />
            <Route path="/regimento-interno" element={<Regulations />} />
            <Route path="/codigo-penal" element={<Penalties />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
