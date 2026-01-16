import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Stats from '@/components/Stats'
import OneApp from '@/components/OneApp'
import Subjects from '@/components/Subjects'
import Testimonials from '@/components/Testimonials'
import DownloadCTA from '@/components/DownloadCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation Header */}
      <Header />
      
      {/* Hero Section - Main banner with download buttons */}
      <Hero />
      
      {/* Features Section - 4 feature cards */}
      <Features />
      
      {/* Stats Section - Numbers (downloads, ratings, etc.) */}
      <Stats />
      
      {/* One App Section - "One App to Rule Every Exam" */}
      <OneApp />
      
      {/* Subjects Section - Subject tags and exam boards */}
      <Subjects />
      
      {/* Testimonials Section - Student reviews */}
      <Testimonials />
      
      {/* Download CTA Section - Final call to action */}
      <DownloadCTA />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
