import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import neuroBrowserLogo from 'figma:asset/ee268f1460e256c406277a41fe04158ab4d19dae.png';
import neoAILogo from 'figma:asset/6694eae70be69487d6035c9c77f13c25a6456fbd.png';
import kodLogo from 'figma:asset/c2f930506fa18e0f479ffc2e4c8e299a1d23f136.png';
import itdScreenshot from '../../imports/main.jpg';
import { Link } from 'react-router';
import { ExternalLink } from 'lucide-react';

const currentProjects = [
  {
    id: 1,
    title: 'Neuro Browser',
    description: 'Браузер нового поколения с интегрированным искусственным интеллектом',
    logo: neuroBrowserLogo,
    status: 'Доступно',
    features: ['Высокая скорость', 'Защита данных'],
    link: '/neuro-browser',
  },
  {
    id: 5,
    title: 'ИТД Браузер',
    description: 'Современный браузер с удобным интерфейсом и высокой производительностью для комфортной работы в интернете',
    logo: itdScreenshot,
    status: 'Доступно',
    features: ['Высокая скорость', 'Защита данных', 'Удобный интерфейс', 'Бесплатно'],
    link: '/itd-browser',
  },
];

const upcomingProjects = [
  {
    id: 3,
    title: 'Neo AI',
    description: 'Искусственный интеллект для решения повседневных задач',
    logo: neoAILogo,
    status: 'В разработке',
    features: ['Чат с AI', 'Умные ответы', 'Обучение'],
  },
  {
    id: 2,
    title: 'Neurogram',
    description: 'Мессенджер с продвинутыми возможностями коммуникации и безопасности',
    logo: null,
    status: 'В разработке',
    features: ['Шифрование', 'Облачное хранилище', 'Групповые чаты'],
  },
  {
    id: 4,
    title: 'КодЪ',
    description: 'Социальная сеть для разработчиков и технических специалистов нового поколения',
    logo: kodLogo,
    status: 'В разработке',
    features: ['Сообщество', 'Код-ревью', 'Проекты'],
  },
];

export function Projects() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header />
      
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl mb-6">
              Наши проекты
            </h1>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Инновационные решения для цифрового будущего
            </p>
          </div>

          {/* Current Projects */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl mb-8">
              Текущие проекты
            </h2>
            <div className="grid md:grid-cols-1 gap-8">
              {currentProjects.map(project => (
                <Link
                  to={project.link}
                  key={project.id}
                  className="bg-zinc-800/50 border border-zinc-700 rounded-2xl p-8 hover:border-zinc-600 transition-all block"
                >
                  <div className="flex items-start gap-6 mb-6">
                    <img src={project.logo} alt={project.title} className="h-16 object-contain" />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl">{project.title}</h3>
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                          {project.status}
                        </span>
                      </div>
                      <p className="text-zinc-400">{project.description}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-zinc-500" />
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
            <h2 className="text-3xl md:text-4xl mb-8">
              Будущие проекты
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {upcomingProjects.map(project => (
                <div 
                  key={project.id}
                  className="bg-zinc-800/30 border border-zinc-700/50 rounded-2xl p-8 relative"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {project.logo && (
                      <img src={project.logo} alt={project.title} className="h-10 object-contain opacity-60" />
                    )}
                    <h3 className="text-2xl">{project.title}</h3>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm ml-auto">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-zinc-400 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {project.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="px-4 py-2 bg-zinc-700/30 rounded-full text-sm text-zinc-400"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}