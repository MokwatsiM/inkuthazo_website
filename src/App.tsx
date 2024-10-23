import React from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Benefits } from './components/Benefits';
import { JoinUs } from './components/JoinUs';
import { Contact } from './components/Contact';

function App() {
  return (
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