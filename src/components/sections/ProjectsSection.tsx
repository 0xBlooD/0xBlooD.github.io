import { portfolioData } from "@/data/portfolio";

const ProjectsSection = () => {
  return (
    <div className="space-y-4 text-sm md:text-base">
      <div className="text-muted-foreground">$ df -h /mnt/projects/*</div>
      <div className="mt-2 space-y-6 pl-2">
        {portfolioData.projects.map((project, i) => (
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
