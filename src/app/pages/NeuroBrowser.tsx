import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import neuroBrowserLogo from 'figma:asset/ee268f1460e256c406277a41fe04158ab4d19dae.png';
import { Download, Zap, Shield } from 'lucide-react';

export function NeuroBrowser() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <img src={neuroBrowserLogo} alt="Neuro Browser" className="h-32 md:h-40" />
            </div>
            <h1 className="text-5xl md:text-7xl mb-6">
              Neuro Browser
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-3xl mx-auto">
              Браузер нового поколения с интегрированным искусственным интеллектом для улучшенного взаимодействия с веб-контентом
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-zinc-900/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">
            Возможности
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl mb-2">Быстрая работа</h3>
              <p className="text-zinc-400 text-sm">
                Оптимизированный движок обеспечивает молниеносную скорость загрузки
              </p>
            </div>

            <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl mb-2">Защита данных</h3>
              <p className="text-zinc-400 text-sm">
                Продвинутая система защиты конфиденциальности и блокировки трекеров
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-zinc-700 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl mb-4">
              Скачать Neuro Browser
            </h2>
            <p className="text-zinc-400 mb-8">
              Начните использовать браузер будущего уже сегодня
            </p>
            
            <a 
              href="https://github.com/IvanRover/NeuroBrowser/releases/download/neuro/Neuro.Setup.1.0.0.exe"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg flex items-center gap-3 mx-auto transition-colors w-fit"
            >
              <Download className="w-5 h-5" />
              Скачать для Windows
            </a>
            
            <div className="mt-6 flex items-center justify-center gap-8 text-sm text-zinc-500">
              <div>
                <span className="text-zinc-400">Версия:</span> 1.0.0
              </div>
              <div>
                <span className="text-zinc-400">Вес:</span> 97 514 КБ
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}