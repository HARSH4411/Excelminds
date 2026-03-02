import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import facultyTeamImg from '@/assets/faculty-team.png';

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

        <motion.div
          className="glass-card p-4 md:p-8 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <img
            src={facultyTeamImg}
            alt="ExcelMinds Faculty Team - CA Chinay Solanki, CA Rahul Batra, CA Prateek Agrawal, Dr. Niharika Singh, CA Nikhil Bagmar, MBA Dhara Shah"
            className="w-full h-auto rounded-xl"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
