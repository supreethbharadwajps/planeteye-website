'use client';
import Image from 'next/image';
import { useState } from 'react';

interface GalleryImage {
  src: string;
  project: string;
}

export default function GalleryMasonry({ images }: { images: GalleryImage[] }) {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? images : images.filter((img) => img.project === filter);
  const projects = [...new Set(images.map((i) => i.project))];

  return (
    <div>
      <div className="flex gap-2 mb-4 flex-wrap">
        <button onClick={() => setFilter('All')} className={`px-3 py-1 rounded ${filter === 'All' ? 'bg-forest text-white' : 'bg-gray-200'}`}>All</button>
        {projects.map((p) => (
          <button key={p} onClick={() => setFilter(p)} className={`px-3 py-1 rounded ${filter === p ? 'bg-forest text-white' : 'bg-gray-200'}`}>{p}</button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {filtered.map((img, idx) => (
          <div key={idx} className="relative aspect-square">
            <Image src={img.src} alt={img.project} fill className="object-cover rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}