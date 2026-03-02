import { motion } from 'framer-motion';
import { useCountUp } from '@/hooks/useCountUp';
import { useState, useEffect } from 'react';

const stats = [
  { label: 'Students Trained', value: 500, suffix: '+' },
  { label: 'Top Rank Results', value: 50, suffix: '+' },
  { label: 'Expert Faculty', value: 10, suffix: '+' },
];

function StatCounter({ label, value, suffix, start }: { label: string; value: number; suffix: string; start: boolean }) {
  const count = useCountUp(value, 2000, start);
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold font-display text-gradient-gold" style={{ animation: start ? 'count-glow 2s ease-in-out infinite' : 'none' }}>
        {count}{suffix}
      </div>
      <div className="text-sm mt-1 text-muted-foreground font-body">{label}</div>
    </div>
  );
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const excelLetters = "EXCEL".split('');
  const mindsLetters = "MINDS".split('');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding">
      {/* Mesh gradient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, hsl(270 40% 88%), transparent 70%)', animation: 'mesh-move 25s ease-in-out infinite' }} />
        <div className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, hsl(42 60% 85%), transparent 70%)', animation: 'mesh-move 30s ease-in-out infinite reverse' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, hsl(270 30% 92%), transparent 70%)', animation: 'mesh-move 20s ease-in-out infinite 5s' }} />
      </div>

      {/* Floating shapes */}
      <div className="float-shape top-20 left-[10%] w-16 h-16 border-2 border-gold/20 rotate-45" style={{ animationDelay: '0s' }} />
      <div className="float-shape top-[40%] right-[8%] w-12 h-12 rounded-full border-2 border-primary/10" style={{ animationDelay: '7s' }} />
      <div className="float-shape bottom-[20%] left-[15%] w-10 h-10 border-2 border-gold/15 rotate-12" style={{ animationDelay: '3s' }} />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Logo text */}
        <motion.div
          initial={{ scale: 1.5, filter: 'blur(20px)', opacity: 0 }}
          animate={mounted ? { scale: 1, filter: 'blur(0px)', opacity: 1 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-display tracking-tight shimmer">
            {excelLetters.map((letter, i) => (
              <motion.span
                key={`e-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + i * 0.06, duration: 0.4 }}
                className="inline-block"
                style={{ color: '#D4A017', textShadow: '0 2px 4px rgba(212,160,23,0.3)' }}
              >
                {letter}
              </motion.span>
            ))}
            {mindsLetters.map((letter, i) => (
              <motion.span
                key={`m-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + (i + 5) * 0.06, duration: 0.4 }}
                className="inline-block"
                style={{ color: '#4A1A6B', textShadow: '0 2px 4px rgba(74,26,107,0.3)' }}
              >
                {letter}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl font-display font-semibold text-foreground mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          Creating Rankers. Building Futures.
        </motion.p>

        <motion.p
          className="text-muted-foreground mt-4 text-base md:text-lg font-body"
          initial={{ opacity: 0, y: 15 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2, duration: 0.6 }}
        >
          Elite coaching for CA | CMA | CS | IPMAT | CMA USA | XI & XII Commerce
        </motion.p>

        <motion.p
          className="text-sm text-muted-foreground mt-2 tracking-[0.3em] uppercase font-body"
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : {}}
          transition={{ delay: 2.3, duration: 0.6 }}
        >
          Precision · Mentorship · Results
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2.6, duration: 0.6 }}
        >
          <a href="#admissions" className="btn-glow px-8 py-4 rounded-lg text-base font-semibold font-body animate-glow-pulse">
            Apply for Admission
          </a>
          <a href="#results" className="btn-glow-gold px-8 py-4 rounded-lg text-base font-semibold font-body">
            Explore Results
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-8 mt-16 glass-card p-8 rounded-2xl max-w-lg mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 3, duration: 0.8 }}
        >
          {stats.map((s, i) => (
            <StatCounter key={i} {...s} start={mounted} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
