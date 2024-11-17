// // src/components/About.jsx
// import React from 'react';
// import { motion } from 'framer-motion';

// const About = () => (
//   <section
//     id="about"
//     className="py-16 bg-gradient-to-r from-gray-50 via-white to-gray-50 text-gray-800"
//   >
//     <div className="container mx-auto px-6 md:px-0">
//       {/* Section Header with Gradient Text */}
//       <motion.h2
//         className="text-5xl md:text-6xl font-montserrat font-bold text-center mb-10 bg-gradient-to-r from-blue-500 to-indigo-500 text-transparent bg-clip-text"
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         About SparkByte
//       </motion.h2>

//       {/* Subheading */}
//       <motion.p
//         className="text-lg md:text-xl font-roboto text-center mb-12 leading-relaxed tracking-wide text-gray-700"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1, delay: 0.3 }}
//       >
//         Your go-to partner for transforming digital ideas into reality. At SparkByte, 
//         we blend creativity and technology to deliver modern, scalable web solutions.
//       </motion.p>

//       {/* Graphic Divider */}
//       <div className="flex justify-center items-center mb-12">
//         <motion.div
//           className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"
//           initial={{ scaleX: 0 }}
//           whileInView={{ scaleX: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//         />
//       </div>

//       {/* Our Approach Section */}
//       <motion.div
//         className="mb-12"
//         initial={{ opacity: 0, x: -50 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         <h3 className="text-3xl md:text-4xl font-montserrat font-semibold mb-6 text-indigo-600">
//           Our Approach
//         </h3>
//         <p className="text-lg font-roboto leading-relaxed tracking-wide text-gray-700">
//           Every great project starts with understanding your unique needs. 
//           We combine personalized attention with cutting-edge technology to create 
//           solutions that are as innovative as they are effective.
//         </p>
//       </motion.div>

//       {/* Our Services Section */}
//       <motion.div
//         className="mb-12"
//         initial={{ opacity: 0, x: 50 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//       >
//         <h3 className="text-3xl md:text-4xl font-montserrat font-semibold mb-6 text-indigo-600">
//           Our Services
//         </h3>
//         <ul className="list-disc list-inside text-lg font-roboto text-gray-700 space-y-3">
//           {[
//             'Custom Landing Page Development',
//             'Scalable Web Applications',
//             'Interactive Educational Tools',
//             'Fullstack Development Expertise',
//           ].map((service, index) => (
//             <motion.li
//               key={index}
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.2 * index }}
//             >
//               {service}
//             </motion.li>
//           ))}
//         </ul>
//       </motion.div>

//       {/* Why Choose Us Section */}
//       <motion.div
//         className="mb-12"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8, delay: 0.3 }}
//       >
//         <h3 className="text-3xl md:text-4xl font-montserrat font-semibold mb-6 text-indigo-600">
//           Why Choose SparkByte
//         </h3>
//         <ul className="space-y-3 text-lg font-roboto text-gray-700">
//           <li>
//             <span className="font-bold text-indigo-600">Personalized Solutions:</span> 
//             Each project is tailored to your vision.
//           </li>
//           <li>
//             <span className="font-bold text-indigo-600">Innovative Thinking:</span> 
//             Bringing fresh perspectives to every challenge.
//           </li>
//           <li>
//             <span className="font-bold text-indigo-600">Fast Turnarounds:</span> 
//             Timely delivery without compromising quality.
//           </li>
//           <li>
//             <span className="font-bold text-indigo-600">Competitive Pricing:</span> 
//             Affordable rates for high-end results.
//           </li>
//         </ul>
//       </motion.div>

//       {/* Closing Statement */}
//       <motion.p
//         className="text-lg md:text-xl font-roboto text-center mt-12 leading-relaxed tracking-wide text-gray-700"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1, delay: 0.6 }}
//       >
//         Let us help you bring your digital vision to life. Partner with SparkByte and 
//         discover what’s possible when creativity meets technology.
//       </motion.p>
//     </div>
//   </section>
// );

// export default About;
// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
  <section
    id="about"
    className="py-16 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white relative overflow-hidden"
  >
    {/* Subtle Background Symbols */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="w-64 h-64 bg-blue-900 opacity-10 rounded-full blur-3xl top-10 left-10 absolute"></div>
      <div className="w-72 h-72 bg-indigo-700 opacity-10 rounded-full blur-3xl bottom-10 right-20 absolute"></div>
    </div>

    <div className="container mx-auto px-6 md:px-0 relative z-10">
      {/* Section Header with Darker Blue Theme */}
      <motion.h2
        className="text-5xl md:text-6xl font-montserrat font-bold text-center mb-10 text-blue-400"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }} // Repeat animations
        transition={{ duration: 0.8 }}
      >
        About SparkByte
      </motion.h2>

      {/* Subheading */}
      <motion.p
        className="text-lg md:text-xl font-roboto text-center mb-12 leading-relaxed tracking-wide text-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }} // Repeat animations
        transition={{ duration: 1, delay: 0.3 }}
      >
        Your trusted partner for innovative web solutions. At SparkByte, we combine creativity and cutting-edge technology to deliver impactful digital experiences.
      </motion.p>

      {/* Our Approach Section */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }} // Repeat animations
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl md:text-4xl font-montserrat font-semibold mb-6 text-indigo-400">
          Our Approach
        </h3>
        <p className="text-lg font-roboto leading-relaxed tracking-wide text-gray-300">
          We start by understanding your unique goals. Through collaboration and innovative problem-solving, we design tailored solutions that make a lasting impact.
        </p>
      </motion.div>

      {/* Our Services Section */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }} // Repeat animations
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h3 className="text-3xl md:text-4xl font-montserrat font-semibold mb-6 text-indigo-400">
          Our Services
        </h3>
        <ul className="list-disc list-inside text-lg font-roboto text-gray-300 space-y-3">
          {[
            'Custom Landing Page Development',
            'Scalable Web Applications',
            'Interactive Educational Tools',
            'Fullstack Development Expertise',
          ].map((service, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }} // Repeat animations
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              {service}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }} // Repeat animations
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h3 className="text-3xl md:text-4xl font-montserrat font-semibold mb-6 text-indigo-400">
          Why Choose SparkByte
        </h3>
        <ul className="space-y-3 text-lg font-roboto text-gray-300">
          <li>
            <span className="font-bold text-indigo-400">Personalized Solutions:</span> 
            Every project tailored to your needs.
          </li>
          <li>
            <span className="font-bold text-indigo-400">Innovative Thinking:</span> 
            Fresh approaches to digital challenges.
          </li>
          <li>
            <span className="font-bold text-indigo-400">Fast Turnarounds:</span> 
            Timely delivery without compromising quality.
          </li>
          <li>
            <span className="font-bold text-indigo-400">Competitive Pricing:</span> 
            Affordable rates for premium results.
          </li>
        </ul>
      </motion.div>

      {/* Closing Statement */}
      <motion.p
        className="text-lg md:text-xl font-roboto text-center mt-12 leading-relaxed tracking-wide text-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }} // Repeat animations
        transition={{ duration: 1, delay: 0.6 }}
      >
        Let SparkByte bring your digital vision to life. Creativity meets technology to create solutions that truly matter.
      </motion.p>
    </div>
  </section>
);

export default About;
