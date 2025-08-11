import { useTranslation } from '../../lib/i18n-app';
import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/Typography';
import { Button } from '../ui/Button';
import { Mail, Linkedin, Github } from 'lucide-react';

export function Contact() {
  const { t } = useTranslation();

  const contactInfo = [
    {
      label: 'Email',
      value: t('contact.email'),
      href: `mailto:${t('contact.email')}`,
    },
    {
      label: 'LinkedIn',
      value: t('contact.linkedin'),
      href: 'https://linkedin.com/in/thomasalberola',
    },
    {
      label: 'GitHub',
      value: t('contact.github'),
      href: 'https://github.com/shug0',
    },
  ];

  return (
    <Section aria-labelledby="contact-title">
      <SectionTitle id="contact-title">{t('contact.title')}</SectionTitle>
      <p className="text-xl md:text-2xl text-foreground-secondary">
        {t('contact.subtitle')}
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        {contactInfo.map((info) => (
          <div key={info.label} className="space-y-2">
            <p className="text-sm md:text-base text-foreground-secondary font-medium">
              {info.label}
            </p>
            <Button
              href={info.href}
              variant="outline"
              size="lg"
              className="text-xl flex items-center gap-2 md:text-2xl"
            >
              {info.label === 'Email' && <Mail className="w-5 h-5" />}
              {info.label === 'LinkedIn' && <Linkedin className="w-5 h-5" />}
              {info.label === 'GitHub' && <Github className="w-5 h-5" />}
              {info.value}
            </Button>
          </div>
        ))}
      </div>
    </Section>
  );
}
