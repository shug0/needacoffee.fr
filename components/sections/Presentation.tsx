import { useTranslation } from '../../lib/i18n-app';
import { Section } from '../ui/Section';
import { SectionTitle, Text } from '../ui/Typography';

export function Presentation() {
  const { t } = useTranslation();

  return (
    <Section aria-labelledby="presentation-title">
      <SectionTitle id="presentation-title">
        {t('presentation.title')}
      </SectionTitle>
      <div className="space-y-6">
        <Text>{t('presentation.description')}</Text>
      </div>
    </Section>
  );
}
