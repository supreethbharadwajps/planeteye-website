import { projects } from '@/lib/projects';
import GalleryMasonry from '@/components/ui/GalleryMasonry';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export default function GalleryPage() {
  const allImages = projects.flatMap(p => p.gallery.map(src => ({ src, project: p.name })));
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'Gallery' }]} />
      <h1 className="font-serif text-4xl mb-8">Gallery</h1>
      <GalleryMasonry images={allImages} />
    </div>
  );
}