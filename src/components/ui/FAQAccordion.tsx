'use client';
import { useState } from 'react';
import SchemaScript from './SchemaScript';
import { FAQPageSchema } from '@/lib/schema-org';

export default function FAQAccordion({
  items,
  includeSchema = false,
}: {
  items: { q: string; a: string }[];
  includeSchema?: boolean;
}) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <>
      {includeSchema && <SchemaScript schema={FAQPageSchema(items)} />}
      <div className="space-y-2">
        {items.map((faq, i) => (
          <div key={i} className="border border-gray-200 rounded bg-white">
            <button
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              className="w-full text-left px-4 py-3 font-medium flex justify-between items-center"
            >
              {faq.q} <span className="text-lg">{openIdx === i ? '−' : '+'}</span>
            </button>
            {openIdx === i && <div className="px-4 pb-4 text-gray-700">{faq.a}</div>}
          </div>
        ))}
      </div>
    </>
  );
}