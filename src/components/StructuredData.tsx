// components/StructuredData.tsx
import Script from "next/script";
import {
  COMPANY_NAME,
  COMPANY_URL,
  COMPANY_LOGO_URL,
  COMPANY_DESCRIPTION,
  COMPANY_FULL_ADDRESS,
  COMPANY_PHONE,
  COMPANY_EMAIL,
  COMPANY_SOCIAL_LINKS,
} from "@/app/constants";

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_NAME,
    url: COMPANY_URL,
    logo: COMPANY_LOGO_URL,
    description: COMPANY_DESCRIPTION,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY_FULL_ADDRESS.split(",")[0].trim(),
      addressLocality: COMPANY_FULL_ADDRESS.split(",")[1].trim(),
      addressRegion: COMPANY_FULL_ADDRESS.split(",")[2].trim().split(" ")[0],
      postalCode: COMPANY_FULL_ADDRESS.split(",")[2].trim().split(" ")[1],
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: COMPANY_PHONE,
      contactType: "customer service",
      email: COMPANY_EMAIL,
      areaServed: "US",
    },
    sameAs: COMPANY_SOCIAL_LINKS.map((link) => link.url),
  };

  return (
    <Script
      id="organization-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
