interface SEOProps {
  title: string;
  description: string;
  type?: string;
  name?: string;
}

export default function SEO({ title, description, type = "website", name = "Aurelius Publishing" }: SEOProps) {
  // In a real Vite app without SSR, we might use react-helmet-async.
  // Here we'll just set document.title as a simple fallback.
  try {
    document.title = `${title} | ${name}`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  } catch (e) {
    // SSR safe
  }
  return null;
}
