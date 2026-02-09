# Zuno Scroll Landing Page

A modern, SEO-optimized landing page built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, and structured data
- **Smooth Animations**: Framer Motion animations throughout
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, professional design with gradient effects
- **Performance**: Optimized for Core Web Vitals
- **Accessibility**: WCAG compliant

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the landing page directory:

```bash
cd zuno-scroll-landing
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
zuno-scroll-landing/
├── app/
│   ├── globals.css       # Global styles and animations
│   ├── layout.tsx        # Root layout with SEO metadata
│   └── page.tsx          # Main landing page
├── public/               # Static assets
├── next.config.js        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies
```

## 🎨 Sections

The landing page includes:

1. **Navigation Bar** - Sticky header with smooth animations
2. **Hero Section** - Eye-catching headline with CTA buttons
3. **Stats Section** - Social proof with user statistics
4. **Features Section** - 6 key features with icons and descriptions
5. **How It Works** - 4-step process explanation
6. **Benefits Section** - Why choose Zuno Scroll
7. **CTA Section** - Final call-to-action
8. **Footer** - Links and company information

## 🚀 Building for Production

```bash
npm run build
npm run start
```

## 📝 SEO Checklist

- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Semantic HTML structure
- ✅ Alt text for images
- ✅ Mobile responsive
- ✅ Fast loading times
- ✅ Schema markup ready

## 🎨 Customization

### Colors

Edit the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: { /* your colors */ },
  accent: { /* your colors */ }
}
```

### Content

Update text content in `app/page.tsx` to match your brand voice and messaging.

### Animations

Customize animations in `app/globals.css` or modify Framer Motion settings in components.

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Environment Variables

Create a `.env.local` file for any environment-specific variables:

```
NEXT_PUBLIC_APP_URL=https://zunoscroll.com
# Add other variables as needed
```

## 📄 License

This project is proprietary and confidential.

## 🤝 Support

For issues or questions, contact the development team.
