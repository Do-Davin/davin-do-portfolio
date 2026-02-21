import { useState, useEffect } from 'react';
import { SiGithub } from 'react-icons/si';
import { HiArrowTopRightOnSquare, HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import Container from '../layout/Container';
import electroHero from '../assets/electrostorehero.png';
import rtcDashboard from '../assets/rtcdashboard.png';

interface Project {
  index: string;
  title: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  screenshots?: string[];
}

const projects: Project[] = [
  {
    index: '01',
    title: 'ELECTRO-STORE',
    description:
      'Full-stack e-commerce system with Stripe payments, order lifecycle management, and Dockerized deployment.',
    stack: ['Vue JS', 'Nest JS', 'PostgreSQL'],
    liveUrl: 'https://electro-store-q1uw.onrender.com',
    githubUrl: 'https://github.com/Do-Davin/electro-store.git',
    screenshots: [electroHero],
  },
  {
    index: '02',
    title: 'RTC-KPC-STUDENT-MANAGEMENT-SYSTEM',
    description:
      'Student management platform for RTC-KPC, handling enrollment, records, and administrative workflows.',
    stack: ['Vue JS', 'Nest JS', 'PostgreSQL'],
    liveUrl: undefined,
    githubUrl: 'https://github.com/Do-Davin/rtc-kpc-management-system.git',
    screenshots: [rtcDashboard],
  },
];

/* ── Screenshot Carousel ── */
function ScreenshotCarousel({ screenshots, title }: { screenshots: string[]; title: string }) {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((i) => (i - 1 + screenshots.length) % screenshots.length);
  const next = () => setCurrent((i) => (i + 1) % screenshots.length);

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl select-none"
      style={{ background: 'var(--color-card)', border: '1px solid rgba(255,255,255,0.06)' }}
    >
      {/* Browser chrome bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
        <span className="w-3 h-3 rounded-full bg-red-500/70" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <span className="w-3 h-3 rounded-full bg-green-500/70" />
        <div
          className="ml-3 flex-1 rounded-md px-3 py-1 text-[11px] text-gray-600 truncate"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {title.toLowerCase().replace(/_/g, '-')}
        </div>
        <span className="text-[11px] text-gray-600 flex-shrink-0">
          {current + 1} / {screenshots.length}
        </span>
      </div>

      {/* Image area */}
      <div className="relative aspect-video overflow-hidden">
        <img
          key={current}
          src={screenshots[current]}
          alt={`${title} screenshot ${current + 1}`}
          className="w-full h-full object-cover object-top transition-opacity duration-300"
        />
        {screenshots.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{
                background: 'rgba(0,0,0,0.55)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#fff',
              }}
            >
              <HiChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{
                background: 'rgba(0,0,0,0.55)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#fff',
              }}
            >
              <HiChevronRight size={18} />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {screenshots.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="w-1.5 h-1.5 rounded-full transition-all duration-200"
                  style={{
                    background: i === current ? 'var(--color-primary)' : 'rgba(255,255,255,0.3)',
                    transform: i === current ? 'scale(1.3)' : 'scale(1)',
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* ── Placeholder shown when no screenshots yet ── */
function ScreenshotPlaceholder({ title }: { title: string }) {
  return (
    <div
      className="relative w-full h-full rounded-2xl overflow-hidden flex flex-col items-center justify-center gap-3"
      style={{ background: 'var(--color-card)', border: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="absolute top-3 left-4 flex gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
      </div>
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <p className="text-xs uppercase tracking-[0.2em] text-gray-700 z-10">
        Screenshot coming soon
      </p>
      <p className="text-[11px] text-gray-700 z-10">{title}</p>
    </div>
  );
}

const CAROUSEL_INTERVAL = 4000;

/* ── Carousel Hero ── */
function CarouselHero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const prev = () => setActive((i) => (i - 1 + projects.length) % projects.length);
  const next = () => setActive((i) => (i + 1) % projects.length);
  const project = projects[active];

  useEffect(() => {
    if (paused || projects.length <= 1) return;
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % projects.length);
    }, CAROUSEL_INTERVAL);
    return () => clearInterval(timer);
  }, [paused, active]);

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden mb-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{
        height: '480px',
        background:
          'linear-gradient(135deg, rgba(247,126,45,0.04) 0%, var(--color-card) 50%, rgba(139,92,246,0.04) 100%)',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="relative h-full flex items-center">
        {/* Prev arrow */}
        <button
          onClick={prev}
          className="absolute left-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
          style={{
            background: 'rgba(0,0,0,0.4)',
            border: '1px solid rgba(255,255,255,0.08)',
            color: 'rgba(255,255,255,0.6)',
          }}
        >
          <HiChevronLeft size={20} />
        </button>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-16 sm:px-24 gap-4 h-full py-6 overflow-hidden">
          {/* Screenshot */}
          <div className="w-full max-w-2xl flex-1 min-h-0">
            <div className="h-full">
              {project.screenshots && project.screenshots.length > 0 ? (
                <ScreenshotCarousel screenshots={project.screenshots} title={project.title} />
              ) : (
                <ScreenshotPlaceholder title={project.title} />
              )}
            </div>
          </div>

          {/* Info */}
          <div className="flex-shrink-0 flex flex-col items-center gap-2">
            <h3 className="text-base font-heading tracking-wide text-white leading-tight">
              {project.title}
            </h3>
            <p
              className="text-[11px] uppercase tracking-[0.2em] font-medium"
              style={{ color: 'var(--color-primary)' }}
            >
              {project.stack.join('  ·  ')}
            </p>

            {/* Action icons */}
            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View Code"
                  className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 hover:scale-110 hover:text-white"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'var(--color-text-muted)',
                  }}
                >
                  <SiGithub size={15} />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View Live"
                  className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 hover:scale-110"
                  style={{ background: 'var(--color-primary)', color: '#000' }}
                >
                  <HiArrowTopRightOnSquare size={15} />
                </a>
              )}
            </div>

            {/* Slide indicator dots */}
            <div className="flex gap-1.5">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === active ? '20px' : '6px',
                    height: '6px',
                    background: i === active ? 'var(--color-primary)' : 'rgba(255,255,255,0.2)',
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Next arrow */}
        <button
          onClick={next}
          className="absolute right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
          style={{
            background: 'rgba(0,0,0,0.4)',
            border: '1px solid rgba(255,255,255,0.08)',
            color: 'rgba(255,255,255,0.6)',
          }}
        >
          <HiChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default function Featured() {
  return (
    <section id="project" className="py-32">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-(--color-primary) mb-4 font-medium">
              Work
            </p>
            <h2 className="text-4xl font-heading">Featured Projects</h2>
          </div>

          {/* Screenshot Carousel Hero */}
          <CarouselHero />

          {/* Project list */}
          <div className="space-y-px mb-20">
            {projects.map((project) => (
              <div
                key={project.index}
                className="group relative flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 py-10 border-t border-white/6 transition-all duration-300 hover:border-white/12"
              >
                <span
                  className="text-[11px] tracking-[0.2em] uppercase font-mono flex-shrink-0"
                  style={{ color: 'rgba(247,126,45,0.4)' }}
                >
                  {project.index}
                </span>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-heading tracking-wide leading-snug transition-colors duration-300 group-hover:text-(--color-primary) truncate">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed max-w-xl">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] tracking-wide uppercase font-medium"
                        style={{
                          background: 'rgba(247,126,45,0.08)',
                          border: '1px solid rgba(247,126,45,0.2)',
                          color: 'var(--color-text-muted)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 flex-shrink-0">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Live"
                      className="flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 hover:scale-110"
                      style={{ background: 'var(--color-primary)', color: '#000' }}
                    >
                      <HiArrowTopRightOnSquare size={17} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Code"
                      className="flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 hover:scale-110 hover:text-white"
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        color: 'var(--color-text-muted)',
                      }}
                    >
                      <SiGithub size={17} />
                    </a>
                  )}
                </div>

                <div
                  className="absolute left-0 top-0 w-0 h-px transition-all duration-500 group-hover:w-full"
                  style={{ background: 'var(--color-primary)', opacity: 0.4 }}
                />
              </div>
            ))}
            <div className="border-t border-white/6" />
          </div>
        </div>
      </Container>
    </section>
  );
}
