// // src/components/Hero.jsx
// import React, {useEffect, useRef} from 'react';

// const Hero = () => {
//     const videoRef = useRef(null);

//     useEffect(() => {
//         const video = videoRef.current;
//         video.load(); // Load the video initially
//         video.play(); // Start playing the video
//         video.loop = true; // Loop the video playback

//         return () => {
//         video.pause(); // Pause the video on unmount
//         };
//     }, []);

//     return (
//     <section className="flex items-center justify-center h-screen bg-gray-900 text-white px-6">
//         <video
//             ref={videoRef}
//             className="absolute inset-0 z-0 w-full h-full object-cover opacity-20" // Adjust opacity as needed
//             autoPlay
//             muted
//             loop
//         >
//             <source src="public/HeroVideo.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//         </video>

//         <div className="absolute inset-0 z-10">
//             <h1 className="flex items-center text-6xl font-medium text-neutral-400">
//                 Inspire spirit to your 
//                 <span className="relative ml-3 h-[1em] w-36 overflow-hidden">
//                 <span
//   className={`absolute h-full w-full -translate-y-full animate-slide leading-none text-white ${
//     window.innerWidth < 768 // Adjust the breakpoint as needed
//       ? 'sm:-translate-y-1/2' // Adjust the vertical position for mobile
//       : ''
//   }`}
// >
//                     Website
//                     </span>
//                     <span
//                     className="absolute h-full w-full -translate-y-full animate-slide leading-none text-white [animation-delay:0.83s]"
//                     >
//                     App
//                     </span>
//                     <span
//                     className="absolute h-full w-full -translate-y-full animate-slide leading-none text-white [animation-delay:1.83s]"
//                     >
//                     Store
//                     </span>
//                 </span>
//             </h1>
//         </div>

//     </section>
//     );


// };

// export default Hero;



// src/components/Hero.jsx
import React from 'react';

const Hero = () => (
    <section className="flex items-center justify-center h-screen bg-gray-900 text-white px-6">
        {/* <div className="text-center max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
            <p className="text-lg md:text-xl mb-8">I create beautiful, functional websites and applications.</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition duration-200">Get in Touch</button>
        </div> */}
        <div>
            <h1 className="flex items-center text-6xl font-medium text-neutral-400">
                Inspire spirit to your
                <span className="relative ml-3 h-[1em] w-36 overflow-hidden">
                    <span
                        className="absolute h-full w-full -translate-y-full animate-slide leading-none text-white"
                    >
                        Website
                    </span>
                    <span
                        className="absolute h-full w-full -translate-y-full animate-slide leading-none text-white [animation-delay:0.83s]"
                    >
                        App
                    </span>
                    <span
                        className="absolute h-full w-full -translate-y-full animate-slide leading-none text-white [animation-delay:1.83s]"
                    >
                        Store
                    </span>
                </span>
            </h1>
        </div>

    </section>
);

export default Hero;