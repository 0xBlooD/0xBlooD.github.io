import { portfolioData } from "@/data/portfolio";

const AboutSection = () => {
  const { about, name, title } = portfolioData;

  return (
    <div className="space-y-4 text-sm md:text-base">
      <div className="text-muted-foreground">$ cat /etc/profile</div>
      <div className="space-y-1 pl-2">
        <div><span className="text-muted-foreground">USER=</span>{name}</div>
        <div><span className="text-muted-foreground">ROLE=</span>{title}</div>
      </div>

      <div className="mt-6 text-muted-foreground">$ cat /var/log/bio.log</div>
      <div className="space-y-1 pl-2">
        {about.bio.map((line, i) => (
          <div key={i} className="text-foreground">{`> ${line}`}</div>
        ))}
      </div>

      <div className="mt-6 text-muted-foreground">$ ip addr show</div>
      <div className="pl-2 space-y-2 mt-2">
        <div>
          <div className="text-muted-foreground">1: lo: &lt;LOOPBACK,UP&gt; mtu 65536</div>
          <div className="pl-4 text-foreground">inet 127.0.0.1/8 scope host lo</div>
        </div>
        <div>
          <div className="text-muted-foreground">2: eth0: &lt;BROADCAST,MULTICAST,UP&gt; mtu 1500</div>
          <div className="pl-4 text-foreground">
            email: <a href={`mailto:${about.contact.email}`} className="underline hover:text-primary">{about.contact.email}</a>
          </div>
        </div>
        <div>
          <div className="text-muted-foreground">3: eth1: &lt;BROADCAST,MULTICAST,UP&gt; mtu 1500</div>
          <div className="pl-4 text-foreground">
            github: <a href={`https://${about.contact.github}`} target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">{about.contact.github}</a>
          </div>
        </div>
        <div>
          <div className="text-muted-foreground">4: eth2: &lt;BROADCAST,MULTICAST,UP&gt; mtu 1500</div>
          <div className="pl-4 text-foreground">
            linkedin: <a href={`https://${about.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">{about.contact.linkedin}</a>
          </div>
        </div>
        <div>
          <div className="text-muted-foreground">5: eth3: &lt;BROADCAST,MULTICAST,UP&gt; mtu 1500</div>
          <div className="pl-4 text-foreground">
            website: <a href={`https://${about.contact.website}`} target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">{about.contact.website}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
