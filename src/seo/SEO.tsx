import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
}

export default function SEO({ title, description, canonical }: SEOProps) {
  const canonicalUrl =
    canonical || `https://3stack.in${window.location.pathname}`;

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={title} />

      <meta property="og:description" content={description} />

      <meta property="og:type" content="website" />

      <meta property="og:url" content={canonicalUrl} />

      <meta
        property="og:image"
        content="https://3stack.in/images/og-image.jpg"
      />

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={title} />

      <meta name="twitter:description" content={description} />

      <meta
        name="twitter:image"
        content="https://3stack.in/images/og-image.jpg"
      />
    </Helmet>
  );
}
