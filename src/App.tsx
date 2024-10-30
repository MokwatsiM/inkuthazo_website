import React from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Benefits } from './components/Benefits';
import { JoinUs } from './components/JoinUs';
import { Contact } from './components/Contact';
import Maintenance from './Maintenance';

function App() {
  const isMaintenanceMode = process.env.REACT_APP_MAINTENANCE_MODE === 'true';

  return isMaintenanceMode ? <Maintenance /> 
   (
    <div className="min-h-screen">
    <Layout>
      <Hero />
      <About />
      <Benefits />
      <JoinUs />
      <Contact />
    </Layout>
    </div>
  );
}

export default App;
