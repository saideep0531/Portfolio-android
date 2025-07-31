# Portfolio Website - Saideep Guddla

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. This website showcases professional experience, skills, projects, and provides a contact form for potential opportunities.

## 🚀 Features

- **Modern Design**: Clean, professional layout with dark/light theme support
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js 14 for optimal performance
- **SEO Friendly**: Comprehensive metadata and structured data
- **Contact Form**: Functional contact form with email notifications
- **Theme Toggle**: Dark/light mode with system preference detection
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML
- **Type Safe**: Built with TypeScript for better development experience

## 🛠️ Tech Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React**: UI library
- **next-themes**: Theme management
- **Lucide React**: Icon library

### Backend
- **Next.js API Routes**: Serverless API endpoints
- **Nodemailer**: Email sending functionality
- **Gmail SMTP**: Email service provider

### Development Tools
- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

## 📁 Project Structure

```
portfolio-site/
├── app/                    # Next.js App Router directory
│   ├── api/               # API routes
│   │   └── contact/       # Contact form API endpoint
│   │       └── route.ts   # POST handler for contact form
│   ├── layout.tsx         # Root layout component
│   └── page.tsx          # Home page component
├── components/            # Reusable React components
│   ├── contact-form.tsx  # Contact form component
│   ├── theme-provider.tsx # Theme context provider
│   └── theme-toggle.tsx  # Dark/light mode toggle
├── lib/                  # Utility functions
│   └── utils.ts         # Helper functions
├── public/              # Static assets
│   └── images/         # Image files
├── styles/             # Global styles
│   └── globals.css    # Global CSS with Tailwind
├── next.config.js     # Next.js configuration
├── package.json       # Dependencies and scripts
├── tailwind.config.js # Tailwind CSS configuration
└── tsconfig.json     # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your system:
- **Node.js** (version 18.0 or higher)
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (Optional - for email functionality)
   
   Create a `.env.local` file in the root directory:
   ```env
   EMAIL_USER=your-gmail-address@gmail.com
   EMAIL_PASS=your-app-password
   ```
   
   **Note**: To use Gmail SMTP, you need to:
   - Enable 2-factor authentication on your Google account
   - Generate an "App Password" in your Google Account settings
   - Use the app password (not your regular password) in EMAIL_PASS

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 📧 Contact Form Setup

The contact form uses Gmail SMTP to send emails. To enable this functionality:

1. **Gmail Setup**:
   - Go to your Google Account settings
   - Enable 2-factor authentication
   - Generate an "App Password" for the application

2. **Environment Variables**:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-16-character-app-password
   ```

3. **Security Features**:
   - Honeypot spam protection
   - Form validation
   - Rate limiting (can be added)

## 🎨 Customization

### Updating Content

1. **Personal Information**: Edit `app/page.tsx`
   - Update name, title, description
   - Modify skills, experience, education sections
   - Add/remove projects

2. **Styling**: Modify `styles/globals.css` and Tailwind classes
   - Custom colors in `tailwind.config.js`
   - Component-specific styles

3. **Images**: Replace files in `public/images/`
   - Profile picture: `profile.svg`
   - Favicon: `favicon.ico`

### Adding New Sections

1. Create new components in `components/` directory
2. Import and use in `app/page.tsx`
3. Add navigation links in the header
4. Update metadata in `app/layout.tsx`

## 🔧 Component Guide

### ContactForm Component
**Location**: `components/contact-form.tsx`

**Features**:
- Form validation
- Loading states
- Success/error feedback
- Spam protection
- Accessibility features

**Usage**:
```tsx
import { ContactForm } from '@/components/contact-form';

<ContactForm />
```

### ThemeToggle Component
**Location**: `components/theme-toggle.tsx`

**Features**:
- Light/dark mode toggle
- Animated icon transitions
- System theme detection
- Accessible button

**Usage**:
```tsx
import { ThemeToggle } from '@/components/theme-toggle';

<ThemeToggle />
```

### ThemeProvider Component
**Location**: `components/theme-provider.tsx`

**Purpose**: Wraps the app to provide theme context

**Usage**: Already implemented in `app/layout.tsx`

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Other Platforms

- **Netlify**: Works with Next.js
- **Railway**: Supports Node.js applications
- **DigitalOcean**: App Platform supports Next.js

## 🔍 SEO Features

- **Metadata**: Comprehensive meta tags
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD for search engines
- **Semantic HTML**: Proper heading hierarchy
- **Alt Text**: All images have descriptive alt text

## ♿ Accessibility Features

- **ARIA Labels**: Proper labeling for screen readers
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG AA compliant colors
- **Focus Management**: Visible focus indicators
- **Semantic HTML**: Proper use of HTML elements

## 🐛 Troubleshooting

### Common Issues

1. **Email not sending**:
   - Check environment variables
   - Verify Gmail app password
   - Check console for errors

2. **Theme not working**:
   - Ensure ThemeProvider wraps the app
   - Check for hydration issues

3. **Build errors**:
   - Run `npm run lint` to check for issues
   - Ensure all imports are correct
   - Check TypeScript errors

### Development Tips

- Use browser dev tools for responsive testing
- Check console for any JavaScript errors
- Test form submission in development
- Verify all links work correctly

## 📝 License

This project is for personal use. Feel free to use it as a template for your own portfolio.

## 🤝 Contributing

This is a personal portfolio project, but suggestions and improvements are welcome!

## 📞 Support

If you have questions about this portfolio website, feel free to reach out through the contact form or GitHub issues.

---

**Built with ❤️ by Saideep Guddla**