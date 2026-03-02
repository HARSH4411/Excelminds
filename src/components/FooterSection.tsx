import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Wave = ({ delay, duration, opacity, y }: { delay: number; duration: number; opacity: number; y: number }) => (
  <motion.div
    className="absolute left-0 right-0 bottom-0"
    style={{ height: '120px', transform: `translateY(${y}px)` }}
  >
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className="w-full h-full"
      style={{ opacity }}
    >
      <motion.path
        d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
        fill="hsl(var(--primary) / 0.15)"
        animate={{
          d: [
            "M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z",
            "M0,40 C240,20 480,100 720,40 C960,20 1200,100 1440,40 L1440,120 L0,120 Z",
            "M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z",
          ],
        }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </svg>
  </motion.div>
);

const Foam = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute bottom-[60px] left-0 right-0 h-[2px]"
    style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--primary) / 0.2), hsl(var(--gold) / 0.3), hsl(var(--primary) / 0.2), transparent)' }}
    animate={{ opacity: [0, 0.6, 0], scaleX: [0.8, 1, 0.8] }}
    transition={{ duration: 4, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

export default function FooterSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <footer ref={ref} className="section-padding pb-10 relative overflow-hidden" style={{ background: 'hsl(var(--cream-dark))' }}>
      {/* Animated waves */}
      <div className="absolute inset-x-0 bottom-0 h-[140px] pointer-events-none">
        <Wave delay={0} duration={6} opacity={0.4} y={20} />
        <Wave delay={1} duration={5} opacity={0.6} y={10} />
        <Wave delay={2} duration={4} opacity={0.3} y={0} />
        <Foam delay={0.5} />
        <Foam delay={2.5} />
      </div>

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
