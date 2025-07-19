'use client';

import { useState, useCallback } from 'react';

// Define the structure of the form data
interface FormState {
  name: string;
  email: string;
  company: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
  files: File[];
}

// Define the shape of the data passed to the onSubmit callback
interface SubmitResult {
  success: boolean;
  message: string;
  filesUploaded: number;
  submissionId: string;
}

interface ContactFormProps {
  onSubmit?: (data: SubmitResult) => void;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
    files: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'file') {
      const input = e.target as HTMLInputElement;
      if (input.files) {
        const fileList = Array.from(input.files);
        setFormData((prev) => ({
          ...prev,
          files: fileList
        }));
      }
      return;
    }
    
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Create FormData to handle file uploads
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('company', formData.company);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('projectType', formData.projectType);
      formDataToSend.append('budget', formData.budget);
      formDataToSend.append('message', formData.message);
      
      // Add files to FormData
      formData.files.forEach((file, index) => {
        formDataToSend.append(`file${index}`, file);
      });

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formDataToSend, // Send as FormData instead of JSON
      });

      const result = await response.json() as SubmitResult & { error?: string };

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          projectType: '',
          budget: '',
          message: '',
          files: []
        });
        if (onSubmit) {
          onSubmit(result);
        }
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error ?? 'Something went wrong');
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, onSubmit]);

  const removeFile = useCallback((index: number) => {
    setFormData((prev) => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index)
    }));
  }, []);

  const formatFileSize = useCallback((bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
  }, []);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitStatus === 'error' && (
        <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
          <span className="font-medium">Error!</span> {errorMessage}
        </div>
      )}
      {submitStatus === 'success' && (
        <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg" role="alert">
          <span className="font-medium">Success!</span> Your message has been sent. We&apos;ll get back to you shortly.
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-off-white mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => {
              handleChange(e);
            }}
            required
            className="w-full px-4 py-3 bg-charcoal border border-off-white/20 rounded-lg text-off-white placeholder-off-white/50 focus:outline-none focus:border-neon-accent transition-colors"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-off-white mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => {
              handleChange(e);
            }}
            required
            className="w-full px-4 py-3 bg-charcoal border border-off-white/20 rounded-lg text-off-white placeholder-off-white/50 focus:outline-none focus:border-neon-accent transition-colors"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-off-white mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={(e) => {
              handleChange(e);
            }}
            className="w-full px-4 py-3 bg-charcoal border border-off-white/20 rounded-lg text-off-white placeholder-off-white/50 focus:outline-none focus:border-neon-accent transition-colors"
            placeholder="Your company name"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-off-white mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={(e) => {
              handleChange(e);
            }}
            className="w-full px-4 py-3 bg-charcoal border border-off-white/20 rounded-lg text-off-white placeholder-off-white/50 focus:outline-none focus:border-neon-accent transition-colors"
            placeholder="Your phone number"
          />
        </div>

        <div>
          <label htmlFor="projectType" className="block text-sm font-medium text-off-white mb-2">
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={(e) => {
              handleChange(e);
            }}
            className="w-full px-4 py-3 bg-charcoal border border-off-white/20 rounded-lg text-off-white focus:outline-none focus:border-neon-accent transition-colors"
          >
            <option value="">Select project type</option>
            <option value="brand-animation">Brand & Marketing Animation</option>
            <option value="entertainment">Entertainment & Original IP</option>
            <option value="production">Pre to Post Production</option>
            <option value="consulting">Creative Strategy & Consulting</option>
            <option value="collateral">Design & Collateral</option>
            <option value="design-subscription">Graphic Design Subscription</option>
          </select>
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-off-white mb-2">
            Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={(e) => {
              handleChange(e);
            }}
            className="w-full px-4 py-3 bg-charcoal border border-off-white/20 rounded-lg text-off-white focus:outline-none focus:border-neon-accent transition-colors"
          >
            <option value="">Select budget range</option>
            <option value="under-5k">Under $5,000</option>
            <option value="5k-15k">$5,000 - $15,000</option>
            <option value="15k-50k">$15,000 - $50,000</option>
            <option value="50k-100k">$50,000 - $100,000</option>
            <option value="over-100k">Over $100,000</option>
            <option value="discuss">Let&apos;s discuss</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-off-white mb-2">
          Project Details *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={(e) => {
            handleChange(e);
          }}
          required
          rows={6}
          className="w-full px-4 py-3 bg-charcoal border border-off-white/20 rounded-lg text-off-white placeholder-off-white/50 focus:outline-none focus:border-neon-accent transition-colors resize-none"
          placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
        />
      </div>

      <div>
        <label htmlFor="files" className="block text-sm font-medium text-off-white mb-2">
          Attach Files (Optional)
        </label>
        <input
          type="file"
          id="files"
          name="files"
          multiple
          onChange={(e) => {
            handleChange(e);
          }}
          className="w-full px-4 py-3 bg-charcoal border border-off-white/20 rounded-lg text-off-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-neon-accent file:text-charcoal hover:file:bg-neon-accent/80 file:cursor-pointer focus:outline-none focus:border-neon-accent transition-colors"
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif,.mp4,.mov,.avi"
        />
        {/* File preview section */}
        {formData.files.length > 0 && (
          <div className="mt-4 space-y-2">
            {formData.files.map((file, index) => (
              <div key={index} className="flex items-center justify-between bg-charcoal-light p-2 rounded-lg">
                <div className="text-sm text-off-white truncate">
                  <span className="font-semibold">{file.name}</span>
                  <span className="text-off-white/60 ml-2">({formatFileSize(file.size)})</span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    removeFile(index);
                  }}
                  className="text-red-400 hover:text-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Submit button and status messages */}
      <div className="text-center mt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-neon-accent text-charcoal font-bold py-3 px-8 rounded-full hover:bg-gradient-to-r from-neon-accent to-purple-500 transition-all duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Send Inquiry'}
        </button>
      </div>
    </form>
  );
} 