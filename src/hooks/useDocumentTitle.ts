import { useEffect } from 'react';

const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = `${title} | ${import.meta.env.VITE_COMPANY_NAME}`;

    return () => {
      document.title = import.meta.env.VITE_COMPANY_NAME;
    };
  }, [title]);
};

export default useDocumentTitle;
