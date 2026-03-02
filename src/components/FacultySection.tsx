import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const faculty = [
  { name: 'CA Chinay Solanki', role: 'Chartered Accountant', initials: 'CS' },
  { name: 'CA Rahul Batra', role: 'Chartered Accountant', initials: 'RB' },
  { name: 'CA Prateek Agrawal', role: 'Chartered Accountant', initials: 'PA' },
  { name: 'Dr. Niharika Singh', role: 'Academic Specialist', initials: 'NS' },
  { name: 'CA Nikhil Bagmar', role: 'Chartered Accountant', initials: 'NB' },
  { name: 'MBA Dhara Shah', role: 'Management Expert', initials: 'DS' },
];

export default function FacultySection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="faculty" ref={ref} className="section-padding relative overflow-hidden">
      {/* Parallax glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, hsl(270 40% 80%), transparent 70%)', animation: 'mesh-move 30s ease-in-out infinite' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">Learn From <span className="text-gradient-gold">Industry Experts</span></h2>
          <p className="section-subtitle">Guidance from professionals who understand both exams and industry standards.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty.map((f, i) => (
            <motion.div
              key={i}
              className="glass-card-hover p-8 rounded-2xl text-center group cursor-default"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.12 * i, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Avatar with glow ring */}
              <div className="relative mx-auto w-24 h-24 mb-6">
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: 'conic-gradient(hsl(42 65% 55%), hsl(270 50% 50%), hsl(42 65% 55%))', animation: 'rotate-gradient 3s linear infinite', filter: 'blur(4px)' }} />
                <div className="relative w-full h-full rounded-full flex items-center justify-center text-2xl font-bold font-display"
                  style={{ background: 'var(--gradient-gold)' }}>
                  {f.initials}
                </div>
              </div>
              <h3 className="text-lg font-bold font-display text-foreground group-hover:text-gradient-gold transition-colors">{f.name}</h3>
              <p className="text-sm text-muted-foreground font-body mt-1">{f.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
