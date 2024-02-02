import { SquarePen } from 'lucide-react';

import { PageHeader } from '@/view/components/PageHeader';

import { Form } from './components/Form';

export function MembersRequest() {
  return (
    <div className="flex flex-1 flex-col gap-8 p-6">
      <PageHeader
        icon={SquarePen}
        title="Requerimentos: Lista de Membros"
        description="Registre a entrada e saída de membros, licenças, penalidades internas, entre outros modelos de requerimentos."
      />

      <Form />
    </div>
  );
}
