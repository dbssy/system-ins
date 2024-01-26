import { Link } from 'react-router-dom';

import { Button } from '@/view/components/Button';
import { Input } from '@/view/components/Input';

export function Login() {
  return (
    <>
      <header className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-gray-900 text-2xl font-bold">Entre em sua conta</h1>

        <p className="space-x-2">
          <span className="text gray-700">Novo por aqui?</span>

          <Link
            to="/register"
            className="text-blue-500 hover:text-blue-600 font-medium transition-colors"
          >
            Crie uma conta
          </Link>
        </p>
      </header>

      <form className="flex flex-col gap-4 mt-[60px]">
        <Input name="email" type="email" placeholder="E-mail" />

        <Input name="password" type="password" placeholder="Senha" />

        <Button type="submit" className="mt-2">
          Entrar
        </Button>
      </form>
    </>
  );
}
