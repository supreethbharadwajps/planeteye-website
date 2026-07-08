import HeroCarousel from '@/components/ui/HeroCarousel';
import TrustStrip from '@/components/ui/TrustStrip';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ProjectCard from '@/components/ui/ProjectCard';
import { projects } from '@/lib/projects';
import TestimonialsCarousel from '@/components/ui/TestimonialsCarousel';
import CTABanner from '@/components/ui/CTABanner';
import Link from 'next/link';
import Image from 'next/image';
import EnquiryForm from '@/components/ui/EnquiryForm';
import { generalFaqs } from '@/lib/faqs';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { blogPosts } from '@/lib/blog-posts';

export default function Home() {
  return (
    <>
      {/* Hero with inline enquiry docked */}
      <HeroCarousel />

      {/* Trust Strip */}
      <TrustStrip />

      {/* About / Why Planet Eye */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold uppercase tracking-widest text-sm font-semibold">15+ Years of Legacy</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3 mb-6 leading-tight">
                Crafting <span className="text-gold-gradient">Legible</span> Eco‑Friendly Farmland Assets
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Real estate investments – tangible, solid, artistic, and soulful. Planet Eye Group is one of Bangalore’s most trusted managed farmland developers. For over 15 years we’ve transformed carefully chosen locations into gated, self‑sustaining farm communities where you can build your weekend home or secure long‑term wealth.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our mission: <strong>to create legible, hassle‑free, eco‑friendly real estate assets and make them accessible to everyone through affordable means.</strong>
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-forest font-semibold border-b-2 border-gold pb-1 hover:gap-3 transition-all"
              >
                Learn More About Us <span>→</span>
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/banner_edited.jpg"
                alt="Planet Eye managed farmland"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent" />
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Projects Showcase */}
      <section className="bg-sand-dark py-24">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-gold uppercase tracking-widest text-sm font-semibold">Our Portfolio</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3">
                Premier Managed Farmland Projects
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                Each location is handpicked for its natural beauty, connectivity, and investment potential.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((proj, idx) => (
              <AnimatedSection key={proj.slug} className="h-full">
                <ProjectCard project={proj} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Phase 1 Sold Out Banner */}
      <section className="bg-forest py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <AnimatedSection>
            <span className="inline-block bg-gold text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Urgent
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-white font-bold">
              Forest View Phase 1 – SOLD OUT ✅
            </h2>
            <p className="text-gray-300 text-lg mt-2 mb-8">
              Phase 2 Now Open for Booking – Limited Plots Available
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/projects/forest-view"
                className="bg-gold text-white px-8 py-3 rounded font-semibold hover:bg-amber-600 transition shadow-lg"
              >
                Explore Forest View
              </Link>
              <Link
                href="/contact"
                className="border border-white text-white px-8 py-3 rounded font-semibold hover:bg-white hover:text-forest transition"
              >
                Book Site Visit
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-gold uppercase tracking-widest text-sm font-semibold">Client Stories</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3">
                Loved by Investors & Nature Enthusiasts
              </h2>
            </div>
            <TestimonialsCarousel />
          </AnimatedSection>
        </div>
      </section>

      {/* Loan / Finance Section */}
      <section className="py-24 bg-sand">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://www.planeteye.in/imgs/loan.jpeg"
                  alt="Farmland loan options"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-gold uppercase tracking-widest text-sm font-semibold">Easy Financing</span>
                <h2 className="font-serif text-4xl font-bold mt-3 mb-6">
                  Own Your Dream Farmland with <span className="text-gold-gradient">EMI</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We’ve arranged loan and EMI options through leading financial institutions. Register your plot and pay in comfortable monthly instalments. No hidden costs, transparent process.
                </p>
                <Link
                  href="/farmland-loan-finance"
                  className="inline-flex items-center gap-2 bg-gold text-white px-6 py-3 rounded font-semibold hover:bg-amber-600 transition"
                >
                  Explore EMI Options <span>→</span>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Inline Enquiry Section (another chance) */}
      <section className="py-24 bg-forest-dark text-white">
        <div className="max-w-3xl mx-auto text-center px-4">
          <AnimatedSection>
            <h2 className="font-serif text-4xl font-bold mb-4">Ready to Own a Piece of Nature?</h2>
            <p className="text-gray-300 mb-8">
              Fill in your details and our farmland expert will call you back within 24 hours.
            </p>
            <EnquiryForm />
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Snippet */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-gold uppercase tracking-widest text-sm font-semibold">Knowledge Hub</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3">
                Farmland Insights
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.slice(0, 3).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block bg-sand rounded-lg overflow-hidden shadow hover:shadow-xl transition"
                >
                  <div className="h-40 bg-forest/10 relative">
                    {post.image && (
                      <Image src={post.image} alt={post.title} fill className="object-cover" />
                    )}
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-gold font-semibold uppercase tracking-wide">{post.date}</p>
                    <h3 className="font-serif text-xl mt-1 group-hover:text-forest transition">{post.title}</h3>
                    <p className="text-gray-600 text-sm mt-2">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-forest font-semibold border-b-2 border-gold pb-1 hover:gap-3 transition-all"
              >
                Read All Articles <span>→</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-sand-dark">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-gold uppercase tracking-widest text-sm font-semibold">Questions?</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3">
                Frequently Asked
              </h2>
            </div>
            <FAQAccordion items={generalFaqs} includeSchema />
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <CTABanner />
    </>
  );
}