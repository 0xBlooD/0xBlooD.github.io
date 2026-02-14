import { portfolioData } from "@/data/portfolio";

const ExperienceSection = () => {
  return (
    <div className="space-y-4 text-sm md:text-base">
      <div className="text-muted-foreground">$ journalctl -u career.service --no-pager</div>
      <div className="mt-2 space-y-6 pl-2">
        {portfolioData.experience.map((job, i) => (
          <div key={i} className="space-y-1">
            <div className="text-muted-foreground">
              -- Unit career.service [{job.period}] --
            </div>
            <div className="text-foreground">
              {job.period.split(" — ")[0]} {job.company}: Starting {job.title}...
            </div>
            <div className="text-foreground pl-4">
              Company: {job.company}
            </div>
            <div className="text-foreground pl-4">
              Position: {job.title}
            </div>
            <div className="text-foreground pl-4">
              Period: {job.period}
            </div>
            {job.description.map((desc, j) => (
              <div key={j} className="text-foreground pl-4">
                [{job.period.split(" — ")[0]}] • {desc}
              </div>
            ))}
            <div className="text-muted-foreground pl-4">
              [  OK  ] Service running.
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
