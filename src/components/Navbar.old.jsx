// src/components/Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <nav className="bg-gray-800 p-4 fixed w-full top-0 z-50 rounded-b-3xl backdrop-blur-lg bg-opacity-60 bg-white shadow-lg">
            <div className="container mx-auto flex items-center justify-between">
                <a href='#home'>
                    <img src='/logo-SparkByte.gif'alt="SparkByte Logo"  className="h-24 w-auto" />
                </a>
                {/* <h1 className="text-white text-2xl font-bold">My Portfolio</h1> */}
                <button
                    className="text-white md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
                <ul className={`md:flex space-x-6 ${isOpen ? 'block' : 'hidden'}`}>
                    <li><a href="#about" className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:underline transition duration-300"
                    >About</a></li>
                    <li><a href="#portfolio" className="text-white">Portfolio</a></li>
                    <li><a href="#contact" className="text-white">Contact</a></li>
                    
                </ul>
            </div>
        </nav>
        

        </>
    );
};

export default Navbar;
