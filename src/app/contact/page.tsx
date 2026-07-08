import EnquiryForm from '@/components/ui/EnquiryForm';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Image from 'next/image';

export const metadata = { title: 'Contact Us – Planet Eye', description: 'Get in touch for managed farmland near Bangalore. Call, WhatsApp, or enquire online.' };

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
      <div>
        <Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'Contact', url: '' }]} />
        <h1 className="font-serif text-4xl mb-6">Contact Planet Eye</h1>
        <address className="not-italic space-y-4 mb-8">
          <p><strong>Address:</strong> 52/1, 935, 28th Main Rd, Putlanpalya, Jayanagara 9th Block, Bengaluru 560069</p>
          <p><strong>Phone:</strong> <a href="tel:+919845331133">+91 98453 31133</a> / <a href="tel:+919845495566">98454 95566</a></p>
          <p><strong>WhatsApp:</strong> <a href="https://wa.me/919845011779">+91 98450 11779</a></p>
          <p><strong>Email:</strong> <a href="mailto:planeteyeprojects@gmail.com">planeteyeprojects@gmail.com</a></p>
        </address>
        <div className="mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.018917893957!2d77.5924763153407!3d12.918178090897003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15b9f9e2f0fb%3A0x8d6d0a4d7a5f3a8!2s28th%20Main%20Rd%2C%20Jayanagar%209th%20Block!5e0!3m2!1sen!2sin!4v1620000000000"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div>
        <h2 className="font-serif text-3xl mb-6">Send an Enquiry</h2>
        <EnquiryForm />
      </div>
    </div>
  );
}