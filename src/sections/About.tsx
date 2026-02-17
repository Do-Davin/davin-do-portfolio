import Container from '../layout/Container';
import profile from '../assets/profile.png';
import TechStackInline from './TechStackInline';

export default function About() {
  return (
    <section className="py-32">
      <Container>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <div>
            <h2 className="text-4xl font-heading mb-8">About Me</h2>

            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              I am a software engineer focused on building scalable, production-ready web
              application systems across frontend, backend, and database layers.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              My approach prioritizes architecture, system integrity, and long-term maintainability
              over shortcuts.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              Here are some technologies I have been working with:
            </p>
            <TechStackInline />
          </div>

          {/* RIGHT */}
          <div className="flex justify-center">
            <div
              className="
                group
                relative
                rounded-2xl
                overflow-hidden
                border border-white/10
                bg-neutral-900
                shadow-xl shadow-black/40
                transition-all duration-300 ease-out
                hover:shadow-2xl hover:shadow-black/60
                hover:-translate-y-1
                hover:border-(--color-primary)
              "
            >
              <img
                src={profile}
                alt="Do Davin"
                className="
                  w-full
                  h-full
                  object-cover
                  transition-transform duration-500 ease-out
                  group-hover:scale-105
                "
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
