'use client';

import { useState, useCallback } from 'react';
import clsx from 'clsx';

interface EmailSubscriptionProps {
  className?: string;
  placeholder?: string;
  buttonText?: string;
  successMessage?: string;
}

export default function EmailSubscription({
  className = '',
  placeholder = 'Enter your email for updates',
  buttonText = 'Subscribe',
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

      const result = await response.json() as { error?: string, message?: string};

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
    <div className={clsx('w-full max-w-md', className)}>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          placeholder={placeholder}
          required
          className="flex-1 px-4 py-3 bg-charcoal border border-off-white/20 rounded-lg text-off-white placeholder-off-white/50 focus:outline-none focus:border-neon-accent transition-colors disabled:opacity-50"
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="px-6 py-3 bg-neon-accent text-charcoal font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {status === 'loading' ? 'Subscribing...' : buttonText}
        </button>
      </form>
      
      {status === 'success' && (
        <p className="mt-2 text-green-400 text-sm">{message}</p>
      )}
      
      {status === 'error' && (
        <p className="mt-2 text-red-400 text-sm">{message}</p>
      )}
    </div>
  );
} 