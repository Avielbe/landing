// src/components/Portfolio.jsx
import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'A unique and interactive landing page designed for a modern business.',
    image: 'path-to-image1.jpg'
  },
  {
    title: 'KashlApp',
    description: 'A custom web application created to streamline workflows and improve productivity.',
    image: 'path-to-image2.jpg'
  }
];

const Portfolio = () => (
  <section id="portfolio" className="py-16 bg-gray-900 text-white">
    <div className="container mx-auto px-6 md:px-0 text-center">
      <h2 className="text-3xl font-bold mb-8">Portfolio</h2>
      <div className="grid gap-8 md:grid-cols-2 sm:grid-cols-1">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-500"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <div className="text-center px-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm mt-2">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;


// // src/components/Portfolio.jsx
// import React from 'react';

// const projects = [
//     { title: 'Project One', description: 'A cool project I worked on.', image: 'path-to-image1.jpg' },
//     { title: 'Project Two', description: 'Another interesting project.', image: 'path-to-image2.jpg' },
//     { title: 'Project Three', description: 'Yet another cool project.', image: 'path-to-image3.jpg' },
//     // Add more projects as needed
// ];

// const Portfolio = () => (
//     <section id="portfolio" className="py-16 bg-gray-900 text-white">
//         <div className="container mx-auto px-6 md:px-0 text-center">
//             <h2 className="text-3xl font-bold mb-8">Portfolio</h2>
//             <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
//                 {projects.map((project, index) => (
//                     <div
//                         key={index}
//                         className="relative group bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-500"
//                     >
//                         <img
//                             src={project.image}
//                             alt={project.title}
//                             className="w-full h-64 object-cover"
//                         />
//                         <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
//                             <div className="text-center px-4">
//                                 <h3 className="text-xl font-semibold">{project.title}</h3>
//                                 <p className="text-sm mt-2">{project.description}</p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     </section>
// );

// export default Portfolio;
