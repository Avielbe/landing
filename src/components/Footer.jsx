// src/components/Footer.jsx
import React from 'react';

const Footer = () => (
    <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="container mx-auto text-center">
            <div className="mb-4">
                <h2 className="text-xl font-semibold">Follow Me</h2>
                <div className="flex justify-center space-x-4 mt-4">
                    {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400">
                        <i className="fab fa-twitter"></i> Twitter
                    </a> */}
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500">
                        <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                    {/* <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                        <i className="fab fa-github"></i> GitHub
                    </a> */}
                </div>
            </div>
            <p className="text-sm mt-6">&copy; {new Date().getFullYear()} SparkByte. All rights reserved.</p>
        </div>
    </footer>
);

export default Footer;
