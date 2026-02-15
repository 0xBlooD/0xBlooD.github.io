import { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface SEOProps {
  title?: string;
  description?: string;
  section?: string;
}

const SEO = ({ title, description, section }: SEOProps) => {
  const { t } = useTranslation();

  useEffect(() => {
    // Update document title
    if (title) {
      document.title = `${title} | 0xBlooD`;
    } else if (section) {
      const sectionTitle = t(`nav.${section}`);
      document.title = `${sectionTitle} | 0xBlooD`;
    } else {
      document.title = "0xBlooD | Full-Stack Developer | PHP Laravel & JavaScript";
    }

    // Update meta description
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", description);
      }
    }
  }, [title, description, section, t]);

  return null;
};

export default SEO;
