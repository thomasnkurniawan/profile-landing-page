import MainLayout from "../components/templates/MainLayout";
import HeroSection from "../components/templates/section/HeroSection";
import Skills from "../components/templates/section/Skills";
import Experience from "../components/templates/section/Experience";
import Contacts from "../components/templates/section/Contacts";
import Projects from "../components/templates/section/Projects";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <Skills />
      <Experience />
      <Projects />
      <Contacts />
    </MainLayout>
  );
}
