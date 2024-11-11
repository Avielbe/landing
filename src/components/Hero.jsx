// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center">
    {/* Background Video */}
    <video
      autoPlay
      loop
      muted
      className="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src="/HeroVideo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Overlay with Animated Text */}
    <motion.div
      className="relative z-10 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 2 }}
    >
      <h1 className="text-5xl md:text-6xl font-bold text-white shadow-lg">
        Spark Your Digital Dreams
      </h1>
    </motion.div>

    {/* Overlay for Darkening the Video */}
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
  </section>
);

export default Hero;
