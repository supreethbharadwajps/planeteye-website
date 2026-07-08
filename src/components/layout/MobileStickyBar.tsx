'use client';
import Link from 'next/link';
export default function MobileStickyBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-forest text-white p-3 z-50">
      <Link href="/contact" className="block text-center bg-gold text-forest font-bold py-2 rounded">
        Enquire Now
      </Link>
    </div>
  );
}