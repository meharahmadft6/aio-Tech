import { MetadataRoute } from "next";
import { COMPANY_URL, SITE_PAGES } from "./constants";

type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseSitemap = {
    url: `${COMPANY_URL}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 1,
  };

  const pageSitemaps = SITE_PAGES.map((page) => {
    const changeFrequency: ChangeFrequency =
      page.path === "/blog" ? "weekly" : "monthly";

    return {
      url: `${COMPANY_URL}${page.path}`,
      lastModified: new Date(),
      changeFrequency,
      priority: page.path === "/services" ? 0.8 : 0.5,
    };
  });

  return [baseSitemap, ...pageSitemaps];
}
