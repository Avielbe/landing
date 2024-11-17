// src/components/Portfolio.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Sample projects data
const projects = [
  {
    title: 'Project One',
    description: 'An interactive landing page designed for a modern business.',
    image: '/path-to-image1.jpg',
  },
  {
    title: 'KashlApp',
    description: 'A web application streamlining workflows for improved productivity.',
    image: '/path-to-image2.jpg',
  },
];

const Portfolio = () => (
  <section
    id="portfolio"
    className="py-16 bg-gray-100 relative"
  >
    {/* Decorative Background Circles */}
    <div className="absolute -top-10 left-10 w-40 h-40 bg-blue-500 opacity-30 rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500 opacity-30 rounded-full"></div>

    <div className="container mx-auto px-6 md:px-0 relative z-10 text-center">
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
      <div className="grid gap-8 md:grid-cols-2 sm:grid-cols-1">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative group bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover group-hover:opacity-80 transition duration-300"
            />

            {/* Overlay for Project Details */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <div className="text-center px-6">
                <h3 className="text-xl md:text-2xl font-semibold text-blue-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300">
                  {project.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call-to-Action */}
      <motion.p
        className="text-lg md:text-xl font-roboto text-center mt-12 leading-relaxed tracking-wide text-gray-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        Explore our portfolio to see what we’ve created. Ready to build your dream project? <a href="#contact" className="text-indigo-500 hover:underline">Get in touch</a>.
      </motion.p>
    </div>
  </section>
);

export default Portfolio;
