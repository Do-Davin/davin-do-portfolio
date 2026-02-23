import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import Container from '../layout/Container';

/* ── rotating role titles ── */
const roles = ['Full-Stack Developer', 'Software Engineer', 'System Design', 'Problem Solver'];

const nameLetters = 'Davin'.split('');

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  /* ── cursor-tracking spotlight ── */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const spotlightY = useSpring(mouseY, { stiffness: 40, damping: 25 });

  useEffect(() => {
    const interval = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [mouseX, mouseY]);

  /* ── framer variants ── */
  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.13, delayChildren: 0.15 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 32, filter: 'blur(12px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  const letterFlip = {
    hidden: { opacity: 0, y: 50, rotateX: -80 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        delay: 0.55 + i * 0.07,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    }),
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── background layer ── */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* orb 1 – warm — scaled down on mobile so it doesn't bleed */}
        <motion.div
          className="absolute top-[18%] left-[10%] w-72 h-72 sm:w-130 sm:h-130 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(247,126,45,0.07) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, 60, -35, 0],
            y: [0, -45, 30, 0],
            scale: [1, 1.12, 0.92, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* orb 2 – cool */}
        <motion.div
          className="absolute bottom-[12%] right-[8%] w-64 h-64 sm:w-110 sm:h-110 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.055) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, -55, 40, 0],
            y: [0, 40, -55, 0],
            scale: [1, 0.88, 1.1, 1],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* dot grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      {/* ── cursor spotlight ── */}
      <motion.div
        className="pointer-events-none absolute top-0 left-0 w-162.5 h-162.5 rounded-full opacity-[0.06]"
        style={{
          zIndex: -1,
          x: spotlightX,
          y: spotlightY,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, var(--color-primary), transparent 70%)',
        }}
      />

      {/* ── content ── */}
      <Container>
        <motion.div variants={stagger} initial="hidden" animate="visible">
          {/* availability badge */}
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/6 bg-white/2 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs tracking-wide text-gray-400">
                Available for opportunities
              </span>
            </span>
          </motion.div>

          {/* subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-[11px] sm:text-xs tracking-[0.35em] uppercase text-gray-500 font-medium mb-4"
          >
            Software Engineer
          </motion.p>

          {/* name with letter stagger */}
          <div className="overflow-hidden" style={{ perspective: 600 }}>
            <motion.h1
              variants={fadeUp}
              className="text-[3.4rem] sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black tracking-tight leading-[0.92]"
            >
              <span className="text-white">Do </span>
              {nameLetters.map((letter, i) => (
                <motion.span
                  key={i}
                  className="inline-block hero-gradient-text"
                  custom={i}
                  variants={letterFlip}
                  initial="hidden"
                  animate="visible"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* rotating role */}
          <motion.div variants={fadeUp} className="mt-5 flex items-center gap-3 h-7">
            <motion.div
              className="w-8 h-px bg-(--color-primary) flex-shrink-0"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.1, duration: 0.7, ease: 'easeOut' }}
            />
            <div className="overflow-hidden h-6">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  className="block text-xs sm:text-sm tracking-[0.22em] uppercase text-gray-400 whitespace-nowrap"
                  initial={{ y: 22, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -22, opacity: 0 }}
                  transition={{ duration: 0.32, ease: 'easeInOut' }}
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* description */}
          <motion.p
            variants={fadeUp}
            className="mt-10 text-base sm:text-lg text-gray-400 leading-relaxed max-w-lg"
          >
            I build web applications with a focus on{' '}
            <span className="text-(--color-primary)">clean architecture</span>, maintainable code,
            and reliable delivery.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="#project"
              className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-(--color-primary) text-black font-semibold text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(247,126,45,0.25)]"
            >
              <span className="relative z-10">View Projects</span>
              <motion.span
                className="relative z-10 inline-block"
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                →
              </motion.span>
              {/* shine sweep */}
              <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/25 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3.5 rounded-xl border border-white/8 text-gray-300 font-semibold text-sm transition-all duration-300 hover:border-white/20 hover:text-white hover:bg-white/4"
            >
              Let's Talk
            </a>
          </motion.div>

          {/* tech hint — wraps gracefully on small screens */}
          <motion.div
            variants={fadeUp}
            className="mt-20 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] tracking-[0.18em] uppercase text-gray-600"
          >
            <span className="w-12 h-px bg-white/6 block flex-shrink-0" />
            <span>JavaScript</span>
            <span className="text-white/10">·</span>
            <span>TypeScript</span>
            <span className="text-white/10">·</span>
            <span>React JS</span>
            <span className="text-white/10">·</span>
            <span>Spring Boot</span>
          </motion.div>
        </motion.div>
      </Container>

      {/* ── scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-gray-600 select-none">
          Scroll
        </span>
        <motion.div className="w-5.5 h-8.5 rounded-full border border-white/8 flex items-start justify-center pt-2">
          <motion.div
            className="w-0.75 h-0.75 rounded-full bg-gray-500"
            animate={{ y: [0, 14, 0], opacity: [1, 0.3, 1] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
