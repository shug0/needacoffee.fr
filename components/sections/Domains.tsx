import { useTranslation } from '../../lib/i18n-app';
import { Section } from '../ui/Section';
import { SectionTitle, BodyText } from '../ui/Typography';
import { Layers, Palette, Zap, User, Wifi, Bot, Lightbulb } from 'lucide-react';

export function Domains() {
  const { t, tArray } = useTranslation();

  const domains = tArray('domains.items');

  const domainIcons = [
    Layers, // Architecture Frontend
    Palette, // Design Systems
    Zap, // Performance & Optimisation
    User, // Expérience Utilisateur
    Wifi, // Temps réel & API
    Bot, // Automatisation & IA
    Lightbulb, // Conseil & Bonnes Pratiques
  ];

  return (
    <Section aria-labelledby="domains-title">
      <SectionTitle id="domains-title">{t('domains.title')}</SectionTitle>
      <div className="space-y-4">
        <ul className="space-y-2">
          {domains.map((domain, index) => {
            const IconComponent = domainIcons[index];
            return (
              <li key={domain} className="flex items-start gap-3">
                <IconComponent className="w-5 h-5 text-foreground-secondary mt-1 flex-shrink-0" />
                <BodyText>{domain}</BodyText>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
