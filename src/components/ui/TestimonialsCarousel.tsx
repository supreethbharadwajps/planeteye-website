'use client';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/lib/testimonials';

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="bg-white p-6 rounded shadow-md max-w-lg mx-auto text-center">
      <div className="flex justify-between items-center mb-4">
        <button onClick={prev} className="p-1"><ChevronLeft /></button>
        <div>
          <p className="italic text-gray-700">"{testimonials[current].text}"</p>
          <p className="font-semibold mt-2">— {testimonials[current].name}, {testimonials[current].project}</p>
          <div className="flex justify-center gap-1 mt-1 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <span key={i}>{i < testimonials[current].rating ? '★' : '☆'}</span>
            ))}
          </div>
        </div>
        <button onClick={next} className="p-1"><ChevronRight /></button>
      </div>
    </div>
  );
}