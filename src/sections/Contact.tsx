import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Container from '../layout/Container';

/* ─── EmailJS config ───────────────────────────────────────────────────────────
   1. Go to https://www.emailjs.com and create a free account
   2. Add a Gmail service  →  copy the Service ID
   3. Create an email template with these variables:
        {{from_name}}  {{from_email}}  {{message}}
      Copy the Template ID
   4. Go to Account → API Keys → copy your Public Key
   5. Replace the three constants below
─────────────────────────────────────────────────────────────────────────────── */
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      formRef.current.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="py-32">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Section label */}
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: 'var(--color-primary)' }}
          >
            Contact
          </p>

          <div className="grid md:grid-cols-2 gap-20 items-start">
            {/* ── LEFT ── */}
            <div>
              <h2 className="font-heading text-4xl md:text-5xl leading-tight mb-6">
                Let's Build Something <span className="hero-gradient-text">Scalable</span>
              </h2>

              <p
                className="text-sm leading-relaxed mb-10"
                style={{ color: 'var(--color-text-muted)' }}
              >
                If you're building a product and need a reliable fullstack engineer focused on
                architecture and production quality — let's connect.
              </p>

              {/* Info rows */}
              <div className="space-y-4">
                {[
                  {
                    icon: (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 17.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75"
                        />
                      </svg>
                    ),
                    label: 'Email',
                    value: 'dodavin96@email.com',
                  },
                  {
                    icon: (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    ),
                    label: 'Location',
                    value: 'Phnom Penh, Cambodia',
                  },
                ].map(({ icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3">
                    <span
                      className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{
                        background: 'color-mix(in srgb, var(--color-primary) 12%, transparent)',
                        color: 'var(--color-primary)',
                      }}
                    >
                      {icon}
                    </span>
                    <div>
                      <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                        {label}
                      </p>
                      <p className="text-sm" style={{ color: 'var(--color-text)' }}>
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div
                className="mt-10 h-px w-24"
                style={{ background: 'color-mix(in srgb, var(--color-primary) 40%, transparent)' }}
              />
            </div>

            {/* ── RIGHT — Form ── */}
            <div
              className="rounded-2xl p-8 border"
              style={{
                background: 'var(--color-card)',
                borderColor: 'color-mix(in srgb, var(--color-primary) 15%, transparent)',
              }}
            >
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    className="block text-xs font-medium mb-2"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    Your Name
                  </label>
                  <input
                    name="from_name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-all duration-200 border"
                    style={{
                      background: 'color-mix(in srgb, var(--color-bg) 60%, transparent)',
                      color: 'var(--color-text)',
                      borderColor: 'rgba(255,255,255,0.07)',
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-primary)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    className="block text-xs font-medium mb-2"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    Your Email
                  </label>
                  <input
                    name="from_email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-all duration-200 border"
                    style={{
                      background: 'color-mix(in srgb, var(--color-bg) 60%, transparent)',
                      color: 'var(--color-text)',
                      borderColor: 'rgba(255,255,255,0.07)',
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-primary)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    className="block text-xs font-medium mb-2"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me about your project..."
                    className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-all duration-200 border resize-none"
                    style={{
                      background: 'color-mix(in srgb, var(--color-bg) 60%, transparent)',
                      color: 'var(--color-text)',
                      borderColor: 'rgba(255,255,255,0.07)',
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-primary)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed hover:opacity-90 hover:scale-[1.01] active:scale-[0.99]"
                  style={{
                    background: 'var(--color-primary)',
                    color: '#000',
                  }}
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                        />
                      </svg>
                    </>
                  )}
                </button>

                {/* Status messages */}
                {status === 'success' && (
                  <div
                    className="flex items-center gap-2 text-sm rounded-lg px-4 py-3"
                    style={{
                      background: 'color-mix(in srgb, #22c55e 12%, transparent)',
                      color: '#4ade80',
                    }}
                  >
                    <svg
                      className="w-4 h-4 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Message sent! I'll get back to you soon.
                  </div>
                )}
                {status === 'error' && (
                  <div
                    className="flex items-center gap-2 text-sm rounded-lg px-4 py-3"
                    style={{
                      background: 'color-mix(in srgb, #ef4444 12%, transparent)',
                      color: '#f87171',
                    }}
                  >
                    <svg
                      className="w-4 h-4 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                      />
                    </svg>
                    Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
