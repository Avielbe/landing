// src/components/Footer.jsx
import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer = () => (
  <footer className="bg-gray-100 text-gray-800 py-8">
    <div className="container mx-auto text-center">
      {/* Divider */}
      <div className="border-t border-gray-300 mb-6"></div>

      {/* Follow Me Section */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-4">Follow Me</h2>
        <div className="flex justify-center space-x-6">
          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-500 transition duration-300"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <p className="text-sm mt-6">
        &copy; {new Date().getFullYear()} <span className="font-semibold">SparkByte</span>. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
