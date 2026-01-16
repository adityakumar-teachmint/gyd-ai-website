'use client'

import { motion } from 'framer-motion'
import content from '@/config/content'
import { Check, Sparkles } from 'lucide-react'

export default function OneApp() {
  return (
    <section id="how-it-works" className="section relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-glow bg-glow-secondary opacity-20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            {/* Floating cards illustration */}
            <div className="relative h-[400px] md:h-[500px]">
              {/* Background glow */}
              <div 
                className="absolute inset-0 blur-3xl opacity-20"
                style={{
                  background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #06B6D4 100%)',
                }}
              />
              
              {/* Card 1 - Quiz */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="absolute top-0 left-0 w-64 glass-card p-5 animate-float"
                style={{ animationDelay: '0s' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <span className="text-xl">📝</span>
                  </div>
                  <span className="font-semibold">Quick Quiz</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-primary to-secondary rounded-full" />
                  </div>
                  <span className="text-xs text-gray-400">75% Complete</span>
                </div>
              </motion.div>

              {/* Card 2 - Streak */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute top-1/4 right-0 w-56 glass-card p-5 animate-float"
                style={{ animationDelay: '1s' }}
              >
                <div className="text-center">
                  <span className="text-4xl">🔥</span>
                  <div className="text-2xl font-bold mt-2">25 Day Streak!</div>
                  <div className="text-sm text-gray-400">Keep it going</div>
                </div>
              </motion.div>

              {/* Card 3 - XP */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-1/4 left-8 w-48 glass-card p-4 animate-float"
                style={{ animationDelay: '2s' }}
              >
                <div className="flex items-center gap-3">
                  <Sparkles className="w-8 h-8 text-yellow-400" />
                  <div>
                    <div className="text-lg font-bold">+50 XP</div>
                    <div className="text-xs text-gray-400">Quiz completed!</div>
                  </div>
                </div>
              </motion.div>

              {/* Card 4 - Leaderboard position */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-0 right-8 w-52 glass-card p-4 animate-float"
                style={{ animationDelay: '0.5s' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center font-bold">
                    #3
                  </div>
                  <div>
                    <div className="font-semibold">Top 1%</div>
                    <div className="text-xs text-gray-400">This week</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
              Complete Solution
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {content.oneApp.title.split('.')[0]}.
              <span className="gradient-text block mt-2">{content.oneApp.title.split('.')[1] || ''}</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              {content.oneApp.subtitle}
            </p>

            {/* Features list */}
            <ul className="space-y-4">
              {content.oneApp.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
                    }}
                  >
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
