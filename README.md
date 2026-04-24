# Tanzeera Healthcare Clinic

A modern, responsive healthcare clinic management web application built with **Next.js**, **TypeScript**, **React**, and **Tailwind CSS**. This platform provides an intuitive interface for patients to browse services, book appointments, view doctor profiles, and contact the clinic.

![Next.js](https://img.shields.io/badge/Next.js-16.2.0-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18+-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-Latest-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## 🎯 Features

### Core Features
- **🏥 Service Showcase** - Comprehensive display of clinic services including cardiology, dental, eye care, general checkup, lab services, mental health, and physical therapy
- **👨‍⚕️ Doctor Directory** - Browse available doctors with detailed profiles and specializations
- **📅 Appointment Booking** - User-friendly booking system for scheduling consultations
- **📞 Contact Management** - Direct communication channel with the clinic
- **🎪 Hero Carousel** - Eye-catching image slider for homepage
- **📊 Statistics Display** - Quick clinic statistics and key metrics
- **🌙 Dark/Light Theme** - Seamless theme switching with `next-themes`
- **⚡ Smooth Animations** - Scroll reveal animations for enhanced UX
- **📱 Fully Responsive** - Mobile-first design that works on all devices
- **📧 Email Integration** - Send emails directly from the contact form

### Technical Highlights
- **TypeScript** - Full type safety across the application
- **Radix UI Components** - Accessible, unstyled component library
- **Form Handling** - React Hook Form with validation
- **API Routes** - Next.js API endpoints for backend operations
- **Analytics** - Vercel Analytics integration for insights
- **Performance Optimized** - Unoptimized images for flexibility, optimized build process

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18.x or higher
- **pnpm** 8.x or higher (or npm/yarn)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rajaramsharma/HealthCare.git
   cd HealthCare
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application

## 📁 Project Structure

```
clinic/
├── app/                          # Next.js App Router
│   ├── page.tsx                 # Home page
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   ├── about/                   # About page
│   ├── booking/                 # Booking page
│   ├── contact/                 # Contact page
│   ├── doctors/                 # Doctors listing
│   ├── services/                # Services pages
│   │   ├── cardiology/
│   │   ├── dental/
│   │   ├── eye/
│   │   ├── general-checkup/
│   │   ├── lab/
│   │   ├── mental/
│   │   └── physical/
│   ├── api/                     # API routes
│   │   └── send-email/          # Email endpoint
│   └── data/                    # Data files
│
├── components/                   # React components
│   ├── ui/                      # Reusable UI components (Radix-based)
│   ├── doctors/                 # Doctor-related components
│   │   ├── DoctorCard.tsx
│   │   ├── DoctorModal.tsx
│   │   └── DoctorsClient.tsx
│   ├── services/                # Service-related components
│   │   └── ServiceCard.tsx
│   ├── Navbar.tsx               # Navigation bar
│   ├── TopNavbar.tsx            # Top navigation
│   ├── Footer.tsx               # Footer component
│   ├── hero-carousel.tsx        # Hero carousel slider
│   ├── scroll-reveal.tsx        # Scroll animation component
│   ├── stat-card.tsx            # Statistics card
│   ├── service-card.tsx         # Service card component
│   └── theme-provider.tsx       # Theme provider setup
│
├── lib/                         # Utilities and data
│   ├── utils.ts                 # Utility functions
│   └── data/
│       ├── doctors.ts           # Doctors data
│       └── services.ts          # Services data
│
├── hooks/                       # Custom React hooks
│   ├── use-mobile.ts            # Mobile detection hook
│   └── use-toast.ts             # Toast notification hook
│
├── public/                      # Static assets
│   └── images/
│       ├── doctors/
│       └── services-image/
│
├── styles/                      # Global styles
│   └── globals.css
│
├── next.config.mjs              # Next.js configuration
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── postcss.config.mjs           # PostCSS configuration
├── components.json              # Shadcn/ui components config
└── package.json                 # Dependencies and scripts
```

## 🛠 Available Scripts

```bash
# Development
pnpm dev              # Start dev server at localhost:3000

# Production
pnpm build            # Build for production
pnpm start            # Start production server

# Code Quality
pnpm lint             # Run ESLint
```

## 📦 Key Dependencies

### Frontend Framework
- **next** (16.2.0) - React framework with SSR/SSG
- **react** - UI library
- **react-dom** - React DOM rendering

### UI & Components
- **@radix-ui/** - Headless UI components (accordion, dialog, dropdown, etc.)
- **lucide-react** - Beautiful icon library
- **embla-carousel-react** - Carousel component
- **shadcn/ui** - High-quality component library

### Forms & Validation
- **react-hook-form** - Performant form handling
- **@hookform/resolvers** - Validation resolvers

### Styling
- **tailwindcss** - Utility-first CSS framework
- **autoprefixer** - PostCSS plugin for vendor prefixes
- **class-variance-authority** - CSS class generation

### Utilities & Features
- **date-fns** - Modern date utility library
- **next-themes** - Dark/light theme management
- **@vercel/analytics** - Analytics tracking
- **sonner** - Toast notifications
- **clsx** - Utility for conditional CSS class names

## 🌐 Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, stats, and featured services |
| `/about` | About the clinic |
| `/services` | All available services |
| `/services/[service]` | Specific service details (cardiology, dental, etc.) |
| `/booking` | Appointment booking |
| `/doctors` | Doctor directory |
| `/contact` | Contact form |
| `/api/send-email` | Email API endpoint |

## 🎨 Customization

### Theme Colors
Edit your Tailwind configuration in `tailwind.config.ts` to customize colors, fonts, and other design tokens.

### Service Data
Update service information in `lib/data/services.ts`

### Doctor Data
Manage doctor profiles in `lib/data/doctors.ts`

### Components
All reusable UI components are located in `components/ui/` and can be customized to match your brand.

## 📧 Email Integration

The contact form uses the `/api/send-email` endpoint to send emails. Configure your email service provider (SMTP, SendGrid, Mailgun, etc.) in your environment variables.

**Environment variables needed:**
```env
# Email Configuration
SMTP_HOST=your_smtp_host
SMTP_PORT=your_smtp_port
SMTP_USER=your_email
SMTP_PASSWORD=your_password
NEXT_PUBLIC_CLINIC_EMAIL=clinic@example.com
```

## 🔒 Security Best Practices

- ✅ TypeScript for type safety
- ✅ Environment variables for sensitive data
- ✅ Form validation with React Hook Form
- ✅ API route protection (implement auth as needed)
- ✅ CORS configuration for API endpoints

## 📈 Performance

- **Fast Load Times** - Optimized Next.js build
- **Image Optimization** - Configure image sizes for best performance
- **Code Splitting** - Automatic code splitting by Next.js
- **Caching** - ISR and SSG for static content
- **Analytics** - Vercel Analytics for monitoring

## 🚢 Deployment

### Vercel (Recommended)
```bash
pnpm build
vercel deploy
```

### Docker
```bash
docker build -t clinic .
docker run -p 3000:3000 clinic
```

### Traditional Server
```bash
pnpm build
pnpm start
```

## 🐛 Troubleshooting

### Build Errors
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && pnpm install`
- Check TypeScript: `pnpm tsc --noEmit`

### Development Issues
- Ensure Node.js version is 18+
- Clear browser cache
- Restart dev server

## 📝 Environment Setup

Create a `.env.local` file in the root directory:
```env
# Email Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000

# Analytics (Optional)
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_analytics_id
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Tanzeera Tech Team** - Initial development and maintenance

## 📞 Support

For support, email support@tanzeera.com or open an issue on GitHub.

## 🔗 Links

- [Live Demo](#) - Coming soon
- [Documentation](#) - Coming soon
- [Report Bug](https://github.com/rajaramsharma/HealthCare/issues)
- [Request Feature](https://github.com/rajaramsharma/HealthCare/issues)

## 📊 Project Stats

- **Services**: 7 specialized healthcare services
- **Components**: 50+ reusable UI components
- **Pages**: 8 main pages
- **Fully Responsive**: Mobile, Tablet, Desktop
- **Dark Mode**: Supported
- **Type Safe**: 100% TypeScript

---

**Made with ❤️ by Tanzeera Tech**

Last Updated: April 2026
