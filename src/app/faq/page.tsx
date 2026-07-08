import { generalFaqs } from '@/lib/faqs';
import FAQAccordion from '@/components/ui/FAQAccordion';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'FAQ' }]} />
      <h1 className="font-serif text-4xl mb-8">Frequently Asked Questions</h1>
      <FAQAccordion items={generalFaqs} includeSchema />
    </div>
  );
}