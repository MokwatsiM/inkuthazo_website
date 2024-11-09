import React from "react";
import { Layout } from "./components/Layout";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Benefits } from "./components/Benefits";
import { JoinUs } from "./components/JoinUs";
import { Contact } from "./components/Contact";
import { Maintenance } from "./components/Maintanance";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  const isMaintenanceMode = process.env.REACT_APP_MAINTENANCE_MODE === "true";

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
        <Benefits />
        <JoinUs />
        <Contact />
      </Layout>
      <SpeedInsights />
    </div>
  );
}

export default App;
