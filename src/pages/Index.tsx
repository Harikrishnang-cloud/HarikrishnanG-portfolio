import SEOHead from "@/components/portfolio/SEOHead";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Experience from "@/components/portfolio/Experience";
import Education from "@/components/portfolio/Education";
import Certifications from "@/components/portfolio/Certifications";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-transparent relative">
      <SEOHead
        title="Harikrishnan G | Software Engineer & Full-Stack Developer"
        description="Harikrishnan G is a Software Engineer and Full-Stack Developer based in Kerala, India. Specializing in React, Next.js, MERN stack web applications, and enterprise SaaS systems."
        canonicalUrl="https://harikrishnang.vercel.app/"
        ogType="profile"
      />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
