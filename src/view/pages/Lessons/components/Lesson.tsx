export function Lesson() {
  return (
    <div className="flex flex-col gap-4">
      <div className="border border-l-4 rounded-md flex flex-col gap-2 p-4">
        <h5 className="text-lg text-center font-semibold">
          ATENÇÃO, INSTRUTOR! Leia a instrução a seguir:
        </h5>

        <span className="text-justify font-medium">
          • É terminantemente proibido pular qualquer parte do script. A
          companhia dos instrutores tem como dever formar e treinar os devidos
          policiais com excelência, ou seja, qualquer transgressão no que se
          refere a qualidade da aula, ocasionará severas punições, listadas no{' '}
          <a
            href="/regimento-interno"
            className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            [INS] Código Penal dos Instrutores
          </a>
          .
        </span>
      </div>

      <div>
        <span className="font-semibold">
          TO-DO: INSERIR CONTEÚDO DE FORMA DINÂMICA
        </span>
      </div>

      <div className="border border-l-4 rounded-md text-sm flex flex-col gap-2 p-4">
        <span>
          <span className="text-blue-800">➥</span> É de suma importância que
          poste todas suas instruções, mesmo que os alunos tenham reprovados ou
          saiam durante a aula;
        </span>

        <span>
          <span className="text-blue-800">➥</span> Certifique-se de que os nicks
          estejam corretos;
        </span>

        <span>
          <span className="text-blue-800">➥</span> Se o policial estiver
          demonstrando inatividade, aguarde entre 3 a 5 minutos para postar a
          instrução.
        </span>

        <span>
          <span className="text-blue-800">➦</span> Poste os aprovados no RCC
          System,{' '}
          <a
            href="https://rccsystem.com.br/requerimentos/instrucao_inicial"
            className="text-red-500 hover:text-red-600 font-semibold transition-colors"
          >
            clicando aqui
          </a>
          .
        </span>

        <span>
          <strong>Pontuação da aula:</strong> X pontos.
        </span>
      </div>
    </div>
  );
}
