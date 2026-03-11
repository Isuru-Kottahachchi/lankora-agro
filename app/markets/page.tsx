'use client';

import { useLanguage } from '@/components/providers';
import { t } from '@/lib/i18n';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function MarketsPage() {
  const { language } = useLanguage();

  const regions = [
    {
      region: 'Europe',
      icon: '🇪🇺',
      countries: ['Germany', 'France', 'UK', 'Italy', 'Spain', 'Netherlands'],
      description: 'Our largest market with strong partnerships in retail, food service, and industrial sectors',
      products: ['Premium Spices', 'Herbal Products', 'Organic Agriculture'],
    },
    {
      region: 'Middle East',
      icon: '🧞',
      countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman'],
      description: 'Growing market with high demand for premium spices and natural products',
      products: ['Spices', 'Natural Oils', 'Pulses'],
    },
    {
      region: 'Asia',
      icon: '🏯',
      countries: ['Japan', 'Singapore', 'South Korea', 'Malaysia', 'Thailand'],
      description: 'Expanding presence with strong demand for authentic spices and herbs',
      products: ['Herbs & Aromatics', 'Spices', 'Tea Products'],
    },
    {
      region: 'North America',
      icon: '🗽',
      countries: ['USA', 'Canada', 'Mexico'],
      description: 'Growing market segment with increasing demand for natural and organic products',
      products: ['Organic Spices', 'Health Supplements', 'Natural Products'],
    },
    {
      region: 'Africa',
      icon: '🦁',
      countries: ['South Africa', 'Nigeria', 'Egypt'],
      description: 'Emerging market with potential for expansion and regional distribution',
      products: ['Agricultural Products', 'Spices', 'Seeds'],
    },
    {
      region: 'Oceania',
      icon: '🌏',
      countries: ['Australia', 'New Zealand'],
      description: 'Premium market segment with focus on quality and sustainability',
      products: ['Premium Spices', 'Organic Products', 'Health Supplements'],
    },
  ];

  const services = [
    {
      title: 'Bulk Exports',
      description: 'Large volume shipments for retailers and food service industries',
      icon: '📦',
    },
    {
      title: 'B2B Partnerships',
      description: 'Customized solutions for distributors and importers',
      icon: '🤝',
    },
    {
      title: 'Private Labeling',
      description: 'Custom packaging and branding for your business',
      icon: '🏷️',
    },
    {
      title: 'Quality Certifications',
      description: 'ISO, HACCP, Organic, and other international certifications',
      icon: '✅',
    },
    {
      title: 'Supply Chain',
      description: 'Efficient logistics and timely delivery to your location',
      icon: '🚚',
    },
    {
      title: 'Technical Support',
      description: 'Expert guidance on product selection and applications',
      icon: '📞',
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Header */}
      <section className="py-16 md:py-24 border-b border-border bg-gradient-to-br from-accent/8 via-transparent to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            {t('markets.title', language)}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            {t('markets.description', language)}
          </p>
        </div>
      </section>

      {/* Global Markets */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Our Export Regions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Serving customers across six continents with quality and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-card border border-border hover:border-accent hover:shadow-md hover:shadow-accent/10 transition-all space-y-4"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{region.icon}</span>
                  <h3 className="text-xl font-semibold">{region.region}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{region.description}</p>
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-foreground/80">Key Countries:</p>
                  <div className="flex flex-wrap gap-2">
                    {region.countries.map((country, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground border border-border"
                      >
                        {country}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-2 pt-2 border-t border-border">
                  <p className="text-xs font-semibold text-accent">Key Products:</p>
                  <div className="space-y-1">
                    {region.products.map((product, i) => (
                      <p key={i} className="text-xs text-muted-foreground flex items-center gap-1.5">
                        <span className="w-1 h-1 bg-accent rounded-full flex-shrink-0" />
                        {product}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 border-b border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Export Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Comprehensive solutions for your import and distribution needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-card border border-border hover:border-accent hover:shadow-md transition-all space-y-4 text-center"
              >
                <div className="text-4xl">{service.icon}</div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trade Details */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Trading Information</h2>
              <div className="space-y-4">
                <div className="border-b border-border pb-4">
                  <h3 className="font-semibold text-lg mb-2">Payment Terms</h3>
                  <p className="text-muted-foreground">
                    We accept L/C, T/T, and other mutually agreed payment methods
                  </p>
                </div>
                <div className="border-b border-border pb-4">
                  <h3 className="font-semibold text-lg mb-2">Shipping</h3>
                  <p className="text-muted-foreground">
                    Via sea, air, or land depending on destination and urgency
                  </p>
                </div>
                <div className="border-b border-border pb-4">
                  <h3 className="font-semibold text-lg mb-2">Minimum Order</h3>
                  <p className="text-muted-foreground">
                    Flexible MOQ depending on product and market requirements
                  </p>
                </div>
                <div className="pb-4">
                  <h3 className="font-semibold text-lg mb-2">Lead Time</h3>
                  <p className="text-muted-foreground">
                    Typically 30-45 days for custom orders and requirements
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Compliance & Standards</h2>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-card border border-border hover:border-accent/50 transition-all">
                  <p className="font-semibold text-accent mb-1">ISO 9001:2015</p>
                  <p className="text-muted-foreground text-sm">
                    Quality Management Systems Certification
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-card border border-border hover:border-accent/50 transition-all">
                  <p className="font-semibold text-accent mb-1">HACCP Certified</p>
                  <p className="text-muted-foreground text-sm">
                    Food Safety Management Certification
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-card border border-border hover:border-accent/50 transition-all">
                  <p className="font-semibold text-accent mb-1">Organic Certified</p>
                  <p className="text-muted-foreground text-sm">
                    Certified for organic product manufacturing
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-card border border-border hover:border-accent/50 transition-all">
                  <p className="font-semibold text-accent mb-1">Import Compliant</p>
                  <p className="text-muted-foreground text-sm">
                    All products comply with international import standards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Ready to Import Premium Products?
          </h2>
          <p className="text-lg text-muted-foreground">
            Contact our trade specialists to discuss your requirements
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition shadow-lg shadow-accent/20"
          >
            Contact Our Trade Team
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
