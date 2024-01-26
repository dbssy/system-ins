import { LinkIcon } from 'lucide-react';

export function UsefulLinks() {
  return (
    <div className="bg-white shadow-md border rounded-lg w-full h-44 p-3 flex flex-col gap-2">
      <div className="border-b border-blue-300 border-dashed flex items-center gap-x-2">
        <LinkIcon />

        <h3 className="text-gray-900 text-lg font-semibold">Links úteis</h3>
      </div>

      <div className="flex flex-col gap-y-1.5">
        <a
          href="https://system.policercc.com.br/"
          target="_blank"
          className="bg-yellow-400 hover:bg-yellow-500 text-white hover:text-gray-100 rounded-full px-3 py-1 transition-colors"
          rel="noreferrer"
        >
          RCC System
        </a>
        <a
          href="https://www.policiarcc.com/forum"
          target="_blank"
          className="bg-gray-400 hover:bg-gray-500 text-white hover:text-gray-100 rounded-full px-3 py-1 transition-colors"
          rel="noreferrer"
        >
          Fórum da RCC
        </a>
        <a
          href="/"
          target="_blank"
          className="bg-green-500 hover:bg-green-600 text-white hover:text-gray-100 rounded-full px-3 py-1 transition-colors"
        >
          Whatsapp Oficial
        </a>
      </div>
    </div>
  );
}
