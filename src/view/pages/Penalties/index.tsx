import { Gavel } from 'lucide-react';

import { PageHeader } from '@/view/components/PageHeader';

export function Penalties() {
  return (
    <div className="flex flex-1 flex-col gap-8 p-6">
      <PageHeader
        icon={Gavel}
        title="Código Penal"
        description="Conjunto de normas que define os crimes e as respectivas penalidades aplicáveis dentro da Companhia."
      />

      <div className="space-y-6">
        <div>
          <h5 className="text-blue-800 text-lg text-center font-medium">
            ÍNDICE
          </h5>

          <ul className="list-disc list-inside">
            <li>CAPÍTULO I - DAS DISPOSIÇÕES GERAIS</li>
            <li>CAPÍTULO II - DOS TIPOS DE CRIMES</li>
            <li>CAPÍTULO III - DAS DISPOSIÇÕES FINAIS</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
