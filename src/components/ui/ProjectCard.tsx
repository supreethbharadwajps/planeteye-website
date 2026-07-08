import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/projects';
import { MapPin } from 'lucide-react';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-56 overflow-hidden">
        <Image src={project.hero} alt={project.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className="absolute bottom-3 left-3 bg-gold text-white text-xs font-bold px-3 py-1 rounded-full">
          {project.status}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-serif text-xl font-bold text-forest">{project.name}</h3>
        <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
          <MapPin size={14} />
          <span>{project.locationBrief}</span>
        </div>
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">{project.tagline}</p>
        <div className="mt-4 flex justify-between items-center text-xs">
          <span className="text-forest font-semibold">{project.plotSizes}</span>
          <span className="bg-forest/5 text-forest px-2 py-1 rounded">{project.pricePositioning}</span>
        </div>
      </div>
    </Link>
  );
}