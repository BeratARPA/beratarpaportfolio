import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer class="bg-white dark:bg-gray-900">
      <div class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
        Telif Hakkı @ 2024 Berat ARPA tarafından | Tüm Hakları Saklıdır.
        </span>
        <div className="flex">
        <a href="https://github.com/BeratARPA" className="text-gray-600 hover:text-gray-500 mr-4">
          <FaGithub className="w-5 h-5 inline" />
        </a>
        <a href="https://linkedin.com/in/berat-arpa" className="text-gray-600 hover:text-gray-500 mr-4">
          <FaLinkedin className="w-5 h-5 inline" />
        </a>
        <a href="mailto:beratarpa@hotmail.com" className="text-gray-600 hover:text-gray-500">
          <FaEnvelope className="w-5 h-5 inline" />
        </a>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
