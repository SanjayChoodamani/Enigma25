import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-100 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-xl py-3 px-6 my-2">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/" className="flex items-center">
                                <span className="text-black font-bold text-xl">Enigma</span>
                                <span className="text-purple-600 font-bold text-xl ml-1">25</span>
                            </Link>
                        </div>

                        {/* Desktop menu */}
                        <div className="hidden md:flex items-center space-x-4">
                            <Link to="/" className="text-black hover:text-purple-700 px-3 py-2 text-sm font-medium">
                                Home
                            </Link>
                            <Link to="/events" className="text-black hover:text-purple-700 px-3 py-2 text-sm font-medium">
                                Events
                            </Link>
                            <Link to="/workshop" className="text-black hover:text-purple-700 px-3 py-2 text-sm font-medium">
                                Workshop and Pronite
                            </Link>
                            <Link to="/team" className="text-black hover:text-purple-700 px-3 py-2 text-sm font-medium">
                                Team
                            </Link>
                            <Link to="/contact" className="text-black hover:text-purple-700 px-3 py-2 text-sm font-medium">
                                Contact
                            </Link>
                            <a
                                href="/Enigma25/Rulebook.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-yellow-400 text-black hover:bg-yellow-300 px-4 py-2 rounded-full text-sm font-medium transition-colors"
                            >
                                Rule Book
                            </a>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={toggleMenu}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-purple-700 hover:bg-gray-100 focus:outline-none"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {/* Icon when menu is closed */}
                                {!isOpen ? (
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                ) : (
                                    /* Icon when menu is open */
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md mx-4 rounded-lg">
                    <Link to="/" className="text-black hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
                        Home
                    </Link>
                    <Link to="/events" className="text-black hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
                        Events
                    </Link>
                    <Link href="/workshop" className="text-black hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
                        Workshop and Pronite
                    </Link>
                    <Link to="/team" className="text-black hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
                        Team
                    </Link>
                    <Link to="/contact" className="text-black hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
                        Contact
                    </Link>
                    <a
                        href="/Enigma25/Rulebook.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-yellow-400 text-black hover:bg-yellow-300 block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Rule Book
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;