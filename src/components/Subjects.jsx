'use client'

import { motion } from 'framer-motion'
import content from '@/config/content'

export default function Subjects() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
              Wide Coverage
            </span>
            <h2 className="section-title">
              {content.subjects.title.split('.')[0]}.
              <span className="gradient-text block">{content.subjects.title.split('.')[1]}</span>
            </h2>
            <p className="section-subtitle mt-4">
              {content.subjects.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Subjects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-center text-sm text-gray-500 uppercase tracking-widest mb-6">
            Popular Subjects
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {content.subjects.subjectList.map((subject, index) => (
              <motion.span
                key={subject}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="subject-tag cursor-pointer"
              >
                {subject}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Standards/Boards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-center text-sm text-gray-500 uppercase tracking-widest mb-6">
            Exams & Boards
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {content.subjects.standards.map((standard, index) => (
              <motion.div
                key={standard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card px-6 py-4 text-center min-w-[100px] cursor-pointer"
              >
                <span className="font-semibold text-white">{standard}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
