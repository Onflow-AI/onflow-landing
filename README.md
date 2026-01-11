# Onflow Landing Page

A modern, responsive landing page for Onflow - an AI-powered agentic testing platform with computer vision capabilities.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4.x
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Package Manager:** pnpm

## Features

- ✅ Fully responsive design (mobile-first)
- ✅ Modern gradient color scheme
- ✅ Smooth animations and transitions
- ✅ Accessible (WCAG 2.1 AA compliant)
- ✅ SEO optimized
- ✅ Performance optimized (Core Web Vitals)
- ✅ Type-safe with TypeScript

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+

### Installation

1. Install dependencies:

\`\`\`bash
pnpm install
\`\`\`

2. Run the development server:

\`\`\`bash
pnpm dev
\`\`\`

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Project Structure

\`\`\`
onflow-landing/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── sections/          # Page sections
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── ProblemStatement.tsx
│   │   ├── SolutionOverview.tsx
│   │   ├── KeyDifferentiators.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Pricing.tsx
│   │   ├── FAQ.tsx
│   │   ├── FinalCTA.tsx
│   │   └── Footer.tsx
│   └── ui/                # Reusable UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Container.tsx
│       ├── Section.tsx
│       └── Input.tsx
├── lib/
│   └── utils.ts           # Utility functions
└── public/                # Static assets

\`\`\`

## Design System

### Colors

- **Primary:** #0e70f9 (Blue)
- **Secondary:** #008ba6 (Cyan)
- **Background:** #f8fafc
- **Text:** #003040

### Typography

- **Font:** Inter (Google Fonts)
- **Weights:** 300, 400, 500, 600, 700, 800, 900

### Spacing Scale

Based on 8px base unit (4, 8, 16, 24, 32, 48, 64, 96, 128px)

## Performance

- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

ISC

## Contact

For questions or support, contact: hello@onflow.ai
