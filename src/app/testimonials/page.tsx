import { testimonials } from '@/lib/testimonials';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SchemaScript from '@/components/ui/SchemaScript';

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Planet Eye',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5', reviewCount: testimonials.length.toString() },
  review: testimonials.map(t => ({
    '@type': 'Review',
    author: t.name,
    reviewBody: t.text,
    reviewRating: { '@type': 'Rating', ratingValue: t.rating },
  })),
};

export default function TestimonialsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
     <Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'Testimonials', url: '' }]} />
      <SchemaScript schema={reviewSchema} />
      <h1 className="font-serif text-4xl mb-8">Client Testimonials</h1>
      <div className="space-y-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white p-6 rounded shadow">
            <p className="italic">"{t.text}"</p>
            <p className="font-semibold mt-2">— {t.name}, {t.project}</p>
            <div className="text-yellow-500">{'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}