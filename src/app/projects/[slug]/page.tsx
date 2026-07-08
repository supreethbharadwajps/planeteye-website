import { projects } from '@/lib/projects';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Image from 'next/image';
import EnquiryForm from '@/components/ui/EnquiryForm';
import FAQAccordion from '@/components/ui/FAQAccordion';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.name} – Managed Farmland near Bangalore | Planet Eye`,
    description: `${project.tagline} ${project.locationBrief}. ${project.distance}. Enquire now.`,
    openGraph: { images: [{ url: project.hero }] },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'Projects', url: '' }]} />
      {/* TL;DR box */}
      <div className="max-w-7xl mx-auto px-4 py-4 bg-white shadow rounded mb-4 mt-4">
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="font-semibold">📍 {project.locationBrief}</div>
          <div>📏 {project.distance}</div>
          <div>🏡 {project.plotSizes}</div>
          <div>💰 {project.pricePositioning}</div>
          <span className="bg-gold text-white px-2 py-0.5 rounded text-xs">{project.status}</span>
        </div>
      </div>

      <div className="relative h-96 w-full mb-8">
        <Image src={project.hero} alt={project.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/30 flex items-end p-8">
          <h1 className="font-serif text-4xl text-white">{project.name}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <p className="text-lg">{project.description}</p>
          <h2 className="font-serif text-2xl">Features</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-disc pl-5">
            {project.features.map((f) => <li key={f}>{f}</li>)}
          </ul>
          {project.landmarks.length > 0 && (
            <>
              <h2 className="font-serif text-2xl">Nearby Landmarks</h2>
              {project.landmarks.map((cat) => (
                <div key={cat.category} className="mb-4">
                  <h3 className="font-semibold">{cat.category}</h3>
                  <ul className="grid grid-cols-2 gap-1 text-sm">
                    {cat.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </>
          )}
          <h2 className="font-serif text-2xl">Amenities</h2>
          <ul className="grid grid-cols-2 gap-2 list-disc pl-5">
            {project.amenities.map((a) => <li key={a}>{a}</li>)}
          </ul>
          <div className="bg-sand-dark p-6 rounded">
            <h2 className="font-serif text-2xl mb-2">Easy Payment Options</h2>
            <p>{project.loanBlurb}</p>
            <Link href="/farmland-loan-finance" className="text-gold underline font-semibold">Learn more about EMI & Loans</Link>
          </div>
          {project.faqs.length > 0 && (
            <>
              <h2 className="font-serif text-2xl">Frequently Asked Questions</h2>
              <FAQAccordion items={project.faqs} includeSchema />
            </>
          )}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {project.gallery.map((img, i) => (
              <Image key={i} src={img} alt={project.name} width={300} height={200} className="rounded object-cover w-full h-40" />
            ))}
          </div>
        </div>
        <aside>
          <div className="sticky top-20">
            <EnquiryForm project={project.name} />
          </div>
        </aside>
      </div>
    </>
  );
}