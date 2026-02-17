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

export default function TechStackInline() {
  const itemStyle =
    'flex items-center gap-2 text-sm text-gray-400 hover:text-[var(--color-primary)] transition';

  return (
    <div className="mt-10 space-y-8">
      {/* Programming */}
      <div>
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Programming</p>

        <div className="flex flex-wrap gap-6">
          <div className={itemStyle}>
            <SiOpenjdk size={18} /> Java
          </div>
          <div className={itemStyle}>
            <SiPython size={18} /> Python
          </div>
          <div className={itemStyle}>
            <SiJavascript size={18} /> JavaScript
          </div>
          <div className={itemStyle}>
            <SiTypescript size={18} /> TypeScript
          </div>
        </div>
      </div>

      {/* Frameworks */}
      <div>
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Frameworks</p>

        <div className="flex flex-wrap gap-6">
          <div className={itemStyle}>
            <SiVuedotjs size={18} /> Vue
          </div>
          <div className={itemStyle}>
            <SiNestjs size={18} /> NestJS
          </div>
          <div className={itemStyle}>
            <SiSpringboot size={18} /> Spring Boot
          </div>
          <div className={itemStyle}>
            <SiReact size={18} /> React
          </div>
          <div className={itemStyle}>
            <SiTailwindcss size={18} /> Tailwind
          </div>
        </div>
      </div>

      {/* Database */}
      <div>
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Database</p>

        <div className="flex flex-wrap gap-6">
          <div className={itemStyle}>
            <SiPostgresql size={18} /> PostgreSQL
          </div>
        </div>
      </div>
    </div>
  );
}
