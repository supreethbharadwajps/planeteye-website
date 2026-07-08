'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { submitEnquiry } from '@/components/shared/submitEnquiry';

const schema = z.object({
  name: z.string().min(2, 'Name required'),
  phone: z.string().min(10, 'Valid phone required'),
  email: z.string().email('Invalid email').optional().or(z.literal('')),
  project: z.string().optional(),
  honeypot: z.string().max(0),
});

type FormData = z.infer<typeof schema>;

export default function EnquiryFormInline() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { project: '' },
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    try {
      await submitEnquiry({ ...data, sourcePage: window.location.pathname });
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 text-white">
      {status === 'success' ? (
        <div className="text-center py-4">
          <p className="text-xl font-semibold mb-2">Thank You!</p>
          <p>We'll get back to you within 24 hours.</p>
          <a
            href="https://wa.me/919845011779"
            target="_blank"
            className="inline-block mt-3 text-gold underline"
          >
            Chat on WhatsApp →
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Honeypot */}
          <input
            type="text"
            {...register('honeypot')}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />
          <input
            {...register('name')}
            placeholder="Full Name*"
            className="w-full bg-white/20 border border-white/30 rounded p-3 placeholder-white/70 text-white focus:outline-none focus:border-gold"
          />
          <input
            {...register('phone')}
            placeholder="Phone Number*"
            type="tel"
            className="w-full bg-white/20 border border-white/30 rounded p-3 placeholder-white/70 text-white focus:outline-none focus:border-gold"
          />
          <input
            {...register('email')}
            placeholder="Email (optional)"
            className="w-full bg-white/20 border border-white/30 rounded p-3 placeholder-white/70 text-white focus:outline-none focus:border-gold"
          />
          <select
            {...register('project')}
            className="w-full bg-white/20 border border-white/30 rounded p-3 text-white focus:outline-none focus:border-gold"
          >
            <option value="" className="text-gray-800">
              Select Project
            </option>
            <option value="Forest View" className="text-gray-800">
              Forest View
            </option>
            <option value="Sandal Valley" className="text-gray-800">
              Sandal Valley
            </option>
            <option value="Bheemeshwari" className="text-gray-800">
              Bheemeshwari
            </option>
            <option value="Bliss" className="text-gray-800">
              Bliss
            </option>
          </select>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gold hover:bg-amber-600 text-white font-bold py-3 rounded transition disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Get a Callback'}
          </button>
          {status === 'error' && (
            <p className="text-red-300 text-sm text-center">
              Submission failed. Please try again.
            </p>
          )}
        </form>
      )}
    </div>
  );
}