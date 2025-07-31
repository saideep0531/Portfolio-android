// Import global styles and dependencies
import '../styles/globals.css'; // Global CSS styles for the entire application
import { Inter } from 'next/font/google'; // Google Fonts integration for Inter font
import type { Metadata } from 'next'; // TypeScript type for page metadata
import { ThemeProvider } from '@/components/theme-provider'; // Custom theme provider component

// Configure the Inter font with Latin character subset
const inter = Inter({ subsets: ['latin'] });

/**
 * Metadata Configuration
 * 
 * This object defines the metadata for the entire website, including:
 * - SEO information (title, description, keywords)
 * - Open Graph tags for social media sharing
 * - Twitter Card configuration
 * - Structured data for search engines
 */
export const metadata: Metadata = {
  title: 'Saideep Guddla — Android Engineer',
  description: 'Android Engineer specializing in Kotlin, Jetpack, and Clean Architecture',
  keywords: ['Android', 'Kotlin', 'Jetpack', 'Clean Architecture', 'Mobile Development'],
  authors: [{ name: 'Saideep Guddla' }],
  creator: 'Saideep Guddla',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://saideepguddla.com',
    title: 'Saideep Guddla — Android Engineer',
    description: 'Android Engineer specializing in Kotlin, Jetpack, and Clean Architecture',
    siteName: 'Saideep Guddla Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Saideep Guddla — Android Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saideep Guddla — Android Engineer',
    description: 'Android Engineer specializing in Kotlin, Jetpack, and Clean Architecture',
    images: ['/og-image.png'],
  },
};

/**
 * RootLayout Component
 * 
 * This is the root layout component that wraps all pages in the application.
 * It provides the basic HTML structure, metadata, and global providers.
 * 
 * Features:
 * - Sets up the HTML document structure
 * - Includes metadata and structured data
 * - Provides theme context to all pages
 * - Configures fonts and global styling
 * - Includes favicon and other head elements
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The page content to render
 * @returns {JSX.Element} The complete HTML document structure
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Saideep Guddla',
              url: 'https://saideepguddla.com',
              jobTitle: 'Android Engineer',
              worksFor: {
                '@type': 'Organization',
                name: 'Current Company',
              },
              sameAs: [
                'https://github.com/saideepguddla',
                'https://linkedin.com/in/saideepguddla',
                'https://play.google.com/store/apps/developer?id=saideepguddla',
              ],
              knowsAbout: [
                'Android Development',
                'Kotlin',
                'Java',
                'Jetpack',
                'Clean Architecture',
                'MVVM',
                'MVI',
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}