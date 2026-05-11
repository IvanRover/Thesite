import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Target, Lightbulb, Users, Rocket } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header />
      
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl mb-6">
              О компании
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto">
              NEURION — компания, создающая технологии будущего
            </p>
          </div>

          {/* Mission */}
          <div className="mb-20">
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-zinc-700 rounded-2xl p-12">
              <div className="max-w-3xl mx-auto text-center">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-blue-400" />
                </div>
                <h2 className="text-3xl md:text-4xl mb-6">
                  Наша миссия
                </h2>
                <p className="text-xl text-zinc-300 leading-relaxed">
                  Мы стремимся создавать инновационные цифровые продукты, которые делают 
                  взаимодействие с технологиями более естественным, быстрым и безопасным. 
                  Наша цель — улучшить качество жизни пользователей через передовые решения 
                  в области искусственного интеллекта и веб-технологий.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl mb-12 text-center">
              Наши ценности
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl mb-4">Инновации</h3>
                <p className="text-zinc-400">
                  Мы постоянно исследуем новые технологии и внедряем самые передовые решения
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl mb-4">Пользователи</h3>
                <p className="text-zinc-400">
                  Потребности и удобство наших пользователей находятся в центре всего, что мы делаем
                </p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Rocket className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-2xl mb-4">Развитие</h3>
                <p className="text-zinc-400">
                  Мы верим в непрерывное совершенствование и стремимся к росту в каждом проекте
                </p>
              </div>
            </div>
          </div>

          {/* Story */}
          <div className="bg-zinc-800/30 border border-zinc-700 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl mb-6 text-center">
              Наша история
            </h2>
            <div className="max-w-3xl mx-auto text-zinc-300 space-y-4 text-lg">
              <p>
                NEURION была основана с целью создания технологий, которые меняют подход к 
                взаимодействию человека с цифровым миром. Наш первый проект, Neuro Browser, 
                уже доступен пользователям и демонстрирует наш подход к инновациям.
              </p>
              <p>
                Сегодня мы работаем над несколькими амбициозными проектами, включая Neurogram 
                и Neo AI, которые призваны установить новые стандарты в своих областях.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
