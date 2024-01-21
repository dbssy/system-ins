import { ChevronDown, LogOut, Search } from 'lucide-react';

import { DropdownMenu } from '@/view/components/DropdownMenu';

export function UserMenu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <div className="flex items-center gap-x-2">
          <div className="bg-avatar-image bg-[length:220px_220px] bg-center bg-no-repeat border-blue-400 border-2 rounded-full w-16 h-16 overflow-hidden">
            <img
              src="https://www.habbo.com.br/habbo-imaging/avatarimage?user=.Wire.-&action=std&direction=3&head_direction=3&gesture=sml&size=l"
              alt="Avatar do Usuário"
              className="my-[-20%]"
            />
          </div>

          <ChevronDown size={20} />
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="w-48 mt-1 mr-3">
        <DropdownMenu.Item className="flex items-center gap-x-2">
          <Search className="w-4 h-4" />
          Meu perfil
        </DropdownMenu.Item>

        <DropdownMenu.Item className="flex items-center gap-x-2">
          <LogOut className="w-4 h-4" />
          Deslogar
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
