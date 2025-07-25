'use client';

import { useState, useCallback } from 'react';

interface EmailSubscriptionProps {
  successMessage?: string;
}

export default function EmailSubscription({ 
  successMessage = 'Thanks for subscribing!' 
}: EmailSubscriptionProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json() as { error?: string, message?: string };

      if (response.ok) {
        setStatus('success');
        setMessage(result.message ?? successMessage);
        setEmail('');
      } else {
        setStatus('error');
        setMessage(result.error ?? 'Something went wrong');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  }, [email, successMessage]);

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter your email"
            className="w-full px-4 py-2 bg-charcoal border border-off-white/20 rounded-lg text-off-white placeholder-off-white/50 focus:outline-none focus:border-neon-accent transition-colors"
            required
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className={`w-full px-4 py-2 bg-neon-accent text-charcoal font-bold rounded-lg hover:bg-gradient-to-r hover:from-neon-accent hover:to-purple-500 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none ${
            status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      {message && (
        <p className={`mt-2 text-sm ${status === 'success' ? 'text-neon-accent' : 'text-red-400'}`}>
          {message}
        </p>
      )}
    </div>
  );
} 