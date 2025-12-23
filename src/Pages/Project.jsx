import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    const meusProjetos = [
        {
            titulo: "API de E-commerce",
            descricao: "Sistema de Gerenciamento de Pedidos e estoque de um E-commerce",
            linkGithub: "https://github.com/vitorhugo8899o-lgtm/fast_api",
            tech: ["FastAPI", "PostgreSQL", "Docker"]
        },
        {
            titulo: "Encurtador de URL com sistema de autentificação",
            descricao: "Encurtador de URL utilizando hashid e PyJWT para as requisões",
            linkGithub: "https://github.com/vitorhugo8899o-lgtm/URL_shortener",
            tech: ["Python", "SQLite3", "FastAPI"]
        },
        {
            titulo: "Gerenciador de Tarefas (Backend)",
            descricao: "Simples TO DO list para rodar no terminal, salvando tarefas no JSON.",
            linkGithub: "https://github.com/vitorhugo8899o-lgtm/Lista-de-Tarefas",
            tech: ["Python", "JSON", "POO"]
        },
        {
            titulo: "Github Active",
            descricao: "API de requisões sobre atividades e informações de perfil de usuarios no github para rodar no terminal",
            linkGithub: "https://github.com/vitorhugo8899o-lgtm/github-activity",
            tech: ["Python", "Request", "Rich"]
        }
    ];

    return (
        <div className="w-full min-h-screen bg-zinc-800 p-8 flex flex-col items-center">
            <h2 className="text-4xl text-white font-medium mb-12">Projetos Realizados</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
                {meusProjetos.map((projeto, index) => (
                    <div
                        key={index}
                        className="bg-neutral-700 p-6 rounded-xl shadow-xl flex flex-col justify-between border border-neutral-600 hover:border-zinc-400 transition-all group"
                    >
                        <div>
                            <h3 className="text-2xl text-white font-semibold mb-3">{projeto.titulo}</h3>
                            <p className="text-zinc-300 font-light mb-4">
                                {projeto.descricao}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {projeto.tech.map((t, i) => (
                                    <span key={i} className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <a
                            href={projeto.linkGithub}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-neutral-600 text-white py-2 px-4 rounded-lg hover:bg-zinc-500 transition-colors w-full mt-auto"
                        >
                            <Github size={20} />
                            Ver documentação (README)
                            <ExternalLink size={16} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;