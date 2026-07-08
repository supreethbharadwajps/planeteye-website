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
  visitDate: z.string().optional(),
  message: z.string().optional(),
  honeypot: z.string().max(0),
});

type FormData = z.infer<typeof schema>;

export default function EnquiryForm({ project }: { project?: string }) {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { project: project || '' },
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

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded">
        Thank you! We’ll contact you shortly. <br />
        <a href="https://wa.me/919845011779" className="underline">Chat on WhatsApp</a> for quick questions.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow-md space-y-4 max-w-md mx-auto">
      <input type="text" {...register('honeypot')} className="hidden" tabIndex={-1} autoComplete="off" />
      <div>
        <input {...register('name')} placeholder="Full Name*" className="w-full border border-gray-300 p-2 rounded" />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>
      <div>
        <input {...register('phone')} placeholder="Phone*" type="tel" className="w-full border p-2 rounded" />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
      </div>
      <input {...register('email')} placeholder="Email" className="w-full border p-2 rounded" />
      {project ? (
        <input value={project} readOnly className="w-full border p-2 rounded bg-gray-50" />
      ) : (
        <select {...register('project')} className="w-full border p-2 rounded">
          <option value="">Select Project</option>
          <option value="Forest View">Forest View</option>
          <option value="Sandal Valley">Sandal Valley</option>
          <option value="Bheemeshwari">Bheemeshwari</option>
          <option value="Bliss">Bliss</option>
        </select>
      )}
      <input {...register('visitDate')} type="date" className="w-full border p-2 rounded" />
      <textarea {...register('message')} placeholder="Message" rows={2} className="w-full border p-2 rounded" />
      <button type="submit" disabled={isSubmitting} className="w-full bg-gold text-white font-bold py-3 rounded hover:bg-amber-600 transition">
        {isSubmitting ? 'Sending...' : 'Enquire Now'}
      </button>
      {status === 'error' && <p className="text-red-500 text-sm">Submission failed. Please try again or call us.</p>}
    </form>
  );
}