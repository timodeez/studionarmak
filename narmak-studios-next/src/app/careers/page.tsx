'use client';
import { useState, useRef, useEffect } from 'react';

// ============================================================================
// CULTURE PILLARS DATA
// ============================================================================
// These represent the core values and culture of Studio Narmak
// Displayed as cards above the application form to give applicants
// insight into the company culture and values
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

// ============================================================================
// FORM OPTIONS DATA
// ============================================================================
// Predefined options for dropdown menus to ensure consistency
// and prevent typos in user submissions

// Available timezone/location options for remote work coordination
const timezones = [
  'US Eastern', 'US Central', 'US Mountain', 'US Pacific', 'UK', 'Europe', 'Asia', 'Australia', 'Other'
];

// Available job disciplines/positions at Studio Narmak
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

// ============================================================================
// FORM STATE INTERFACE
// ============================================================================
// Defines the structure of the application form data
// All fields are required except portfolioFile, linkedin, and consent
const initialForm = {
  name: '',                    // Applicant's full name (required)
  email: '',                   // Email address for contact (required)
  location: '',                // Timezone/location for remote work (required)
  portfolio: '',               // Portfolio/reel URL (required)
  discipline: '',              // Primary job discipline (required)
  why: '',                     // Cover letter/why they want to work here (required)
  linkedin: '',                // LinkedIn or social media URL (optional)
  consent: false,              // GDPR/CCPA consent checkbox (required)
  portfolioFile: null as File | null, // Uploaded portfolio file (optional)
};

// ============================================================================
// FORM VALIDATION FUNCTION
// ============================================================================
// Validates each form field and returns boolean for each field
// Used to show visual feedback and prevent invalid submissions
function validate(form: typeof initialForm) {
  return {
    name: form.name.length > 1,                                    // Name must be at least 2 characters
    email: /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email),        // Basic email format validation
    location: !!form.location,                                     // Location must be selected
    portfolio: /^https?:\/\//.test(form.portfolio),               // Portfolio must be a valid URL
    discipline: !!form.discipline,                                 // Discipline must be selected
    why: form.why.length > 10 && form.why.length <= 400,          // Cover letter: 10-400 characters
    consent: form.consent,                                         // GDPR consent must be given
    portfolioFile: true,                                          // File upload is optional, so always valid
  };
}

// ============================================================================
// MAIN CAREERS PAGE COMPONENT
// ============================================================================
export default function CareersPage() {
  // ============================================================================
  // STATE MANAGEMENT
  // ============================================================================
  const [form, setForm] = useState(initialForm);                    // Form data state
  const [touched, setTouched] = useState<{[k: string]: boolean}>({}); // Track which fields have been interacted with
  const [success, setSuccess] = useState(false);                    // Show success message after submission
  const [saving, setSaving] = useState(false);                      // Loading state during form submission
  const [error, setError] = useState('');                          // Error message display
  const [hasLoadedDraft, setHasLoadedDraft] = useState(false);     // Prevent infinite loop in draft loading
  const formRef = useRef<HTMLFormElement>(null);                   // Reference to form element for validation

  // ============================================================================
  // DRAFT AUTOSAVE FUNCTIONALITY
  // ============================================================================
  // Load saved draft from localStorage on component mount
  // Only loads once to prevent infinite re-renders
  useEffect(() => {
    if (!hasLoadedDraft) {
      const draft = localStorage.getItem('careersFormDraft');
      if (draft) {
        try {
          const parsedDraft = JSON.parse(draft);
          setForm(f => ({ ...f, ...parsedDraft }));
        } catch (error) {
          console.error('Error parsing draft:', error);
          localStorage.removeItem('careersFormDraft'); // Clear corrupted draft
        }
      }
      setHasLoadedDraft(true);
    }
  }, [hasLoadedDraft]);

  // Autosave form data to localStorage every 10 seconds
  // Only runs after initial draft has been loaded to prevent overwriting
  useEffect(() => {
    if (hasLoadedDraft) {
      const interval = setInterval(() => {
        localStorage.setItem('careersFormDraft', JSON.stringify(form));
      }, 10000); // Save every 10 seconds
      return () => clearInterval(interval);
    }
  }, [form, hasLoadedDraft]);

  // ============================================================================
  // FORM VALIDATION AND SUBMISSION LOGIC
  // ============================================================================
  const errors = validate(form);
  const allValid = Object.values(errors).every(Boolean); // Check if all required fields are valid

  // ============================================================================
  // EVENT HANDLERS
  // ============================================================================
  
  // Handle form field changes (text inputs, selects, checkboxes, file uploads)
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value, type } = e.target;
    
    // Handle checkbox inputs (consent field)
    if (type === 'checkbox') {
      const input = e.target as HTMLInputElement;
      setForm(f => ({
        ...f,
        [name]: input.checked
      }));
      return;
    }
    
    // Handle file upload inputs (portfolio file)
    if (type === 'file') {
      const input = e.target as HTMLInputElement;
      setForm(f => ({
        ...f,
        [name]: input.files && input.files.length > 0 ? input.files[0] : null
      }));
      return;
    }
    
    // Handle regular text inputs and selects
    setForm(f => ({
      ...f,
      [name]: value
    }));
  }

  // Mark fields as "touched" when user leaves a field (for validation display)
  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setTouched(t => ({ ...t, [e.target.name]: true }));
  }
  
  // ============================================================================
  // FORM SUBMISSION HANDLER
  // ============================================================================
  // Handles the form submission process including validation, API call, and user feedback
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // Prevent default form submission
    
    // Mark all fields as touched to show validation states
    setTouched({ name: true, email: true, location: true, portfolio: true, discipline: true, why: true, consent: true, portfolioFile: true });
    setError(''); // Clear any previous errors
    
    // Only proceed if all required fields are valid
    if (allValid) {
      setSaving(true); // Show loading state
      try {
        // Create FormData object to handle file uploads properly
        const formDataToSend = new FormData();
        formDataToSend.append('name', form.name);
        formDataToSend.append('email', form.email);
        formDataToSend.append('phone', ''); // Not in current form but required by API
        formDataToSend.append('position', form.discipline);
        formDataToSend.append('experience', ''); // Not in current form but required by API
        formDataToSend.append('portfolio', form.portfolio);
        formDataToSend.append('coverLetter', form.why);
        formDataToSend.append('resume', form.linkedin); // Using LinkedIn as resume field for now
        
        // Add portfolio file if user uploaded one (optional)
        if (form.portfolioFile) {
          formDataToSend.append('file0', form.portfolioFile);
        }

        // Send form data to API endpoint
        const response = await fetch('/api/careers', {
          method: 'POST',
          body: formDataToSend, // Send as FormData instead of JSON for file uploads
        });

        const result = await response.json();

        if (response.ok) {
          setSuccess(true); // Show success message
          localStorage.removeItem('careersFormDraft'); // Clear saved draft after successful submission
        } else {
          setError(result.error || 'Something went wrong. Please try again.');
        }
      } catch (_error) {
        setError('Network error. Please try again.');
      } finally {
        setSaving(false); // Hide loading state
      }
    }
  }

  // ============================================================================
  // SUCCESS STATE RENDER
  // ============================================================================
  // Show success message and call-to-action after successful form submission
  if (success) {
    return (
      <main className="container mx-auto px-4 py-20 min-h-[60vh] flex flex-col items-center justify-center text-center">
        <div className="mb-6 animate-bounce">
          <span role="img" aria-label="confetti" className="text-5xl">🎉</span>
        </div>
        <h1 className="text-4xl font-display mb-4">Got it—thanks for reaching out!</h1>
        <p className="text-lg text-off-white/80 mb-6 max-w-xl">We&apos;ll shout when a project matches your skills. Meanwhile, enjoy our latest reel.</p>
        <a href="/work" className="inline-block bg-neon-accent text-charcoal font-bold px-6 py-3 rounded-lg shadow hover:bg-gradient-to-r hover:from-neon-accent hover:to-gradient-end transition">See Our Work</a>
        <p className="mt-8 text-off-white/60">See you in the next storyboard!</p>
      </main>
    );
  }

  // ============================================================================
  // MAIN FORM RENDER
  // ============================================================================
  return (
    <main className="container mx-auto px-4 py-20 min-h-[60vh]">
      {/* ============================================================================
          PAGE HEADER SECTION
          ============================================================================ */}
      <header className="mb-12 text-center">
        <h1 className="text-5xl md:text-6xl font-display mb-4 text-[#EAEAEA]">Create the next frame with us.</h1>
        <h2 className="text-2xl md:text-3xl text-[#EAEAEA] font-sans mb-6">We&apos;re always meeting storytellers, animators, designers and dreamers. If our work sparks yours, introduce yourself below.</h2>
        {/* No video/banner for now */}
      </header>

      {/* ============================================================================
          CULTURE PILLARS SECTION
          ============================================================================ */}
      <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {culturePillars.map((pillar) => (
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

      {/* ============================================================================
          APPLICATION FORM SECTION
          ============================================================================ */}
      <form ref={formRef} onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-[#18181b] rounded-2xl p-8 shadow-lg border border-[#232325]" autoComplete="off" noValidate>
        {/* Error message display */}
        {error && (
          <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400">
            {error}
          </div>
        )}
        
        <div className="grid grid-cols-1 gap-6">
          {/* ============================================================================
              REQUIRED FIELDS SECTION
              ============================================================================ */}
          
          {/* Full name field - Required */}
          <div className="relative">
            <input 
              type="text" 
              name="name" 
              id="name" 
              value={form.name} 
              onChange={handleChange} 
              onBlur={handleBlur} 
              className={`peer w-full bg-transparent border-b-2 py-3 px-2 text-lg text-[#EAEAEA] focus:outline-none focus:border-neon-accent transition placeholder-transparent ${touched.name && errors.name ? 'border-green-500' : touched.name && !errors.name ? 'border-red-500' : 'border-[#444]'}`} 
              placeholder="Full name" 
              aria-label="Full name" 
              required 
            />
            <label htmlFor="name" className="absolute left-2 top-3 text-[#aaa] text-lg transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-focus:-top-5 peer-focus:text-sm peer-focus:text-neon-accent peer-focus:bg-[#18181b] px-1 bg-[#18181b]">Full name</label>
            {/* Validation indicators */}
            {touched.name && errors.name && <span className="absolute right-2 top-4 text-green-500 text-xl">&#x2705;</span>} 
            {touched.name && !errors.name && <span className="absolute right-2 top-4 text-red-500 text-xl">&#x274c;</span>}
          </div>

          {/* Email field - Required */}
          <div className="relative">
            <input 
              type="email" 
              name="email" 
              id="email" 
              value={form.email} 
              onChange={handleChange} 
              onBlur={handleBlur} 
              className={`peer w-full bg-transparent border-b-2 py-3 px-2 text-lg text-[#EAEAEA] focus:outline-none focus:border-neon-accent transition placeholder-transparent ${touched.email && errors.email ? 'border-green-500' : touched.email && !errors.email ? 'border-red-500' : 'border-[#444]'}`} 
              placeholder="Email" 
              aria-label="Email" 
              required 
            />
            <label htmlFor="email" className="absolute left-2 top-3 text-[#aaa] text-lg transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-focus:-top-5 peer-focus:text-sm peer-focus:text-neon-accent peer-focus:bg-[#18181b] px-1 bg-[#18181b]">Email</label>
            {/* Validation indicators */}
            {touched.email && errors.email && <span className="absolute right-2 top-4 text-green-500 text-xl">&#x2705;</span>} 
            {touched.email && !errors.email && <span className="absolute right-2 top-4 text-red-500 text-xl">&#x274c;</span>}
          </div>

          {/* Location/Timezone field - Required for remote work coordination */}
          <div className="relative">
            <select 
              name="location" 
              id="location" 
              value={form.location} 
              onChange={handleChange} 
              onBlur={handleBlur} 
              className={`peer w-full bg-[#232325] text-off-white font-semibold border-b-2 py-3 px-2 text-lg focus:outline-none focus:border-neon-accent transition ${touched.location && errors.location ? 'border-green-500' : touched.location && !errors.location ? 'border-red-500' : 'border-[#444]'}`} 
              required 
              aria-label="Location / timezone"
            >
              <option value="" disabled>Location / timezone</option>
              {timezones.map((tz, i) => <option key={tz + i} value={tz}>{tz}</option>)}
            </select>
            <label htmlFor="location" className="absolute left-2 top-3 text-[#aaa] text-lg transition-all peer-focus:-top-5 peer-focus:text-sm peer-focus:text-neon-accent peer-focus:bg-[#18181b] px-1 bg-[#18181b]">Location / timezone</label>
            {/* Validation indicators */}
            {touched.location && errors.location && <span className="absolute right-2 top-4 text-green-500 text-xl">&#x2705;</span>} 
            {touched.location && !errors.location && <span className="absolute right-2 top-4 text-red-500 text-xl">&#x274c;</span>}
          </div>

          {/* Portfolio/Reel URL field - Required */}
          <div className="relative">
            <input 
              type="url" 
              name="portfolio" 
              id="portfolio" 
              value={form.portfolio} 
              onChange={handleChange} 
              onBlur={handleBlur} 
              className={`peer w-full bg-transparent border-b-2 py-3 px-2 text-lg text-[#EAEAEA] focus:outline-none focus:border-neon-accent transition placeholder-transparent ${touched.portfolio && errors.portfolio ? 'border-green-500' : touched.portfolio && !errors.portfolio ? 'border-red-500' : 'border-[#444]'}`} 
              placeholder="Portfolio / reel URL" 
              aria-label="Portfolio / reel URL" 
              required 
            />
            <label htmlFor="portfolio" className="absolute left-2 top-3 text-[#aaa] text-lg transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-focus:-top-5 peer-focus:text-sm peer-focus:text-neon-accent peer-focus:bg-[#18181b] px-1 bg-[#18181b]">Portfolio / reel URL</label>
            {/* Validation indicators */}
            {touched.portfolio && errors.portfolio && <span className="absolute right-2 top-4 text-green-500 text-xl">&#x2705;</span>} 
            {touched.portfolio && !errors.portfolio && <span className="absolute right-2 top-4 text-red-500 text-xl">&#x274c;</span>}
          </div>

          {/* Primary discipline field - Required */}
          <div className="relative">
            <select 
              name="discipline" 
              id="discipline" 
              value={form.discipline} 
              onChange={handleChange} 
              onBlur={handleBlur} 
              className={`peer w-full bg-[#232325] text-off-white font-semibold border-b-2 py-3 px-2 text-lg focus:outline-none focus:border-neon-accent transition ${touched.discipline && errors.discipline ? 'border-green-500' : touched.discipline && !errors.discipline ? 'border-red-500' : 'border-[#444]'}`} 
              required 
              aria-label="Primary discipline"
            >
              <option value="" disabled>Primary discipline</option>
              {disciplines.map((d, i) => <option key={d + i} value={d}>{d}</option>)}
            </select>
            <label htmlFor="discipline" className="absolute left-2 top-3 text-[#aaa] text-lg transition-all peer-focus:-top-5 peer-focus:text-sm peer-focus:text-neon-accent peer-focus:bg-[#18181b] px-1 bg-[#18181b]">Primary discipline</label>
            {/* Validation indicators */}
            {touched.discipline && errors.discipline && <span className="absolute right-2 top-4 text-green-500 text-xl">&#x2705;</span>} 
            {touched.discipline && !errors.discipline && <span className="absolute right-2 top-4 text-red-500 text-xl">&#x274c;</span>}
          </div>

          {/* Cover letter field - Required (10-400 characters) */}
          <div className="relative">
            <textarea 
              name="why" 
              id="why" 
              value={form.why} 
              onChange={handleChange} 
              onBlur={handleBlur} 
              maxLength={400} 
              className={`peer w-full bg-transparent border-b-2 py-3 px-2 text-lg text-[#EAEAEA] focus:outline-none focus:border-neon-accent transition placeholder-transparent resize-none ${touched.why && errors.why ? 'border-green-500' : touched.why && !errors.why ? 'border-red-500' : 'border-[#444]'}`} 
              placeholder="What drew you to us? (400 chars)" 
              aria-label="What drew you to us?" 
              required 
            />
            <label htmlFor="why" className="absolute left-2 top-3 text-[#aaa] text-lg transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-focus:-top-5 peer-focus:text-sm peer-focus:text-neon-accent peer-focus:bg-[#18181b] px-1 bg-[#18181b]">What drew you to us? (400 chars)</label>
            {/* Character counter */}
            <span className="absolute right-2 bottom-2 text-xs text-off-white/40">{form.why.length}/400</span>
            {/* Validation indicators */}
            {touched.why && errors.why && <span className="absolute right-2 top-4 text-green-500 text-xl">&#x2705;</span>} 
            {touched.why && !errors.why && <span className="absolute right-2 top-4 text-red-500 text-xl">&#x274c;</span>}
          </div>

          {/* ============================================================================
              OPTIONAL FIELDS SECTION
              ============================================================================ */}
          
          {/* LinkedIn/Social field - Optional */}
          <div className="relative">
            <input 
              type="url" 
              name="linkedin" 
              id="linkedin" 
              value={form.linkedin} 
              onChange={handleChange} 
              onBlur={handleBlur} 
              className="peer w-full bg-transparent border-b-2 py-3 px-2 text-lg text-[#EAEAEA] focus:outline-none focus:border-neon-accent transition placeholder-transparent border-[#444]" 
              placeholder="LinkedIn / social (optional)" 
              aria-label="LinkedIn / social (optional)" 
            />
            <label htmlFor="linkedin" className="absolute left-2 top-3 text-[#aaa] text-lg transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-focus:-top-5 peer-focus:text-sm peer-focus:text-neon-accent peer-focus:bg-[#18181b] px-1 bg-[#18181b]">LinkedIn / social (optional)</label>
          </div>

          {/* Portfolio file upload field - Optional */}
          <div className="relative">
            <input 
              type="file" 
              name="portfolioFile" 
              id="portfolioFile" 
              accept=".pdf,.doc,.docx,.jpg,.png,.webp,.zip" 
              onChange={handleChange} 
              onBlur={handleBlur} 
              className="peer w-full bg-transparent border-b-2 py-3 px-2 text-lg text-[#EAEAEA] focus:outline-none focus:border-neon-accent transition placeholder-transparent border-[#444]" 
              aria-label="Portfolio upload (optional)" 
            />
            <label htmlFor="portfolioFile" className="absolute left-2 top-3 text-[#aaa] text-lg transition-all peer-focus:-top-5 peer-focus:text-sm peer-focus:text-neon-accent peer-focus:bg-[#18181b] px-1 bg-[#18181b]">
              Portfolio upload <span className="text-[#666] text-sm">(optional)</span>
            </label>
            {/* File format helper text */}
            <p className="mt-2 text-xs text-off-white/50">
              Accepted formats: PDF, DOC, DOCX, JPG, PNG, WEBP, ZIP (Max 10MB)
            </p>
          </div>

          {/* ============================================================================
              CONSENT SECTION
              ============================================================================ */}
          
          {/* GDPR/CCPA consent checkbox - Required */}
          <div className="flex items-center gap-3 mt-2">
            <input 
              type="checkbox" 
              name="consent" 
              id="consent" 
              checked={form.consent} 
              onChange={handleChange} 
              onBlur={handleBlur} 
              className="accent-neon-accent w-5 h-5 focus:ring-2 focus:ring-neon-accent" 
              required 
            />
            <label htmlFor="consent" className="text-off-white/80 text-sm">I consent to my data being processed for recruitment purposes (GDPR/CCPA).</label>
            {/* Validation indicators */}
            {touched.consent && errors.consent && <span className="text-green-500 text-xl">&#x2705;</span>} 
            {touched.consent && !errors.consent && <span className="text-red-500 text-xl">&#x274c;</span>}
          </div>
        </div>

        {/* ============================================================================
            SUBMIT BUTTON
            ============================================================================ */}
        <button 
          type="submit" 
          className="mt-8 w-full bg-neon-accent text-charcoal font-bold py-3 rounded-lg shadow hover:bg-gradient-to-r hover:from-neon-accent hover:to-gradient-end transition focus:ring-2 focus:ring-neon-accent text-lg" 
          disabled={saving}
        >
          {saving ? 'Sending…' : 'Send My Reel'}
        </button>
      </form>
    </main>
  );
} 