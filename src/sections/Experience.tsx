import Container from '../layout/Container';

export default function Experience() {
  return (
    <section className="py-32">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <h2 className="text-4xl font-heading mb-16">Experience</h2>

          {/* Timeline Wrapper */}
          <div className="relative pl-12">
            {/* Vertical Line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-white/10"></div>
            {/* Timeline Item */}
            <div className="relative mb-20">
              {/* Dot */}
              <div className="absolute -left-4.5 top-2 w-3 h-3 rounded-full bg-(--color-primary)"></div>
              {/* Role */}
              <h3 className="text-2xl font-heading">
                Software Engineer Intern <span className="text-(--color-primary)">@ HorPao</span>
              </h3>
              {/* Date */}
              <p className="text-sm uppercase tracking-widest text-gray-500 mt-2">
                Oct 2025 - Present
              </p>
              {/* Responsibilities */}
              <ul className="mt-6 space-y-3 text-gray-400 leading-relaxed">
                <li>• Backend development for POS system using Spring Boot</li>
                <li>• Designed and maintained REST APIs for Donation Mobile App</li>
                <li>• Built automated data workflows using Python + Airflow</li>
                <li>• Implemented scheduled reporting pipelines via Docker Compose</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
