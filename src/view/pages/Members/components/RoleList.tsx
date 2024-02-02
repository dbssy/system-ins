import { cn } from '@/app/utils/cn';

interface IRoleListProps {
  title: string;
  description: string;
  occupants: number;
  limit: number;
  members: {
    nick: string;
    updatedAt: string;
    groups?: string[];
    extra?: string;
  }[];
}

export function RoleList({
  title,
  description,
  occupants,
  limit,
  members,
}: IRoleListProps) {
  return (
    <div>
      <div className="text-center">
        <h5 className="text-blue-700 uppercase font-bold">
          {title} [{occupants}/{limit}]
        </h5>

        <span className="text-sm font-semibold">↬ {description}.</span>
      </div>

      <ul className="list-disc list-inside">
        {members.map((member) => (
          <li key={member.nick}>
            <span>{member.nick}</span>
            <span> - {member.updatedAt} </span>

            {member.groups && member.groups.length > 0 && (
              <span className="text-blue-600 font-semibold">
                [{member.groups.join('/')}]
              </span>
            )}

            {member.extra && member.extra.length > 0 && (
              <span
                className={cn(
                  'font-semibold',
                  member.extra === 'L' && 'text-red-500',
                  member.extra === 'LR' && 'text-red-500',
                  member.extra === 'CAP' && 'text-blue-700',
                  member.extra === 'QI' && 'text-blue-400',
                )}
              >
                {' '}
                [{member.extra}]
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
