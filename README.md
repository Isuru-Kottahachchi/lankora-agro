# Lankora Agro - Professional Export Website

A modern, professional B2B export website for Lankora Agro, a leading global exporter of premium spices, herbs, agricultural products, and natural health solutions.

## Features

### Multi-Language Support
- English (EN)
- German (DE)
- French (FR)
- Spanish (ES)
- Hindi (HI)

Language selection is persisted in localStorage and switching is seamless throughout the site.

### Dark Mode
- Built with `next-themes` for automatic theme detection and toggling
- Persistent theme preference
- Smooth transitions between light and dark modes
- Premium dark color palette with warm accent colors

### Responsive Design
- Mobile-first approach
- Fully responsive across all devices
- Optimized navigation for touch and desktop
- Professional layout system with Tailwind CSS and Flexbox

### Pages

1. **Homepage** - Hero section with featured products, value propositions, and CTA
2. **Products** - Comprehensive product catalog with four categories:
   - Spices (chili, cinnamon, pepper, cloves)
   - Herbs & Aromatics (dried herbs, herbal teas, aroma products)
   - Agriculture Products (grains, seeds, pulses)
   - Natural Products (oils, extracts, health supplements)

3. **About** - Company story, mission, vision, values, and operations
4. **Export Markets** - Global market presence with region-specific information
5. **Contact** - Inquiry form and multiple contact channels

### Design

- **Color Palette**: Premium dark theme with warm gold/bronze accents
- **Typography**: Clean, professional sans-serif fonts
- **Spacing**: Consistent spacing system with Tailwind utilities
- **Components**: Reusable navigation, footer, and layout components
- **Accessibility**: Semantic HTML, proper ARIA labels, accessible forms

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Theme Management**: next-themes
- **Icons**: Lucide React
- **Font**: Geist (Google Fonts)

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm (or npm/yarn)

### Installation

1. Clone the repository
2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Environment Setup

No environment variables are required for this project. All functionality works out of the box.

## Project Structure

```
app/
├── page.tsx                 # Homepage
├── layout.tsx              # Root layout with providers
├── globals.css             # Global styles and theme
├── products/
│   └── page.tsx           # Products page
├── about/
│   └── page.tsx           # About page
├── markets/
│   └── page.tsx           # Export markets page
├── contact/
│   └── page.tsx           # Contact page
└── not-found.tsx          # 404 page

components/
├── navigation.tsx         # Header navigation
├── footer.tsx            # Footer component
└── providers.tsx         # Language & Theme providers

lib/
└── i18n.ts              # Translations and i18n setup

public/
├── sitemap.xml          # SEO sitemap
├── robots.txt           # Search engine directives
└── *.jpg                # Hero images
```

## Internationalization (i18n)

All text content is managed through `lib/i18n.ts` with translations for 5 languages. To add new text:

1. Add key-value pair to all language objects in `translations`
2. Import `{ t }` from `lib/i18n`
3. Use `useLanguage()` hook to get current language
4. Call `t('key', language)`

Example:
```tsx
const { language } = useLanguage();
<h1>{t('hero.title', language)}</h1>
```

## Customization

### Colors
Edit color variables in `app/globals.css` - The theme uses CSS custom properties for easy customization:
- `--primary` / `--primary-foreground`
- `--accent` / `--accent-foreground`
- `--background` / `--foreground`
- `--muted` / `--muted-foreground`
- `--border`

### Content
- Update product information in `/products/page.tsx`
- Edit company info in `/about/page.tsx`
- Modify market regions in `/markets/page.tsx`
- Update contact details in `/contact/page.tsx` and `components/footer.tsx`

### Company Info
Update the following throughout the site:
- Company name/branding
- Contact email and phone numbers
- Office locations
- Social media links

## SEO

- Metadata configured in `app/layout.tsx`
- Sitemap available at `/sitemap.xml`
- Robots.txt configured at `/robots.txt`
- Open Graph and social sharing ready

## Performance

- Optimized images with proper sizing
- Lazy loading for images and components
- CSS optimized with Tailwind's purging
- Minimal JavaScript for fast load times

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and configure build settings
3. Push to main branch to deploy

```bash
vercel deploy
```

### Other Platforms
The project can be built for any platform:
```bash
pnpm build
pnpm start
```

## Support

For issues or questions, contact:
- Email: info@lankoraagro.com
- Phone: +1 (234) 567-890

## License

© {currentYear} Lankora Agro. All rights reserved.
