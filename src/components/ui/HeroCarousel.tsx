'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import EnquiryFormInline from '../layout/EnquiryFormInline'; // a compact form variant

const slides = [
  {
    image: 'https://www.planeteye.in/img/banner_edited_4.jpg',
    headline: 'Own Managed Farmland Near Bangalore',
    sub: 'Eco‑friendly farm plots with resort‑style amenities',
  },
  {
    image: 'https://www.planeteye.in/img/banner_edited_3.jpg',
    headline: 'Tangible Assets. Lasting Legacy.',
    sub: 'Invest in farmland that grows in value and joy',
  },
  {
    image: 'https://www.planeteye.in/img/banner_edited_5.jpg',
    headline: 'Weekend Homes Amidst Nature',
    sub: 'Plots ready for immediate construction',
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
          <Image src={slides[index].image} alt="Planet Eye farmland" fill className="object-cover" priority />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-forest/70 via-forest/40 to-transparent" />
      {/* Main headline + CTA */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
        <div className="grid md:grid-cols-2 gap-8 items-center h-full">
          <div className="text-white">
            <motion.h1
              className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {slides[index].headline}
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-200 mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {slides[index].sub}
            </motion.p>
            <Link
              href="/contact"
              className="inline-block bg-gold text-white px-8 py-4 rounded font-bold text-lg hover:bg-amber-600 transition shadow-xl"
            >
              Enquire Now
            </Link>
          </div>
          {/* Inline enquiry form */}
          <div className="hidden md:block">
            <EnquiryFormInline />
          </div>
        </div>
      </div>
    </section>
  );
}