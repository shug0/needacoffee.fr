import { useTranslation } from '../../lib/i18n-app';
import { Section } from '../ui/Section';
import { SectionTitle, CardTitle } from '../ui/Typography';
import { Card } from '../ui/Card';
import { Zap, Target, Rocket } from 'lucide-react';

export function Skills() {
  const { t, tArray } = useTranslation();

  const skills = [
    {
      title: t('skills.leadership.title'),
      items: tArray('skills.leadership.items'),
      icon: Zap,
    },
    {
      title: t('skills.designSystems.title'),
      items: tArray('skills.designSystems.items'),
      icon: Target,
    },
    {
      title: t('skills.performance.title'),
      items: tArray('skills.performance.items'),
      icon: Rocket,
    },
  ];

  return (
    <Section aria-labelledby="skills-title">
      <SectionTitle id="skills-title">{t('skills.title')}</SectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {skills.map((skill) => {
          const IconComponent = skill.icon;
          return (
            <Card key={skill.title} className="space-y-4">
              <div className="flex items-center gap-2">
                <IconComponent className="w-5 h-5 text-foreground-secondary" />
                <CardTitle>{skill.title}</CardTitle>
              </div>
              <ul className="space-y-2 ml-4">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm md:text-base leading-relaxed"
                  >
                    • {item}
                  </li>
                ))}
              </ul>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
