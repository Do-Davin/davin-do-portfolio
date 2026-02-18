import Container from '../layout/Container';
import AnimatedShinyText from '../components/AnimatedShinyText';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <Container>
        <div className="text-center">
          <p className="text-sm tracking-widest uppercase text-gray-400">Software Engineering</p>

          <h1 className="mt-6 text-6xl font-extrabold">
            <AnimatedShinyText
              text="DO DAVIN"
              gradientColors="linear-gradient(135deg, #ff8c42 0%, #ff6b9d 50%, #c084fc 100%)"
              gradientAnimationDuration={1}
              hoverEffect={true}
            />
          </h1>

          <div className="mt-8 max-w-2xl mx-auto text-lg text-gray-400">
            <AnimatedShinyText
              text="Building scalable web application systems with production-ready architecture and clean execution."
              gradientColors="linear-gradient(90deg, #10b981, #3b82f6, #10b981)"
              hoverEffect={true}
              textClassName="text-3xl font-medium"
            />
          </div>

          <div className="mt-12 flex justify-center gap-6">
            <button className="px-8 py-3 rounded-lg bg-(--color-primary) text-black font-semibold hover:opacity-90 transition">
              View Projects
            </button>

            <button className="px-8 py-3 rounded-lg border border-white/10 hover:border-(--color-secondary) transition">
              Contact Me
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
