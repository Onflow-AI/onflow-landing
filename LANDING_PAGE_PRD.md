# Onflow Landing Page - Product Requirements Document

## Project Overview

**Product:** Onflow Landing Page
**Version:** 1.0
**Date:** January 11, 2026
**Status:** Planning

### Purpose
Create a modern, conversion-focused landing page for Onflow - an agentic QA and user research platform that uses Browser Using Agents (BUA) with Computer Vision to test products like real users.

### Target Audience
- Early-stage founders
- Product managers
- Development teams at startups
- SaaS companies seeking better QA solutions

---

## Brand Identity

### Brand Positioning
Onflow bridges the critical gap between building and shipping. We're the intelligent layer between development and launch that ensures products don't just work—they delight.

### Brand Voice
- **Confident, not arrogant:** We know we solve a real problem
- **Technical, but accessible:** Explain AI without jargon
- **Action-oriented:** Focus on outcomes, not just features
- **Empathetic:** We understand founder struggles

---

## Color Scheme

### Core Colors
```
Primary Blue:     #0e70f9  (rgb(14, 112, 249))
Secondary Cyan:   #008ba6  (rgb(0, 139, 166))
Background:       #f8fafc  (rgb(248, 250, 252))
Text Dark:        #003040  (rgb(0, 48, 64))
```

### Extended Palette

#### Accent Colors
```
Success Green:    #10b981  (rgb(16, 185, 129))
Warning Amber:    #f59e0b  (rgb(245, 158, 11))
Error Red:        #ef4444  (rgb(239, 68, 68))
```

#### Neutral Grays
```
Gray 50:          #f9fafb  (rgb(249, 250, 251))  - Subtle backgrounds
Gray 100:         #f3f4f6  (rgb(243, 244, 246))  - Card backgrounds
Gray 200:         #e5e7eb  (rgb(229, 231, 235))  - Borders
Gray 300:         #d1d5db  (rgb(209, 213, 219))  - Disabled states
Gray 400:         #9ca3af  (rgb(156, 163, 175))  - Placeholders
Gray 500:         #6b7280  (rgb(107, 114, 128))  - Secondary text
Gray 600:         #4b5563  (rgb(75, 85, 99))   - Body text
Gray 700:         #374151  (rgb(55, 65, 81))    - Headings
Gray 800:         #1f2937  (rgb(31, 41, 55))    - Dark headings
Gray 900:         #111827  (rgb(17, 24, 39))    - Max contrast
```

#### Blue Variations (Primary Tints/Shades)
```
Blue 50:          #eff6ff  (rgb(239, 246, 255))  - Light background
Blue 100:         #dbeafe  (rgb(219, 234, 254))  - Subtle highlight
Blue 200:         #bfdbfe  (rgb(191, 219, 254))  - Light accent
Blue 400:         #60a5fa  (rgb(96, 165, 250))   - Hover state
Blue 500:         #0e70f9  (rgb(14, 112, 249))   - Primary
Blue 600:         #0b5cd5  (rgb(11, 92, 213))    - Active state
Blue 700:         #0847a0  (rgb(8, 71, 160))     - Pressed state
```

#### Cyan Variations (Secondary Tints/Shades)
```
Cyan 50:          #ecfeff  (rgb(236, 254, 255))  - Light background
Cyan 100:         #cffafe  (rgb(207, 250, 254))  - Subtle highlight
Cyan 400:         #22d3ee  (rgb(34, 211, 238))   - Bright accent
Cyan 500:         #008ba6  (rgb(0, 139, 166))    - Secondary
Cyan 600:         #007089  (rgb(0, 112, 137))    - Hover
Cyan 700:         #00546b  (rgb(0, 84, 107))     - Active
```

### Color Usage Guidelines

#### Backgrounds
- **Primary background:** #f8fafc (Background)
- **Card backgrounds:** #ffffff (White) or #f9fafb (Gray 50)
- **Section alternates:** #ffffff and #f8fafc
- **Gradient overlays:** Linear gradients using Blue 500 → Cyan 500

#### Text
- **Headings:** #003040 (Text Dark) or #111827 (Gray 900)
- **Body text:** #4b5563 (Gray 600)
- **Secondary text:** #6b7280 (Gray 500)
- **Muted text:** #9ca3af (Gray 400)

#### Interactive Elements
- **Primary buttons:** #0e70f9 background, white text
  - Hover: #60a5fa (Blue 400)
  - Active: #0b5cd5 (Blue 600)
- **Secondary buttons:** #008ba6 background, white text
  - Hover: #22d3ee (Cyan 400)
  - Active: #007089 (Cyan 600)
- **Ghost buttons:** Transparent background, #0e70f9 text
  - Hover: #eff6ff (Blue 50) background
- **Links:** #0e70f9 (Primary Blue)
  - Hover: #0847a0 (Blue 700)

#### Status & Feedback
- **Success:** #10b981 (Success Green)
- **Warning:** #f59e0b (Warning Amber)
- **Error:** #ef4444 (Error Red)
- **Info:** #0e70f9 (Primary Blue)

---

## Typography

### Font Family
**Primary:** Inter (Google Fonts)

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
```

### Type Scale

#### Headings
```
H1 (Hero):
  Font size: 72px / 4.5rem
  Line height: 1.1
  Font weight: 800 (Extra Bold)
  Letter spacing: -0.02em
  Color: #003040

H2 (Section):
  Font size: 48px / 3rem
  Line height: 1.2
  Font weight: 700 (Bold)
  Letter spacing: -0.01em
  Color: #003040

H3 (Subsection):
  Font size: 36px / 2.25rem
  Line height: 1.3
  Font weight: 700 (Bold)
  Letter spacing: -0.01em
  Color: #1f2937

H4 (Card Title):
  Font size: 24px / 1.5rem
  Line height: 1.4
  Font weight: 600 (Semi Bold)
  Letter spacing: -0.005em
  Color: #1f2937

H5 (Small Heading):
  Font size: 20px / 1.25rem
  Line height: 1.4
  Font weight: 600 (Semi Bold)
  Color: #374151

H6 (Eyebrow):
  Font size: 14px / 0.875rem
  Line height: 1.5
  Font weight: 600 (Semi Bold)
  Text transform: uppercase
  Letter spacing: 0.05em
  Color: #0e70f9
```

#### Body Text
```
Large Body:
  Font size: 20px / 1.25rem
  Line height: 1.6
  Font weight: 400 (Regular)
  Color: #4b5563

Body (Default):
  Font size: 16px / 1rem
  Line height: 1.6
  Font weight: 400 (Regular)
  Color: #4b5563

Small Body:
  Font size: 14px / 0.875rem
  Line height: 1.5
  Font weight: 400 (Regular)
  Color: #6b7280

Tiny:
  Font size: 12px / 0.75rem
  Line height: 1.5
  Font weight: 400 (Regular)
  Color: #9ca3af
```

#### Buttons
```
Large Button:
  Font size: 18px / 1.125rem
  Font weight: 600 (Semi Bold)
  Letter spacing: -0.005em

Default Button:
  Font size: 16px / 1rem
  Font weight: 600 (Semi Bold)
  Letter spacing: -0.005em

Small Button:
  Font size: 14px / 0.875rem
  Font weight: 600 (Semi Bold)
```

### Typography Guidelines
- Use weight 800-900 for hero headlines only
- Use weight 700 for section titles
- Use weight 600 for emphasis and buttons
- Use weight 400 for body text
- Use weight 300 sparingly for special callouts
- Maintain consistent vertical rhythm with 8px baseline grid

---

## Design System (Linear-Inspired)

### Design Principles
1. **Clarity over cleverness:** Information hierarchy is paramount
2. **Generous whitespace:** Let content breathe
3. **Purposeful motion:** Animations enhance, never distract
4. **Progressive disclosure:** Show complexity gradually
5. **Mobile-first:** Design for smallest screen, enhance upward

### Layout

#### Grid System
- **Desktop:** 12-column grid, 1440px max width
- **Tablet:** 8-column grid, 1024px max width
- **Mobile:** 4-column grid, 375px min width
- **Gutter:** 24px (desktop), 16px (mobile)
- **Margin:** 80px (desktop), 24px (mobile)

#### Spacing Scale
Based on 8px base unit:
```
xs:   4px   (0.25rem)
sm:   8px   (0.5rem)
md:   16px  (1rem)
lg:   24px  (1.5rem)
xl:   32px  (2rem)
2xl:  48px  (3rem)
3xl:  64px  (4rem)
4xl:  96px  (6rem)
5xl:  128px (8rem)
```

#### Section Spacing
- **Section padding (desktop):** 128px top/bottom
- **Section padding (tablet):** 96px top/bottom
- **Section padding (mobile):** 64px top/bottom

### Components

#### Buttons

**Primary Button**
```
Background: #0e70f9
Text: #ffffff
Padding: 14px 32px
Border radius: 8px
Font: 16px, weight 600
Transition: all 200ms ease
Hover: background #60a5fa, transform translateY(-1px)
Active: background #0b5cd5, transform translateY(0)
Shadow: 0 4px 12px rgba(14, 112, 249, 0.15)
Hover shadow: 0 8px 24px rgba(14, 112, 249, 0.25)
```

**Secondary Button**
```
Background: transparent
Border: 2px solid #e5e7eb
Text: #003040
Padding: 12px 30px
Border radius: 8px
Hover: border-color #0e70f9, text #0e70f9
```

**Ghost Button**
```
Background: transparent
Text: #0e70f9
Padding: 14px 24px
Hover: background #eff6ff
```

#### Cards
```
Background: #ffffff
Border: 1px solid #e5e7eb
Border radius: 12px
Padding: 32px
Shadow: 0 1px 3px rgba(0, 0, 0, 0.08)
Hover shadow: 0 8px 24px rgba(0, 0, 0, 0.12)
Transition: all 300ms ease
```

#### Input Fields
```
Background: #ffffff
Border: 1px solid #d1d5db
Border radius: 8px
Padding: 12px 16px
Font: 16px, weight 400
Focus: border #0e70f9, shadow 0 0 0 3px rgba(14, 112, 249, 0.1)
```

### Animations

#### Timing Functions
```
ease-smooth: cubic-bezier(0.4, 0, 0.2, 1)
ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55)
ease-productive: cubic-bezier(0.2, 0, 0.38, 0.9)
```

#### Duration
- **Micro:** 100ms (small state changes)
- **Quick:** 200ms (hover effects)
- **Base:** 300ms (transitions)
- **Slow:** 500ms (complex animations)

#### Animation Guidelines
- Fade in elements on scroll with 300ms duration
- Buttons transform on hover: translateY(-2px)
- Cards lift on hover with shadow transition
- Page transitions: fade + slight vertical movement
- Loading states: smooth skeleton screens

---

## Page Structure

### Navigation Bar
**Fixed position, transparent with blur backdrop**

#### Components:
- Logo (left): Onflow wordmark + icon
- Navigation links (center):
  - Features
  - How It Works
  - Pricing
  - Documentation
- CTA buttons (right):
  - "Sign In" (ghost button)
  - "Get Started" (primary button)

#### Behavior:
- Starts transparent
- Becomes solid white with shadow on scroll (after 50px)
- Smooth transition (300ms)
- Mobile: Hamburger menu

---

### Section 1: Hero
**Full viewport height, centered content**

#### Layout:
```
[Eyebrow Badge: "Launching Q1 2026"]

[H1 Hero Headline - 2 lines max]
"Ship products users actually love"

[Subheadline - Large body text]
"Onflow uses AI agents with computer vision to test your product
like real users: finding UX issues and changing them before launch."

[CTA Row]
[Primary Button: "Start Testing Free"] [Secondary Button: "Watch Demo"]

[Trust Bar]
"Trusted by 200+ product teams"
[Logo strip: 5-6 startup logos]

[Hero Visual]
[Animated product screenshot or illustration]
```

#### Visual Treatment:
- Gradient background: Subtle radial gradient from Blue 50 to Background
- Hero image: Floating with soft shadow, slight tilt
- Animated elements: Gentle floating animation on visual
- Particles/mesh: Optional subtle grid pattern in background

---

### Section 2: Problem Statement
**Two-column layout, problem → solution flow**

#### Layout:
```
[Eyebrow: "THE CHALLENGE"]

[H2]
"The founder's blind spot"

[Two-column grid]

[Left Column - The Problem]
- Callout card with icon
- Quote-style format
- Pain points in bullet form

[Right Column - The Stats]
- 3 stat cards with large numbers
- Supporting text
- Visual graph/chart element
```

#### Content:
- **Problem:** "Founders ship solutions the market needs, but fail at the final hurdle..."
- **Stats:**
  - "67% of startups fail due to poor product-market fit"
  - "Average 6 months wasted on features users never wanted"
  - "$50K average spent on manual QA before launch"

---

### Section 3: Solution Overview
**Center-aligned, visual-first**

#### Layout:
```
[Eyebrow: "MEET ONFLOW"]

[H2]
"Agentic testing that thinks like your users"

[Large body text]
Brief explanation of BUA technology

[Large visual]
Animated diagram showing:
User Persona → Agent → Product → Feedback → PR
```

#### Visual:
- Animated flow diagram
- Icons for each stage
- Connecting lines with animated dots
- Hover states reveal more detail

---

### Section 4: Key Differentiators
**Three-column feature grid**

#### Layout:
```
[Eyebrow: "WHY ONFLOW"]

[H2]
"Testing evolved"

[3-column grid of feature cards]

[Card 1]
[Icon: Eye]
[H4] "Computer Vision Intelligence"
[Body] "Unlike crawlers that read code, our agents see your product exactly as users do."

[Card 2]
[Icon: Users]
[H4] "Agentic Personas"
[Body] "AI agents that emulate real user archetypes, behaviors, and goals."

[Card 3]
[Icon: Git Branch]
[H4] "Automated Fixes"
[Body] "AI-generated pull requests turn feedback into features instantly."
```

#### Visual Treatment:
- Cards with subtle gradient borders
- Icons with primary color
- Hover: Card lifts, gradient intensifies
- Each card has supporting illustration or screenshot

---

### Section 5: How It Works
**Stepped process, alternating layout**

#### Layout:
```
[Eyebrow: "THE PROCESS"]

[H2]
"From feedback to fix in minutes"

[Step 1 - Image Left, Content Right]
[Large: "01"]
[H3] "Define Your Personas"
[Body] "Use our Persona Generation Engine or create custom user archetypes."
[Image: Persona builder interface]

[Step 2 - Image Right, Content Left]
[Large: "02"]
[H3] "Deploy Agent Swarm"
[Body] "Agents interact with your product, simulating real usage patterns."
[Image: Agents testing interface]

[Step 3 - Image Left, Content Right]
[Large: "03"]
[H3] "Review Insights"
[Body] "Get detailed reports on bugs, UX friction, and improvement opportunities."
[Image: Analytics dashboard]

[Step 4 - Image Right, Content Left]
[Large: "04"]
[H3] "Ship Fixes Fast"
[Body] "Approve AI-generated PRs or use insights to guide your development."
[Image: GitHub PR interface]
```

---

### Section 6: Features Deep Dive
**Tabbed interface or expandable sections**

#### Layout:
```
[Eyebrow: "CAPABILITIES"]

[H2]
"Everything you need to ship with confidence"

[Horizontal tab navigation]
[QA Automation] [User Research] [CI/CD Integration] [Analytics]

[Active tab content area]
[Large screenshot/demo on left]
[Feature details on right]
- Bullet points with checkmarks
- Technical details
- Use case examples
```

---

### Section 7: Use Cases
**Card grid, industry-specific**

#### Layout:
```
[H2]
"Built for modern product teams"

[2-column grid of use case cards]

[Card: Early-Stage Startups]
Icon, title, description, example

[Card: Growth-Stage SaaS]
Icon, title, description, example

[Card: Enterprise Teams]
Icon, title, description, example

[Card: Agencies]
Icon, title, description, example
```

---

### Section 8: Social Proof
**Testimonial carousel**

#### Layout:
```
[Eyebrow: "LOVED BY BUILDERS"]

[H2]
"Don't just take our word for it"

[Carousel of testimonial cards]
Each card:
- Quote
- Author name
- Title & Company
- Avatar
- Company logo
- Optional metrics: "Found 47 bugs before launch"
```

---

### Section 9: Pricing
**Three-tier comparison table**

#### Layout:
```
[Eyebrow: "PRICING"]

[H2]
"Start free, scale as you grow"

[Toggle: Monthly / Annual (save 20%)]

[3-column pricing grid]

[Starter - Free]
$0/month
- 10 agent sessions/month
- Basic personas
- Core reports
- Community support
[Button: "Start Free"]

[Pro]
$99/month
- 100 agent sessions/month
- Custom personas
- Advanced analytics
- Priority support
- GitHub integration
[Button: "Start Trial"]

[Enterprise]
Custom pricing
- Unlimited sessions
- White-label agents
- Dedicated support
- Custom integrations
- SLA guarantee
[Button: "Contact Sales"]
```

---

### Section 10: FAQ
**Expandable accordion**

#### Layout:
```
[H2]
"Frequently asked questions"

[Two-column FAQ grid]

Left column:
- Q: "How is Onflow different from traditional QA?"
- Q: "What types of products can be tested?"
- Q: "Do I need technical knowledge?"

Right column:
- Q: "How long does testing take?"
- Q: "Can Onflow integrate with our CI/CD?"
- Q: "What about data security?"

[Each question expands to show answer]
```

---

### Section 11: Final CTA
**Full-width, gradient background**

#### Layout:
```
[Centered content with gradient background]

[H2]
"Ready to ship products users love?"

[Large body text]
"Join 200+ teams using Onflow to test smarter and ship faster."

[CTA buttons]
[Primary: "Start Testing Free"] [Secondary: "Schedule Demo"]

[Below: Small text]
"No credit card required • 5-minute setup • Cancel anytime"
```

#### Visual Treatment:
- Gradient background: Blue 500 to Cyan 500
- White text
- Soft glow effect
- Optional: Subtle animated background pattern

---

### Footer
**Multi-column, comprehensive**

#### Layout:
```
[4-column layout]

[Column 1: Brand]
- Onflow logo
- Tagline: "Testing evolved"
- Social icons

[Column 2: Product]
- Features
- Pricing
- Documentation
- Changelog
- API

[Column 3: Company]
- About
- Blog
- Careers
- Press Kit
- Contact

[Column 4: Legal]
- Privacy Policy
- Terms of Service
- Security
- Cookie Policy

[Bottom bar]
© 2026 Onflow. All rights reserved.
[Status: "All systems operational" with green dot]
```

---

## Responsive Behavior

### Breakpoints
```
Mobile:     320px - 767px
Tablet:     768px - 1023px
Desktop:    1024px - 1439px
Large:      1440px+
```

### Mobile Adaptations
- Single-column layouts
- Stacked navigation
- Reduced font sizes (scale by 0.8)
- Touch-friendly tap targets (min 44px)
- Hamburger menu
- Simplified animations
- Hero height: 80vh instead of 100vh

---

## Technical Requirements

### Performance
- Lighthouse score: 90+ for all metrics
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Image optimization: WebP with PNG/JPG fallback
- Lazy loading for below-fold content
- Font loading: font-display: swap

### Accessibility
- WCAG 2.1 AA compliance minimum
- Semantic HTML5
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators (2px solid #0e70f9 with 2px offset)
- Alt text for all images
- Color contrast minimum 4.5:1 for body text, 3:1 for large text

### SEO
- Meta tags: title, description, OG tags
- Structured data: Organization, Product, FAQ schemas
- Sitemap.xml
- Robots.txt
- Canonical URLs
- Fast server response time

### Technology Stack Recommendations
- **Framework:** Next.js 14+ (React)
- **Styling:** Tailwind CSS (matches this color system)
- **Animations:** Framer Motion
- **Icons:** Lucide React or Heroicons
- **Forms:** React Hook Form + Zod validation
- **Analytics:** Vercel Analytics or Plausible

---

## Content Guidelines

### Tone of Voice
- Confident but not aggressive
- Technical but accessible
- Solution-focused
- Empathetic to founder struggles
- Action-oriented ("Ship," "Build," "Test")

### Key Messaging
- **Hero message:** Speed to market with confidence
- **Problem:** Blind spots kill startups
- **Solution:** AI agents that test like real users
- **Differentiator:** Computer vision + automated fixes
- **CTA:** Start testing free, no friction

### Avoid
- Jargon without explanation
- Over-promising ("revolutionize," "game-changing")
- Fear-mongering
- Comparing directly to competitors by name
- Technical specs without context

---

## Conversion Optimization

### Primary Goals
1. Email capture (waitlist or free trial)
2. Demo booking
3. Documentation engagement

### CTAs Priority
1. **Primary:** "Start Testing Free"
2. **Secondary:** "Watch Demo" / "Schedule Demo"
3. **Tertiary:** "View Documentation"

### Trust Signals
- Customer logos
- Testimonials with real names and companies
- GitHub star count (if open-source component)
- Security badges
- Team photos/bios
- Transparent pricing

---

## Success Metrics

### Key Performance Indicators
- Conversion rate: % visitors → sign-ups
- Time on page: Target 2+ minutes
- Scroll depth: 70%+ reach bottom
- CTA click rate: 15%+ on primary buttons
- Form completion rate: 60%+ for email capture
- Demo booking rate: 5%+ of visitors

---

## Development Phases

### Phase 1: MVP (Week 1-2)
- Hero section
- Problem statement
- Solution overview
- Single CTA
- Basic footer
- Mobile responsive

### Phase 2: Content (Week 3)
- Features section
- How it works
- Social proof
- FAQ
- Complete navigation

### Phase 3: Optimization (Week 4)
- Animations
- Micro-interactions
- Performance optimization
- A/B testing setup
- Analytics integration

### Phase 4: Enhancement (Ongoing)
- Demo video
- Interactive product tour
- Blog integration
- Resource center

---

## Notes & Considerations

### Brand Evolution
- Logo should be designed to work at small sizes (favicon)
- Consider animated logo variant for hero
- Maintain consistent brand voice across all copy

### Competitors to Reference (Design, not copy)
- Linear (visual polish)
- Vercel (developer-focused clarity)
- Stripe (progressive disclosure)
- Framer (smooth animations)

### Future Considerations
- Multi-language support
- Dark mode toggle (invert color scheme)
- Interactive playground/demo
- Customer success stories (case studies)
- Integration marketplace showcase

---

## Appendix

### Color Palette Quick Reference
```css
:root {
  /* Core Brand */
  --color-primary: #0e70f9;
  --color-secondary: #008ba6;
  --color-background: #f8fafc;
  --color-text-dark: #003040;

  /* Extended */
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;

  /* Neutrals */
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-200: #e5e7eb;
  --color-gray-300: #d1d5db;
  --color-gray-400: #9ca3af;
  --color-gray-500: #6b7280;
  --color-gray-600: #4b5563;
  --color-gray-700: #374151;
  --color-gray-800: #1f2937;
  --color-gray-900: #111827;

  /* Blue Scale */
  --color-blue-50: #eff6ff;
  --color-blue-100: #dbeafe;
  --color-blue-400: #60a5fa;
  --color-blue-600: #0b5cd5;
  --color-blue-700: #0847a0;

  /* Cyan Scale */
  --color-cyan-50: #ecfeff;
  --color-cyan-400: #22d3ee;
  --color-cyan-600: #007089;
  --color-cyan-700: #00546b;
}
```

### Typography Quick Reference
```css
:root {
  --font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  /* Sizes */
  --text-hero: 4.5rem;     /* 72px */
  --text-h2: 3rem;         /* 48px */
  --text-h3: 2.25rem;      /* 36px */
  --text-h4: 1.5rem;       /* 24px */
  --text-h5: 1.25rem;      /* 20px */
  --text-lg: 1.25rem;      /* 20px */
  --text-base: 1rem;       /* 16px */
  --text-sm: 0.875rem;     /* 14px */
  --text-xs: 0.75rem;      /* 12px */

  /* Weights */
  --font-light: 300;
  --font-regular: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --font-extrabold: 800;
  --font-black: 900;
}
```

---

**Document Version:** 1.0
**Last Updated:** January 11, 2026
**Owner:** Product Team
**Status:** Ready for Development
