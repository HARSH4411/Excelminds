import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function FooterSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <footer ref={ref} className="section-padding pb-10 relative overflow-hidden" style={{ background: 'hsl(var(--cream-dark))' }}>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold font-display"><span style={{ color: '#D4A017' }}>EXCEL</span><span style={{ color: '#4A1A6B' }}>MINDS</span></h3>
          <p className="text-sm text-muted-foreground font-body mt-2">Professional Academy</p>
          <p className="text-xs text-muted-foreground font-body mt-1 tracking-wider">Building Careers. Creating Rankers.</p>

          <div className="w-16 h-px mx-auto my-8" style={{ background: 'var(--gradient-gold)' }} />

          <p className="text-xs text-muted-foreground font-body">© 2025 ExcelMinds Professional Academy. All Rights Reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
