import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import ParticleBackground from './components/ParticleBackground/ParticleBackground.jsx';
import ScrollProgress from './components/ScrollProgress/ScrollProgress.jsx';
import CursorGlow from './components/CursorGlow/CursorGlow.jsx';
import HeroSection from './sections/HeroSection.jsx';
import AboutSection from './sections/AboutSection.jsx';
import SkillsSection from './sections/SkillsSection.jsx';
import ProjectsSection from './sections/ProjectsSection.jsx';
import ExperienceSection from './sections/ExperienceSection.jsx';
import EducationSection from './sections/EducationSection.jsx';
import AchievementsSection from './sections/AchievementsSection.jsx';
import TechStackSection from './sections/TechStackSection.jsx';
import ProjectDetails from './pages/ProjectDetails.jsx';

function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <AchievementsSection />
      <TechStackSection />
    </main>
  );
}

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-void text-white/90 antialiased">
      <ParticleBackground />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}
