'use client';

import { useTranslation } from '../lib/i18n-app';
import LanguageSwitcher from '../components/ui/LanguageSwitcher';
import { ThemeToggle } from '../components/ui/ThemeToggle';
import { Button } from '../components/ui/Button';
import { Hero } from '../components/sections/Hero';
import { Presentation } from '../components/sections/Presentation';
import { Skills } from '../components/sections/Skills';
import { Domains } from '../components/sections/Domains';
import { Experience } from '../components/sections/Experience';
import { Projects } from '../components/sections/Projects';
import { Education } from '../components/sections/Education';
import { Contact } from '../components/sections/Contact';
import { Downloads } from '../components/sections/Downloads';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Skip to main content for accessibility */}
      <Button
        href="#main-content"
        variant="primary"
        size="sm"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50"
      >
        {t('accessibility.skipToContent')}
      </Button>

      {/* Language Toggle and Theme Toggle */}
      <div className="absolute top-6 right-6 z-40 flex items-center gap-3">
        <ThemeToggle />
        <LanguageSwitcher />
      </div>

      <div className="container mx-auto px-6 py-16 max-w-4xl lg:max-w-6xl">
        {/* Main Content */}
        <main id="main-content" className="space-y-20 mt-32">
          <section className="hero-section">
            <Hero />
          </section>
          <section className="presentation-section">
            <Presentation />
          </section>
          <section className="skills-section">
            <Skills />
          </section>
          <section className="domains-section">
            <Domains />
          </section>
          <section className="experience-section">
            <Experience />
          </section>
          <section className="projects-section">
            <Projects />
          </section>
          <section className="education-section">
            <Education />
          </section>
          <section className="contact-section">
            <Contact />
          </section>
          <section className="downloads-section">
            <Downloads />
          </section>
        </main>
      </div>
    </div>
  );
}
