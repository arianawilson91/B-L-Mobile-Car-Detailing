export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "B&L Auto Detailing",
    description:
      "Premium auto detailing services in Cape Coral, FL. Exterior wash, interior detail, and full detail packages.",
    telephone: "+1-239-203-6581",
    email: "bldetailing3@gmail.com",
    url: "https://www.blautodtailing.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cape Coral",
      addressRegion: "FL",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 26.5629,
        longitude: -81.9495,
      },
      geoRadius: "50000",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "16:00",
      },
    ],
    priceRange: "$50-$200+",
    image: "https://www.blautodtailing.com/logo.png",
  };
}
