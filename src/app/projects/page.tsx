import { projects } from '@/lib/projects';
import ProjectCard from '@/components/ui/ProjectCard';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export default function ProjectsIndex() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
     
      <h1 className="font-serif text-4xl mb-8">Our Managed Farmland Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}