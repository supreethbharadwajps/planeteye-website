import { blogPosts } from '@/lib/blog-posts';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export default function BlogList() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      
      <h1 className="font-serif text-4xl mb-8">Farmland Insights</h1>
      <div className="grid gap-6">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block bg-white p-6 rounded shadow hover:shadow-md">
            <h2 className="font-serif text-2xl">{post.title}</h2>
            <p className="text-gray-600 mt-2">{post.excerpt}</p>
            <p className="text-sm text-gray-400 mt-1">{post.date}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}