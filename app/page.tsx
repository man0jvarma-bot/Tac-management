import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { CourseSlider } from "@/components/CourseSlider";
import { SkillsSection } from "@/components/SkillsSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { CertificateSection } from "@/components/CertificateSection";
import { PlacementSection } from "@/components/RealJobs";
import PeopleSection from "@/components/Placed";
import { PartnersSection } from "@/components/Rectangles";
import { ChallengeSection } from "@/components/Lakh";
import { Footer } from "@/components/footer";
import { StudentWorks } from "@/components/StudentWorks";
import TutorsSection from "@/components/Tutors";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Hero — no ID needed, logo click scrolls to top */}
      <HeroSection />

      {/* Cohorts */}
      <section id="courses">
        <CourseSlider />
      </section>

      {/* Skills */}
      <section id="skills">
        <SkillsSection />
      </section>

      {/* Portfolio / Student Works */}
      <section id="student-works">
        <StudentWorks />
      </section>

      <IndustriesSection />
      <CertificateSection />
      <TutorsSection />

      {/* Placements */}
      <section id="placements">
        <PlacementSection />
      </section>

      <PeopleSection />
      <PartnersSection />
      <ChallengeSection />
      <Footer />
    </main>
  );
}
