// src/components/Hero.jsx
import React from 'react';

const Hero = () => (
    <section className="flex items-center justify-center h-screen bg-gray-900 text-white px-6">
        <div className="text-center max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
            <p className="text-lg md:text-xl mb-8">I create beautiful, functional websites and applications.</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition duration-200">Get in Touch</button>
        </div>
    </section>
);

export default Hero;
