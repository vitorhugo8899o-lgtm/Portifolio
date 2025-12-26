import { Github, Mail } from 'lucide-react';

function App() {
  return (
    <div className='relative w-full min-h-screen bg-zinc-800 flex flex-col items-center justify-center overflow-x-hidden px-4'>

      <div className='flex flex-col items-center gap-5 w-full max-w-md'>

        <h1 className='text-4xl md:text-5xl text-white font-medium shadow-lg text-center'>
          Vítor Hugo
        </h1>

        <p className='text-xl md:text-2xl text-white font-light shadow-lg mb-5 text-center'>
          Desenvolvedor Backend
        </p>

        <a href="/Projects" className="w-full flex justify-center">
          <button className='bg-neutral-700 text-white text-xl md:text-2xl hover:bg-neutral-800 transition-colors group w-full max-w-50 h-14 md:h-15 rounded-full'>
            Projetos
          </button>
        </a>

        <div className='bg-neutral-700 w-full max-w-sm p-6 rounded-xl flex flex-col items-center gap-4 shadow-2xl border border-neutral-600'>
          <h2 className='text-white text-lg md:text-xl font-medium'>
            Informações de Contato
          </h2>

          <div className='flex gap-8 mt-2'>
            <a
              href="https://github.com/vitorhugo8899o-lgtm"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-neutral-600 rounded-full hover:bg-zinc-500 transition-colors group"
            >
              <Github className='text-white w-7 h-7 md:w-8 md:h-8 group-hover:scale-110 transition-transform' />
            </a>

            <a
              href="mailto:vitorhugo8899o@gmail.com?subject=Contato via Portfólio"
              className="p-3 bg-neutral-600 rounded-full hover:bg-zinc-500 transition-colors group"
            >
              <Mail className='text-white w-7 h-7 md:w-8 md:h-8 group-hover:scale-110 transition-transform' />
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
