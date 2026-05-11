import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Mail, MessageSquare, Send } from 'lucide-react';

export function Contacts() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header />
      
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl mb-6">
              Контакты
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Свяжитесь с нами, и мы обязательно ответим на ваши вопросы
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Email */}
            <div className="bg-zinc-800/50 border border-zinc-700 rounded-2xl p-8">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl mb-3">Email</h3>
              <p className="text-zinc-400 mb-4">
                Напишите нам на электронную почту
              </p>
              <a 
                href="mailto:neuriongroup@gmail.com" 
                className="text-blue-400 hover:text-blue-300 transition-colors text-lg"
              >
                neuriongroup@gmail.com
              </a>
            </div>

            {/* Support */}
            <div className="bg-zinc-800/50 border border-zinc-700 rounded-2xl p-8">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl mb-3">Поддержка</h3>
              <p className="text-zinc-400 mb-4">
                Вопросы по продуктам и техническая поддержка
              </p>
              <a 
                href="mailto:neurionsupport@gmail.com" 
                className="text-purple-400 hover:text-purple-300 transition-colors text-lg"
              >
                neurionsupport@gmail.com
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-zinc-700 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl mb-8 text-center">
              Отправить сообщение
            </h2>
            <form className="space-y-6 max-w-2xl mx-auto">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-zinc-400">
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Ваше имя"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-zinc-400">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm mb-2 text-zinc-400">
                  Тема
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Тема сообщения"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-zinc-400">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Ваше сообщение..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg flex items-center justify-center gap-3 transition-colors"
              >
                <Send className="w-5 h-5" />
                Отправить
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}