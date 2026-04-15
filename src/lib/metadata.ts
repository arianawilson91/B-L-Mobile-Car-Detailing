import type { Metadata } from "next";

const BASE_URL = "https://www.blautodtailing.com";

export const sharedMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "B&L Auto Detailing | Professional Car Detailing",
    template: "%s | B&L Auto Detailing",
  },
  description:
    "B&L Auto Detailing provides premium car detailing services in Cape Coral, FL. Exterior wash, interior cleaning, full detail packages and more. Est. 2024.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "B&L Auto Detailing",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "B&L Auto Detailing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export function buildPageMetadata(
  title: string,
  description: string,
  path: string
): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | B&L Auto Detailing`,
      description,
      url: path,
    },
  };
}
