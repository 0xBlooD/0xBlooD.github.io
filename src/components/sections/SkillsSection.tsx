import { useTranslation } from "react-i18next";
import { portfolioData } from "@/data/portfolio";

const SkillsSection = () => {
  const { t } = useTranslation();
  const categories = Object.keys(portfolioData.skills) as Array<keyof typeof portfolioData.skills>;
  
  // Calculate totals
  const totalDirectories = categories.length;
  const totalFiles = categories.reduce(
    (sum, cat) => sum + portfolioData.skills[cat].length,
    0
  );

  return (
    <div className="space-y-4 text-sm md:text-base">
      <div className="text-muted-foreground">$ {t("skills.command")}</div>
      <div className="mt-2 font-mono">
        <div className="text-primary">/mnt/skills</div>
        {categories.map((category, catIndex) => {
          const isLastCategory = catIndex === categories.length - 1;
          const skills = portfolioData.skills[category];
          
          return (
            <div key={category}>
              <div className="text-foreground">
                {isLastCategory ? "└── " : "├── "}
                <span className="text-primary font-bold">{category}/</span>
              </div>
              {skills.map((skill, skillIndex) => {
                const isLastSkill = skillIndex === skills.length - 1;
                const prefix = isLastCategory ? "    " : "│   ";
                const branch = isLastSkill ? "└── " : "├── ";
                
                return (
                  <div key={skill.name} className="text-foreground">
                    {prefix}{branch}{skill.name}
                    <span className="text-muted-foreground"> ({skill.version})</span>
                  </div>
                );
              })}
            </div>
          );
        })}
        <div className="text-muted-foreground mt-4">
          {t("skills.summary", { directories: totalDirectories, files: totalFiles })}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
