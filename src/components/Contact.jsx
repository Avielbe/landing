// // src/components/Contact.jsx
// import React from 'react';

// const Contact = () => (
//   <section id="contact" className="py-16 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white relative">
//     {/* Decorative Background Graphics */}
//     <div className="absolute -top-10 left-10 w-64 h-64 bg-indigo-700 opacity-10 rounded-full blur-3xl"></div>
//     <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>

//     <div className="container mx-auto px-6 md:px-0 max-w-lg relative z-10 text-center">
//       {/* Section Header */}
//       <h2 className="text-5xl md:text-6xl font-montserrat font-bold mb-6 bg-gradient-to-r from-indigo-500 to-blue-500 text-transparent bg-clip-text">
//         Get In Touch
//       </h2>
//       <p className="text-lg md:text-xl text-gray-300 mb-8">
//         Have a question or want to work together? Drop me a message and I’ll get back to you soon.
//       </p>

//       {/* Contact Form */}
//       <form className="space-y-6">
//         <div>
//           <label htmlFor="name" className="block text-sm text-gray-400 mb-2 text-left">Your Name</label>
//           <input
//             type="text"
//             id="name"
//             placeholder="Enter your name"
//             className="w-full p-3 rounded border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
//           />
//         </div>
//         <div>
//           <label htmlFor="email" className="block text-sm text-gray-400 mb-2 text-left">Your Email</label>
//           <input
//             type="email"
//             id="email"
//             placeholder="Enter your email"
//             className="w-full p-3 rounded border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
//           />
//         </div>
//         <div>
//           <label htmlFor="message" className="block text-sm text-gray-400 mb-2 text-left">Your Message</label>
//           <textarea
//             id="message"
//             placeholder="Write your message"
//             className="w-full p-3 rounded border border-gray-600 bg-gray-800 text-white placeholder-gray-400 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
//           ></textarea>
//         </div>
//         <button
//           type="submit"
//           className="w-full py-3 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-300"
//         >
//           Send Message
//         </button>
//       </form>
//     </div>
//   </section>
// );

// export default Contact;
import React, { useState } from 'react';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        fetch('https://formspree.io/f/mldeljno', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: form.name.value,
                email: form.email.value,
                message: form.message.value,
            }),
        })
            .then(() => setSubmitted(true))
            .catch(() => alert('There was an error submitting the form.'));
    };

    return (
        <section id="contact" className="py-16 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white">
            <div className="container mx-auto px-6 md:px-0 max-w-lg text-center">
                <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-blue-500 text-transparent bg-clip-text">
                    Get In Touch
                </h2>
                <p className="text-lg text-gray-300 mb-8">Have a question? Send me a message!</p>

                {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="w-full p-3 rounded border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="w-full p-3 rounded border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            className="w-full p-3 rounded border border-gray-600 bg-gray-800 text-white placeholder-gray-400 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full py-3 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
                        >
                            Send Message
                        </button>
                    </form>
                ) : (
                    <p className="text-lg text-gray-300 mt-4">Thank you for your message! I'll get back to you soon.</p>
                )}
            </div>
        </section>
    );
};

export default Contact;
