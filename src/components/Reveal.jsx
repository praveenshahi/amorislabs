import { motion } from 'framer-motion';

// Shared scroll-reveal wrapper. Replaces the old IntersectionObserver hand-roll.
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const MotionTag = motion[Tag] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.6, delay, ease: [0.2, 0.7, 0.3, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
