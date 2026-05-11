import neurionLogo from 'figma:asset/44d46fb7c1e6acdc3c1a870f0590af0046e616ee.png';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <img src={neurionLogo} alt="NEURION" className="h-32 md:h-40" style={{ imageRendering: 'crisp-edges' }} />
          </div>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
            Разрабатываем передовые решения в области искусственного интеллекта, 
            браузерных технологий и инновационных приложений
          </p>
        </div>
      </div>
    </section>
  );
}