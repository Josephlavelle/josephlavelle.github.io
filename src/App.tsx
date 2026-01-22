import { BentoGrid, BentoCard } from './components/BentoGrid';
import { ReadingCard } from './components/Reading';
import { GitHubStats } from './components/GitHubStats';
import { AboutCard } from './components/About';
import { ProjectCard } from './components/Projects';
import { CurrentProjects } from './components/CurrentProjects';
import { SocialLinks } from './components/Social';
import { LinkCard } from './components/LinkCard';
import { projects, socials } from './data/content';
import { Sparkles } from 'lucide-react';

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
        <ProjectCard project={projects[1]} />
      </BentoCard>

      <BentoCard className="proj3" delay={0.5} clickable>
        <ProjectCard project={projects[2]} />
      </BentoCard>

      <BentoCard className="contact" delay={0.6}>
        <SocialLinks linkedin={socials.linkedin} email={socials.email} />
      </BentoCard>

      <BentoCard className="grokit" delay={0.7} clickable>
        <LinkCard
          title="GrokIt"
          description="AI-powered quiz generator. Upload any text and get instant multiple-choice questions to test your knowledge."
          url="https://grok-it.xyz"
          icon={<Sparkles size={24} />}
        />
      </BentoCard>
    </BentoGrid>
  );
}

export default App;
