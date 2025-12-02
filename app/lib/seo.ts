import type { Metadata } from "next";
import { client } from "../server";

const DEFAULT_OG_IMAGE = `${client}/assets/og-image.jpg`;

interface SEOProps {
  title: string;
  description?: string;
  url?: string;
  image?: string;
}

export const generateMetadata = ({
  title,
  description = "One-Day International Conference in Honour of Prof. Timothy Oloyede Opooola, bringing together scholars in pure and applied mathematics.",
  url = "/",
  image = DEFAULT_OG_IMAGE,
}: SEOProps): Metadata => {
  const safeUrl = url.startsWith("/") ? url : `/${url}`;
  const pageUrl = `${client}${safeUrl}`;

  return {
    title,
    description,
    keywords: "Mathematics, Conference, Nigeria, Academic, Opooola, Applied Mathematics, Pure Mathematics",
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: "Opooola Conference 2026",
      images: [image],
      type: "website",
      locale: "en_NG",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: "index, follow",
    alternates: {
      canonical: pageUrl,
    },
  };
};
