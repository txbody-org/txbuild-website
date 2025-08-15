# TxBuild Website

A modern, responsive website for TxBuild - a platform that generates instant Cardano APIs from Plutus Blueprints. Built with Next.js 15, TypeScript, and Tailwind CSS, deployed on GitHub Pages.

🌐 **Live Site**: https://txbody-org.github.io/txbuild-website

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with custom design system
- **UI Components**: Radix UI primitives with Class Variance Authority (CVA)
- **Animations**: Motion library
- **Icons**: Lucide React
- **Carousel**: Embla Carousel with autoplay
- **Themes**: next-themes for dark/light mode support
- **Deployment**: GitHub Pages with GitHub Actions

## 🚨 GitHub Pages Development Guidelines

**CRITICAL**: This site is deployed on GitHub Pages with a `basePath`. Follow these guidelines to ensure your code works in both development and production:

### ✅ Image and Asset Paths - DO THIS

```tsx
// ✅ CORRECT: Use relative paths (no leading /)
const features = [
	{ img: "feat1.webp" }, // Works with basePath
	{ img: "step1.webp" }, // Works with basePath
];

// ✅ CORRECT: Next.js Image component handles basePath automatically
<Image src='feat1.webp' alt='Feature' width={100} height={100} />;
```

### ❌ Image and Asset Paths - AVOID THIS

```tsx
// ❌ WRONG: Absolute paths break with basePath
const features = [
	{ img: "/feat1.webp" }, // Breaks on GitHub Pages
	{ img: "/step1.webp" }, // Breaks on GitHub Pages
];

// ❌ WRONG: Manual absolute paths in img tags
<img src='/feat1.webp' alt='Feature' />;
```

### ✅ Internal Navigation - DO THIS

```tsx
// ✅ CORRECT: Use hash anchors for same-page navigation
<Link href="#features">Features</Link>
<Link href="#contact">Contact</Link>

// ✅ CORRECT: Use relative paths for pages
<Link href="about">About</Link>
<Link href="docs/getting-started">Docs</Link>
```

### ❌ Internal Navigation - AVOID THIS

```tsx
// ❌ WRONG: Absolute paths break with basePath
<Link href="/features">Features</Link>
<a href="/docs">Documentation</a>
```

### ✅ External Links - THESE ARE FINE

```tsx
// ✅ CORRECT: Full URLs work perfectly
<a href="https://example.com">External Link</a>
<video src="https://cdn.example.com/video.mp4" />
```

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx       # Root layout with theme provider
│   └── page.tsx         # Home page
├── components/          # Reusable UI components
│   ├── ui/             # Base components (Button, Carousel)
│   ├── header/         # Site header with navigation
│   ├── footer/         # Site footer
│   ├── hero-section/   # Landing hero section
│   ├── feature-section/ # Features showcase
│   ├── how-works/      # How it works section
│   ├── example-section/ # Code examples
│   └── theme-toggle/   # Dark/light mode toggle
├── features/           # Complex feature implementations
│   ├── carousel/       # Feature carousel with constants
│   ├── example-code/   # Code example display
│   └── how-work-section/ # Interactive how-it-works
├── lib/               # Utility functions
│   └── utils.ts       # className merging utility
└── styles/           # Global styles
    └── globals.css   # Tailwind config and custom styles
```

## Component Architecture

- **Component-based structure** with `index.tsx` files for clean imports
- **Feature sections** as standalone, reusable components
- **Shared UI components** with variant-based styling using CVA
- **Constants separated** into dedicated files for maintainability
- **TypeScript strict mode** for type safety

## Styling System

- **Tailwind CSS v4** with custom design tokens
- **CSS custom properties** for theme variables
- **Dark/light mode support** via next-themes
- **Responsive design** with mobile-first approach
- **Custom animations** via tw-animate-css

## Deployment

### GitHub Pages Configuration

The site uses a conditional `basePath` configuration:

- **Local development**: No basePath (serves at `localhost:3000`)
- **Production**: Uses `/txbuild-website` basePath for GitHub Pages

### Automatic Deployment

1. **Trigger**: Push to `main` branch
2. **Build**: GitHub Actions runs `npm run build` with `NODE_ENV=production`
3. **Deploy**: Built files from `./out` directory deployed to GitHub Pages
4. **URL**: https://txbody-org.github.io/txbuild-website

### Manual Deployment Setup

1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Push to main branch to trigger deployment

## Environment-Specific Behavior

### Local Development

```typescript
// next.config.ts - basePath only applied in production
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
	output: "export",
	...(isProd && {
		basePath: "/txbuild-website",
		assetPrefix: "/txbuild-website/",
	}),
};
```

### Production (GitHub Pages)

- BasePath: `/txbuild-website`
- Static export with unoptimized images
- Trailing slash configuration
- .nojekyll file for proper routing
