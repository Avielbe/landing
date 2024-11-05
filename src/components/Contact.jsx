// src/components/Contact.jsx
import React from 'react';

const Contact = () => (
    <section id="contact" className="py-16 bg-gray-100 relative">
        {/* Decorative Background Circles */}
        <div className="absolute -top-10 left-10 w-40 h-40 bg-blue-500 opacity-30 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500 opacity-30 rounded-full"></div>

        <div className="container mx-auto px-6 md:px-0 max-w-lg relative z-10 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Get In Touch</h2>
            <p className="text-lg text-gray-600 mb-8">
                Have a question or want to work together? Drop me a message.
            </p>
            <form className="space-y-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                    placeholder="Your Message"
                    className="w-full p-3 border border-gray-300 rounded h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
                >
                    Send Message
                </button>
            </form>
        </div>
    </section>
);

export default Contact;
