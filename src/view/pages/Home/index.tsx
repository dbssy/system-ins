import {
  RANKING_AVA,
  RANKING_CAP,
  RANKING_GRAD,
  RANKING_INS,
} from '@/data/ranking';

import { Ranking } from './components/Ranking';
import { UsefulLinks } from './components/UsefulLinks';
import { UserProfile } from './components/UserProfile';

export function Home() {
  return (
    <>
      <div className="flex flex-1 flex-col xl:flex-row gap-x-12 gap-y-8 p-6">
        <div className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 shadow-md text-white rounded-lg w-full xl:w-4/5 h-96 p-8 flex items-center">
          <h1 className="text-5xl font-semibold">
            Anúncio bem bacana dos Instrutores
          </h1>
        </div>

        <div className="w-full xl:w-1/3 flex flex-col gap-8">
          <UserProfile
            nick=".Wire.-"
            role="Capacitador"
            goal="3"
            entryDate="29 Out 2023"
          />

          <UsefulLinks />
        </div>
      </div>

      <div className="flex flex-1 flex-col xl:flex-row gap-x-4 gap-y-6 p-6">
        <Ranking ranking={RANKING_INS} />

        <Ranking ranking={RANKING_GRAD} />

        <Ranking ranking={RANKING_AVA} />

        <Ranking ranking={RANKING_CAP} />
      </div>
    </>
  );
}
