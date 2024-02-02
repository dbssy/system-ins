import { Presentation } from 'lucide-react';

import { PageHeader } from '@/view/components/PageHeader';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/view/components/ui/Tabs';

import { Lesson } from './components/Lesson';
import { Rectification } from './components/Rectification';

export function Lessons() {
  return (
    <div className="flex flex-1 flex-col gap-8 p-6">
      <PageHeader
        icon={Presentation}
        title="Scripts de Aulas"
        description="Acesse os scripts de aula e a retificação de erros."
      />

      <Tabs defaultValue="cfsd" className="w-full">
        <TabsList>
          <TabsTrigger value="cfsd">Recrutas</TabsTrigger>
          <TabsTrigger value="cfc1">CFC: Parte I</TabsTrigger>
          <TabsTrigger value="cfc2">CFC: Parte II</TabsTrigger>
          <TabsTrigger value="retificacao">Retificação</TabsTrigger>
        </TabsList>

        <TabsContent value="cfsd">
          <Lesson />
        </TabsContent>

        <TabsContent value="cfc1">
          <Lesson />
        </TabsContent>

        <TabsContent value="cfc2">
          <Lesson />
        </TabsContent>

        <TabsContent value="retificacao">
          <Rectification />
        </TabsContent>
      </Tabs>
    </div>
  );
}
