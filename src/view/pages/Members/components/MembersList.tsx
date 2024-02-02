import { LEADER, VICELEADER } from '@/data/members';

import { RoleList } from './RoleList';

export function MembersList() {
  return (
    <>
      <RoleList
        title="Líder"
        description="Responsável pela gestão da companhia"
        occupants={1}
        limit={1}
        members={LEADER}
      />

      <RoleList
        title="Vice-Líder"
        description="Responsáveis por auxiliar na gestão da companhia"
        occupants={2}
        limit={2}
        members={VICELEADER}
      />
    </>
  );
}
