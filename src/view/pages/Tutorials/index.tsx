import { MessageCircleWarning } from 'lucide-react';

import { HANDOUTS, TUTORIALS } from '@/data/tutorials';
import { PageHeader } from '@/view/components/PageHeader';

import { Card } from './components/Card';

export function Tutorials() {
  const hasCourse = HANDOUTS.length > 0 && TUTORIALS.length > 0;

  return (
    <div className="flex flex-1 flex-col gap-8 p-6">
      <PageHeader
        icon={MessageCircleWarning}
        title="Tutoriais e Apostilas"
        description="Descubra e aprenda tudo o que é necessário para construir uma carreira próspera na Companhia!"
      />

      {hasCourse ? (
        <>
          <div className="space-y-2">
            <h3 className="text-blue-700 text-lg uppercase font-semibold">
              Apostilas
            </h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
              {HANDOUTS.map((handout) => (
                <Card
                  key={handout.link}
                  link={handout.link}
                  cover={handout.cover}
                  title={handout.title}
                />
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-blue-700 text-lg uppercase font-semibold">
              Tutoriais
            </h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
              {TUTORIALS.map((tutorial) => (
                <Card
                  key={tutorial.link}
                  link={tutorial.link}
                  cover={tutorial.cover}
                  title={tutorial.title}
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        <span className="text-gray-600 text-sm text-center mt-2">
          Nenhum curso foi encontrado.
        </span>
      )}
    </div>
  );
}
