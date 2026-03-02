import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import MouseGlow from '@/components/MouseGlow';
import ScrollProgress from '@/components/ScrollProgress';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CoursesSection from '@/components/CoursesSection';
import FacultySection from '@/components/FacultySection';
import ResultsSection from '@/components/ResultsSection';
import AdmissionsSection from '@/components/AdmissionsSection';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <Navbar />
      <MouseGlow />
      <ScrollProgress />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <FacultySection />
      <ResultsSection />
      <AdmissionsSection />
      <FooterSection />
    </motion.div>
  );
};

export default Index;
