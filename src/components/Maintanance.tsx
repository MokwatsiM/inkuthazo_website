// Maintenance.tsx
import React from 'react';

const Maintenance: React.FC = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-100 text-gray-800">
    <div className="max-w-md p-8 bg-white border border-gray-200 shadow-md rounded-lg text-center">
      <h1 className="text-3xl font-semibold text-red-600 mb-4">We'll Be Right Back!</h1>
      <p className="text-lg">Our website is currently undergoing scheduled maintenance. We should be back shortly. Thank you for your patience.</p>
    </div>
  </div>
);

export default Maintenance;
