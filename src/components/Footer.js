import React from 'react';

const Footer = () => (
  <footer className="bg-[#161625] text-gray-300 text-center py-6 mt-10">
    <div className="container mx-auto">
      <p className="mb-2">&copy; {new Date().getFullYear()} FPR Animes - Todos s direitos reservados.</p>
      <p className="text-sm"></p>
    </div>
  </footer>
);

export default Footer;
