// src/components/Portfolio.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Project data
const projects = [
  {
    title: 'KashlApp',
    description: `
      A unique web application built using React Native, designed to help users with their halachic preparations for Passover. 
      The app simplifies complex traditions and offers a visually pleasing, intuitive experience.
      KashlApp was launched for Passover last year and received hundreds of positive reviews for its usability and design. 
      While recommended for smartphones, it is accessible across all platforms.
    `,
    features: [
      'Mobile-first design for an intuitive user experience.',
      'Production-ready with a proven track record of success.',
      'Accessible on all platforms, optimized for smartphones.',
    ],
    images: [
      '/assets/kashlapp-1.png',
      '/assets/kashlapp-2.png',
      '/assets/kashlapp-ad.png',
    ],
    link: 'https://tinyurl.com/KASHL-APP', // Replace with actual link
    linkText: 'View Live App',
  },
  {
    title: 'Super Click',
    description: `
      A comprehensive grocery store e-commerce platform with a robust backend and user-friendly frontend.
      The backend, built with Node.js, features secure user authentication, with encrypted passwords stored in a MongoDB Atlas database. 
      Winston is used for logging and testing to ensure reliability.
      The frontend is powered by React.js and styled with Tailwind CSS, offering a responsive, modern design. 
      AI-generated images enhance the shopping experience. The entire application is containerized, running on two Dockers orchestrated with Docker Compose.
    `,
    features: [
      'Secure backend with encrypted user authentication.',
      'Responsive frontend styled with Tailwind CSS.',
      'AI-enhanced product images for a polished experience.',
      'Dockerized architecture for seamless deployment.',
    ],
    images: [
      '/assets/superclick-1.png',
      '/assets/superclick-2.png',
      '/assets/superclick-ad.gif',
    ],
    link: 'https://e-commerceil.vercel.app/', 
    linkText: 'View Live Website',
  },
];

const Portfolio = () => (
  <section id="portfolio" className="py-16 bg-gray-100 text-gray-900">
    <div className="container mx-auto px-6 md:px-0 text-center">
      {/* Section Header */}
      <motion.h2
        className="text-5xl md:text-6xl font-montserrat font-bold mb-12 bg-gradient-to-r from-indigo-500 to-blue-500 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        Portfolio
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid gap-12 md:grid-cols-2 sm:grid-cols-1">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Project Title */}
            <div className="bg-gray-900 text-white p-6 ">
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-sm text-gray-300">{project.description}</p>
            </div>

            {/* Marketing Image */}
            <img
              src={project.images[2]}
              alt={`${project.title} Marketing`}
              className="w-full h-64 object-cover"
            />

            {/* Features */}
            <div className="p-6">
              <h4 className="text-lg font-semibold mb-4 text-indigo-500">Key Features:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Screenshots */}
            <div className="grid grid-cols-2 gap-4 p-6">
              {project.images.slice(0, 2).map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${project.title} Screenshot ${idx + 1}`}
                  className="rounded-lg shadow-md transform hover:scale-105 transition duration-300"
                />
              ))}
            </div>

            {/* Link */}
            <div className="bg-gray-100 text-center py-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline transition"
              >
                {project.linkText}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
