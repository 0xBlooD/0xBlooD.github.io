import { useTranslation } from "react-i18next";
import { portfolioData } from "@/data/portfolio";

const ProjectsSection = () => {
  const { t } = useTranslation();

  const projects = [
    {
      name: t("projects.list.cloudDeploy.name"),
      version: "2.4.1",
      description: t("projects.list.cloudDeploy.description"),
      tech: ["Go", "AWS SDK", "Terraform"],
      link: "github.com/johndoe/cloud-deploy-cli",
    },
    {
      name: t("projects.list.realtimeChat.name"),
      version: "1.2.0",
      description: t("projects.list.realtimeChat.description"),
      tech: ["TypeScript", "React", "WebSocket", "Redis"],
      link: "github.com/johndoe/realtime-chat",
    },
    {
      name: t("projects.list.logAnalyzer.name"),
      version: "3.0.0",
      description: t("projects.list.logAnalyzer.description"),
      tech: ["Python", "Elasticsearch", "Kafka"],
      link: "github.com/johndoe/log-analyzer",
    },
    {
      name: t("projects.list.dotfiles.name"),
      version: "1.0.0",
      description: t("projects.list.dotfiles.description"),
      tech: ["Bash", "Lua", "Nix"],
      link: "github.com/johndoe/dotfiles",
    },
  ];

  return (
    <div className="space-y-4 text-sm md:text-base">
      <div className="text-muted-foreground">$ df -h /mnt/projects/*</div>
      <div className="mt-2 space-y-6 pl-2">
        {projects.map((project, i) => (
          <div key={i} className="space-y-1">
            <div className="text-muted-foreground">
              Filesystem: /dev/sd{String.fromCharCode(97 + i)}1
            </div>
            <div className="text-foreground">
              Mounted on: /mnt/projects/{project.name}
            </div>
            <div className="text-foreground pl-4">
              Name: {project.name} v{project.version}
            </div>
            <div className="text-foreground pl-4">
              Desc: {project.description}
            </div>
            <div className="text-foreground pl-4">
              Tech: [{project.tech.join(", ")}]
            </div>
            <div className="text-foreground pl-4">
              Link: <a href={`https://${project.link}`} target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">{project.link}</a>
            </div>
            <div className="text-muted-foreground pl-4">
              [  OK  ] Filesystem mounted read-only.
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
