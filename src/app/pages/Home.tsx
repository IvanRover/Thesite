import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Projects } from '../components/Projects';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header />
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}
