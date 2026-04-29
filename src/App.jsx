import { Github, Mail, ExternalLink, Terminal } from 'lucide-react';
import { FaLinkedin } from "react-icons/fa";

function App() {
  const meusProjetos = [
    {
      titulo: "Nexus Tracker",
      descricao: "API para gerenciamento de chamados (incidents), permitindo que usuários registrem ocorrências relacionadas a produtos e que técnicos realizem o atendimento, acompanhamento e resolução desses chamados.",
      linkGithub: "https://github.com/vitorhugo8899o-lgtm/Incident-Tracker-with-FastAPI",
      tech: ["Python", "FastAPI", "Nginx", "PostgreSQL", "Docker"]
    },
    {
      titulo: "Stress-Test-on-render",
      descricao: "Estudo prático de System Design orientado a alta concorrência, extraindo o máximo desempenho de uma infraestrutura limitada.",
      linkGithub: "https://github.com/vitorhugo8899o-lgtm/Stress-Test-on-render",
      tech: ["Python 3.13", "PostgreSQL", "Gunicorn", "Uvicorn"]
    },
    {
      titulo: "fastapi-redis-comments",
      descricao: "Ferramenta de linha de comando (CLI) que simula uma rede social simples, utilizando processamento em cache.",
      linkGithub: "https://github.com/vitorhugo8899o-lgtm/fastapi-redis-comments",
      tech: ["FastAPI", "redis-py", "Docker", "pytest", "rich"]
    },
    {
      titulo: "MongoForge-CLI",
      descricao: "Simulador de requisições para testar a escalabilidade e a integridade de dados em ambientes NoSQL.",
      linkGithub: "https://github.com/vitorhugo8899o-lgtm/MongoForge-CLI",
      tech: ["Python", "MongoDB", "Factoryboy", "Pydantic"]
    },
    {
      titulo: "API de E-commerce",
      descricao: "Sistema de Gerenciamento de Pedidos e estoque de um E-commerce",
      linkGithub: "https://github.com/vitorhugo8899o-lgtm/fast_api",
      tech: ["FastAPI", "PostgreSQL", "Docker"]
    },
    {
      titulo: "URL_shortener",
      descricao: "Encurtador de URL utilizando hashid e JWT para gerenciar o uso da aplicação",
      linkGithub: "https://github.com/vitorhugo8899o-lgtm/URL_shortener",
      tech: ["Python", "SQLite3", "FastAPI"]
    },
    {
      titulo: "Front_url",
      descricao: "Cliente web para o projeto URL_shortener. Aplicação rápida e responsiva para gerenciar links encurtados com segurança.",
      linkGithub: "https://github.com/vitorhugo8899o-lgtm/Front_url",
      tech: ["JavaScript", "React", "Vite", "Tailwind CSS", "Axios"]
    },
    {
      titulo: "github-activity",
      descricao: "API de busca de usuários e informações de atividades no Github",
      linkGithub: "https://github.com/vitorhugo8899o-lgtm/Front_url",
      tech: ["Python", "Request", "rich"]
    },
  ];

  return (
    <div className='w-full min-h-screen bg-zinc-900 font-mono text-green-400 selection:bg-green-500 selection:text-zinc-900 overflow-x-hidden'>

      <nav className="fixed top-0 w-full bg-zinc-900 border-b-4 border-green-500 z-50 p-4 flex justify-center gap-6 md:gap-12 uppercase text-sm md:text-base font-bold shadow-[0_4px_0_0_#22c55e]">
        <a href="#sobre" className="hover:text-white hover:bg-green-500 px-2 transition-colors">Sobre</a>
        <a href="#projetos" className="hover:text-white hover:bg-green-500 px-2 transition-colors">Projetos</a>
        <a href="#contato" className="hover:text-white hover:bg-green-500 px-2 transition-colors">Contato</a>
      </nav>

      <section className='min-h-screen flex flex-col items-center justify-center pt-20 px-4'>
        <div className="flex flex-col items-center gap-6 w-full max-w-2xl">
          <Terminal size={64} className="text-green-500 mb-4 animate-pulse" />
          <h1 className='text-4xl md:text-6xl text-green-500 font-bold uppercase tracking-widest text-center'>
            Vítor Hugo
          </h1>
          <p className='text-lg md:text-2xl text-zinc-300 uppercase tracking-widest text-center'>
            &gt; Desenvolvedor Backend_
          </p>

          <a href="#sobre" className="mt-8">
            <button className='bg-zinc-900 border-4 border-green-500 text-green-500 font-bold text-xl uppercase px-8 py-4 hover:bg-green-500 hover:text-zinc-900 transition-colors shadow-[6px_6px_0_0_#22c55e] active:shadow-[2px_2px_0_0_#22c55e] active:translate-x-1 active:translate-y-1'>
              Começar
            </button>
          </a>
        </div>
      </section>

      <section id="sobre" className="min-h-screen flex flex-col items-center justify-center p-8 border-t-4 border-dashed border-green-900 bg-zinc-950">
        <h2 className="text-3xl md:text-4xl font-bold uppercase mb-12 text-center text-white">
          Sobre Mim
        </h2>

        <div className="max-w-4xl bg-zinc-900 border-4 border-green-500 p-6 md:p-10 shadow-[8px_8px_0_0_#22c55e] text-zinc-300 text-base md:text-lg leading-relaxed">
          <p className="mb-6">
            <span className="text-green-500 font-bold mr-2">&gt;</span>
            Desenvolvedor Back-end com foco na construção de APIs REST utilizando Python e FastAPI. Cursando Análise e Desenvolvimento de Sistemas (EAD) na Universidade Católica de Brasília.
          </p>
          <p className="mb-6">
            <span className="text-green-500 font-bold mr-2">&gt;</span>
            Experiência técnica sólida em modelagem e integração de bancos de dados relacionais e NoSQL (PostgreSQL, MongoDB, SQLAlchemy), além de configuração de infraestrutura e proxy reverso utilizando Docker, Nginx e Redis. Construção de integrações full-stack estruturadas com React, Vite e Tailwind CSS.
          </p>
          <p>
            <span className="text-green-500 font-bold mr-2">&gt;</span>
            Orientado à performance, system design e contínua evolução na stack técnica. Buscando de forma ativa uma oportunidade como Desenvolvedor Júnior ou Estagiário para aplicar e escalar soluções em ambientes de produção.
          </p>
        </div>
      </section>

      <section id="projetos" className="min-h-screen flex flex-col items-center p-8 border-t-4 border-dashed border-green-900 pt-24">
        <h2 className="text-3xl md:text-4xl font-bold uppercase mb-12 text-center text-white">
          Projetos Realizados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
          {meusProjetos.map((projeto, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-6 flex flex-col justify-between border-4 border-zinc-700 hover:border-green-500 transition-colors shadow-[6px_6px_0_0_#3f3f46] hover:shadow-[6px_6px_0_0_#22c55e] group"
            >
              <div>
                <h3 className="text-xl text-green-400 font-bold mb-3 uppercase tracking-wide">&gt; {projeto.titulo}</h3>
                <p className="text-zinc-400 text-sm mb-6 font-sans">
                  {projeto.descricao}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {projeto.tech.map((t, i) => (
                    <span key={i} className="text-xs bg-green-900/30 border border-green-700 text-green-400 px-2 py-1 uppercase font-bold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={projeto.linkGithub}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-zinc-800 border-2 border-zinc-600 text-white py-2 px-4 hover:bg-green-500 hover:text-zinc-900 hover:border-green-500 transition-all uppercase font-bold text-sm w-full mt-auto"
              >
                <Github size={18} />
                Ver Código
                <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="contato" className="py-24 flex flex-col items-center justify-center p-8 border-t-4 border-dashed border-green-900 bg-zinc-950">
        <h2 className="text-3xl md:text-4xl font-bold uppercase mb-12 text-center text-white">
          Me Contate
        </h2>

        <div className='bg-zinc-900 w-full max-w-md p-8 flex flex-col items-center gap-8 border-4 border-green-500 shadow-[8px_8px_0_0_#22c55e]'>
          <p className="text-zinc-300 uppercase text-center font-bold">
            Selecione seu Item:
          </p>

          <div className='flex gap-6 w-full justify-center'>
            <a
              href="https://github.com/vitorhugo8899o-lgtm"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-zinc-800 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-zinc-900 transition-all hover:-translate-y-2 shadow-[4px_4px_0_0_#22c55e]"
            >
              <Github className='w-8 h-8' />
            </a>

            <a
              href="mailto:vitorhugo8899o@gmail.com?subject=Contato via Portfólio"
              className="p-4 bg-zinc-800 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-zinc-900 transition-all hover:-translate-y-2 shadow-[4px_4px_0_0_#22c55e]"
            >
              <Mail className='w-8 h-8' />
            </a>

            <a
              href="https://www.linkedin.com/in/vitor-hugo-rodrigues-de-lins"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-zinc-800 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-zinc-900 transition-all hover:-translate-y-2 shadow-[4px_4px_0_0_#22c55e]"
            >
              <FaLinkedin className="w-8 h-8" />
            </a>
          </div>

          <div className="text-xs text-green-600 uppercase mt-4 animate-pulse text-center">
            Insert coin to continue...
          </div>
        </div>
      </section>

    </div>
  )
}

export default App