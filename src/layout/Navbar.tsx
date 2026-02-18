import { SiGithub, SiLinkedin, SiFacebook } from 'react-icons/si';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="border-b border-white/5 backdrop-blur-sm bg-black/40">
        <div className="max-w-6xl mx-auto px-6 md:px-12 h-18 flex items-center justify-between">
          {/* LEFT */}
          <div className="font-heading text-lg text-(--color-primary) font-bold">Do Davin</div>

          {/* CENTER */}
          <nav className="hidden md:flex items-center gap-10 text-sm text-gray-400">
            <a href="#home" className="hover:text-(--color-primary) transition">
              Home
            </a>
            <a href="#about" className="hover:text-(--color-primary) transition">
              About
            </a>
            <a href="#experience" className="hover:text-(--color-primary) transition">
              Experience
            </a>
            <a href="#project" className="hover:text-(--color-primary) transition">
              Project
            </a>
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-6 text-gray-400">
            <a href="#" className="hover:text-(--color-primary) transition">
              <SiGithub size={18} />
            </a>
            <a href="#" className="hover:text-(--color-primary) transition">
              <SiLinkedin size={18} />
            </a>
            <a href="#" className="hover:text-(--color-primary) transition">
              <SiFacebook size={18} />
            </a>

            {/* Future space */}
            <div className="w-6"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
