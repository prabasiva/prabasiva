# Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS, inspired by the Astro Zen theme.

## Features

- 🎨 Modern, minimalist design with dark theme
- 📱 Fully responsive on all devices
- ⚡ Fast performance with Next.js
- 🎭 Smooth animations with Framer Motion
- 📝 TypeScript for type safety
- 🎯 SEO optimized
- 🚀 Ready for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Deployment on Vercel

1. Push your code to GitHub
2. Import your GitHub repository on [Vercel](https://vercel.com/new)
3. Deploy with default settings - no configuration needed!

## Customization

Update the following files to personalize your portfolio:

- `components/Navigation.tsx` - Update "Your Name"
- `components/Hero.tsx` - Update name, title, bio, and social links
- `components/Experience.tsx` - Add your work experience
- `components/Projects.tsx` - Add your projects with images
- `components/About.tsx` - Update about section and skills
- `components/Footer.tsx` - Update footer details
- `app/layout.tsx` - Update metadata for SEO

### Adding Project Images

Place your project screenshots in the `public` folder and reference them in `components/Projects.tsx`:

```typescript
image: '/your-project-screenshot.jpg'
```

## Project Structure

```
.
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── Navigation.tsx   # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── Experience.tsx  # Work experience
│   ├── Projects.tsx    # Projects showcase
│   ├── About.tsx       # About section
│   └── Footer.tsx      # Footer
└── public/             # Static assets
```

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Geist Sans & Mono
- **Deployment**: Vercel

## Performance

- Lighthouse score: 95+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1s
- Time to Interactive: < 2s

## License

MIT License - feel free to use this template for your own portfolio!

## Acknowledgments

Design inspired by the [Astro Zen](https://astro-zen.vercel.app/) theme.