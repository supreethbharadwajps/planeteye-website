import Link from 'next/link';
import SchemaScript from './SchemaScript';
import { BreadcrumbListSchema } from '@/lib/schema-org';

interface Crumb {
  name: string;
  url: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const schema = BreadcrumbListSchema(items);

  return (
    <nav className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500" aria-label="Breadcrumb">
      <SchemaScript schema={schema} />
      <ol className="flex flex-wrap gap-1">
        {items.map((item, i) => (
          <li key={i} className="flex items-center">
            {i > 0 && <span className="mx-1">/</span>}
            {i === items.length - 1 ? (
              <span className="text-gray-800">{item.name}</span>
            ) : (
              <Link href={item.url} className="hover:underline">{item.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}