'use client';

import { useTheme } from 'next-themes';
import { useLanguage } from '@/components/providers';
import { t, languages, type Language } from '@/lib/i18n';
import { Moon, Sun, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export function Navigation() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const navLinks = [
    { href: '/', label: t('nav.home', language) },
    { href: '/products', label: t('nav.products', language) },
    { href: '/about', label: t('nav.about', language) },
    { href: '/markets', label: t('nav.markets', language) },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Brand */}
          <div className="flex items-center gap-2">
            <Link href="/" className="text-xl md:text-2xl font-bold text-accent tracking-tight">
              🌿 LANKORA AGRO
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm px-3 py-2 rounded-md text-foreground/70 hover:text-foreground hover:bg-muted font-medium transition-all">
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="text-sm px-4 py-2 rounded-md bg-accent text-white font-medium hover:bg-accent/90 transition-all ml-2">
              {t('nav.contact', language)}
            </Link>
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center gap-2">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="text-sm px-3 py-1.5 rounded-md border border-border hover:bg-muted font-medium transition cursor-pointer"
              >
                {language.toUpperCase()}
              </button>
              {showLangMenu && (
                <div className="absolute right-0 mt-2 w-36 bg-card border border-border rounded-lg shadow-lg py-1 z-50">
                  {(Object.keys(languages) as Language[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setShowLangMenu(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-muted transition cursor-pointer ${
                        language === lang ? 'text-accent font-semibold' : 'text-foreground/80'
                      }`}
                    >
                      {languages[lang]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-md border border-border hover:bg-muted transition cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            {/* Hamburger Button — mobile only */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden p-2 rounded-md border border-border hover:bg-muted transition cursor-pointer"
              aria-label="Toggle menu"
            >
              {showMobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {showMobileMenu && (
        <div className="md:hidden border-t border-border bg-card shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setShowMobileMenu(false)}
                className="text-sm px-4 py-3 rounded-lg text-foreground/80 hover:text-foreground hover:bg-muted font-medium transition-all"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setShowMobileMenu(false)}
              className="mt-2 text-sm px-4 py-3 rounded-lg bg-accent text-white font-semibold hover:bg-accent/90 transition-all text-center"
            >
              {t('nav.contact', language)}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
