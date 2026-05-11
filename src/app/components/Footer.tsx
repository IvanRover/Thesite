export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-zinc-800">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl mb-4">NEURION</h3>
            <p className="text-zinc-500 text-sm">
              Создаем технологии будущего для улучшения жизни людей
            </p>
          </div>
          
          <div id="about">
            <h4 className="mb-4 text-zinc-400">О компании</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>О нас</li>
              <li>Команда</li>
              <li>Карьера</li>
              <li>Новости</li>
            </ul>
          </div>
          
          <div id="contact">
            <h4 className="mb-4 text-zinc-400">Контакты</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>info@neurion.tech</li>
              <li>Поддержка</li>
              <li>Партнерство</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-800 text-center text-sm text-zinc-600">
          <p>© 2026 NEURION. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
