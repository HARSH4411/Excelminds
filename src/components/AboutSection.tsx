import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { BookOpen, Target, Users, TrendingUp, Trophy } from 'lucide-react';
import pamphletFaculty from '@/assets/pamphlet-faculty.png';

const features = [
  { icon: BookOpen, title: 'Concept-Driven Teaching', desc: 'Deep understanding over rote memorization' },
  { icon: Target, title: 'Result-Oriented Strategy', desc: 'Focused preparation for maximum output' },
  { icon: Users, title: 'Industry-Experienced Faculty', desc: 'Learn from practicing professionals' },
  { icon: TrendingUp, title: 'Personalized Mentorship', desc: 'Individual attention for every student' },
  { icon: Trophy, title: 'Proven Track Record', desc: 'Consistently outstanding results' },
];

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="about" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(42 60% 70%), transparent 70%)', animation: 'mesh-move 25s ease-in-out infinite' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={isVisible ? { opacity: 1, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Transforming Potential Into <span className="text-gradient-gold">Performance</span></h2>
          <p className="section-subtitle mt-6">
            At ExcelMinds Professional Academy, we don't just prepare students for exams — we prepare them for professional excellence.
            With structured learning systems, expert mentorship, and a disciplined academic culture, we help commerce aspirants build clarity, confidence, and competitive strength.
          </p>
          <p className="text-muted-foreground mt-4 font-semibold text-sm tracking-wider uppercase font-body">
            Strong Concepts · Strategic Preparation · Consistent Results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="glass-card-hover p-8 rounded-2xl gradient-border group cursor-default"
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.6, ease: 'easeOut' }}
              whileHover={{ rotateX: -3, rotateY: 3, transition: { duration: 0.3 } }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'var(--gradient-gold)' }}>
                <f.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-lg font-bold font-display text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground font-body">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Academy Pamphlet Showcase */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <div className="glass-card-hover rounded-2xl overflow-hidden max-w-lg w-full shadow-xl">
            <img src={pamphletFaculty} alt="ExcelMinds Professional Academy - Faculty & Courses" className="w-full h-auto" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
