'use client';

import Image from 'next/image';
import { useLanguage } from '@/components/providers';
import { t } from '@/lib/i18n';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function ProductsPage() {
  const { language } = useLanguage();

  const productCategories = [
    {
      id: 'spices',
      title: t('spices.title', language),
      icon: '🌶️',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=900&q=80',
      description: 'Premium spices sourced from the finest farms, offering authentic flavors and aromas.',
      products: [
        {
          name: t('spices.chili', language),
          image: 'https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?w=400&q=80',
          description: 'Pure chili powder with vibrant color and authentic taste',
          uses: ['Cooking', 'Seasoning', 'Industrial use'],
        },
        {
          name: t('spices.cinnamon', language),
          image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=400&q=80',
          description: 'Premium cinnamon sticks and powder with warm, sweet aroma',
          uses: ['Beverages', 'Baking', 'Traditional medicine'],
        },
        {
          name: t('spices.pepper', language),
          image: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=400&q=80',
          description: 'Freshly ground black pepper with sharp and peppery taste',
          uses: ['Seasoning', 'Cooking', 'Food processing'],
        },
        {
          name: t('spices.cloves', language),
          image: 'https://images.unsplash.com/photo-1638436462680-1b2b76fbe7fa?w=400&q=80',
          description: 'Whole cloves with distinctive aromatic flavor',
          uses: ['Spice blends', 'Beverages', 'Traditional use'],
        },
      ],
    },
    {
      id: 'herbs',
      title: t('herbs.title', language),
      icon: '🌿',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=80',
      description: 'Dried herbs and aromatic products of exceptional quality.',
      products: [
        {
          name: t('herbs.dried', language),
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
          description: 'Carefully dried herbs maintaining their nutritional value',
          uses: ['Cooking', 'Herbal remedies', 'Cosmetics'],
        },
        {
          name: t('herbs.tea', language),
          image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&q=80',
          description: 'Premium herbal tea blends for wellness and flavor',
          uses: ['Beverages', 'Health supplements', 'Hospitality'],
        },
        {
          name: t('herbs.aroma', language),
          image: 'https://images.unsplash.com/photo-1600857062241-98e5dba7f2e2?w=400&q=80',
          description: 'Natural aroma products for personal and commercial use',
          uses: ['Aromatherapy', 'Cosmetics', 'Home care'],
        },
      ],
    },
    {
      id: 'agriculture',
      title: t('agriculture.title', language),
      icon: '🌾',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=900&q=80',
      description: 'Quality grains, seeds, and pulses for agricultural and food industry.',
      products: [
        {
          name: t('agriculture.grains', language),
          image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80',
          description: 'Premium grains including rice, wheat, and cereals',
          uses: ['Food processing', 'Animal feed', 'Industrial use'],
        },
        {
          name: t('agriculture.seeds', language),
          image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&q=80',
          description: 'High-quality seeds for agricultural cultivation',
          uses: ['Farming', 'Oil extraction', 'Food production'],
        },
        {
          name: t('agriculture.pulses', language),
          image: 'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=400&q=80',
          description: 'Assorted pulses and legumes rich in nutrition',
          uses: ['Food preparation', 'Animal feed', 'Industrial use'],
        },
      ],
    },
    {
      id: 'natural',
      title: t('natural.title', language),
      icon: '✨',
      image: 'https://images.unsplash.com/photo-1608571423539-e951a8962f2a?w=900&q=80',
      description: 'Plant-based and natural health products.',
      products: [
        {
          name: t('natural.oils', language),
          image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=80',
          description: 'Pure extracted oils and natural concentrates',
          uses: ['Cooking', 'Cosmetics', 'Health supplements'],
        },
        {
          name: t('natural.health', language),
          image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=400&q=80',
          description: 'Natural health supplements and wellness products',
          uses: ['Health supplements', 'Pharmaceuticals', 'Food fortification'],
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Header */}
      <section className="py-8 md:py-12 border-b border-border/30 bg-gradient-to-br from-accent/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Our Product Range
          </h1>
          <p className="text-base text-foreground/60 max-w-2xl">
            Comprehensive collection of premium agricultural products for global markets
          </p>
        </div>
      </section>

      {/* Category Nav */}
      <nav className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border/40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-none py-0">
            {productCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap text-foreground/60 hover:text-accent hover:bg-muted/50 border-b-2 border-transparent hover:border-accent transition-all"
              >
                <span>{category.icon}</span>
                <span>{category.title}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Product Categories */}
      <section className="py-20 md:pt-10 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {productCategories.map((category) => (
            <div key={category.id} id={category.id} className="scroll-mt-20">
              <div className="mb-12">
                <div className="relative w-full h-56 md:h-72 rounded-lg overflow-hidden mb-8">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 1200px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 flex items-center gap-4">
                    <span className="text-4xl">{category.icon}</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">{category.title}</h2>
                  </div>
                </div>
                <p className="text-lg text-foreground/60 max-w-2xl">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.products.map((product, idx) => (
                  <div
                    key={idx}
                    className="rounded border border-border/50 hover:border-accent hover:bg-muted/30 transition overflow-hidden"
                  >
                    <div className="relative w-full h-40 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                    </div>
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-semibold text-accent">
                        {product.name}
                      </h3>
                      <p className="text-foreground/60">{product.description}</p>
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-foreground/70">
                          Applications:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {product.uses.map((use, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs rounded-full bg-muted text-foreground/70"
                            >
                              {use}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 md:py-28 bg-muted/30 border-y border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Quality Assurance</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Every product undergoes rigorous testing and quality control
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded border border-border/50 text-center space-y-3">
              <div className="text-4xl">🔬</div>
              <h3 className="text-xl font-semibold">Laboratory Testing</h3>
              <p className="text-foreground/60">
                All products tested in certified laboratories for purity and quality
              </p>
            </div>

            <div className="p-8 rounded border border-border/50 text-center space-y-3">
              <div className="text-4xl">📋</div>
              <h3 className="text-xl font-semibold">Certifications</h3>
              <p className="text-foreground/60">
                ISO, HACCP, and international compliance certifications
              </p>
            </div>

            <div className="p-8 rounded border border-border/50 text-center space-y-3">
              <div className="text-4xl">🚚</div>
              <h3 className="text-xl font-semibold">Safe Packaging</h3>
              <p className="text-foreground/60">
                Eco-friendly and secure packaging for international transport
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
