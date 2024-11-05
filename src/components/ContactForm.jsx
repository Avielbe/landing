// src/components/ContactForm.jsx
import React from 'react';

const ContactForm = () => (
  <section className="py-10 bg-gray-200">
    <div className="container mx-auto max-w-lg">
      <h2 className="text-3xl font-semibold text-center mb-6">Contact Me</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 border border-gray-300 rounded h-32"
        ></textarea>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default ContactForm;
