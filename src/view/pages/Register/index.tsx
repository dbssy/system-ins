import { Link } from 'react-router-dom';

import { Button } from '@/view/components/Button';
import { Input } from '@/view/components/Input';

export function Register() {
  return (
    <>
      <header className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-gray-900 text-2xl font-bold tracking-[-1px]">
          Crie a sua conta
        </h1>

        <p className="space-x-2 tracking-[-0.5px]">
          <span className="text gray-700">Já possui uma conta?</span>

          <Link
            to="/login"
            className="text-blue-500 hover:text-blue-600 font-medium transition-colors"
          >
            Fazer o Login
          </Link>
        </p>
      </header>

      <form className="flex flex-col gap-4 mt-[60px]">
        <Input name="username" type="text" placeholder="Usuário no Habbo" />

        <Input name="email" type="email" placeholder="E-mail" />

        <Input name="password" type="password" placeholder="Senha" />

        <Button type="submit" className="mt-2">
          Criar conta
        </Button>
      </form>
    </>
  );
}
