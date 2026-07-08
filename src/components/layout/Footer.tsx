import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-forest text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-serif text-2xl mb-4">Planet Eye</h3>
          <p className="text-sm text-gray-300">15+ years developing managed farmland near Bangalore. Eco-friendly, gated communities with EMI options.</p>
          <div className="flex gap-3 mt-4">
            <a href="https://facebook.com" target="_blank"><FaFacebook size={20} /></a>
            <a href="https://instagram.com/planeteye_projects" target="_blank"><FaInstagram size={20} /></a>
            <a href="https://linkedin.com" target="_blank"><FaLinkedin size={20} /></a>
            <a href="https://youtube.com/@planeteyeprojects" target="_blank"><FaYoutube size={20} /></a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/projects">All Projects</Link></li>
            <li><Link href="/farmland-loan-finance">Farmland Loan / EMI</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <address className="text-sm not-italic text-gray-300 space-y-1">
            <p>52/1, 935, 28th Main Rd, Putlanpalya,</p>
            <p>Jayanagara 9th Block, Bengaluru 560069</p>
            <p>Phone: +91 98453 31133</p>
            <p>Email: planeteyeprojects@gmail.com</p>
          </address>
        </div>
      </div>
      {/* Google Map Embed */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.018917893957!2d77.5924763153407!3d12.918178090897003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15b9f9e2f0fb%3A0x8d6d0a4d7a5f3a8!2s28th%20Main%20Rd%2C%20Jayanagar%209th%20Block!5e0!3m2!1sen!2sin!4v1620000000000"
          width="100%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          className="rounded"
        ></iframe>
      </div>
      <div className="text-center text-xs text-gray-400 mt-8 border-t border-forest-light pt-4">
        &copy; {new Date().getFullYear()} Planet Eye Builders & Developers. All rights reserved.
      </div>
    </footer>
  );
}