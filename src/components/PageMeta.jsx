import { useEffect } from "react";

export default function PageMeta({ title, description }) {
  useEffect(() => {
    // Title
    document.title = title;

    // Meta description
    let desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", description);

    // OG tags
    const setOg = (property, content) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (el) el.setAttribute("content", content);
    };

    setOg("og:title", title);
    setOg("og:description", description);
    setOg("twitter:title", title);
    setOg("twitter:description", description);
  }, [title, description]);

  return null;
}
