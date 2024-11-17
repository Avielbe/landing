// // src/components/About.jsx
// import React from 'react';

// const About = () => (
//     <section id="about" className="py-16 bg-gray-100" data-aos="fade-up">

//         <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-0">
//             {/* Image */}
//             <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
//                 <img
//                     src="path-to-your-image.jpg"
//                     alt="Profile"
//                     className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-500"
//                 />
//             </div>

//             {/* Text Content */}
//             <div className="w-full md:w-1/2 md:pl-10 text-center md:text-left">
//                 <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
//                 <p className="text-lg text-gray-600 mb-4">
//                     I’m a passionate web developer with expertise in creating dynamic, user-friendly web experiences. I love turning complex problems into simple, beautiful, and intuitive designs.
//                 </p>
//                 <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">Learn More</button>
//             </div>
//         </div>
//     </section>
// );

// export default About;

// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
  <section id="about" className="py-16 bg-gradient-to-r from-gray-100 via-white to-gray-100 text-gray-800">
    <div className="container mx-auto px-6 md:px-0">
      {/* Section Header with Background Animation */}
      <motion.h2 
        className="text-4xl font-bold text-center mb-8 text-blue-600"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        About SparkByte
      </motion.h2>
      
      {/* About Description with Typing Animation */}
      <motion.p 
        className="text-lg text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{ fontFamily: 'Courier New, monospace' }} // Adds a typewriter-style font
      >
        At SparkByte, we transform digital ideas into reality through creative web development and innovative application solutions. Founded by a fullstack developer with a passion for clean code and intuitive design, we specialize in crafting custom digital experiences that make an impact.
      </motion.p>

      {/* Our Approach with Fade and Slide Animation */}
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h3 className="text-2xl font-semibold mb-4">Our Approach</h3>
        <p className="text-lg text-gray-600">
          We believe in the power of personal attention and creative problem-solving. Every project begins with understanding your unique needs, followed by implementing solutions that combine technical expertise with creative thinking.
        </p>
      </motion.div>

      {/* Our Services with Staggered Animation */}
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <h3 className="text-2xl font-semibold mb-4">Our Services</h3>
        <ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
          {['Custom Landing Page Development', 'Web Application Creation', 'Interactive Educational Tools', 'Frontend & Backend Development'].map((service, index) => (
            <motion.li 
              key={index} 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
            >
              {service}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Why Choose SparkByte with Bounce Effect */}
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, type: 'spring', stiffness: 80 }}
      >
        <h3 className="text-2xl font-semibold mb-4">Why Choose SparkByte</h3>
        <ul className="space-y-2 text-lg text-gray-600">
          <li><span className="font-bold">Personal Attention:</span> Direct collaboration with your developer throughout the project</li>
          <li><span className="font-bold">Creative Solutions:</span> Innovative approaches to digital challenges</li>
          <li><span className="font-bold">Technical Excellence:</span> Modern tech stack including React, Node.js, and more</li>
          <li><span className="font-bold">Competitive Pricing:</span> Quality solutions at accessible rates</li>
          <li><span className="font-bold">Rapid Development:</span> From concept to production in efficient timeframes</li>
        </ul>
      </motion.div>

      {/* Our Stack with Rotate Animation
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <h3 className="text-2xl font-semibold mb-4">Our Stack</h3>
        <ul className="list-disc list-inside text-lg text-gray-600 mt-2">
          {['React & React Native', 'Node.js & Express', 'MongoDB', 'Docker', 'Tailwind CSS'].map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </motion.div> */}

      {/* Closing Statement with Delayed Fade-in */}
      <motion.p 
        className="text-lg text-center mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        Whether you're a startup looking for your first landing page or an established business needing a custom web application, SparkByte is ready to turn your vision into reality.
      </motion.p>
    </div>
  </section>
);

export default About;
