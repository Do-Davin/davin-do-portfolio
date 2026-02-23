'use client';

import Container from '../layout/Container';

const experiences = [
  {
    role: 'Software Engineer Intern',
    company: '@HorPao',
    startDate: '2025-10',
    period: 'Oct 2025 – Present',
    description:
      'Contributing to backend development for two products — a POS system and a Donation Mobile App — using Spring Boot.',
    responsibilities: [
      'Developed and maintained backend features for a POS system and a Donation Mobile App using Spring Boot.',
      'Built an automated daily report pipeline using Apache Airflow and Python, deployed with Docker for scheduled execution.',
      'Tested and validated RESTful APIs to ensure correctness and reliability across endpoints.',
    ],
  },
  // Add future roles here — the newest one (latest startDate) will always appear at the top automatically.
  // {
  //   role: 'Your Next Role',
  //   company: '@Company',
  //   startDate: '2026-06',
  //   period: 'Jun 2026 – Present',
  //   description: 'One sentence summary.',
  //   responsibilities: ['Thing you did.', 'Another thing you did.'],
  // },
];

// Sort descending by startDate so the newest role always appears at the top.
const sorted = [...experiences].sort((a, b) => b.startDate.localeCompare(a.startDate));

export default function Experience() {
  return (
    <section id="experience" className="py-32">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Section Label */}
          <p className="text-xs uppercase tracking-[0.25em] text-(--color-primary) mb-4 font-medium">
            Career
          </p>

          {/* Title */}
          <h2 className="text-4xl font-heading mb-20 uppercase">Experiences</h2>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical spine */}
            <div
              className="absolute left-0 top-2 bottom-2 w-px"
              style={{
                background:
                  'linear-gradient(to bottom, transparent, var(--color-primary) 15%, rgba(255,255,255,0.08) 60%, transparent)',
              }}
            />

            {sorted.map((exp, i) => (
              <div key={i} className="relative pl-10 pb-16 last:pb-0 group">
                {/* Dot + glow */}
                <div className="absolute left-0 top-2 -translate-x-1/2">
                  <span
                    className="block w-2.5 h-2.5 rounded-full"
                    style={{
                      background: 'var(--color-primary)',
                      boxShadow: '0 0 0 4px rgba(247,126,45,0.15), 0 0 12px rgba(247,126,45,0.4)',
                    }}
                  />
                </div>

                {/* Card */}
                <div
                  className="rounded-2xl p-8 transition-all duration-500 group-hover:-translate-y-0.5"
                  style={{
                    background: 'var(--color-card)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    boxShadow: '0 4px 32px rgba(0,0,0,0.3)',
                  }}
                >
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-heading leading-snug">{exp.role}</h3>
                      <p
                        className="text-base mt-0.5 font-extrabold"
                        style={{ color: 'var(--color-primary)' }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    {/* Period badge */}
                    <span
                      className="inline-flex items-center self-start px-3 py-1 rounded-full text-xs tracking-widest uppercase whitespace-nowrap"
                      style={{
                        background: 'rgba(247,126,45,0.08)',
                        border: '1px solid rgba(247,126,45,0.2)',
                        color: 'var(--color-primary)',
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  {/* Summary */}
                  <p
                    className="text-lg text-gray-400 leading-relaxed mb-6"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {exp.description}
                  </p>

                  {/* Divider */}
                  <div
                    className="w-full h-px mb-6"
                    style={{ background: 'rgba(255,255,255,0.06)' }}
                  />

                  {/* Responsibilities */}
                  <ul className="space-y-3">
                    {exp.responsibilities.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-md text-gray-400 leading-relaxed"
                        style={{ color: 'var(--color-text-muted)' }}
                      >
                        <span
                          className="mt-[9.5px] shrink-0 w-1.5 h-1.5 rounded-full"
                          style={{ background: 'var(--color-primary)', opacity: 0.7 }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
