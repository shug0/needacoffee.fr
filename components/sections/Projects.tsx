import { useTranslation } from '../../lib/i18n-app';
import { Section } from '../ui/Section';
import { SectionTitle, CardTitle, BodyText } from '../ui/Typography';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('projects.instantane.title'),
      description: t('projects.instantane.description'),
      url: t('projects.instantane.url'),
    },
    {
      title: t('projects.orguin.title'),
      description: t('projects.orguin.description'),
      url: t('projects.orguin.url'),
    },
    {
      title: t('projects.pnj.title'),
      description: t('projects.pnj.description'),
      url: t('projects.pnj.url'),
    },
    {
      title: t('projects.combien.title'),
      description: t('projects.combien.description'),
      url: t('projects.combien.url'),
    },
    {
      title: t('projects.discord.title'),
      description: t('projects.discord.description'),
      url: t('projects.discord.url'),
    },
  ];

  return (
    <Section aria-labelledby="projects-title">
      <SectionTitle id="projects-title">{t('projects.title')}</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.title} className="space-y-4 p-6">
            <div className="space-y-2">
              <CardTitle>{project.title}</CardTitle>
              <BodyText>{project.description}</BodyText>
            </div>
            <Button
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="sm"
              className="w-fit gap-2"
            >
              {project.url.includes('github.com') ? (
                <>
                  <Github className="w-4 h-4" />
                  Voir sur GitHub
                </>
              ) : (
                <>
                  <ExternalLink className="w-4 h-4" />
                  {project.url.replace(/^https?:\/\//, '')}
                </>
              )}
            </Button>
          </Card>
        ))}
      </div>
    </Section>
  );
}
