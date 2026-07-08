'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { submitEnquiry } from '@/components/shared/submitEnquiry';

const schema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email().optional().or(z.literal('')),
  project: z.string().optional(),
  honeypot: z.string().max(0),
});

type FormData = z.infer<typeof schema>;

export default function EnquiryFormInline() {
  const { register, handleSubmit, formState: { isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { project: '' },
  });
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');

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
        <p className="text-center font-semibold">Thank you! We'll contact you shortly.</p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input type="text" {...register('honeypot')} className="hidden" tabIndex={-1} autoComplete="off" />
          <input {...register('name')} placeholder="Full Name" className="w-full bg-white/20 border border-white/30 rounded p-2 placeholder-white/70 text-white" />
          <input {...register('phone')} placeholder="Phone" type="tel" className="w-full bg-white/20 border border-white/30 rounded p-2 placeholder-white/70 text-white" />
          <input {...register('email')} placeholder="Email (optional)" className="w-full bg-white/20 border border-white/30 rounded p-2 placeholder-white/70 text-white" />
          <select {...register('project')} className="w-full bg-white/20 border border-white/30 rounded p-2 text-white">
            <option value="" className="text-gray-800">Select Project</option>
            <option value="Forest View" className="text-gray-800">Forest View</option>
            <option value="Sandal Valley" className="text-gray-800">Sandal Valley</option>
            <option value="Bheemeshwari" className="text-gray-800">Bheemeshwari</option>
            <option value="Bliss" className="text-gray-800">Bliss</option>
          </select>
          <button type="submit" disabled={isSubmitting} className="w-full bg-gold text-white font-bold py-3 rounded hover:bg-amber-600 transition">
            {isSubmitting ? 'Sending...' : 'Get a Callback'}
          </button>
          {status === 'error' && <p className="text-red-300 text-sm">Submission failed. Please try again.</p>}
        </form>
      )}
    </div>
  );
}