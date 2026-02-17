import Container from '../layout/Container';

export default function Contact() {
  return (
    <section className="py-32">
      <Container>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20">
          {/* LEFT */}
          <div>
            <h2 className="text-4xl font-heading mb-8">Let's Build Something Scalable</h2>

            <p className="text-gray-400 leading-relaxed mb-8">
              If you’re building a product and need a reliable fullstack engineer focused on
              architecture and production quality, let’s connect.
            </p>

            <div className="space-y-3 text-sm text-gray-500">
              <p>
                Email: <span className="text-gray-300">dodavin96@email.com</span>
              </p>
              <p>Location: Phnom Penh</p>
            </div>
          </div>

          {/* RIGHT */}
          <form className="space-y-10">
            <div>
              <label className="block text-sm text-gray-400 mb-3">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-transparent border-b border-white/10 pb-3
                          text-gray-200 placeholder-gray-500
                          focus:outline-none focus:border-(--color-primary)
                          transition"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-3">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border-b border-white/10 pb-3
                           text-gray-200 placeholder-gray-500
                           focus:outline-none focus:border-(--color-primary)
                           transition"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-3">Your Message</label>
              <textarea
                rows={4}
                placeholder="Tell me about your project"
                className="w-full bg-transparent border-b border-white/10 pb-3
                           text-gray-200 placeholder-gray-500
                           focus:outline-none focus:border-(--color-primary)
                           transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="mt-6 px-8 py-3 rounded-full bg-(--color-primary)
                         text-black font-semibold
                         hover:opacity-90 hover:scale-[1.02]
                         transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
