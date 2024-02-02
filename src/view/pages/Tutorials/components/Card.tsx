interface ICardProps {
  link: string;
  cover: string;
  title: string;
}

export function Card({ link, cover, title }: ICardProps) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="border rounded-lg hover:shadow-sm h-full p-3 group overflow-hidden transition">
        <div className="rounded-md w-full aspect-video overflow-hidden relative">
          <img src={cover} alt="Capa" className="object-cover" />
        </div>

        <div className="pt-2">
          <span className="text-blue-500 group-hover:text-blue-600 text-lg md:text-base font-medium line-clamp-2 transition">
            {title}
          </span>
        </div>
      </div>
    </a>
  );
}
