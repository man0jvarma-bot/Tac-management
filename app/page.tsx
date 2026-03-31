import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { CourseSlider } from "@/components/CourseSlider";
import { SkillsSection } from "@/components/SkillsSecrtion";
import { IndustriesSection } from "@/components/IndustriesSection";
import { CertificateSection } from "@/components/CertificateSection";
import { PlacementSection } from "@/components/RealJobs";
import { PeopleSection } from "@/components/Placed";
import { PartnersSection } from "@/components/Rectangles";
import { ChallengeSection } from "@/components/Lakh";
import { Footer } from "@/components/footer";


export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <CourseSlider />
      <SkillsSection />
      <IndustriesSection />
      <CertificateSection />
      <PlacementSection />
      <PeopleSection />
      <PartnersSection />
      <ChallengeSection />
      <Footer />
      
    </main>
  );
}