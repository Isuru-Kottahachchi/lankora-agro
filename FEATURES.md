# Lankora Agro Website - Feature Overview

## Website Architecture

### Pages & Routes

#### 1. **Homepage** (`/`)
- **Hero Section**: Eye-catching headline with company tagline and two CTA buttons
- **Featured Products**: Grid showcasing 4 product categories with descriptions
- **Value Propositions**: Three key differentiators (Premium Quality, Global Reach, Certified & Compliant)
- **CTA Section**: Call-to-action for partnership inquiries

#### 2. **Products** (`/products`)
- **Spices Category**: Chili powder, cinnamon, black pepper, cloves
- **Herbs & Aromatics**: Dried herbs, herbal teas, aroma products
- **Agriculture Products**: Grains, seeds, pulses
- **Natural Products**: Oils/extracts, health supplements
- **Quality Assurance**: Laboratory testing, certifications, safe packaging

#### 3. **About** (`/about`)
- **Mission & Vision Statements**: Clear company purpose and future direction
- **Key Metrics**: Founded year, countries served, product categories, quality standard
- **Core Values**: Quality, sustainability, reliability, innovation
- **Operations**: 4-step process from sourcing to logistics

#### 4. **Export Markets** (`/markets`)
- **Global Regions**: 6 major export regions with details:
  - Europe (Germany, France, UK, Italy, Spain, Netherlands)
  - Middle East (UAE, Saudi Arabia, Qatar, Kuwait, Oman)
  - Asia (Japan, Singapore, Korea, Malaysia, Thailand)
  - North America (USA, Canada, Mexico)
  - Africa (South Africa, Nigeria, Egypt)
  - Oceania (Australia, New Zealand)
- **Export Services**: Bulk exports, B2B partnerships, private labeling, certifications, logistics, support
- **Trade Details**: Payment terms, shipping options, MOQ, lead times
- **Compliance**: ISO 9001, HACCP, Organic certifications

#### 5. **Contact** (`/contact`)
- **Contact Form**: Name, email, phone, company, message fields with validation
- **Contact Information**: Email, phone, address, business hours
- **Departmental Contacts**: Sales, partnerships, support email addresses
- **Response Time**: 24-hour guarantee during business hours

#### 6. **404 Error Page** (`/not-found`)
- Friendly error message with link back to homepage

---

## Multi-Language Support (i18n)

### Supported Languages
1. **English (EN)** - Default language
2. **German (DE)** - Deutsch
3. **French (FR)** - Français
4. **Spanish (ES)** - Español
5. **Hindi (HI)** - हिंदी

### Translation System
- **File**: `lib/i18n.ts` - Contains all translations
- **Hook**: `useLanguage()` - Access current language in components
- **Function**: `t(key, language)` - Get translated text
- **Persistence**: Language preference saved in localStorage
- **Coverage**: All major UI elements, headings, buttons, and descriptive text

### Example Implementation
```tsx
const { language } = useLanguage();
<h1>{t('hero.title', language)}</h1>
```

---

## Dark Mode Implementation

### Theme Management
- **Library**: next-themes with dark mode support
- **Default**: Detects system preference, defaults to dark
- **Toggle**: Theme switcher in navigation bar
- **Persistence**: User preference saved across sessions
- **Smooth Transitions**: CSS transitions for theme switching

### Color System
#### Light Mode
- Background: Warm off-white (#f5f3f0)
- Foreground: Dark brown (#1a1815)
- Accent: Gold/bronze (#d4a574)
- Borders: Light gray (#e8e3de)

#### Dark Mode
- Background: Almost black (#0f0d0a)
- Foreground: Warm white (#f5f3f0)
- Accent: Gold/bronze (#d4a574) - same as light
- Borders: Dark gray (#2a2520)

---

## Design Features

### Professional Aesthetic
- **Typography**: Premium sans-serif font (Geist) for clean, modern look
- **Spacing**: Consistent 4px grid system for all spacing
- **Borders**: Subtle borders with transparency effects
- **Hover States**: Smooth transitions and accent color highlights
- **Gradient Accents**: Subtle gradients on hero sections

### Responsive Layout
- **Mobile-First**: Base design optimized for mobile
- **Breakpoints**: 
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- **Touch-Friendly**: Large tap targets for mobile users
- **Fluid Typography**: Scales with screen size

### Component System
1. **Navigation**: Sticky header with language selector and theme toggle
2. **Footer**: Multi-column footer with links, contact info, and legal
3. **Cards**: Reusable product and info card components
4. **Forms**: Validated contact form with success feedback
5. **Grids**: Flexible grid layouts for products and markets

---

## Technical Features

### Performance Optimization
- **Image Optimization**: Next.js Image component ready
- **Code Splitting**: Automatic route-based code splitting
- **CSS Optimization**: Tailwind's PurgeCSS removes unused styles
- **Minimal JS**: Server-side rendering where possible

### SEO Optimization
- **Meta Tags**: Title, description, keywords, Open Graph tags
- **Sitemap**: XML sitemap for search engines at `/sitemap.xml`
- **Robots.txt**: Configured at `/robots.txt`
- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Mobile Optimized**: Responsive design crawled properly by bots

### Accessibility
- **Semantic HTML**: Proper use of HTML5 elements
- **ARIA Labels**: Buttons and interactive elements properly labeled
- **Keyboard Navigation**: Full keyboard access to all interactive elements
- **Color Contrast**: WCAG AA compliant contrast ratios
- **Screen Reader Ready**: Structured content for screen readers

### Code Quality
- **TypeScript**: Full type safety throughout codebase
- **Modular Components**: Reusable, maintainable component structure
- **Tailwind CSS**: Utility-first CSS for consistency
- **Best Practices**: React hooks, server components, proper error handling

---

## User Experience Flows

### Navigation Flow
1. User lands on homepage
2. Can explore featured products or click specific categories
3. Access company information via About page
4. View market information and export services
5. Submit inquiry through Contact form
6. Switch language at any time via language selector
7. Toggle dark/light mode

### Language Switching Flow
1. User clicks language selector in navigation
2. Dropdown menu appears with all available languages
3. User selects desired language
4. Page content updates instantly
5. Language preference saved

### Theme Switching Flow
1. User clicks sun/moon icon in navigation
2. Theme toggles between light and dark
3. Colors transition smoothly
4. Preference persisted for return visits

---

## Content Sections

### Product Information
- **Spices**: 4 detailed products with applications
- **Herbs**: 3 products including dried herbs, teas, aromatics
- **Agriculture**: 3 categories (grains, seeds, pulses)
- **Natural**: 2 categories (oils/extracts, health supplements)

### Company Information
- Founded year and company history
- 50+ countries served
- 4 product categories
- 100% quality standard compliance
- Multiple global offices

### Export Information
- 6 major export regions documented
- Country-specific details
- Regional product preferences
- Trade services and payment terms
- Compliance certifications

### Contact Channels
- General inquiry email
- Sales department email
- Partnerships email
- Support email
- Phone number
- Physical address

---

## Deployment & Hosting

### Recommended: Vercel
- Automatic deployments from GitHub
- Built-in CI/CD pipeline
- Edge caching for global performance
- Serverless functions ready
- Zero configuration deployment

### Alternative Deployment
- Next.js `npm run build && npm run start`
- Compatible with any Node.js hosting
- Docker ready
- Environment variables support

---

## Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Chrome (latest)
- Mobile Safari (latest)

---

## Future Enhancement Ideas

1. **E-commerce Integration**: Product catalog with pricing and ordering
2. **Blog Section**: Industry insights and news
3. **Live Chat**: Real-time customer support
4. **CRM Integration**: Lead tracking and management
5. **Multiple Currencies**: Price display in different currencies
6. **API Integration**: Real inventory and pricing updates
7. **Video Content**: Product demonstrations and company videos
8. **Social Media Integration**: Social proof and sharing
9. **Email Subscriptions**: Newsletter signups
10. **Analytics**: Detailed traffic and user behavior tracking

---

## File Structure

```
app/
├── page.tsx                    # Homepage
├── layout.tsx                  # Root layout
├── globals.css                 # Global styles
├── not-found.tsx              # 404 page
└── [section]/
    └── page.tsx               # Section pages (products, about, etc.)

components/
├── navigation.tsx             # Header navigation
├── footer.tsx                # Footer
└── providers.tsx             # Theme and language providers

lib/
└── i18n.ts                   # Translations

public/
├── sitemap.xml               # Search engine sitemap
├── robots.txt                # Crawler directives
└── images/                   # Hero images
```

---

## Maintenance Notes

### Regular Updates
- Update product information in respective pages
- Refresh market information annually
- Update company metrics and achievements
- Maintain contact email addresses

### Content Management
- All text is in i18n file - translate new content there
- Product pages can be easily expanded with new items
- Add new markets or regions as needed
- Update certifications and compliance info

### Technical Maintenance
- Monitor Next.js version updates
- Keep dependencies current
- Review analytics for performance issues
- Test new languages and content regularly

---

**Website Version**: 1.0  
**Last Updated**: January 2024  
**Next Review**: Quarterly
