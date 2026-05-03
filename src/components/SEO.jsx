import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { seoConfig, SITE } from "@/lib/seo";

/**
 * Renders per-page <title>, meta description, canonical URL,
 * Open Graph, and Twitter Card tags.
 *
 * Usage in any page component:
 *   <SEO page="medscribeai" />
 */
export default function SEO({ page }) {
  const { pathname } = useLocation();
  const meta = seoConfig[page] || seoConfig.home;
  const canonical = `${SITE.SITE_URL}${pathname}`;

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.SITE_NAME} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
    </Helmet>
  );
}
