import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 Ben Berat ARPA. Tüm hakları saklıdır.</p>
        <div className="mt-4">
          <a href="https://github.com/beratarpa" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 mx-2">GitHub</a>
          <a href="https://linkedin.com/in/beratarpa" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 mx-2">LinkedIn</a>
          <a href="mailto:beratarpa@hotmail.com" className="text-blue-400 hover:text-blue-300 mx-2">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
