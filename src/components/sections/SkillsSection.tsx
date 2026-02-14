import { portfolioData } from "@/data/portfolio";

const SkillsSection = () => {
  return (
    <div className="space-y-4 text-sm md:text-base">
      <div className="text-muted-foreground">$ dpkg --list | grep installed</div>
      <div className="mt-2 overflow-x-auto">
        <div className="text-muted-foreground whitespace-pre">
          {"+---------+-----------------+-----------+----------+--------------------+"}
        </div>
        <div className="text-muted-foreground whitespace-pre">
          {"| Status  | Package         | Version   | Category | Proficiency        |"}
        </div>
        <div className="text-muted-foreground whitespace-pre">
          {"+---------+-----------------+-----------+----------+--------------------+"}
        </div>
        {portfolioData.skills.map((skill) => {
          const barWidth = Math.round(skill.level / 5);
          const bar = "█".repeat(barWidth) + "░".repeat(20 - barWidth);
          return (
            <div key={skill.name} className="text-foreground whitespace-pre">
              {`| ii      | ${skill.name.padEnd(15)} | ${skill.version.padEnd(9)} | ${skill.category.padEnd(8)} | ${bar} |`}
            </div>
          );
        })}
        <div className="text-muted-foreground whitespace-pre">
          {"+---------+-----------------+-----------+----------+--------------------+"}
        </div>
      </div>
      <div className="text-muted-foreground mt-4">
        {portfolioData.skills.length} packages installed.
      </div>
    </div>
  );
};

export default SkillsSection;
