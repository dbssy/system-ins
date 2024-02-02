import { Button } from '@/view/components/Button';
import { Input } from '@/view/components/Input';

export function Rectification() {
  return (
    <div className="flex flex-col gap-4">
      <div className="border border-l-4 rounded-md flex flex-col gap-2 p-4">
        <h5 className="bg-blue-700 text-white rounded-lg text-2xl text-center uppercase font-bold p-4">
          Retificação de Erros
        </h5>

        <span>
          Está disposto abaixo o formulário de retificação de erros aos
          instrutores que desejarem corrigir suas postagens errôneas no
          relatório de aulas. Em caso de erros ou dúvidas, contate um membro do
          ministério ou liderança.
        </span>
      </div>

      <form className="flex flex-col gap-4">
        <div>
          <span className="text-sm">Nickname do Membro</span>
          <Input name="nick" type="text" placeholder="Seu nickname" />
        </div>

        <div>
          <span className="text-sm">Linha na Planilha</span>
          <Input
            name="line"
            type="text"
            placeholder="Linha onde o erro se encontra"
          />
        </div>

        <div>
          <span className="text-sm">Planilha de Referência</span>
          <Input
            name="sheet"
            type="text"
            placeholder="Planilha dos Instrutores"
          />
        </div>

        <div>
          <span className="text-sm">Erro</span>
          <Input name="error" type="text" placeholder="Erro a ser corrigido" />
        </div>

        <div>
          <span className="text-sm">Correção</span>
          <Input
            name="adjustment"
            type="text"
            placeholder="Correção para qual o erro deverá ser corrigido"
          />
        </div>

        <Button type="submit">Enviar correção</Button>
      </form>
    </div>
  );
}
