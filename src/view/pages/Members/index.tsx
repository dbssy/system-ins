import { Users } from 'lucide-react';

import { PageHeader } from '@/view/components/PageHeader';

import { MembersList } from './components/MembersList';

export function Members() {
  return (
    <div className="flex flex-1 flex-col gap-8 p-6">
      <PageHeader
        icon={Users}
        title="Listagem de Membros"
        description="Verifique os membros que estão ativos, em licença e/ou que necessitam de treinamento."
      />

      <MembersList />
    </div>
  );
}
