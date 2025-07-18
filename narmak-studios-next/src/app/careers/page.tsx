'use client';
import { useState, useRef, useEffect } from 'react';

const culturePillars = [
  {
    title: 'Craft',
    icon: () => <span className="text-4xl" role="img" aria-label="Craft">🛠️</span>,
    copy: 'We always strive to make the best quality content possible. Every pixel, every frame, and every detail make the magic happen.'
  },
  {
    title: 'Curiosity',
    icon: () => <span className="text-4xl" role="img" aria-label="Curiosity">🔍</span>,
    copy: 'We love imagination. The next big idea could come from you! Don\'t be scared to throw your input'
  },
  {
    title: 'Collaboration',
    icon: () => <span className="text-4xl" role="img" aria-label="Collaboration">🤝</span>,
    copy: 'The only way it all works is if we all work together. Let\'s build, create, and challenge each other.'
  }
];

const timezones = [
  'US Eastern', 'US Central', 'US Mountain', 'US Pacific', 'UK', 'Europe', 'Asia', 'Australia', 'Other'
];
const disciplines = [
  'Animation (2D)',
  'Animation (3D)',
  'Background Artist',
  'FX Editor',
  'Video Editor',
  'Music & Sound',
  'Voice Actor',
  'Graphic Design',
  'Web Dev'
];

const initialForm = {
  name: '',
  email: '',
  location: '',
  portfolio: '',
  discipline: '',
  why: '',
  linkedin: '',
  consent: false,
  portfolioFile: null as File | null,
};

function validate(form: typeof initialForm) {
  return {
    name: form.name.length > 1,
    email: /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email),
    location: !!form.location,
    portfolio: /^https?:\/\//.test(form.portfolio),
    discipline: !!form.discipline,
    why: form.why.length > 10 && form.why.length <= 400,
    consent: form.consent,
    // portfolioFile is optional, so always valid
    portfolioFile: true,
  };
}

export default function CareersPage() {
  const [form, setForm] = useState(initialForm);
  const [touched, setTouched] = useState<{[k: string]: boolean}>({});
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);
  const [saving, setSaving] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Autosave draft to localStorage every 10s
  useEffect(() => {
    const interval = setInterval(() => {
      localStorage.setItem('careersFormDraft', JSON.stringify(form));
    }, 10000);
    return () => clearInterval(interval);
  }, [form]);
  useEffect(() => {
    const draft = localStorage.getItem('careersFormDraft');
    if (draft) setForm({ ...form, ...JSON.parse(draft) });
  }, []);

  const errors = validate(form);
  const allValid = Object.values(errors).every(Boolean);

  function handleChange(e: any) {
    const { name, value, type, checked, files } = e.target;
    setForm(f => ({
      ...f,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }));
  }
  function handleBlur(e: any) {
    setTouched(t => ({ ...t, [e.target.name]: true }));
  }
  function handleSubmit(e: any) {
    e.preventDefault();
    setSubmitted(true);
    setTouched({ name: true, email: true, location: true, portfolio: true, discipline: true, why: true, consent: true, portfolioFile: true });
    if (allValid) {
      setSaving(true);
      setTimeout(() => {
        setSaving(false);
        setSuccess(true);
        localStorage.removeItem('careersFormDraft');
      }, 1200);
    }
  }

  if (success) {
    return (
      <main className="container mx-auto px-4 py-20 min-h-[60vh] flex flex-col items-center justify-center text-center">
        <div className="mb-6 animate-bounce">
          <span role="img" aria-label="confetti" className="text-5xl">🎉</span>
        </div>
        <h1 className="text-4xl font-display mb-4">Got it—thanks for reaching out!</h1>
        <p className="text-lg text-off-white/80 mb-6 max-w-xl">We’ll shout when a project matches your skills. Meanwhile, enjoy our latest reel.</p>
        <a href="/work" className="inline-block bg-neon-accent text-charcoal font-bold px-6 py-3 rounded-lg shadow hover:bg-gradient-to-r hover:from-neon-accent hover:to-gradient-end transition">See Our Work</a>
        <p className="mt-8 text-off-white/60">See you in the next storyboard!</p>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-20 min-h-[60vh]">
      {/* Top-of-Page Messaging */}
      <header className="mb-12 text-center">
        <h1 className="text-5xl md:text-6xl font-display mb-4 text-[#EAEAEA]">Create the next frame with us.</h1>
        <h2 className="text-2xl md:text-3xl text-[#EAEAEA] font-sans mb-6">We’re always meeting storytellers, animators, designers and dreamers. If our work sparks yours, introduce yourself below.</h2>
        {/* No video/banner for now */}
      </header>

      {/* Culture Snapshot */}
      <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {culturePillars.map((pillar, i) => (
          <div
            key={pillar.title}
            className="relative bg-gradient-to-br from-[#232325]/80 to-[#18181b]/90 backdrop-blur-md rounded-3xl p-10 flex flex-col items-center shadow-xl border border-[#232325] transition-transform duration-300 hover:scale-105 hover:shadow-2xl group"
            style={{ minHeight: 220 }}
          >
            <div className="mb-6 flex items-center justify-center">
              <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-neon-accent/20 shadow-lg group-hover:bg-neon-accent/30 transition-all duration-300">
                <span className="text-5xl drop-shadow-lg">{pillar.icon()}</span>
              </span>
            </div>
            <h3 className="text-2xl font-bold text-[#EAEAEA] mb-3 font-display tracking-tight text-center drop-shadow-lg">{pillar.title}</h3>
            <p className="text-off-white/90 text-lg text-center font-medium leading-snug max-w-xs mx-auto">{pillar.copy}</p>
          </div>
        ))}
      </section>

      {/* Universal Interest Form */}
      <form ref={formRef} onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-[#18181b] rounded-2xl p-8 shadow-lg border border-[#232325]" autoComplete="off" noValidate>
        <div className="grid grid-cols-1 gap-6">
          {/* Full name */}
          <div className="relative">
            <input type="text" name="name" id="name" value={form.name} onChange={handleChange} onBlur={handleBlur} className={`peer w-full bg-transparent border-b-2 py-3 px-2 text-lg text-[#EAEAEA] focus:outline-none focus:border-neon-accent transition placeholder-transparent ${touched.name && !errors.name ? 'border-green-500' : touched.name && !form.name ? 'border-red-500' : 'border-[#444]'}`} placeholder="Full name" aria-label="Full name" required />
            <label htmlFor="name" className="absolute left-2 top-3 text-[#aaa] text-lg transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-focus:-top-5 peer-focus:text-sm peer-focus:text-neon-accent peer-focus:bg-[#18181b] px-1 bg-[#18181b]">Full name</label>
            {touched.name && errors.name && <span className="absolute right-2 top-4 text-green-500 text-xl">✅</span>} 
            {touched.name && !errors.name && <span className="absolute right-2 top-4 text-red-500 text-xl">❌</span>}
          </div>
          {/* Email */}
          <div className="relative">
            <input type="email" name="email" id="email" value={form.email} onChange={handleChange} onBlur={handleBlur} className={`peer w-full bg-transparent border-b-2 py-3 px-2 text-lg text-[#EAEAEA] focus:outline-none focus:border-neon-accent transition placeholder-transparent ${touched.email && !errors.email ? 'border-green-500' : touched.email && !form.email ? 'border-red-500' : 'border-[#444]'}`} placeholder="Email" aria-label="Email" required />
            <label htmlFor="email" className="absolute left-2 top-3 text-[#aaa] text-lg transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-focus:-top-5 peer-focus:text-sm peer-focus:text-neon-accent peer-focus:bg-[#18181b] px-1 bg-[#18181b]">Email</label>
            {touched.email && errors.email && <span className="absolute right-2 top-4 text-green-500 text-xl">✅</span>} 
            {touched.email && !errors.email && <span className="absolute right-2 top-4 text-red-500 text-xl">❌</span>}
          </div>
          {/* Location / timezone */}
          <div className="relative">
            <select name="location" id="location" value={form.location} onChange={handleChange} onBlur={handleBlur} className={`peer w-full bg-[#232325] text-off-white font-semibold border-b-2 py-3 px-2 text-lg focus:outline-none focus:border-neon-accent transition ${touched.location && !errors.location ? 'border-green-500' : touched.location && !form.location ? 'border-red-500' : 'border-[#444]'}`} required aria-label="Location / timezone">
              <option value="" disabled>Location / timezone</option>
              {timezones.map(tz => <option key={tz} value={tz}>{tz}</option>)}
            </select>
            <label htmlFor="location" className="absolute left-2 top-3 text-[#aaa] text-lg transition-all peer-focus:-top-5 peer-focus:text-sm peer-focus:text-neon-accent peer-focus:bg-[#18181b] px-1 bg-[#18181b]">Location / timezone</label>
            {touched.location && errors.location && <span className="absolute right-2 top-4 text-green-500 text-xl">✅</span>} 
            {touched.location && !errors.location && <span className="absolute right-2 top-4 text-red-500 text-xl">❌</span>}
          </div>
          {/* Portfolio / reel URL */}
          <div className="relative">
            <input type="url" name="portfolio" id="portfolio" value={form.portfolio} onChange={handleChange} onBlur={handleBlur} className={`peer w-full bg-transparent border-b-2 py-3 px-2 text-lg text-[#EAEAEA] focus:outline-none focus:border-neon-accent transition placeholder-transparent ${touched.portfolio && !errors.portfolio ? 'border-green-500' : touched.portfolio && !form.portfolio ? 'border-red-500' : 'border-[#444]'}`} placeholder="Portfolio / reel URL" aria-label="Portfolio / reel URL" required />
            <label htmlFor="portfolio" className="absolute left-2 top-3 text-[#aaa] text-lg transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-focus:-top-5 peer-focus:text-sm peer-focus:text-neon-accent peer-focus:bg-[#18181b] px-1 bg-[#18181b]">Portfolio / reel URL</label>
            {touched.portfolio && errors.portfolio && <span className="absolute right-2 top-4 text-green-500 text-xl">✅</span>} 
            {touched.portfolio && !errors.portfolio && <span className="absolute right-2 top-4 text-red-500 text-xl">❌</span>}
          </div>
          {/* Primary discipline */}
          <div className="relative">
            <select name="discipline" id="discipline" value={form.discipline} onChange={handleChange} onBlur={handleBlur} className={`peer w-full bg-[#232325] text-off-white font-semibold border-b-2 py-3 px-2 text-lg focus:outline-none focus:border-neon-accent transition ${touched.discipline && !errors.discipline ? 'border-green-500' : touched.discipline && !form.discipline ? 'border-red-500' : 'border-[#444]'}`} required aria-label="Primary discipline">
              <option value="" disabled>Primary discipline</option>
              {disciplines.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
            <label htmlFor="discipline" className="absolute left-2 top-3 text-[#aaa] text-lg transition-all peer-focus:-top-5 peer-focus:text-sm peer-focus:text-neon-accent peer-focus:bg-[#18181b] px-1 bg-[#18181b]">Primary discipline</label>
            {touched.discipline && errors.discipline && <span className="absolute right-2 top-4 text-green-500 text-xl">✅</span>} 
            {touched.discipline && !errors.discipline && <span className="absolute right-2 top-4 text-red-500 text-xl">❌</span>}
          </div>
          {/* What drew you to us? */}
          <div className="relative">
            <textarea name="why" id="why" value={form.why} onChange={handleChange} onBlur={handleBlur} maxLength={400} className={`peer w-full bg-transparent border-b-2 py-3 px-2 text-lg text-[#EAEAEA] focus:outline-none focus:border-neon-accent transition placeholder-transparent resize-none ${touched.why && !errors.why ? 'border-green-500' : touched.why && !form.why ? 'border-red-500' : 'border-[#444]'}`} placeholder="What drew you to us? (400 chars)" aria-label="What drew you to us?" required />
            <label htmlFor="why" className="absolute left-2 top-3 text-[#aaa] text-lg transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-focus:-top-5 peer-focus:text-sm peer-focus:text-neon-accent peer-focus:bg-[#18181b] px-1 bg-[#18181b]">What drew you to us? (400 chars)</label>
            <span className="absolute right-2 bottom-2 text-xs text-off-white/40">{form.why.length}/400</span>
            {touched.why && errors.why && <span className="absolute right-2 top-4 text-green-500 text-xl">✅</span>} 
            {touched.why && !errors.why && <span className="absolute right-2 top-4 text-red-500 text-xl">❌</span>}
          </div>
          {/* LinkedIn / social (optional) */}
          <div className="relative">
            <input type="url" name="linkedin" id="linkedin" value={form.linkedin} onChange={handleChange} onBlur={handleBlur} className="peer w-full bg-transparent border-b-2 py-3 px-2 text-lg text-[#EAEAEA] focus:outline-none focus:border-neon-accent transition placeholder-transparent border-[#444]" placeholder="LinkedIn / social (optional)" aria-label="LinkedIn / social (optional)" />
            <label htmlFor="linkedin" className="absolute left-2 top-3 text-[#aaa] text-lg transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-focus:-top-5 peer-focus:text-sm peer-focus:text-neon-accent peer-focus:bg-[#18181b] px-1 bg-[#18181b]">LinkedIn / social (optional)</label>
          </div>
          {/* File upload for Portfolio (optional) */}
          <div className="relative">
            <input type="file" name="portfolioFile" id="portfolioFile" accept=".pdf,.doc,.docx,.jpg,.png,.webp,.zip" onChange={handleChange} onBlur={handleBlur} className="peer w-full bg-transparent border-b-2 py-3 px-2 text-lg text-[#EAEAEA] focus:outline-none focus:border-neon-accent transition placeholder-transparent border-[#444]" aria-label="Portfolio upload (optional)" />
            <label htmlFor="portfolioFile" className="absolute left-2 top-3 text-[#aaa] text-lg transition-all peer-focus:-top-5 peer-focus:text-sm peer-focus:text-neon-accent peer-focus:bg-[#18181b] px-1 bg-[#18181b]">Portfolio upload (optional)</label>
          </div>
          {/* Data-processing consent */}
          <div className="flex items-center gap-3 mt-2">
            <input type="checkbox" name="consent" id="consent" checked={form.consent} onChange={handleChange} onBlur={handleBlur} className="accent-neon-accent w-5 h-5 focus:ring-2 focus:ring-neon-accent" required />
            <label htmlFor="consent" className="text-off-white/80 text-sm">I consent to my data being processed for recruitment purposes (GDPR/CCPA).</label>
            {touched.consent && errors.consent && <span className="text-green-500 text-xl">✅</span>} 
            {touched.consent && !errors.consent && <span className="text-red-500 text-xl">❌</span>}
          </div>
        </div>
        <button type="submit" className="mt-8 w-full bg-neon-accent text-charcoal font-bold py-3 rounded-lg shadow hover:bg-gradient-to-r hover:from-neon-accent hover:to-gradient-end transition focus:ring-2 focus:ring-neon-accent text-lg" disabled={saving}>
          {saving ? 'Sending…' : 'Send My Reel'}
        </button>
      </form>
    </main>
  );
} 