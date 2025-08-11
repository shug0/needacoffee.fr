import { Button } from '../components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-foreground">404</h1>
        <h2 className="text-2xl font-semibold text-foreground-secondary">
          Page non trouvée
        </h2>
        <p className="text-foreground-secondary max-w-md">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Button href="/" variant="primary" size="md">
          Retour à l&apos;accueil
        </Button>
      </div>
    </div>
  );
}
