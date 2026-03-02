import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { MapPin, Phone } from 'lucide-react';

export default function AdmissionsSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="admissions" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background shift */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, hsl(var(--background)), hsl(var(--cream-dark)), hsl(var(--background)))', animation: 'mesh-move 30s ease-in-out infinite' }} />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Admissions <span className="text-gradient-gold">Open</span></h2>
          <p className="section-subtitle mt-4">
            Limited seats available for upcoming batches. Join a learning ecosystem built for serious aspirants who aim for professional excellence.
          </p>
          <p className="text-base font-semibold text-foreground font-display mt-6">
            Your preparation defines your future.
          </p>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a href="tel:7389698714" className="btn-glow inline-block px-12 py-5 rounded-xl text-lg font-bold font-body animate-glow-pulse gradient-border">
            Enroll Now
          </a>
        </motion.div>

        <motion.div
          className="mt-14 glass-card p-8 rounded-2xl text-left max-w-md mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="flex items-start gap-3 mb-6">
            <MapPin className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
            <p className="text-sm text-muted-foreground font-body">
              Chouhan Commercial Complex, KPS Nehru Nagar – TI Mall Road, Before Hi-Tech Hospital, Bhilai, Durg (C.G.)
            </p>
          </div>
          <div className="space-y-2">
            {['7389698714', '9039440379', '9993711172'].map((num) => (
              <a key={num} href={`tel:${num}`} className="flex items-center gap-3 text-sm text-foreground font-body hover:text-gold transition-colors">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                {num}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
