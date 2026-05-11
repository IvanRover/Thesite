import neuroBrowserLogo from 'figma:asset/ee268f1460e256c406277a41fe04158ab4d19dae.png';
import neoAILogo from 'figma:asset/6694eae70be69487d6035c9c77f13c25a6456fbd.png';
import kodLogo from 'figma:asset/c2f930506fa18e0f479ffc2e4c8e299a1d23f136.png';
import itdScreenshot from '../../imports/main.jpg';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router';

const currentProjects = [
  {
    id: 1,
    name: 'Neuro Browser',
    description: 'Браузер нового поколения с интегрированным искусственным интеллектом для улучшенного взаимодействия с веб-контентом',
    logo: neuroBrowserLogo,
    status: 'available',
    features: ['AI-ассистент', 'Быстрая работа', 'Защита данных', 'Умный поиск'],
    link: '/neuro-browser',
  },
  {
    id: 5,
    name: 'ИТД Браузер',
    description: 'Современный браузер с удобным интерфейсом и высокой производительностью для комфортной работы в интернете',
    logo: itdScreenshot,
    status: 'available',
    features: ['Высокая скорость', 'Защита данных', 'Удобный интерфейс', 'Бесплатно'],
    link: '/itd-browser',
  },
];

const upcomingProjects = [
  {
    id: 3,
    name: 'Neo AI',
    description: 'Продвинутая система искусственного интеллекта для решения сложных задач',
    logo: neoAILogo,
    features: ['Чат с AI', 'Машинное обучение', 'Обработка языка', 'Умные ответы'],
  },
  {
    id: 2,
    name: 'Neurogram',
    description: 'Мессенджер следующего поколения с поддержкой AI и передовыми функциями безопасности',
    logo: null,
    features: ['AI-чат боты', 'Шифрование', 'Групповые звонки'],
  },
  {
    id: 4,
    name: 'КодЪ',
    description: 'Социальная сеть для разработчиков и технических специалистов нового поколения',
    logo: kodLogo,
    features: ['Сообщество', 'Код-ревью', 'Проекты'],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-zinc-900/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl mb-4 text-center">
          Наши проекты
        </h2>
        <p className="text-zinc-400 text-center mb-16 max-w-2xl mx-auto">
          Инновационные продукты, которые меняют способ взаимодействия с технологиями
        </p>

        {/* Current Projects */}
        <div className="mb-20">
          <h3 className="text-2xl mb-8 text-zinc-300">Доступно сейчас</h3>
          <div className="grid md:grid-cols-1 gap-8">
            {currentProjects.map(project => (
              <Link
                to={project.link}
                key={project.id}
                className="bg-zinc-800/50 border border-zinc-700 rounded-2xl p-8 hover:border-zinc-600 transition-all block"
              >
                <div className="flex items-start gap-6 mb-6">
                  <img 
                    src={project.logo} 
                    alt={project.name}
                    className="h-20 object-contain"
                  />
                  <div className="flex-1">
                    <h3 className="text-3xl mb-2">{project.name}</h3>
                    <p className="text-zinc-400">{project.description}</p>
                  </div>
                  <ExternalLink className="w-6 h-6 text-zinc-500" />
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="px-4 py-2 bg-zinc-700/50 rounded-full text-sm text-zinc-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Upcoming Projects */}
        <div>
          <h3 className="text-2xl mb-8 text-zinc-300">Скоро</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingProjects.map(project => (
              <div 
                key={project.id}
                className="bg-zinc-800/30 border border-zinc-800 rounded-2xl p-8 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-zinc-700/50 rounded-full text-xs text-zinc-400">
                    В разработке
                  </span>
                </div>
                {project.logo && (
                  <img src={project.logo} alt={project.name} className="h-12 object-contain mb-4 opacity-60" />
                )}
                <h3 className="text-2xl mb-3">{project.name}</h3>
                <p className="text-zinc-400 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-zinc-800 rounded-full text-xs text-zinc-400"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-zinc-500 text-lg">
            И многое другое в разработке...
          </p>
        </div>
      </div>
    </section>
  );
}