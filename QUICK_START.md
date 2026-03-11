# Lankora Agro Website - Quick Start Guide

## Project Overview

A professional, fully-featured B2B export website for Lankora Agro with multi-language support (5 languages), dark mode, and responsive design.

## Live Preview

The preview is already running! You can see the website in the Preview pane. The site is fully functional with all pages, language switching, and dark mode working.

## Key Features

✅ **5 Languages**: English, German, French, Spanish, Hindi  
✅ **Dark Mode**: Automatic theme switching with user preference persistence  
✅ **Responsive Design**: Perfect on mobile, tablet, and desktop  
✅ **Professional Pages**: Homepage, Products, About, Markets, Contact  
✅ **SEO Optimized**: Metadata, sitemap, robots.txt  
✅ **Form Validation**: Contact form with real-time feedback  
✅ **Modern Design**: Premium aesthetic with warm accent colors  

## File Structure

```
├── app/
│   ├── page.tsx                 → Homepage
│   ├── products/page.tsx        → Product catalog
│   ├── about/page.tsx          → Company info
│   ├── markets/page.tsx        → Export markets
│   ├── contact/page.tsx        → Contact form
│   ├── layout.tsx              → Root layout
│   └── globals.css             → Theme colors
├── components/
│   ├── navigation.tsx          → Header with language/theme selector
│   ├── footer.tsx              → Footer with links
│   └── providers.tsx           → Language & Theme setup
├── lib/
│   └── i18n.ts                 → All translations (5 languages)
└── public/
    ├── sitemap.xml             → SEO sitemap
    ├── robots.txt              → Crawler directives
    └── *.jpg                   → Hero images
```

## Available Routes

- `/` - Homepage
- `/products` - Products showcase
- `/about` - About company
- `/markets` - Export markets
- `/contact` - Contact form
- `/404` - Error page

## Making Changes

### Update Product Information
Edit `/app/products/page.tsx` - Modify product categories, items, and descriptions

### Change Company Details
Edit `/app/about/page.tsx` - Update mission, vision, values, and metrics

### Modify Market Information
Edit `/app/markets/page.tsx` - Add/remove regions and countries

### Update Contact Information
- Edit `/components/footer.tsx` for footer links
- Edit `/app/contact/page.tsx` for contact page details

### Change Translations
Edit `/lib/i18n.ts` - Add/modify text for any language. Example:
```tsx
en: {
  'nav.home': 'Home',
  'nav.products': 'Products',
  // Add more translations
}
```

### Customize Colors
Edit `/app/globals.css` - Update CSS custom properties:
```css
:root {
  --primary: #1a1815;        /* Brand color */
  --accent: #d4a574;         /* Highlight color */
  --background: #f5f3f0;     /* Background */
}

.dark {
  --primary: #d4a574;        /* Brand in dark mode */
  --background: #0f0d0a;     /* Dark background */
}
```

## Navigation Features

### Language Selector
- Located in top navigation
- Click to open dropdown with all 5 languages
- Selection persists across sessions
- All content updates instantly

### Theme Toggle
- Sun/Moon icon in top navigation
- Switches between light and dark modes
- Preference persists automatically
- Smooth color transitions

## Responsive Breakpoints

- **Mobile**: < 768px (hidden navigation on smaller screens)
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px (full navigation visible)

## Testing

### Test Language Switching
1. Click language selector in navigation
2. Select different language
3. Verify all content updates
4. Refresh page - language persists

### Test Dark Mode
1. Click theme toggle button
2. Colors should transition smoothly
3. Refresh page - theme persists

### Test Forms
1. Go to /contact
2. Try submitting with missing fields (validation shows)
3. Fill all fields and submit
4. Success message appears

## Deployment

### On Vercel (Recommended)
```bash
# If not already deployed
vercel

# For redeployment
git push origin main
```

### Local Development
```bash
pnpm dev
# Open http://localhost:3000
```

### Production Build
```bash
pnpm build
pnpm start
```

## Environment Setup

**No environment variables required** - The site works immediately out of the box!

## Common Customizations

### Add a New Language
1. Open `lib/i18n.ts`
2. Add new language code to `Language` type
3. Add language name to `languages` object
4. Add complete translations to `translations` object
5. Navigation will automatically show new language option

### Add a New Page
1. Create new folder in `app/` (e.g., `app/blog/`)
2. Create `page.tsx` inside
3. Import Navigation and Footer components
4. Add link in `/components/navigation.tsx`
5. Add translation keys in `lib/i18n.ts`

### Change Company Name
1. Edit `/components/navigation.tsx` - Change "LANKORA AGRO" to your name
2. Edit `/components/footer.tsx` - Update brand name
3. Edit `/app/layout.tsx` - Update metadata title
4. Edit `/README.md` - Update documentation

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

- Images are optimized for web
- Code is automatically split by route
- Unused CSS is purged automatically
- Consider adding caching headers on Vercel

## Troubleshooting

**Language not persisting?**
- Check if localStorage is enabled in browser
- Clear browser cache and try again

**Theme not working?**
- Ensure `suppressHydrationWarning` is in `<html>` tag
- Check browser console for errors

**Form not working?**
- Verify all input names match form state
- Check console for validation errors

**Images not loading?**
- Verify image paths in `public/` folder
- Check image file names match the src attributes

## Documentation Files

- `README.md` - Comprehensive documentation
- `FEATURES.md` - Detailed feature overview
- `QUICK_START.md` - This file
- `package.json` - Dependencies and scripts

## Support & Help

For detailed information:
- Read `README.md` for complete setup
- Check `FEATURES.md` for feature details
- Review component code comments

## Next Steps

1. ✅ Preview the website using the Preview panel
2. Test language switching and dark mode
3. Customize company information
4. Update product details
5. Deploy to Vercel
6. Share with team!

---

**Ready to go live?** Deploy to Vercel with one command:
```bash
vercel deploy --prod
```

Happy building! 🚀
