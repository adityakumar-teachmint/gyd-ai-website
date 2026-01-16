'use client'

import { motion } from 'framer-motion'
import content from '@/config/content'
import { Star, Download, Users, BookOpen } from 'lucide-react'

const iconMap = {
  star: Star,
  download: Download,
  users: Users,
  book: BookOpen,
}

export default function Stats() {
  return (
    <section className="py-16 md:py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.03) 50%, transparent 100%)'
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {content.stats.map((stat, index) => {
              const Icon = stat.icon ? iconMap[stat.icon] : null
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {Icon && stat.icon === 'star' && (
                      <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                    )}
                    <span className="stat-value">{stat.value}</span>
                  </div>
                  <span className="text-gray-400 text-sm md:text-base">{stat.label}</span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
