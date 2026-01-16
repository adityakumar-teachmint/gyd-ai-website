'use client'

import { motion } from 'framer-motion'
import content from '@/config/content'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className="bg-glow bg-glow-primary absolute top-1/4 -left-40 animate-pulse-glow" />
        <div className="bg-glow bg-glow-secondary absolute bottom-1/4 -right-40 animate-pulse-glow" style={{ animationDelay: '1s' }} />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                border: '1px solid rgba(59, 130, 246, 0.3)'
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm text-gray-300">{content.hero.badge}</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
            >
              <span className="block text-white">{content.hero.title.split(',')[0]},</span>
              <span className="gradient-text">{content.hero.title.split(',')[1]}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              {content.hero.subtitle}
            </motion.p>

            {/* Download Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              {/* Play Store Button */}
              <a
                href={content.appLinks.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="store-btn group"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-[10px] uppercase tracking-wider opacity-70">Download on</span>
                  <span className="text-lg font-semibold -mt-1">Play Store</span>
                </div>
              </a>

              {/* App Store Button */}
              <a
                href={content.appLinks.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="store-btn group"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-[10px] uppercase tracking-wider opacity-70">Download on</span>
                  <span className="text-lg font-semibold -mt-1">App Store</span>
                </div>
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-6 mt-8 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-[#0a0a0a] bg-gradient-to-br from-primary to-secondary"
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-400">10M+ learners</span>
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-semibold">4.8</span>
                <span className="text-sm text-gray-400">rating</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow behind phone */}
              <div 
                className="absolute inset-0 blur-3xl opacity-30"
                style={{
                  background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
                  transform: 'scale(0.8)',
                }}
              />
              
              {/* Phone frame */}
              <div className="relative animate-float">
                <div 
                  className="relative w-[280px] sm:w-[320px] md:w-[360px] aspect-[9/19] rounded-[3rem] p-3"
                  style={{
                    background: 'linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 100%)',
                    boxShadow: '0 50px 100px -20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)'
                  }}
                >
                  {/* Screen */}
                  <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-[#0f0f0f]">
                    {/* Status bar */}
                    <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-between px-6 text-xs text-white/80 z-10">
                      <span>9:41</span>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 3C8.5 3 5.5 4.5 3.5 7l1.5 1.5C6.5 6.5 9 5.5 12 5.5s5.5 1 7 3L20.5 7C18.5 4.5 15.5 3 12 3zm0 5C9.5 8 7.5 9 6 10.5l1.5 1.5c1-1 2.5-1.5 4.5-1.5s3.5.5 4.5 1.5L18 10.5C16.5 9 14.5 8 12 8z"/>
                        </svg>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17 4h-3V2h-4v2H7v18h10V4z"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* App content preview */}
                    <div className="absolute inset-0 pt-10 px-4">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary" />
                          <div>
                            <div className="text-sm font-semibold">Good afternoon 👋</div>
                            <div className="text-xs text-gray-400">Praveen</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="px-2 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs">🔥 25</div>
                          <div className="px-2 py-1 rounded-full bg-primary/20 text-primary text-xs">XP 100</div>
                        </div>
                      </div>

                      {/* Main card */}
                      <div 
                        className="rounded-2xl p-4 mb-4"
                        style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)' }}
                      >
                        <div className="text-center">
                          <div className="text-4xl mb-2">🚀</div>
                          <div className="text-xs text-gray-400 mb-1">Just 10 questions away from unlocking</div>
                          <div className="text-lg font-bold">Rookie!</div>
                          <button className="w-full mt-3 py-2 rounded-lg bg-primary text-sm font-medium">
                            Start Practicing
                          </button>
                        </div>
                      </div>

                      {/* Quick actions */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="p-3 rounded-xl bg-white/5 text-center">
                          <div className="text-lg mb-1">📝</div>
                          <div className="text-xs text-gray-400">Generate Quiz</div>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 text-center">
                          <div className="text-lg mb-1">🎯</div>
                          <div className="text-xs text-gray-400">Practice Bits</div>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 text-center">
                          <div className="text-lg mb-1">📚</div>
                          <div className="text-xs text-gray-400">Flashcards</div>
                        </div>
                      </div>

                      {/* AI input */}
                      <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5">
                        <span className="text-sm text-gray-400">Ask GYD AI...</span>
                        <div className="ml-auto w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Home indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-gray-500">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
