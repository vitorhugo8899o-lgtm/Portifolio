import { useState } from 'react'
import './App.css'
import Navigation from './componentes/NavigatePages'
import { Github } from 'lucide-react';
import { Mail } from 'lucide-react';

function App() {
  return (
    <div className='relative w-full min-h-screen bg-zinc-800 flex flex-col items-center overflow-x-hidden'>

      <Navigation />

      <div className='flex flex-col flex-1 justify-center items-center gap-5'>
        <h1 className='text-5xl text-white font-medium  shadow-lg'>Vítor Hugo</h1>
        <p className='text-2xl text-white font-light shadow-lg mb-5'>Desenvolvedor Backend</p>
        <button className='bg-neutral-700 text-white text-2xl hover:bg-neutral-800 w-45 h-15 rounded-4xl'>
          Projetos
        </button>
        <div className='bg-neutral-700 w-96 p-6 rounded-xl flex flex-col items-center gap-4 shadow-2xl border border-neutral-600'>
          <h2 className='text-white text-xl font-medium'>Informações de Contato</h2>

          <div className='flex gap-8 mt-2'>
            <a
              href="https://github.com/vitorhugo8899o-lgtm"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-neutral-600 rounded-full hover:bg-zinc-500 transition-colors group"
            >
              <Github className='text-white w-8 h-8 group-hover:scale-110 transition-transform' />
            </a>

            <a
              href="mailto:vitorhugo8899o@gmail.com?subject=Contato via Portfólio"
              className="p-3 bg-neutral-600 rounded-full hover:bg-zinc-500 transition-colors group"
            >
              <Mail className='text-white w-8 h-8 group-hover:scale-110 transition-transform' />
            </a>

          </div>
        </div>
      </div>

    </div>
  )
}

export default App
