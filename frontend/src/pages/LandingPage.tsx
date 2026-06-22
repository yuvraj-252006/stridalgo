import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Timeline from "../components/Timeline";
import CityEvolution from "../components/CityEvolution";
import BossPreview from "../components/BossPreview";
import LeaderboardPreview from "../components/LeaderboardPreview";
import Tournament from "../components/Tournament";
function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Timeline />
      <CityEvolution />
      <BossPreview />
      <LeaderboardPreview />
      <Tournament />
    </>
  );
}

export default LandingPage;