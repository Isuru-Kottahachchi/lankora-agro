import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />

      <section className="flex-1 flex items-center justify-center py-20">
        <div className="text-center space-y-6 px-4">
          <div className="text-6xl md:text-8xl font-bold text-accent">404</div>
          <h1 className="text-3xl md:text-4xl font-bold">Page Not Found</h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition shadow-lg shadow-accent/20"
          >
            Back to Home
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
