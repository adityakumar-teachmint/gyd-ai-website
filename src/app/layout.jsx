import './globals.css'
import content from '@/config/content'

export const metadata = {
  title: content.seo.title,
  description: content.seo.description,
  keywords: content.seo.keywords,
  openGraph: {
    title: content.seo.title,
    description: content.seo.description,
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Fonts - Cabinet Grotesk for display, Plus Jakarta Sans for body */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
        
        {/* Favicon - Replace with actual GYD AI favicon */}
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <body 
        className="bg-[#0a0a0a] text-white antialiased"
        style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
      >
        {/* Noise texture overlay for premium feel */}
        <div className="noise-overlay" />
        
        {/* Main content */}
        {children}
      </body>
    </html>
  )
}
