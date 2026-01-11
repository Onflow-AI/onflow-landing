# Deployment Guide

## Quick Start

To get started with development:

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Your app will be available at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
onflow-landing/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page (assembles all sections)
│   └── globals.css         # Global styles + Tailwind
├── components/
│   ├── sections/           # Page sections
│   │   ├── Navigation.tsx  # Fixed navbar with scroll effect
│   │   ├── Hero.tsx        # Hero section with CTA
│   │   ├── ProblemStatement.tsx
│   │   ├── SolutionOverview.tsx
│   │   ├── KeyDifferentiators.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Pricing.tsx
│   │   ├── FAQ.tsx
│   │   ├── FinalCTA.tsx
│   │   └── Footer.tsx
│   └── ui/                 # Reusable components
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Container.tsx
│       ├── Section.tsx
│       └── Input.tsx
├── lib/
│   └── utils.ts            # Utility functions (cn helper)
└── public/                 # Static assets
```

## Deployment Options

### 1. Vercel (Recommended)

The easiest way to deploy your Next.js app is with [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and configure everything
4. Deploy!

### 2. Netlify

```bash
# Build command
pnpm build

# Output directory
.next

# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### 3. Self-Hosted (Node.js)

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

### 4. Docker

Create a `Dockerfile`:

\`\`\`dockerfile
FROM node:20-alpine AS base

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3000

ENV PORT=3000

CMD ["pnpm", "start"]
\`\`\`

Then build and run:

```bash
docker build -t onflow-landing .
docker run -p 3000:3000 onflow-landing
```

## Environment Variables

Currently, the project doesn't require any environment variables. If you add them later:

1. Create `.env.local` for local development
2. Add environment variables to your deployment platform
3. Never commit `.env.local` to version control

## Performance Optimization

### Already Implemented:

- ✅ Static generation (SSG) for all pages
- ✅ Image optimization (Next.js Image component ready)
- ✅ Font optimization (Inter from Google Fonts)
- ✅ CSS optimization (Tailwind CSS purging)
- ✅ Code splitting (automatic with Next.js)
- ✅ Tree shaking
- ✅ Framer Motion animations (optimized)

### Recommended Next Steps:

1. **Add Images:**
   - Replace placeholder images in components
   - Use Next.js `<Image>` component
   - Optimize images with WebP format

2. **SEO Enhancements:**
   - Add OpenGraph images
   - Create sitemap.xml
   - Add robots.txt
   - Implement JSON-LD structured data

3. **Analytics:**
   ```bash
   # Vercel Analytics
   pnpm add @vercel/analytics

   # Or Google Analytics
   pnpm add @next/third-parties
   ```

4. **Monitoring:**
   - Set up error tracking (Sentry)
   - Monitor Core Web Vitals
   - Set up uptime monitoring

## Custom Domain Setup

### Vercel:
1. Go to your project settings
2. Add your custom domain
3. Follow DNS configuration instructions

### General DNS Configuration:
- **A Record:** Point to your server IP
- **CNAME:** Point `www` to your main domain
- **SSL:** Enable automatic HTTPS (Vercel does this automatically)

## Troubleshooting

### Build Errors:

```bash
# Clear Next.js cache
rm -rf .next

# Clear pnpm cache
pnpm store prune

# Reinstall dependencies
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Port Already in Use:

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 pnpm dev
```

### TypeScript Errors:

```bash
# Check types
pnpm tsc --noEmit

# Fix ESLint issues
pnpm lint --fix
```

## Performance Benchmarks

Target metrics (Lighthouse):

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Security

- HTTPS enabled by default on Vercel/Netlify
- No sensitive data in client-side code
- Environment variables properly secured
- Dependencies regularly updated

## Maintenance

```bash
# Update dependencies
pnpm update

# Check for outdated packages
pnpm outdated

# Security audit
pnpm audit
```

## Support

For issues or questions:
- Check the [README.md](./README.md)
- Review [Next.js Documentation](https://nextjs.org/docs)
- Review [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- Contact: hello@onflow.ai

---

Built with ❤️ using Next.js 16, TypeScript, and Tailwind CSS 4.x
