// src/components/About.jsx
import React from 'react';

const About = () => (
    <section id="about" className="py-16 bg-gray-100" data-aos="fade-up">

        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-0">
            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
                <img
                    src="path-to-your-image.jpg"
                    alt="Profile"
                    className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 md:pl-10 text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
                <p className="text-lg text-gray-600 mb-4">
                    I’m a passionate web developer with expertise in creating dynamic, user-friendly web experiences. I love turning complex problems into simple, beautiful, and intuitive designs.
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">Learn More</button>
            </div>
        </div>
    </section>
);

export default About;
