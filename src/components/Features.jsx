'use client'

import { motion } from 'framer-motion'
import content from '@/config/content'
import { 
  MessageSquare, 
  Layers, 
  FileQuestion, 
  BarChart3,
  BookOpen,
  Brain,
  Target,
  Trophy,
  Sparkles,
  Zap
} from 'lucide-react'

// Icon mapping for content.js icons
const iconMap = {
  chat: MessageSquare,
  cards: Layers,
  quiz: FileQuestion,
  chart: BarChart3,
  book: BookOpen,
  brain: Brain,
  target: Target,
  trophy: Trophy,
  sparkles: Sparkles,
  zap: Zap,
}

export default function Features() {
  return (
    <section id="features" className="section relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-glow bg-glow-primary opacity-20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            Features
          </span>
          <h2 className="section-title">
            Everything You Need to{' '}
            <span className="gradient-text">Succeed</span>
          </h2>
          <p className="section-subtitle mt-4">
            Powerful tools designed to make studying effective, engaging, and even fun.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {content.features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || MessageSquare
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="feature-card glass-card p-8 group"
              >
                {/* Icon */}
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)`,
                    border: '1px solid rgba(59, 130, 246, 0.3)'
                  }}
                >
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover arrow */}
                <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">Learn more</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
