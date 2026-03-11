'use client';

import { useLanguage } from '@/components/providers';
import { t } from '@/lib/i18n';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'info@lankoraagro.com',
      link: 'mailto:info@lankoraagro.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (234) 567-890',
      link: 'tel:+12345678900',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: 'Global Headquarters, Import/Export Division',
      link: '#',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM',
      link: '#',
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Header */}
      <section className="py-16 md:py-24 border-b border-border bg-gradient-to-br from-accent/8 via-transparent to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            {t('contact.title', language)}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            We're here to help. Reach out with any inquiries about our products or services.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <a
                  key={idx}
                  href={info.link}
                  className="p-6 rounded-xl bg-card border border-border hover:border-accent hover:shadow-md hover:shadow-accent/10 transition-all space-y-3 group"
                >
                  <Icon className="w-6 h-6 text-accent group-hover:scale-110 transition" />
                  <h3 className="font-semibold text-lg">{info.title}</h3>
                  <p className="text-muted-foreground text-sm">{info.details}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="space-y-6">
              <div className="space-y-2 mb-8">
                <h2 className="text-3xl font-bold tracking-tight">Send Us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition"
                    placeholder="+1 (234) 567-890"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition"
                    placeholder="Your company"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Message</label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition resize-none"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition shadow-md shadow-accent/20"
                >
                  Send Message
                </button>

                {submitted && (
                  <div className="p-4 rounded bg-accent/10 text-accent text-sm font-medium">
                    Thank you! We'll be in touch soon.
                  </div>
                )}
              </form>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tight">Quick Contact</h2>
                <p className="text-muted-foreground">
                  For specific inquiries, you can reach our departments directly.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-all space-y-2">
                  <h3 className="font-semibold text-lg">Sales Inquiries</h3>
                  <p className="text-muted-foreground text-sm">
                    For product orders and bulk inquiries
                  </p>
                  <a href="mailto:sales@lankoraagro.com" className="text-accent hover:underline text-sm font-medium">
                    sales@lankoraagro.com
                  </a>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-all space-y-2">
                  <h3 className="font-semibold text-lg">Partnership</h3>
                  <p className="text-muted-foreground text-sm">
                    For distribution and partnership opportunities
                  </p>
                  <a href="mailto:partnerships@lankoraagro.com" className="text-accent hover:underline text-sm font-medium">
                    partnerships@lankoraagro.com
                  </a>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-all space-y-2">
                  <h3 className="font-semibold text-lg">Support</h3>
                  <p className="text-muted-foreground text-sm">
                    For shipping and delivery support
                  </p>
                  <a href="mailto:support@lankoraagro.com" className="text-accent hover:underline text-sm font-medium">
                    support@lankoraagro.com
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-accent/5 border border-accent/20 space-y-3">
                <h3 className="font-semibold text-lg">Response Time</h3>
                <p className="text-muted-foreground text-sm">
                  We aim to respond to all inquiries within 24 hours during business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
