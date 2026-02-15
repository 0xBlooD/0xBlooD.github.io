import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: "en", label: "EN" },
    { code: "pt-BR", label: "PT" },
    { code: "ja", label: "JA" },
  ];

  return (
    <div className="flex gap-2 text-xs md:text-sm">
      <span className="text-muted-foreground">Lang:</span>
      {languages.map((lang, index) => (
        <span key={lang.code}>
          <button
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`transition-colors ${
              i18n.language === lang.code || 
              (lang.code === "pt-BR" && i18n.language === "pt")
                ? "text-primary font-bold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {lang.label}
          </button>
          {index < languages.length - 1 && (
            <span className="text-muted-foreground mx-1">|</span>
          )}
        </span>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
