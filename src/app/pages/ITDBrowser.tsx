import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import browserScreenshot from '../../imports/main.jpg';
import { Download, Zap, Shield, Globe, Layers, Lock, Rss } from 'lucide-react';

export function ITDBrowser() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              Доступно сейчас
            </div>
            <h1 className="text-5xl md:text-7xl mb-6">
              ИТД Браузер
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 mb-10 max-w-3xl mx-auto">
              Современный браузер от NEURION с удобным интерфейсом и высокой производительностью для комфортной работы в интернете
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#download"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg flex items-center gap-3 transition-colors w-fit"
              >
                <Download className="w-5 h-5" />
                Скачать бесплатно
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshot Section */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="rounded-2xl overflow-hidden border border-zinc-700/50 shadow-2xl shadow-blue-500/5">
            <img
              src={browserScreenshot}
              alt="ИТД Браузер — интерфейс"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-zinc-900/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl mb-4 text-center">
            Возможности
          </h2>
          <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
            Всё необходимое для комфортной работы в сети
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl mb-2">Высокая скорость</h3>
              <p className="text-zinc-400 text-sm">
                Оптимизированный движок обеспечивает быструю загрузку страниц и плавную работу
              </p>
            </div>

            <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl mb-2">Защита данных</h3>
              <p className="text-zinc-400 text-sm">
                Встроенная защита от трекеров и нежелательной рекламы для вашей приватности
              </p>
            </div>

            <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl mb-2">Удобный интерфейс</h3>
              <p className="text-zinc-400 text-sm">
                Чистый и интуитивный интерфейс, адаптированный под все задачи
              </p>
            </div>

            <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl mb-2">Вкладки</h3>
              <p className="text-zinc-400 text-sm">
                Удобное управление множеством вкладок без потери производительности
              </p>
            </div>

            <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
              <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl mb-2">Безопасность</h3>
              <p className="text-zinc-400 text-sm">
                Защита от фишинга и вредоносных сайтов в режиме реального времени
              </p>
            </div>

            <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                <Download className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl mb-2">Бесплатно</h3>
              <p className="text-zinc-400 text-sm">
                Полностью бесплатный браузер без скрытых платежей и подписок
              </p>
            </div>

            <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 md:col-span-3">
              <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4">
                <Rss className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl mb-2">Интеграция постов с ИТД</h3>
              <p className="text-zinc-400 text-sm">
                Вы можете просматривать посты не заходя на сайт — лента ИТД доступна прямо в браузере
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-zinc-700 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl mb-4">
              Скачать ИТД Браузер
            </h2>
            <p className="text-zinc-400 mb-8">
              Начните пользоваться уже сегодня — это бесплатно
            </p>

            <a
              href="http://78.40.188.120:5903/download/%D0%98%D0%A2%D0%94%20%D0%B1%D1%80%D0%B0%D1%83%D0%B7%D0%B5%D1%800.0.1.exe"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg flex items-center gap-3 mx-auto transition-colors w-fit"
            >
              <Download className="w-5 h-5" />
              Скачать для Windows
            </a>

            <p className="mt-6 text-sm text-zinc-500">
              Если нужна помощь — напишите нам на{' '}
              <a href="mailto:neurionsupport@gmail.com" className="text-zinc-400 hover:text-white transition-colors underline">
                neurionsupport@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}