import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us – Planet Eye Builders & Developers',
  description: '15+ years developing managed farmland near Bangalore. Our mission: legible, eco-friendly farm assets for everyone.',
};

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'About' }]} />
      <h1 className="font-serif text-4xl mb-6">About Planet Eye</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg italic mb-4">"Real Estate investments – it's tangible, it's solid, it's artistic, and it is soulful."</p>
          <p>Planet Eye Group is one of Bangalore's premier managed farmland developers with 15+ years experience. We specialize in creating eco‑friendly farmhouse plots in breathtaking locations.</p>
          <h2 className="font-serif text-2xl mt-8 mb-2">Our Mission</h2>
          <p>To create legible, hassle‑free, eco‑friendly real estate assets and facilitate people to own them through affordable means.</p>
          <div className="grid grid-cols-2 gap-4 mt-6 text-center">
            <div className="bg-forest text-white p-4 rounded"><span className="block text-3xl font-bold">15+</span> Years Experience</div>
            <div className="bg-forest text-white p-4 rounded"><span className="block text-3xl font-bold">4</span> Projects</div>
          </div>
        </div>
        <Image src="/banner_edited.jpg" alt="Farmland" width={600} height={400} className="rounded shadow" />
      </div>
    </div>
  );
}