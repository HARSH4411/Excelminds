import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import pamphletResults from '@/assets/pamphlet-results.png';
import pamphletFaculty from '@/assets/pamphlet-faculty.png';
import resultsFoundation from '@/assets/results-foundation.png';
import resultsInter from '@/assets/results-inter.png';
import resultsClass12 from '@/assets/results-class12.png';

const highlights = [
  { label: 'Concept Clarity', value: 95, suffix: '%+' },
  { label: 'Distinction Records', value: 100, suffix: '+' },
  { label: 'Academic Discipline', value: 98, suffix: '%' },
];

const resultCards = [
  { title: 'CA / CMA Foundation', desc: 'Consistent high scorers and distinction holders.', side: 'left' as const, image: resultsFoundation },
  { title: 'CA / CMA Inter', desc: 'Outstanding performances year after year.', side: 'right' as const, image: resultsInter },
  { title: 'Class XII (2024–25)', desc: 'Exceptional results in Accounts, Economics, and BST.', side: 'left' as const, image: resultsClass12 },
];

function AnimatedStat({ label, value, suffix, start }: { label: string; value: number; suffix: string; start: boolean }) {
  const count = useCountUp(value, 2500, start);
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold font-display text-gradient-gold shimmer">
        {count}{suffix}
      </div>
      <div className="text-sm text-muted-foreground font-body mt-2">{label}</div>
    </div>
  );
}
const carouselImages = [
  { src: pamphletResults, alt: 'ExcelMinds - Our Best Results' },
  { src: pamphletFaculty, alt: 'ExcelMinds - Our Faculty' },
];

function PamphletCarousel() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + carouselImages.length) % carouselImages.length);
  const next = () => setCurrent((c) => (c + 1) % carouselImages.length);

  return (
    <div className="relative flex flex-col items-center max-w-lg mx-auto">
      <div className="glass-card-hover rounded-2xl overflow-hidden w-full shadow-xl relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={carouselImages[current].src}
            alt={carouselImages[current].alt}
            className="w-full h-auto"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.4 }}
          />
        </AnimatePresence>
        <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/70 backdrop-blur-sm hover:bg-background/90 transition-colors shadow-md" aria-label="Previous">
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
        <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/70 backdrop-blur-sm hover:bg-background/90 transition-colors shadow-md" aria-label="Next">
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>
      </div>
      <div className="flex gap-2 mt-4">
        {carouselImages.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? 'bg-primary' : 'bg-muted-foreground/30'}`} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default function ResultsSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="results" ref={ref} className="section-padding relative overflow-hidden" style={{ background: 'hsl(var(--cream-dark))' }}>
      {/* Particles effect via subtle shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              backgroundColor: 'hsl(42 65% 55% / 0.3)',
              animation: `float-drift ${15 + i * 5}s ease-in-out infinite`,
              animationDelay: `${i * 2}s`
            }} />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">Our Best <span className="text-gradient-gold">Results</span></h2>
          <p className="section-subtitle">Consistency is our identity. Excellence is our standard.</p>
        </motion.div>

        {/* Stats */}
        <motion.div className="grid grid-cols-3 gap-8 mb-16 glass-card p-10 rounded-2xl max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {highlights.map((h, i) => (
            <AnimatedStat key={i} {...h} start={isVisible} />
          ))}
        </motion.div>

        {/* Result cards */}
        <div className="space-y-6 max-w-2xl mx-auto">
          {resultCards.map((card, i) => (
            <motion.div
              key={i}
              className="glass-card-hover p-8 rounded-2xl"
              initial={{ opacity: 0, x: card.side === 'left' ? -60 : 60 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h3 className="text-xl font-bold font-display text-foreground">{card.title}</h3>
              <p className="text-sm text-muted-foreground font-body mt-2">{card.desc}</p>
              <div className="mt-4 rounded-xl overflow-hidden">
                <img src={card.image} alt={`${card.title} Results`} className="w-full h-auto" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Results Pamphlet Showcase */}
        {/* Pamphlet Carousel */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.7 }}
        >
          <PamphletCarousel />
        </motion.div>
      </div>
    </section>
  );
}
