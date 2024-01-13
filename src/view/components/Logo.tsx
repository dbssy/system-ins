import logo from '@/assets/logo.png';

interface ILogoProps {
  className?: string;
}

export function Logo({ className }: ILogoProps) {
  return <img src={logo} alt="Instrutores da RCC" className={className} />;
}
