import { ShieldCheck, Leaf, MapPin, Clock } from 'lucide-react';

const items = [
  { label: '15+ Years Legacy', icon: Clock, desc: 'Trusted since 2009' },
  { label: '4 Premium Projects', icon: MapPin, desc: 'Prime locations near Bangalore' },
  { label: '100% Legal Titles', icon: ShieldCheck, desc: 'RERA & bank verified' },
  { label: 'Eco‑Friendly', icon: Leaf, desc: 'Sustainable farm communities' },
];

export default function TrustStrip() {
  return (
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                <Icon size={24} />
              </div>
              <span className="font-semibold text-forest">{item.label}</span>
              <span className="text-xs text-gray-500">{item.desc}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}