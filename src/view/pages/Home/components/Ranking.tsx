import { Trophy } from 'lucide-react';

import { cn } from '@/app/utils/cn';

interface IRankingProps {
  ranking: {
    type: string;
    members: {
      nick: string;
      position: string;
      points: string;
    }[];
  };
}

export function Ranking({ ranking }: IRankingProps) {
  return (
    <div className="w-full xl:w-1/4 space-y-3">
      <div className="border-b border-blue-300 border-dashed flex items-center gap-x-2 mb-2">
        <Trophy className="text-yellow-500" />

        <h3 className="text-gray-900 text-lg font-semibold">
          TOP {ranking.type}
        </h3>
      </div>

      {ranking.members.map((member) => (
        <div className="flex gap-x-2">
          <div
            className={cn(
              'bg-white shadow-md border-r-8 border-gray-900 rounded-lg w-full h-16 flex items-center overflow-hidden',
              member.position === '1' && 'border-yellow-500',
              member.position === '2' && 'border-zinc-400',
              member.position === '3' && 'border-amber-900',
            )}
          >
            <div className="h-[85px]">
              <img
                src={`https://www.habbo.com.br/habbo-imaging/avatarimage?user=${member.nick}&action=std&direction=3&head_direction=3&gesture=sml&size=l`}
                alt="Avatar do Usuário"
                className="w-16"
              />
            </div>

            <div className="text-gray-900 flex flex-col">
              <strong>{member.nick}</strong>
              <span>{member.points} pontos</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
