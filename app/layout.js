import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import siteMetadata from '@/utils/siteMetaData'
const poppins = Poppins({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]})

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title, // a default is required when creating a template
  },
  description: siteMetadata.description,
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: siteMetadata.siteLogo,
        href: siteMetadata.siteLogo,
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: siteMetadata.siteLogo,
        href: siteMetadata.siteLogo,
      }
    ]
  },
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    images: [siteMetadata.socialBanner],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(poppins.className, "dark:bg-[#1F1F1F]")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange     
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
