interface IUserProfileProps {
  nick: string;
  role: string;
  goal: string;
  entryDate: string;
}

export function UserProfile({
  nick,
  role,
  goal,
  entryDate,
}: IUserProfileProps) {
  return (
    <div className="bg-white shadow-md border rounded-lg w-full h-44 p-3 flex items-center gap-3">
      <div className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 rounded-md w-32 h-32 overflow-hidden">
        <img
          src={`https://www.habbo.com.br/habbo-imaging/avatarimage?user=${nick}&action=std&direction=3&head_direction=3&gesture=sml&size=l`}
          alt="Avatar do Usuário"
          className="my-[-20%] ml-[-2%]"
        />
      </div>

      <div>
        <h3 className="text-gray-900 text-2xl font-semibold">{nick}</h3>

        <div className="text-sm space-x-1">
          <strong>Cargo:</strong>
          <span>{role}</span>
        </div>

        <div className="text-sm space-x-1">
          <strong>Meta:</strong>
          <span>{goal} pontos</span>
        </div>

        <div className="text-sm space-x-1">
          <strong>Entrada:</strong>
          <span>{entryDate}</span>
        </div>

        <div className="mt-2">
          <a
            href={`/membros/${nick}`}
            className="bg-gray-900 hover:bg-gray-800 shadow-md text-white hover:text-gray-100 rounded-full text-xs uppercase font-semibold px-4 py-2 transition-all"
          >
            Acessar Perfil
          </a>
        </div>
      </div>
    </div>
  );
}
