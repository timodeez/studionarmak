'use client';
import { useState, useRef, useEffect, useCallback, useMemo } from 'react';

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
    copy: 'We love imagination. The next big idea could come from you! Don&apos;t be scared to throw your input'
  },
  {
    title: 'Collaboration',
    icon: () => <span className="text-4xl" role="img" aria-label="Collaboration">🤝</span>,
    copy: 'The only way it all works is if we all work together. Let&apos;s build, create, and challenge each other.'
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
  phone: '',                   // Phone number (optional, for API)
  experience: '',              // Years of experience (optional, for API)
};

// ============================================================================
// FORM VALIDATION FUNCTION
// ============================================================================
// Validates each form field and returns boolean for each field
// Used to show visual feedback and prevent invalid submissions
const validate = (form: typeof initialForm) => ({
    name: form.name.length > 1,                                    // Name must be at least 2 characters
    email: /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email),        // Basic email format validation
    location: !!form.location,                                     // Location must be selected
    portfolio: /^https?:\/\//.test(form.portfolio),               // Portfolio must be a valid URL
    discipline: !!form.discipline,                                 // Discipline must be selected
    why: form.why.length > 10 && form.why.length <= 400,          // Cover letter: 10-400 characters
    consent: form.consent,                                         // GDPR consent must be given
    portfolioFile: true,                                          // File upload is optional, so always valid
});

// ============================================================================
// MAIN CAREERS PAGE COMPONENT
// ============================================================================
export default function CareersPage() {
  // ============================================================================
  // STATE MANAGEMENT
  // ============================================================================
  const [form, setForm] = useState(initialForm);                    // Form data state
  const [touched, setTouched] = useState<Record<string, boolean>>({}); // Track which fields have been interacted with
  const [success, setSuccess] = useState(false);                    // Show success message after submission
  const [saving, setSaving] = useState(false);                      // Loading state during form submission
  const [error, setError] = useState('');                          // Error message display
  const [hasLoadedDraft, setHasLoadedDraft] = useState(false);     // Prevent infinite loop in draft loading
  const formRef = useRef<HTMLFormElement>(null);                   // Reference to form element for validation

  const errors = useMemo(() => validate(form), [form]);
  const allValid = useMemo(() => Object.values(errors).every(Boolean), [errors]); // Check if all required fields are valid

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
          const parsedDraft = JSON.parse(draft) as typeof initialForm;
          setForm((f) => ({ ...f, ...parsedDraft }));
        } catch (err) {
          console.error('Error parsing draft:', err);
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
      return () => {
        clearInterval(interval);
      };
    }
  }, [form, hasLoadedDraft]);

  // ============================================================================
  // EVENT HANDLERS
  // ============================================================================
  
  // Handle form field changes (text inputs, selects, checkboxes, file uploads)
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    // Handle checkbox inputs (consent field)
    if (type === 'checkbox') {
      const input = e.target as HTMLInputElement;
      setForm((f) => ({
        ...f,
        [name]: input.checked
      }));
      return;
    }
    
    // Handle file upload inputs (portfolio file)
    if (type === 'file') {
      const input = e.target as HTMLInputElement;
      setForm((f) => ({
        ...f,
        [name]: input.files?.[0] ?? null
      }));
      return;
    }
    
    // Handle regular text inputs and selects
    setForm((f) => ({
      ...f,
      [name]: value
    }));
  }, []);

  // Mark fields as "touched" when user leaves a field (for validation display)
  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
  }, []);
  
  // ============================================================================
  // FORM SUBMISSION HANDLER
  // ============================================================================
  // Handles the form submission process including validation, API call, and user feedback
  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
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
        formDataToSend.append('phone', form.phone); // Add phone number
        formDataToSend.append('position', form.discipline);
        formDataToSend.append('experience', form.experience); // Add experience
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

        const result = await response.json() as { error?: string };

        if (response.ok) {
          setSuccess(true); // Show success message
          localStorage.removeItem('careersFormDraft'); // Clear saved draft after successful submission
        } else {
          setError(result.error ?? 'Something went wrong. Please try again.');
        }
      } catch {
        setError('Network error. Please try again.');
      } finally {
        setSaving(false); // Hide loading state
      }
    }
  }, [allValid, form]);

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

  return (
    <main className="bg-charcoal text-off-white pt-28 pb-20">
      <div className="container mx-auto px-4">
        {/* Culture intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-display mb-4">Join the <span className="text-neon-accent">Adventure</span></h1>
          <p className="text-lg text-off-white/70">
            We&apos;re building a new kind of animation studio—one that balances client work with original stories.
            Below are our three pillars of culture. If they resonate with you, we&apos;d love to see your work.
          </p>
        </div>

        {/* Culture pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {culturePillars.map((pillar, index) => (
            <div key={index} className="bg-[#1a1a1c] p-8 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
              {pillar.icon()}
              <h3 className="text-2xl font-display mt-4 mb-2">{pillar.title}</h3>
              <p className="text-off-white/70">{pillar.copy}</p>
            </div>
          ))}
        </div>

        {/* Application form */}
        <div className="max-w-4xl mx-auto bg-[#1a1a1c] p-8 rounded-2xl">
          <div className="md:w-full">
            <h2 className="text-3xl font-display mb-4">Join the <span className="text-neon-accent">Narmak</span> Family</h2>
            <p className="mb-8 text-off-white/80">
              We&apos;re always looking for talented folks to collaborate with on a per-project basis. If you&apos;re a skilled animator, designer, or storyteller, we&apos;d love to see your work.
            </p>
            <form ref={formRef} onSubmit={handleSubmit} noValidate className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="md:col-span-1">
                <label htmlFor="name" className="block text-off-white/80 mb-2">Name*</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className={`w-full bg-charcoal-light p-3 rounded-lg border-2 ${touched.name && !errors.name ? 'border-red-500' : 'border-charcoal-light'}`}
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                {touched.name && !errors.name && (
                  <p className="text-sm text-red-400 mt-1">Please enter a valid name.</p>
                )}
              </div>

              <div className="md:col-span-1">
                <label htmlFor="email" className="block text-off-white/80 mb-2">Email*</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className={`w-full bg-charcoal-light p-3 rounded-lg border-2 ${touched.email && !errors.email ? 'border-red-500' : 'border-charcoal-light'}`}
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                {touched.email && !errors.email && (
                  <p className="text-sm text-red-400 mt-1">A valid email is required to get in touch!</p>
                )}
              </div>
              
              <div className="md:col-span-1">
                <label htmlFor="location" className="block text-off-white/80 mb-2">Timezone / Location*</label>
                <select
                  id="location"
                  name="location"
                  className={`w-full bg-charcoal-light p-3 rounded-lg border-2 ${touched.location && !errors.location ? 'border-red-500' : 'border-charcoal-light'}`}
                  value={form.location}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                >
                  <option value="">Select your timezone</option>
                  {timezones.map(tz => <option key={tz} value={tz}>{tz}</option>)}
                </select>
                {touched.location && !errors.location && (
                  <p className="text-sm text-red-400 mt-1">Please select your location.</p>
                )}
              </div>

              <div className="md:col-span-1">
                <label htmlFor="discipline" className="block text-off-white/80 mb-2">Primary Discipline*</label>
                <select
                  id="discipline"
                  name="discipline"
                  className={`w-full bg-charcoal-light p-3 rounded-lg border-2 ${touched.discipline && !errors.discipline ? 'border-red-500' : 'border-charcoal-light'}`}
                  value={form.discipline}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                >
                  <option value="">Select your discipline</option>
                  {disciplines.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
                {touched.discipline && !errors.discipline && (
                  <p className="text-sm text-red-400 mt-1">Please select your discipline.</p>
                )}
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="portfolio" className="block text-off-white/80 mb-2">Portfolio / Reel*</label>
                <input
                  id="portfolio"
                  name="portfolio"
                  type="url"
                  placeholder="https://yourportfolio.com"
                  className={`w-full bg-charcoal-light p-3 rounded-lg border-2 ${touched.portfolio && !errors.portfolio ? 'border-red-500' : 'border-charcoal-light'}`}
                  value={form.portfolio}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                {touched.portfolio && !errors.portfolio && (
                  <p className="text-sm text-red-400 mt-1">A link to your work is required.</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label htmlFor="why" className="block text-off-white/80 mb-2">Why here, why now? (400 chars)*</label>
                <textarea
                  id="why"
                  name="why"
                  className={`w-full bg-charcoal-light p-3 rounded-lg border-2 ${touched.why && !errors.why ? 'border-red-500' : 'border-charcoal-light'}`}
                  value={form.why}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  maxLength={400}
                  required
                />
                <p className="text-xs text-off-white/50 text-right">{`${String(form.why.length)}/400`}</p>
                {touched.why && !errors.why && (
                  <p className="text-sm text-red-400 mt-1">Tell us a bit about what makes you tick!</p>
                )}
              </div>

              <div className="md:col-span-1">
                <label htmlFor="linkedin" className="block text-off-white/80 mb-2">LinkedIn or Social</label>
                <input
                  id="linkedin"
                  name="linkedin"
                  type="url"
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="w-full bg-charcoal-light p-3 rounded-lg border-2 border-charcoal-light"
                  value={form.linkedin}
                  onChange={handleChange}
                />
              </div>
              
              <div className="md:col-span-1">
                <label htmlFor="portfolioFile" className="block text-off-white/80 mb-2">Got a file instead? (PDF/ZIP, &lt;10MB)</label>
                <input
                  id="portfolioFile"
                  name="portfolioFile"
                  type="file"
                  className="w-full text-sm text-off-white/60 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-neon-accent/10 file:text-neon-accent hover:file:bg-neon-accent/20"
                  onChange={handleChange}
                  accept=".pdf,.zip"
                />
              </div>
              
              <div className="md:col-span-2 flex items-start">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  className="h-5 w-5 mt-1 bg-charcoal-light border-charcoal-light rounded text-neon-accent focus:ring-neon-accent"
                  checked={form.consent}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                <div className="ml-3 text-sm">
                  <label htmlFor="consent" className="text-off-white/80">I consent to having my data stored for future opportunities.</label>
                  {touched.consent && !errors.consent && (
                    <p className="text-red-400">You must consent to be considered for roles.</p>
                  )}
                </div>
              </div>

              {error && (
                <div className="md:col-span-2 bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-lg">
                  {error}
                </div>
              )}

              <div className="md:col-span-2">
                <button type="submit" disabled={saving || !allValid} className="w-full bg-neon-accent text-charcoal font-bold py-4 rounded-lg shadow-lg hover:scale-105 disabled:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform">
                  {saving ? 'Submitting...' : 'Send Application'}
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </main>
  );
} 