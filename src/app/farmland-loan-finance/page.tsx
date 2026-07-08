import EMICalculator from '@/components/ui/EMICalculator';
import EnquiryForm from '@/components/ui/EnquiryForm';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata = { title: 'Farmland Loan & EMI – Planet Eye', description: 'Get loans and easy EMI options for farmland near Bangalore.' };

export default function LoanPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'Farmland Loan & EMI' }]} />
      <h1 className="font-serif text-4xl mb-6">Farmland Loan & EMI Options</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4">We have partnered with financial institutions to help you finance your dream farm. Register your plot and pay through convenient EMIs.</p>
          <h2 className="font-serif text-2xl mt-8 mb-2">Key Features</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Loan up to 70% of property value</li>
            <li>Flexible tenure from 5 to 20 years</li>
            <li>Competitive interest rates</li>
            <li>Minimal documentation</li>
          </ul>
          <EMICalculator />
        </div>
        <aside>
          <EnquiryForm project="Loan Enquiry" />
        </aside>
      </div>
    </div>
  );
}