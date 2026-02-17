import Container from '../layout/Container';

export default function Featured() {
  return (
    <section className="py-32">
      <Container>
        <div className="mb-20">
          <h2 className="text-4xl font-heading">Featured Work</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* {LEFT SIDE} */}
          <div>
            <h3 className="text-3xl font-heading text-(--color-primary)">ELECTRO-STORE</h3>

            <p className="mt-6 text-lg text-gray-400 max-w-xl">
              Full-stack e-commerce system with secure payments and production-ready deployment.
            </p>

            <ul className="mt-8 space-y-4 text-gray-400">
              <li>• Stripe integration with webhook validation</li>
              <li>• Order lifecycle & stock validation logic</li>
              <li>• PostgreSQL relational schema design</li>
              <li>• Dockerized deployment architecture</li>
            </ul>

            <div className="mt-10 flex gap-6">
              <button className="px-6 py-3 rounded-lg bg-(--color-primary) text-black font-semibold">
                View Live
              </button>

              <button className="px-6 py-3 rounded-lg border border-white/10 hover:border-(--color-secondary) transition">
                View Code
              </button>
            </div>
          </div>

          {/* {RIGHT SIDE} */}
          <div>
            <div className="rounded-xl bg-(--color-card) h-100 shadow-lg shadow-black/40 flex items-center justify-center text-gray-500">
              Project Screenshot Placeholder
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
