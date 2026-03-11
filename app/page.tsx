'use client';

import { useLanguage } from '@/components/providers';
import { t } from '@/lib/i18n';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Leaf, Droplets, Wheat, Sparkles } from 'lucide-react';

export default function Home() {
  const { language } = useLanguage();

  const products = [
    {
      id: 'spices',
      title: t('products.spices', language),
      icon: '🌶️',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&q=80',
      description: t('spices.title', language),
      items: [
        t('spices.chili', language),
        t('spices.cinnamon', language),
        t('spices.pepper', language),
        t('spices.cloves', language),
      ],
    },
    {
      id: 'herbs',
      title: t('products.herbs', language),
      icon: '🌿',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&q=80',
      description: t('herbs.title', language),
      items: [
        t('herbs.dried', language),
        t('herbs.tea', language),
        t('herbs.aroma', language),
      ],
    },
    {
      id: 'agriculture',
      title: t('products.agriculture', language),
      icon: '🌾',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500&q=80',
      description: t('agriculture.title', language),
      items: [
        t('agriculture.grains', language),
        t('agriculture.seeds', language),
        t('agriculture.pulses', language),
      ],
    },
    {
      id: 'natural',
      title: t('products.natural', language),
      icon: '✨',
      image: 'https://images.unsplash.com/photo-1608571423539-e951a8962f2a?w=500&q=80',
      description: t('natural.title', language),
      items: [
        t('natural.oils', language),
        t('natural.health', language),
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-14 md:py-20 border-b border-border overflow-hidden min-h-[420px] flex items-center">
        {/* Full background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1800&q=80"
            alt="Premium spices background"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          {/* Dark + brand color overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/55 to-[#0d1a0a]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* Floating decorative spice images — left side */}
        <div className="absolute left-0 top-0 bottom-0 w-48 md:w-64 z-[1] hidden lg:flex flex-col justify-around p-4 gap-4 pointer-events-none">
          <div className="relative w-32 h-32 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl rotate-[-6deg] ml-4">
            <Image src="https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?w=300&q=80" alt="Chili spice" fill className="object-cover" sizes="128px" />
            <div className="absolute inset-0 bg-black/10" />
          </div>
          <div className="relative w-28 h-28 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl rotate-[4deg] ml-10">
            <Image src="https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=300&q=80" alt="Cinnamon" fill className="object-cover" sizes="112px" />
            <div className="absolute inset-0 bg-black/10" />
          </div>
          <div className="relative w-32 h-32 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl rotate-[-3deg] ml-2">
            <Image src="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=300&q=80" alt="Black pepper" fill className="object-cover" sizes="128px" />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>

        {/* Floating decorative images — right side */}
        <div className="absolute right-0 top-0 bottom-0 w-48 md:w-64 z-[1] hidden lg:flex flex-col justify-around p-4 gap-4 pointer-events-none items-end">
          <div className="relative w-32 h-32 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl rotate-[5deg] mr-4">
            <Image src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&q=80" alt="Fresh herbs" fill className="object-cover" sizes="128px" />
            <div className="absolute inset-0 bg-black/10" />
          </div>
          <div className="relative w-28 h-28 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl rotate-[-4deg] mr-10">
            <Image src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&q=80" alt="Wheat grains" fill className="object-cover" sizes="112px" />
            <div className="absolute inset-0 bg-black/10" />
          </div>
          <div className="relative w-32 h-32 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl rotate-[3deg] mr-2">
            <Image src="https://images.unsplash.com/photo-1638436462680-1b2b76fbe7fa?w=300&q=80" alt="Cloves" fill className="object-cover" sizes="128px" />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>

        {/* Hero Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center space-y-6 md:space-y-8">
            {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-white text-sm font-medium backdrop-blur-sm mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Global Agricultural Exporter
            </div> */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.6), 0 4px 16px rgba(0,0,0,0.4)' }}>
              {t('hero.title', language)}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 text-balance max-w-2xl mx-auto drop-shadow">
              {t('hero.subtitle', language)}
            </p>
            <p className="text-base md:text-lg text-white/65 max-w-3xl mx-auto">
              {t('hero.desc', language)}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition shadow-lg shadow-accent/30"
              >
                {t('hero.cta', language)}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/15 hover:border-white/60 backdrop-blur-sm transition"
              >
                {t('contact.title', language)}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Spice Image Strip */}
      {/* <section className="border-b border-border overflow-hidden bg-muted/20">
        <div className="flex">
          {[
            { src: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80', label: 'Spices' },
            { src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80', label: 'Herbs' },
            { src: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80', label: 'Grains' },
            { src: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=600&q=80', label: 'Cinnamon' },
            { src: 'https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?w=600&q=80', label: 'Chili' },
            { src: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80', label: 'Natural Oils' },
          ].map((item, idx) => (
            <div key={idx} className="relative flex-1 min-w-[120px] h-24 md:h-36 group overflow-hidden">
              <Image
                src={item.src}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 33vw, 16vw"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors duration-300" />
              <span className="absolute bottom-2 left-0 right-0 text-center text-white/90 text-xs font-semibold tracking-wide drop-shadow">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section> */}

      {/* Featured Products */}
      <section className="py-20 md:pt-10 md:pb-28 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Product Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Discover our comprehensive range of premium agricultural products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products#${product.id}`}
                className="group rounded-xl border border-border bg-card hover:border-accent hover:shadow-lg hover:shadow-accent/10 transition-all duration-200 overflow-hidden"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <span className="text-2xl drop-shadow">{product.icon}</span>
                    <h3 className="text-white font-bold text-base drop-shadow">
                      {product.title}
                    </h3>
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {product.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-1 text-accent text-sm font-semibold pt-1 group-hover:gap-2 transition-all">
                    View Products <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Choose Lankora Agro</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Excellence, quality, and reliability in every product
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="rounded-xl border border-border overflow-hidden hover:border-accent/50 hover:shadow-md transition-all duration-200 group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
                  alt="Premium Quality"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white font-bold text-lg drop-shadow">🏆 Premium Quality</span>
                </div>
              </div>
              <div className="p-6 bg-card">
                <p className="text-muted-foreground">
                  Sourced from the finest farms with strict quality control standards and international certifications
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-xl border border-border overflow-hidden hover:border-accent/50 hover:shadow-md transition-all duration-200 group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80"
                  alt="Global Reach"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white font-bold text-lg drop-shadow">🌍 Global Reach</span>
                </div>
              </div>
              <div className="p-6 bg-card">
                <p className="text-muted-foreground">
                  Exporting to 50+ countries across Europe, Middle East, Asia and worldwide markets
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-xl border border-border overflow-hidden hover:border-accent/50 hover:shadow-md transition-all duration-200 group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80"
                  alt="Certified & Compliant"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white font-bold text-lg drop-shadow">✅ Certified & Compliant</span>
                </div>
              </div>
              <div className="p-6 bg-card">
                <p className="text-muted-foreground">
                  All products meet ISO, HACCP and international standards and certifications
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=1600&q=80"
            alt="Agricultural products"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d1a0a]/90 via-[#141e0f]/85 to-black/80" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Partner with Lankora Agro?
          </h2>
          <p className="text-lg text-white/75">
            Discover how we can supply your business with premium agricultural products
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition shadow-lg shadow-accent/30"
            >
              Get in Touch
            </Link>
            <Link
              href="/markets"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/35 text-white rounded-lg hover:bg-white/10 hover:border-white/55 backdrop-blur-sm transition"
            >
              Learn About Markets
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
