'use client'

import { motion } from 'framer-motion'

export default function IntroLoader() {
  return (
    <motion.div
      className="intro-loader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
      }}
      aria-hidden="true"
    >
      <div className="intro-loader__glow intro-loader__glow--top" />
      <div className="intro-loader__glow intro-loader__glow--bottom" />

      <div className="intro-loader__mark">
        <motion.span
          className="intro-loader__word"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          STAR
        </motion.span>
        <motion.span
          className="intro-loader__star"
          initial={{ opacity: 0, rotate: -18, scale: 0.82 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
        >
          *
        </motion.span>
      </div>

      <motion.div
        className="intro-loader__line"
        initial={{ scaleX: 0, opacity: 0.4 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      />

      <motion.p
        className="intro-loader__caption"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
      >
        Crafted for businesses that should be impossible to ignore.
      </motion.p>
    </motion.div>
  )
}
