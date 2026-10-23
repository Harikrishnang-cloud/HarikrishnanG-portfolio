import { useEffect } from "react";

export interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
  ogType?: string;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export const SEOHead = ({
  title,
  description,
  canonicalUrl,
  ogImage = "https://harikrishnang.vercel.app/HK_image.jpg",
  ogType = "website",
  jsonLd,
}: SEOHeadProps) => {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper to update or create meta tags
    const setMetaTag = (attrName: "name" | "property", attrVal: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // 2. Standard Meta Tags
    setMetaTag("name", "description", description);

    // 3. Open Graph Tags
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:image", ogImage);
    setMetaTag("property", "og:type", ogType);

    // 4. Twitter Tags
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:url", canonicalUrl);
    setMetaTag("name", "twitter:image", ogImage);

    // 5. Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", canonicalUrl);

    // 6. JSON-LD Dynamic Injection
    let jsonLdScript = document.getElementById("dynamic-json-ld") as HTMLScriptElement | null;
    if (jsonLd) {
      if (!jsonLdScript) {
        jsonLdScript = document.createElement("script");
        jsonLdScript.id = "dynamic-json-ld";
        jsonLdScript.type = "application/ld+json";
        document.head.appendChild(jsonLdScript);
      }
      jsonLdScript.textContent = JSON.stringify(jsonLd);
    } else if (jsonLdScript) {
      jsonLdScript.remove();
    }

    return () => {
      // Cleanup dynamically injected JSON-LD on unmount
      const existingScript = document.getElementById("dynamic-json-ld");
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [title, description, canonicalUrl, ogImage, ogType, jsonLd]);

  return null;
};

export default SEOHead;
