import { Layout } from "./components/Layout";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Pillars } from "./components/Pillars";
import { MemberExperience } from "./components/MemberExperience";
import { HowItWorks } from "./components/HowItWorks";
import { Membership } from "./components/Membership";
import { Gatherings } from "./components/Gatherings";
import { FrequentlyAsked } from "./components/FrequentlyAsked";
import { JoinUs } from "./components/JoinUs";
import { Contact } from "./components/Contact";
import { Maintenance } from "./components/Maintanance";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react"

function App() {
  const isMaintenanceMode = import.meta.env.VITE_MAINTENANCE_MODE === "true";

  return isMaintenanceMode ? (
    <div className="min-h-screen">
      <Maintenance />
      <SpeedInsights />
    </div>
  ) : (
    <div className="min-h-screen">
      <Layout>
        <Hero />
        <About />
        <Pillars />
        <MemberExperience />
        <HowItWorks />
        <Membership />
        <Gatherings />
        <FrequentlyAsked />
        <JoinUs />
        <Contact />
      </Layout>
        <SpeedInsights />
        <Analytics/>
    </div>
  );
}

export default App;
