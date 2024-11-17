// import React, { useState } from 'react';
// import { Home, UserCircle, Briefcase, Mail } from 'lucide-react';

// const Navbar = () => {
//   const [isHovered, setIsHovered] = useState(null);

//   return (
//     <>
//       {/* Logo */}
//       <div className="bg-blue-950 p-4 fixed top-0 z-50 rounded-b-3xl backdrop-blur-xl bg-opacity-60 shadow-lg">
//         <a href="#home">
//           <img src="/logo-SparkByte.gif" alt="SparkByte Logo" className="container h-20 w-auto" />
//         </a>
//       </div>

//       {/* Navbar */}
//       <nav className="right-0 bg-gray-800 p-4 fixed top-0 z-50 h-screen rounded-l-3xl backdrop-blur-lg bg-opacity-60 shadow-lg">
//         <div className="flex flex-col items-start space-y-8 mt-20 pl-4">
//           {/* Links */}
//           <a
//             href="#home"
//             className="flex items-center gap-4 text-gray-400 hover:text-white group"
//             onMouseEnter={() => setIsHovered('home')}
//             onMouseLeave={() => setIsHovered(null)}
//           >
//             <Home size={24} />
//             <span className={`font-montserrat opacity-0 ${isHovered === 'home' ? 'opacity-100' : ''} transition-opacity duration-300`}>
//               Home
//             </span>
//           </a>
//           <a
//             href="#about"
//             className="flex items-center gap-4 text-gray-400 hover:text-white group"
//             onMouseEnter={() => setIsHovered('about')}
//             onMouseLeave={() => setIsHovered(null)}
//           >
//             <UserCircle size={24} />
//             <span className={`font-montserrat opacity-0 ${isHovered === 'about' ? 'opacity-100' : ''} transition-opacity duration-300`}>
//               About
//             </span>
//           </a>
//           <a
//             href="#portfolio"
//             className="flex items-center gap-4 text-gray-400 hover:text-white group"
//             onMouseEnter={() => setIsHovered('portfolio')}
//             onMouseLeave={() => setIsHovered(null)}
//           >
//             <Briefcase size={24} />
//             <span className={`font-montserrat opacity-0 ${isHovered === 'portfolio' ? 'opacity-100' : ''} transition-opacity duration-300`}>
//               Portfolio
//             </span>
//           </a>
//           <a
//             href="#contact"
//             className="flex items-center gap-4 text-gray-400 hover:text-white group"
//             onMouseEnter={() => setIsHovered('contact')}
//             onMouseLeave={() => setIsHovered(null)}
//           >
//             <Mail size={24} />
//             <span className={`font-montserrat opacity-0 ${isHovered === 'contact' ? 'opacity-100' : ''} transition-opacity duration-300`}>
//               Contact
//             </span>
//           </a>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
// src/components/Navbar.jsx
import React, { useState } from 'react';
// import { motion } from 'framer-motion';
import { Home, UserCircle, Briefcase, Mail } from 'lucide-react';

const Navbar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
        <div className=" bg-blue-950 p-4 fixed top-0 z-50 rounded-b-3xl backdrop-blur-xl bg-opacity-60 shadow-lg">
            <a href='#home' >
                <img src='/logo-SparkByte.gif'alt="SparkByte Logo"  className="container h-20 w-auto" />
            </a>
        </div>
        <nav className="right-1 bg-gray-800 p-4 fixed w-1/3 top-0 z-50 rounded-b-3xl backdrop-blur-lg bg-opacity-60 shadow-lg">
            <div className="container mx-auto flex items-center justify-between">
                {/* <h1 className="text-white text-2xl font-bold">My Portfolio</h1> */}
                {/* <button
                    className="text-white md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button> */}
                <ul className={`md:flex space-x-6 ${isOpen ? 'block' : 'hidden'}`}>
                <a href="#home" className="flex items-center gap-4 text-gray-400 hover:text-white"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                >
                    <Home size={24} />
                    <span className={`transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>Home</span>
                </a>
                <a href="#about" className="flex items-center gap-4 text-gray-400 hover:text-white">
                    <UserCircle size={24} />
                    <span className={`transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>About</span>
                </a>
                <a href="#portfolio" className="flex items-center gap-4 text-gray-400 hover:text-white">
                    <Briefcase size={24} />
                    <span className={`transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>Portfolio</span>
                </a>
                    <a href="#contact" className="flex items-center gap-4 text-gray-400 hover:text-white">
                        <Mail size={24} />
                        <span className={`transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>Contact</span>
                    </a>
                    
                </ul>
            
            </div>
        </nav>
        

        </>
    );
};

export default Navbar;
