import {
  SiOpenjdk,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiVuedotjs,
  SiNestjs,
  SiSpringboot,
  SiReact,
  SiTailwindcss,
  SiPostgresql,
} from 'react-icons/si';
import type { IconType } from 'react-icons';

type Tech = { icon: IconType; label: string };

const groups: { category: string; items: Tech[] }[] = [
  {
    category: 'Languages',
    items: [
      { icon: SiOpenjdk, label: 'Java' },
      { icon: SiPython, label: 'Python' },
      { icon: SiJavascript, label: 'JavaScript' },
      { icon: SiTypescript, label: 'TypeScript' },
    ],
  },
  {
    category: 'Frameworks',
    items: [
      { icon: SiReact, label: 'React' },
      { icon: SiVuedotjs, label: 'Vue' },
      { icon: SiTailwindcss, label: 'Tailwind' },
      { icon: SiSpringboot, label: 'Spring Boot' },
      { icon: SiNestjs, label: 'NestJS' },
    ],
  },
  {
    category: 'Database',
    items: [{ icon: SiPostgresql, label: 'PostgreSQL' }],
  },
];

export default function TechStackInline() {
  return (
    <div className="space-y-7">
      {groups.map(({ category, items }) => (
        <div key={category}>
          {/* Category label */}
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: 'var(--color-text-muted)', opacity: 0.5 }}
          >
            {category}
          </p>

          {/* Pills */}
          <div className="flex flex-wrap gap-2">
            {items.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="group flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm
                           transition-all duration-200 cursor-default
                           hover:-translate-y-[1px]"
                style={{
                  background: 'var(--color-card)',
                  borderColor: 'rgba(255,255,255,0.07)',
                  color: 'var(--color-text-muted)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = 'var(--color-primary)';
                  el.style.color = 'var(--color-primary)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = 'rgba(255,255,255,0.07)';
                  el.style.color = 'var(--color-text-muted)';
                }}
              >
                <Icon size={15} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
