import Container from '../layout/Container';
import profile from '../assets/profile.png';
import TechStackInline from './TechStackInline';

export default function About() {
  return (
    <section id="about" className="py-32">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Section label */}
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: 'var(--color-primary)' }}
          >
            About
          </p>

          {/* Title row */}
          <h2 className="font-heading text-4xl md:text-5xl leading-tight mb-12">Who I Am</h2>

          {/* Main grid */}
          <div className="grid md:grid-cols-[1fr_260px] gap-12 items-start">
            {/* ── LEFT ── */}
            <div>
              {/* Bio */}
              <div className="space-y-5 mb-10">
                <p
                  className="text-base leading-relaxed"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  I'm a{' '}
                  <span style={{ color: 'var(--color-primary)' }} className="font-medium">
                    fullstack developer
                  </span>{' '}
                  based in Phnom Penh, Cambodia — focused on building{' '}
                  <span style={{ color: 'var(--color-primary)' }} className="font-medium">
                    reliable, well-structured
                  </span>{' '}
                  web applications across the frontend, backend, and database layers.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  My approach prioritises{' '}
                  <span style={{ color: 'var(--color-primary)' }} className="font-medium">
                    clean architecture
                  </span>
                  , consistency, and long-term maintainability. I aim to write code that is
                  production-ready and straightforward to maintain.
                </p>
              </div>

              {/* Divider */}
              <div className="h-px w-full mb-10" style={{ background: 'rgba(255,255,255,0.06)' }} />

              {/* Tech stack */}
              <TechStackInline />
            </div>

            {/* ── RIGHT — Photo ── */}
            <div className="flex md:justify-end justify-center">
              <div
                className="group relative w-[200px] md:w-[220px] flex-shrink-0 rounded-2xl overflow-hidden border transition-all duration-300"
                style={{
                  borderColor: 'rgba(255,255,255,0.08)',
                  background: 'var(--color-card)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--color-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
              >
                <img
                  src={profile}
                  alt="Do Davin"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Name tag overlay */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-4 py-3"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)',
                  }}
                >
                  <p className="text-sm font-semibold text-white">Do Davin</p>
                  <p className="text-xs" style={{ color: 'var(--color-primary)' }}>
                    Software Engineering
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
