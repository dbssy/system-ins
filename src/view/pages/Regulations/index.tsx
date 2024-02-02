import { LibrarySquare } from 'lucide-react';

import { PageHeader } from '@/view/components/PageHeader';

export function Regulations() {
  return (
    <div className="flex flex-1 flex-col gap-8 p-6">
      <PageHeader
        icon={LibrarySquare}
        title="Regimento Interno"
        description="Documento normativo que estabelece as regras, procedimentos e diretrizes para o funcionamento interno da Companhia."
      />

      <div className="space-y-6">
        <div>
          <h5 className="text-blue-800 text-lg text-center font-medium">
            ÍNDICE
          </h5>

          <ul className="list-disc list-inside">
            <li>CAPÍTULO I - DAS DISPOSIÇÕES GERAIS</li>
            <li>CAPÍTULO II - DA FORMAÇÃO DO INSTRUTOR</li>
            <li>CAPÍTULO III - DOS CARGOS, FUNÇÕES E METAS</li>
            <li>
              CAPÍTULO IV - DAS POLÍTICAS DE LICENÇA, SAÍDA E REINTEGRAÇÃO
            </li>
            <li>CAPÍTULO V - DAS GRATIFICAÇÕES TEMPORÁRIAS E EFETIVAS</li>
            <li>CAPÍTULO VI - DO COMPORTAMENTO NAS ÁREAS INTERNAS</li>
            <li>CAPÍTULO VII - DOS SUBGRUPOS</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
