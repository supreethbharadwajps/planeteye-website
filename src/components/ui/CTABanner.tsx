import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="bg-forest text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/banner_forest_new.jpg')] bg-cover bg-center opacity-10"></div>
      <div className="relative max-w-4xl mx-auto text-center px-4">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Ready to Own Your Dream Farmland?</h2>
        <p className="text-gray-300 text-lg mb-8">Our team is standing by to schedule your personalised site visit.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/contact" className="bg-gold hover:bg-amber-600 text-white px-8 py-3 rounded font-bold transition">
            Enquire Now
          </Link>
          <a href="tel:+919845331133" className="border border-white hover:bg-white hover:text-forest text-white px-8 py-3 rounded font-bold transition">
            Call +91 98453 31133
          </a>
          <a href="https://wa.me/919845011779" target="_blank" className="border border-white hover:bg-white hover:text-forest text-white px-8 py-3 rounded font-bold transition">
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}