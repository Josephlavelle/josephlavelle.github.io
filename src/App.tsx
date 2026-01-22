import { BentoGrid, BentoCard } from './components/BentoGrid';
import { ReadingCard } from './components/Reading';
import { GitHubStats } from './components/GitHubStats';
import { AboutCard } from './components/About';
import { CurrentProjects } from './components/CurrentProjects';
import { SocialLinks } from './components/Social';
import { LinkCard } from './components/LinkCard';
import { projects, socials } from './data/content';
import { Sparkles, BarChart3, Brain } from 'lucide-react';

function App() {
  return (
    <BentoGrid>
      <BentoCard className="about" delay={0}>
        <AboutCard />
      </BentoCard>

      <BentoCard className="reading" delay={0.1}>
        <ReadingCard />
      </BentoCard>

      <BentoCard className="github" delay={0.2} clickable>
        <GitHubStats />
      </BentoCard>

      <BentoCard className="proj1" delay={0.3}>
        <CurrentProjects />
      </BentoCard>

      <BentoCard className="proj2" delay={0.4} clickable>
        <LinkCard
          title={projects[1].title}
          description={projects[1].description}
          url={projects[1].url}
          tags={projects[1].tags}
          isPrivate={projects[1].isPrivate}
          icon={<BarChart3 size={24} />}
        />
      </BentoCard>

      <BentoCard className="proj3" delay={0.5} clickable>
        <LinkCard
          title={projects[2].title}
          description={projects[2].description}
          url={projects[2].url}
          tags={projects[2].tags}
          isPrivate={projects[2].isPrivate}
          icon={<Brain size={24} />}
        />
      </BentoCard>

      <BentoCard className="contact" delay={0.6}>
        <SocialLinks linkedin={socials.linkedin} email={socials.email} />
      </BentoCard>

      <BentoCard className="grokit" delay={0.7} clickable>
        <LinkCard
          title={projects[3].title}
          description={projects[3].description}
          url={projects[3].url}
          tags={projects[3].tags}
          isPrivate={projects[3].isPrivate}
          icon={<Sparkles size={24} />}
        />
      </BentoCard>
    </BentoGrid>
  );
}

export default App;
