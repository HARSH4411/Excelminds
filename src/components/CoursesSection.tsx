import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const courses = [
  { title: 'CA', subtitle: 'Chartered Accountancy', levels: 'Foundation | Inter', color: 'hsl(42 65% 55%)' },
  { title: 'CMA', subtitle: 'Cost & Management Accounting', levels: 'Foundation | Inter', color: 'hsl(270 50% 50%)' },
  { title: 'CS', subtitle: 'Company Secretary', levels: 'Foundation | Executive', color: 'hsl(210 60% 50%)' },
  { title: 'IPMAT', subtitle: 'Integrated Management', levels: 'Preparation', color: 'hsl(145 50% 45%)' },
  { title: 'CMA USA', subtitle: 'Global Certification', levels: 'Pathway', color: 'hsl(0 55% 50%)' },
  { title: 'XI & XII', subtitle: 'Commerce Stream', levels: 'Accounts | Economics | BST', color: 'hsl(30 60% 50%)' },
];

export default function CoursesSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="courses" ref={ref} className="section-padding" style={{ background: 'hsl(var(--cream-dark))' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">Programs Designed for <span className="text-gradient-gold">Excellence</span></h2>
          <p className="section-subtitle">Structured syllabus, expert faculty, and performance monitoring across every program.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c, i) => (
            <motion.div
              key={i}
              className="glass-card-hover p-8 rounded-2xl cursor-default group relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.8, rotate: 2 }}
              animate={isVisible ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.5, ease: 'easeOut' }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Glow dot */}
              <div className="absolute top-6 right-6 w-3 h-3 rounded-full transition-shadow duration-500 group-hover:shadow-[0_0_12px_4px]"
                style={{ backgroundColor: c.color, boxShadow: `0 0 0px ${c.color}` }}
              />
              <div className="text-3xl font-black font-display text-foreground mb-1">{c.title}</div>
              <div className="text-sm text-muted-foreground font-body mb-3">{c.subtitle}</div>
              <div className="text-xs font-semibold tracking-wider uppercase font-body" style={{ color: c.color }}>{c.levels}</div>
              <div className="mt-6 pt-4 border-t border-border">
                <ul className="space-y-1 text-xs text-muted-foreground font-body">
                  <li>✓ Structured Syllabus</li>
                  <li>✓ Expert Faculty</li>
                  <li>✓ Performance Monitoring</li>
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
