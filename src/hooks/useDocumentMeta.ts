import { useEffect } from 'react';

export function useDocumentMeta() {
  useEffect(() => {
    document.title = 'Maybe Cat | Ask Your Cat for Wisdom';
    const setMeta = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };
    const setMetaName = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };
    setMeta('og:title', 'Maybe Cat | Ask Your Cat for Wisdom');
    setMeta('og:description', 'Upload your cat. Ask a question. Receive wisdom. Maybe.');
    setMeta('og:type', 'website');
    setMeta('og:url', 'https://maybecat.com');
    setMeta('og:image', 'https://maybecat.com/og-maybecat.png');
    setMetaName('twitter:card', 'summary_large_image');
    setMetaName('twitter:title', 'Maybe Cat | Ask Your Cat for Wisdom');
    setMetaName('twitter:description', 'Upload your cat. Ask a question. Receive wisdom. Maybe.');
    setMetaName('twitter:image', 'https://maybecat.com/og-maybecat.png');
    setMetaName('description', 'Upload your cat. Ask a question. Receive wisdom. Maybe.');
  }, []);
}
