'use client';

import { useLanguage } from '@/components/providers';
import { t } from '@/lib/i18n';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground border-t border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">LANKORA AGRO</h3>
            <p className="text-sm opacity-75">
              Premium spices and agricultural products for the global market.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-base">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-accent transition">
                  {t('nav.home', language)}
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-accent transition">
                  {t('nav.products', language)}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition">
                  {t('nav.about', language)}
                </Link>
              </li>
              <li>
                <Link href="/markets" className="hover:text-accent transition">
                  {t('nav.markets', language)}
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-3">
            <h4 className="font-semibold text-base">{t('footer.links', language)}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products#spices" className="hover:text-accent transition">
                  {t('products.spices', language)}
                </Link>
              </li>
              <li>
                <Link href="/products#herbs" className="hover:text-accent transition">
                  {t('products.herbs', language)}
                </Link>
              </li>
              <li>
                <Link href="/products#agriculture" className="hover:text-accent transition">
                  {t('products.agriculture', language)}
                </Link>
              </li>
              <li>
                <Link href="/products#natural" className="hover:text-accent transition">
                  {t('products.natural', language)}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="font-semibold text-base">{t('contact.title', language)}</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@lankoraagro.com" className="hover:text-accent transition">
                  info@lankoraagro.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+1234567890" className="hover:text-accent transition">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Global Offices</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm opacity-75">
              © {new Date().getFullYear()} Lankora Agro. {t('footer.rights', language)}
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm hover:text-accent transition">
                Privacy Policy
              </a>
              <a href="#" className="text-sm hover:text-accent transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
