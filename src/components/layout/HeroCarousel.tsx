'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import EnquiryFormInline from './EnquiryFormInline'
import Link from 'next/link';

const slides = [
  { image: '/banner_forest_new.jpg', headline: 'Own Managed Farmland Near Bangalore', sub: 'Eco-friendly farm plots with luxury amenities' },
  // ... other slides
]

export default function HeroCarousel() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => setIndex(i => (i+1)%slides.length), 5000)
    return () => clearInterval(timer)
  }, [])
  return (
    <section className="relative h-[70vh] min-h-[600px] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
          <Image src={slides[index].image} alt="Farmland near Bangalore" fill className="object-cover" priority={index===0} />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <motion.h1 className="font-serif text-4xl md:text-6xl font-bold mb-4" initial={{ y:20, opacity:0 }} animate={{ y:0, opacity:1 }}>{slides[index].headline}</motion.h1>
        <motion.p className="text-lg md:text-2xl mb-8" initial={{ y:20, opacity:0 }} animate={{ y:0, opacity:1, transition:{delay:0.2} }}>{slides[index].sub}</motion.p>
        <Link href="/contact" className="bg-gold text-forest px-8 py-3 text-lg font-bold rounded shadow-lg">Enquire Now</Link>
        {/* Inline enquiry widget (docked on hero) */}
        <div className="mt-6 w-full max-w-lg">
          <EnquiryFormInline />
        </div>
      </div>
    </section>
  )
}