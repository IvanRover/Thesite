import neurionLogo from 'figma:asset/44d46fb7c1e6acdc3c1a870f0590af0046e616ee.png';
import { Link } from 'react-router';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-800">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={neurionLogo} alt="NEURION" className="h-10" style={{ imageRendering: 'crisp-edges' }} />
        </Link>
        <nav className="flex items-center gap-8">
          <Link to="/projects" className="text-zinc-400 hover:text-white transition-colors">
            Проекты
          </Link>
          <Link to="/about" className="text-zinc-400 hover:text-white transition-colors">
            О нас
          </Link>
          <Link to="/contacts" className="text-zinc-400 hover:text-white transition-colors">
            Контакты
          </Link>
        </nav>
      </div>
    </header>
  );
}