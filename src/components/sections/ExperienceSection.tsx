import { useTranslation } from "react-i18next";

const ExperienceSection = () => {
  const { t } = useTranslation();

  const jobs = [
    {
      key: "senior",
      title: t("experience.jobs.senior.title"),
      company: t("experience.jobs.senior.company"),
      period: t("experience.jobs.senior.period"),
      description: [
        t("experience.jobs.senior.desc1"),
        t("experience.jobs.senior.desc2"),
        t("experience.jobs.senior.desc3"),
      ],
    },
    {
      key: "fullstack",
      title: t("experience.jobs.fullstack.title"),
      company: t("experience.jobs.fullstack.company"),
      period: t("experience.jobs.fullstack.period"),
      description: [
        t("experience.jobs.fullstack.desc1"),
        t("experience.jobs.fullstack.desc2"),
        t("experience.jobs.fullstack.desc3"),
        t("experience.jobs.fullstack.desc4"),
      ],
    },
    {
      key: "junior",
      title: t("experience.jobs.junior.title"),
      company: t("experience.jobs.junior.company"),
      period: t("experience.jobs.junior.period"),
      description: [
        t("experience.jobs.junior.desc1"),
        t("experience.jobs.junior.desc2"),
        t("experience.jobs.junior.desc3"),
      ],
    },
    {
      key: "instructor",
      title: t("experience.jobs.instructor.title"),
      company: t("experience.jobs.instructor.company"),
      period: t("experience.jobs.instructor.period"),
      description: [
        t("experience.jobs.instructor.desc1"),
        t("experience.jobs.instructor.desc2"),
        t("experience.jobs.instructor.desc3"),
      ],
    },
  ];

  return (
    <div className="space-y-4 text-sm md:text-base">
      <div className="text-muted-foreground">$ journalctl -u career.service --no-pager</div>
      <div className="mt-2 space-y-6 pl-2">
        {jobs.map((job, i) => (
          <div key={job.key} className="space-y-1">
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
