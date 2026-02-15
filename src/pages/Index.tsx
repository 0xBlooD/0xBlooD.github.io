import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { portfolioData } from "@/data/portfolio";
import BootSequence from "@/components/BootSequence";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import SEO from "@/components/SEO";

type View = "menu" | "booting" | "section";

const Index = () => {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [view, setView] = useState<View>("menu");
  const [activeSection, setActiveSection] = useState("");
  const [countdown, setCountdown] = useState(10);
  const [countdownActive, setCountdownActive] = useState(true);

  const menuEntries = [
    { label: t("nav.about"), id: "about" },
    { label: t("nav.experience"), id: "experience" },
    { label: t("nav.projects"), id: "projects" },
    { label: t("nav.skills"), id: "skills" },
  ];

  // Countdown timer
  useEffect(() => {
    if (!countdownActive || view !== "menu") return;
    if (countdown <= 0) {
      bootInto(0);
      return;
    }
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown, countdownActive, view]);

  const bootInto = useCallback((index: number) => {
    setCountdownActive(false);
    setActiveSection(menuEntries[index].id);
    setView("booting");
  }, []);

  const goBack = useCallback(() => {
    setView("menu");
    setActiveSection("");
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (view === "menu") {
        if (e.key === "ArrowUp") {
          e.preventDefault();
          setCountdownActive(false);
          setSelectedIndex((i) => (i > 0 ? i - 1 : menuEntries.length - 1));
        } else if (e.key === "ArrowDown") {
          e.preventDefault();
          setCountdownActive(false);
          setSelectedIndex((i) => (i < menuEntries.length - 1 ? i + 1 : 0));
        } else if (e.key === "Enter") {
          e.preventDefault();
          bootInto(selectedIndex);
        }
      } else if (view === "section") {
        if (e.key === "Escape") {
          e.preventDefault();
          goBack();
        }
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [view, selectedIndex, bootInto, goBack]);

  const renderSection = () => {
    switch (activeSection) {
      case "about": return <AboutSection />;
      case "experience": return <ExperienceSection />;
      case "projects": return <ProjectsSection />;
      case "skills": return <SkillsSection />;
      default: return null;
    }
  };

  if (view === "booting") {
    return (
      <div className="min-h-screen bg-background crt-glow">
        <div className="crt-overlay" />
        <BootSequence
          moduleName={menuEntries.find((e) => e.id === activeSection)?.label || ""}
          onComplete={() => setView("section")}
        />
      </div>
    );
  }

  if (view === "section") {
    return (
      <>
        <SEO section={activeSection} />
        <div className="min-h-screen bg-background crt-glow">
          <div className="crt-overlay" />
          <div className="p-4 md:p-8 max-w-4xl mx-auto">
            <div className="mb-6 flex items-center gap-4 flex-wrap">
              <button
                onClick={goBack}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                [{t("nav.backToMenu")}]
              </button>
              <span className="text-muted-foreground">|</span>
              <span className="text-muted-foreground">{t("nav.pressEsc")}</span>
              <span className="text-muted-foreground">|</span>
              <LanguageSwitcher />
            </div>
            {renderSection()}
            <div className="mt-8 text-muted-foreground text-sm">
              <span className="cursor-blink">█</span>
            </div>
          </div>
        </div>
      </>
    );
  }

  // GRUB Menu
  return (
    <>
      <SEO />
      <div className="min-h-screen bg-background flex flex-col crt-glow">
        <div className="crt-overlay" />

      {/* Header */}
      <div className="p-4 md:p-8">
        <pre className="text-foreground text-xs md:text-sm leading-tight overflow-x-auto">
          {portfolioData.ascii}
        </pre>
        <div className="mt-4 text-muted-foreground text-sm flex items-center justify-between flex-wrap gap-4">
          <span>
            {t("grub.version")} {new Date().getFullYear()}.{String(new Date().getMonth() + 1).padStart(2, '0')}
          </span>
          <LanguageSwitcher />
        </div>
        <div className="border-b border-border mt-2" />
      </div>

      {/* Menu */}
      <div className="flex-1 flex flex-col justify-center px-4 md:px-8">
        <div className="max-w-2xl mx-auto w-full">
          <div className="border border-border p-4">
            <div className="text-foreground text-sm mb-4">
              {t("grub.selectSection")}
            </div>
            {menuEntries.map((entry, i) => (
              <button
                key={entry.id}
                onClick={() => {
                  setCountdownActive(false);
                  setSelectedIndex(i);
                  bootInto(i);
                }}
                onMouseEnter={() => {
                  setCountdownActive(false);
                  setSelectedIndex(i);
                }}
                className={`w-full text-left px-4 py-2 text-sm md:text-base transition-colors ${
                  i === selectedIndex
                    ? "bg-foreground text-background font-bold"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {i === selectedIndex ? "▸ " : "  "}
                {entry.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 md:p-8 space-y-2">
        <div className="border-t border-border pt-4" />
        <div className="text-muted-foreground text-xs md:text-sm flex flex-wrap gap-x-6">
          <span>{t("grub.moveUp")}</span>
          <span>{t("grub.enter")}</span>
          <span>{t("grub.esc")}</span>
        </div>
        {countdownActive && view === "menu" && (
          <div className="text-muted-foreground text-xs md:text-sm">
            {t("grub.autoboot", { count: countdown })}
            <span className="cursor-blink ml-1">█</span>
          </div>
        )}
      </div>
      </div>
    </>
  );
};

export default Index;
