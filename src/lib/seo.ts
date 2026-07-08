import type { Metadata } from 'next';

export function generatePageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: `https://planeteye.in${path}` },
    openGraph: {
      title,
      description,
      url: `https://planeteye.in${path}`,
      images: image ? [{ url: image, width: 1200, height: 630 }] : [],
    },
  };
}