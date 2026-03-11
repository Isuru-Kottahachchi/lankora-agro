'use client';

import { useLanguage } from '@/components/providers';
import { t } from '@/lib/i18n';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import Link from 'next/link';

export default function AboutPage() {
  const { language } = useLanguage();

  const highlights = [
    {
      title: 'Founded',
      value: '2026',
      description: 'Established with a vision to bring premium agricultural products to the world',
    },
    {
      title: 'Countries Served',
      value: '50+',
      description: 'Exporting to markets across Europe, Middle East, Asia, and beyond',
    },
    {
      title: 'Product Categories',
      value: '4',
      description: 'Spices, Herbs, Agriculture Products, and Natural Health Solutions',
    },
    {
      title: 'Quality Standard',
      value: '100%',
      description: 'Every product meets international quality and certification standards',
    },
  ];

  const values = [
    {
      title: 'Quality First',
      description: 'We believe in delivering only the finest products that meet international standards',
      icon: '⭐',
    },
    {
      title: 'Sustainability',
      description: 'Committed to sustainable farming practices and environmental responsibility',
      icon: '🌱',
    },
    {
      title: 'Reliability',
      description: 'Consistent supply, timely delivery, and reliable partnerships with our clients',
      icon: '🤝',
    },
    {
      title: 'Innovation',
      description: 'Continuously improving our processes and expanding our product offerings',
      icon: '💡',
    },
  ];

  const team = [
    {
      role: 'Sourcing',
      description: 'Expert sourcing from certified farms to ensure the highest quality raw materials',
    },
    {
      role: 'Processing',
      description: 'State-of-the-art facilities with modern processing equipment and technology',
    },
    {
      role: 'Quality Control',
      description: 'Rigorous testing and quality assurance at every stage of production',
    },
    {
      role: 'Logistics',
      description: 'Efficient export and supply chain management to customers worldwide',
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Header */}
      <section className="py-16 md:py-24 border-b border-border bg-gradient-to-br from-accent/8 via-transparent to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            {t('about.title', language)}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            {t('about.description', language)}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-4 tracking-tight">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To provide premium quality agricultural products that bring natural goodness to every table, while supporting sustainable farming practices and building lasting partnerships with customers worldwide.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4 tracking-tight">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the most trusted exporter of premium spices and agricultural products, recognized for our unwavering commitment to quality, sustainability, and customer satisfaction across global markets.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-card border border-border hover:border-accent hover:shadow-md hover:shadow-accent/10 transition-all text-center space-y-2"
                >
                  <div className="text-3xl font-bold text-accent">{highlight.value}</div>
                  <h3 className="font-semibold">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 border-b border-border bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-card border border-border hover:border-accent hover:shadow-md transition-all space-y-4"
              >
                <div className="text-4xl">{value.icon}</div>
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operations */}
      <section className="py-20 md:py-28 border-b border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Operations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              From farm to table with precision and care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-card border border-border hover:border-accent/50 hover:shadow-sm transition-all space-y-3"
              >
                <div className="text-2xl font-bold text-accent">{(idx + 1).toString().padStart(2, '0')}</div>
                <h3 className="text-lg font-semibold">{item.role}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 md:py-28 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Interested in Partnering with Us?
          </h2>
          <p className="text-lg text-muted-foreground">
            We're always looking for reliable partners to expand our global reach
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition shadow-lg shadow-accent/20"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
