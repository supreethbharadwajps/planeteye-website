'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import { Menu, X, ChevronDown } from 'lucide-react';

const projectLinks = [
  { name: 'Forest View', href: '/projects/forest-view', badge: '' },
  { name: 'Sandal Valley', href: '/projects/sandal-valley', badge: '' },
  { name: 'Bheemeshwari', href: '/projects/bheemeshwari', badge: '' },
  { name: 'Bliss', href: '/projects/bliss', badge: 'Launching Soon' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="https://www.planeteye.in/imgs/logo.png"
            alt="Planet Eye"
            width={120}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-charcoal">
          <Link href="/" className="hover:text-gold transition">Home</Link>
          <Link href="/about" className="hover:text-gold transition">About</Link>

          {/* Dropdown Projects */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center hover:text-gold transition">
              Projects <ChevronDown size={16} className="ml-1" />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white text-charcoal rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                {projectLinks.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    className="block px-4 py-2 hover:bg-sand transition text-sm"
                  >
                    {p.name}
                    {p.badge && (
                      <span className="text-gold text-xs ml-1">({p.badge})</span>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/gallery" className="hover:text-gold transition">Gallery</Link>
          <Link href="/testimonials" className="hover:text-gold transition">Testimonials</Link>
          <Link href="/faq" className="hover:text-gold transition">FAQ</Link>
          <Link href="/blog" className="hover:text-gold transition">Blog</Link>
          <Link href="/contact" className="hover:text-gold transition">Contact</Link>
        </nav>

        {/* Contact CTAs */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+919845331133"
            className="hidden md:flex items-center gap-1 text-sm text-charcoal hover:text-gold transition"
          >
            <FaPhone /> +91 98453 31133
          </a>
          <a
            href="https://wa.me/919845011779"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1 text-sm text-charcoal hover:text-gold transition"
          >
            <FaWhatsapp /> WhatsApp
          </a>
          <Link
            href="/contact"
            className="hidden md:inline-block bg-gold text-white px-5 py-2.5 rounded font-semibold hover:bg-amber-600 transition text-sm shadow"
          >
            Enquire Now
          </Link>
          {/* Mobile menu toggle */}
          <button className="lg:hidden text-charcoal" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t px-4 pb-6 space-y-2 text-charcoal">
          <Link href="/" className="block py-3 border-b" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link href="/about" className="block py-3 border-b" onClick={() => setMobileOpen(false)}>About</Link>
          <p className="py-2 font-semibold text-gold">Projects</p>
          {projectLinks.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="block pl-4 py-2 text-sm border-b"
              onClick={() => setMobileOpen(false)}
            >
              {p.name} {p.badge && <span className="text-gold text-xs">({p.badge})</span>}
            </Link>
          ))}
          <Link href="/gallery" className="block py-3 border-b" onClick={() => setMobileOpen(false)}>Gallery</Link>
          <Link href="/testimonials" className="block py-3 border-b" onClick={() => setMobileOpen(false)}>Testimonials</Link>
          <Link href="/faq" className="block py-3 border-b" onClick={() => setMobileOpen(false)}>FAQ</Link>
          <Link href="/blog" className="block py-3 border-b" onClick={() => setMobileOpen(false)}>Blog</Link>
          <Link href="/contact" className="block py-3 border-b" onClick={() => setMobileOpen(false)}>Contact</Link>
          <div className="flex gap-4 pt-4 text-sm">
            <a href="tel:+919845331133" className="flex items-center gap-1"><FaPhone /> Call</a>
            <a href="https://wa.me/919845011779" target="_blank" className="flex items-center gap-1"><FaWhatsapp /> WhatsApp</a>
          </div>
        </div>
      )}
    </header>
  );
}