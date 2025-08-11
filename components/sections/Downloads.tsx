import { useTranslation } from '../../lib/i18n-app';
import { Section } from '../ui/Section';
import { SectionTitle, BodyText, CardTitle } from '../ui/Typography';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Download } from 'lucide-react';

export function Downloads() {
  const { t, locale } = useTranslation();

  const documents = [
    {
      title: t('downloads.cv.title'),
      description: t('downloads.cv.description'),
      url:
        locale === 'en'
          ? '/files/Thomas_Alberola_CV _EN.pdf'
          : '/files/Thomas_Alberola_CV_FR.pdf',
      size: locale === 'en' ? '750 KB' : '744 KB',
      type: t('downloads.cv.type'),
    },
    // Only show anonymized document for French locale
    ...(locale === 'fr'
      ? [
          {
            title: t('downloads.anonymous.title'),
            description: t('downloads.anonymous.description'),
            url: '/files/Dossier de compétence Anonyme - Senior frontend.pdf',
            size: '161 KB',
            type: t('downloads.anonymous.type'),
          },
        ]
      : []),
  ];

  return (
    <Section aria-labelledby="downloads-title">
      <SectionTitle id="downloads-title">{t('downloads.title')}</SectionTitle>
      <BodyText>{t('downloads.description')}</BodyText>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {documents.map((doc) => (
          <Card key={doc.title} className="p-6">
            <div className="space-y-4">
              <div>
                <CardTitle>{doc.title}</CardTitle>
                <p className="text-sm text-foreground-secondary mt-1">
                  {doc.size} • {doc.type}
                </p>
              </div>
              <BodyText>{doc.description}</BodyText>
              <Button
                href={doc.url}
                download
                variant="primary"
                size="sm"
                className="w-fit gap-2"
              >
                <Download className="w-4 h-4" />
                {t('downloads.download')}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
