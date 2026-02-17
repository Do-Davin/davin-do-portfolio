import Container from '../layout/Container';

export default function Hero() {
  return (
    <section className="py-32">
      <Container>
        <div className="text-center">
          <p className="text-sm tracking-widest uppercase text-gray-400">
            Startup Fullstack Engineer
          </p>

          <h1 className="mt-6 text-6xl font-heading">Do Davin</h1>

          <p className="mt-8 max-w-2xl mx-auto text-lg text-gray-400">
            Building scalable web systems with production-ready architecture and clean execution.
          </p>

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
