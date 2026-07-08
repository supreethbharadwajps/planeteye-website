import { blogPosts } from '@/lib/blog-posts';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import EnquiryForm from '@/components/ui/EnquiryForm';
import SchemaScript from '@/components/ui/SchemaScript';
import { ArticleSchema } from '@/lib/schema-org';

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <SchemaScript schema={ArticleSchema(post)} />
    
      <h1 className="font-serif text-4xl mb-2">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-6">{post.date}</p>
      <article className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      <div className="mt-12 bg-sand-dark p-6 rounded">
        <h2 className="font-serif text-2xl mb-2">Interested in farmland?</h2>
        <p>Book a site visit or enquire now.</p>
        <EnquiryForm />
      </div>
    </div>
  );
}