import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { getProductDetail } from '@/lib/product-details';

type ProductDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProductDetailsPage({ params }: ProductDetailsPageProps) {
  const { slug } = await params;
  const product = getProductDetail(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="py-8 border-b border-border/30 bg-gradient-to-br from-accent/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/products" className="inline-flex text-sm text-foreground/70 hover:text-accent transition mb-4">
            ← Back to Products
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
          <p className="text-foreground/70 mt-3 max-w-3xl">{product.description}</p>
        </div>
      </section>

      <section className="py-12 md:py-16 border-b border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden border border-border/40">
              <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>

            <div className="space-y-8">
              <div className="rounded-xl border border-border/50 bg-card p-6">
                <h2 className="text-xl font-semibold mb-3">How we make it</h2>
                <ul className="space-y-2 text-foreground/70">
                  {product.process.map((step, index) => (
                    <li key={step} className="flex gap-3">
                      <span className="text-accent font-semibold">{index + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-border/50 bg-card p-6">
                <h2 className="text-xl font-semibold mb-3">Available quantities</h2>
                <div className="flex flex-wrap gap-2">
                  {product.quantities.map((quantity) => (
                    <span key={quantity} className="px-3 py-1.5 rounded-full text-sm bg-muted text-foreground/80">
                      {quantity}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-border/50 bg-card p-6">
                <h2 className="text-xl font-semibold mb-3">Delivery options</h2>
                <ul className="space-y-2 text-foreground/70 list-disc pl-5">
                  {product.delivery.map((option) => (
                    <li key={option}>{option}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-border/50 bg-card p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold">Contact & Inquiry</h2>
              <p className="text-foreground/70 mt-2">Ask for pricing, MOQs, delivery timelines, and private labeling support.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${product.inquiryEmail}?subject=${encodeURIComponent(`Inquiry for ${product.name}`)}`}
                className="px-5 py-2.5 rounded-md bg-accent text-white font-medium hover:bg-accent/90 transition"
              >
                Send Inquiry
              </a>
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-md border border-border text-foreground hover:bg-muted transition"
              >
                Contact Page
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
