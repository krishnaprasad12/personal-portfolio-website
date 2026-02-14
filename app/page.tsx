import { HeroSection } from "@/components/hero-section"
import { InfoPanel } from "@/components/info-panel"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { YouTubeSection } from "@/components/youtube-section"
import { GitHubSection } from "@/components/github-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <InfoPanel />
      <YouTubeSection />
      <ExperienceSection />
      <ProjectsSection />
      <GitHubSection />
    </main>
  )
}
