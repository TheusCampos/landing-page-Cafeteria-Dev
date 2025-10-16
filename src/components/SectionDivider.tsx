import { motion } from 'framer-motion';

type SectionDividerProps = {
  label: string;
  className?: string;
};

// Minimal divider inspired by centered label with thin golden lines
// Usage: place above each section's heading for consistent premium styling
const SectionDivider = ({ label, className = '' }: SectionDividerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`flex items-center justify-center gap-6 ${className}`}
      aria-hidden="true"
    >
      <span className="h-[1px] w-16 sm:w-24 md:w-32 bg-gradient-to-r from-transparent via-secondary-gold/80 to-transparent" />
      <span className="text-secondary-gold uppercase tracking-[0.35em] text-[11px] sm:text-xs font-medium">
        {label}
      </span>
      <span className="h-[1px] w-16 sm:w-24 md:w-32 bg-gradient-to-r from-transparent via-secondary-gold/80 to-transparent" />
    </motion.div>
  );
};

export default SectionDivider;