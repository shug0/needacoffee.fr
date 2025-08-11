import { useTranslation } from '../../lib/i18n-app';
import { Section } from '../ui/Section';
import { SectionTitle, CardTitle, TextSecondary } from '../ui/Typography';
import { Card } from '../ui/Card';

export function Experience() {
  const { t, tArray } = useTranslation();

  const experiences = [
    {
      title: t('experience.pause.title'),
      period: t('experience.pause.period'),
      items: tArray('experience.pause.items'),
    },
    {
      title: t('experience.tudigo.title'),
      period: t('experience.tudigo.period'),
      items: tArray('experience.tudigo.items'),
    },
    {
      title: t('experience.jellysmack.title'),
      period: t('experience.jellysmack.period'),
      items: tArray('experience.jellysmack.items'),
    },
    {
      title: t('experience.yousign.title'),
      period: t('experience.yousign.period'),
      items: tArray('experience.yousign.items'),
    },
    {
      title: t('experience.ekino.title'),
      period: t('experience.ekino.period'),
      items: tArray('experience.ekino.items'),
    },
  ];

  return (
    <Section aria-labelledby="experience-title">
      <SectionTitle id="experience-title">{t('experience.title')}</SectionTitle>
      <div className="space-y-8">
        {experiences.map((experience) => (
          <Card key={experience.title} className="space-y-4">
            <div className="space-y-2">
              <CardTitle>{experience.title}</CardTitle>
              <TextSecondary className="font-medium">
                {experience.period}
              </TextSecondary>
            </div>
            <ul className="space-y-2 ml-4">
              {experience.items.map((item: string) => (
                <li key={item} className="text-sm md:text-base leading-relaxed">
                  • {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
