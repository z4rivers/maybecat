import { useEffect } from 'react';

// Meta tags (OG, Twitter, description) are set statically in index.html
// so that social platforms and crawlers see them without executing JS.
// This hook only handles the document title for client-side navigation.
export function useDocumentMeta() {
  useEffect(() => {
    document.title = 'MaybeCat | Ask a Cat';
  }, []);
}
