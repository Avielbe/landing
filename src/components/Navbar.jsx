import React, { useState, useEffect } from 'react';
import { Home, UserCircle, Briefcase, Mail, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // Hamburger menu state
    const [activeSection, setActiveSection] = useState('home'); // Track active section
    const [isScrolled, setIsScrolled] = useState(false); // Track scroll for logo

    // Track active section using IntersectionObserver
    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    // Handle scroll for logo resizing
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Logo */}
            <div
                className={`bg-blue-950 p-4 fixed top-0 z-50 rounded-b-3xl backdrop-blur-xl bg-opacity-60 shadow-lg transition-transform duration-300 ${isScrolled ? 'h-16' : 'h-28'
                    }`}
            >
                <a href="#home">
                    <img
                        src="/logo-SparkByte.gif"
                        alt="SparkByte Logo"
                        className={`container w-auto mx-auto transition-all duration-300 ${isScrolled ? 'h-12' : 'h-24'
                            }`}
                    />
                </a>
            </div>

            {/* Desktop Navbar */}
            <nav className="hidden md:block fixed top-24 right-0 z-50 bg-gray-800 p-4 rounded-l-3xl backdrop-blur-lg bg-opacity-60 shadow-lg">
                <div className="flex flex-col items-start space-y-6 pl-4">
                    <a
                        href="#home"
                        className={`flex items-center gap-4 ${activeSection === 'home' ? 'text-white' : 'text-gray-400'
                            } hover:text-white group`}
                    >
                        <Home size={24} />
                        <span className="font-montserrat">Home</span>
                    </a>
                    <a
                        href="#about"
                        className={`flex items-center gap-4 ${activeSection === 'about' ? 'text-white' : 'text-gray-400'
                            } hover:text-white group`}
                    >
                        <UserCircle size={24} />
                        <span className="font-montserrat">About</span>
                    </a>
                    <a
                        href="#portfolio"
                        className={`flex items-center gap-4 ${activeSection === 'portfolio' ? 'text-white' : 'text-gray-400'
                            } hover:text-white group`}
                    >
                        <Briefcase size={24} />
                        <span className="font-montserrat">Portfolio</span>
                    </a>
                    <a
                        href="#contact"
                        className={`flex items-center gap-4 ${activeSection === 'contact' ? 'text-white' : 'text-gray-400'
                            } hover:text-white group`}
                    >
                        <Mail size={24} />
                        <span className="font-montserrat">Contact</span>
                    </a>
                </div>
            </nav>

            {/* Mobile Hamburger Menu */}
            <div className="md:hidden fixed top-4 right-4 z-50">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white bg-gray-800 p-2 rounded-full shadow-lg focus:outline-none"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {isOpen && (
                    <div className="absolute top-16 right-0 bg-gray-800 p-4 rounded-l-3xl backdrop-blur-lg bg-opacity-60 shadow-lg">
                        <div className="flex flex-col items-start space-y-4 pl-4">
                            <a
                                href="#home"
                                className="flex items-center gap-4 text-gray-400 hover:text-white group"
                                onClick={() => setIsOpen(false)}
                            >
                                <Home size={24} />
                                <span className="font-montserrat">Home</span>
                            </a>
                            <a
                                href="#about"
                                className="flex items-center gap-4 text-gray-400 hover:text-white group"
                                onClick={() => setIsOpen(false)}
                            >
                                <UserCircle size={24} />
                                <span className="font-montserrat">About</span>
                            </a>
                            <a
                                href="#portfolio"
                                className="flex items-center gap-4 text-gray-400 hover:text-white group"
                                onClick={() => setIsOpen(false)}
                            >
                                <Briefcase size={24} />
                                <span className="font-montserrat">Portfolio</span>
                            </a>
                            <a
                                href="#contact"
                                className="flex items-center gap-4 text-gray-400 hover:text-white group"
                                onClick={() => setIsOpen(false)}
                            >
                                <Mail size={24} />
                                <span className="font-montserrat">Contact</span>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Navbar;
