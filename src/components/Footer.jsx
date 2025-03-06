import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="relative w-full bg-black overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 to-black z-0"></div>

            {/* Decorative grid lines */}
            <div className="absolute inset-0 opacity-10">
                <div className="h-full w-full border-t border-l border-purple-500/20 grid grid-cols-6 grid-rows-6">
                    {[...Array(36)].map((_, i) => (
                        <div key={i} className="border-b border-r border-purple-500/20"></div>
                    ))}
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-700/5 rounded-full blur-3xl"></div>
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl"></div>

            {/* Main content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
                {/* Other Sites Section */}
                <div className="mb-16">
                    <h2 className="text-white text-2xl sm:text-3xl font-bold mb-6 relative inline-block">
                        <span className="relative z-10">OTHER SITES</span>
                        <span className="absolute -left-1 -top-1 text-teal-400 opacity-30 blur-sm z-0">OTHER SITES</span>
                        <div className="mt-2 h-0.5 w-full bg-gradient-to-r from-purple-600/80 to-teal-400/80"></div>
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                        <a
                            href="https://malnadtechnicalclub.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white font-medium hover:text-teal-400 transition-colors inline-block relative group"
                        >
                            <span>THE MALNAD TECHNICAL CLUB</span>
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a
                            href="https://mcehassan.ac.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white font-medium hover:text-teal-400 transition-colors inline-block relative group"
                        >
                            <span>MALNAD COLLEGE OF ENGINEERING</span>
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </div>
                </div>

                {/* Main Footer */}
                <div className="border-t border-purple-900/50 pt-12 pb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
                        {/* Quick Links */}
                        <div>
                            <h3 className="text-white text-xl font-bold mb-6 relative inline-block">
                                <span>QUICK LINKS</span>
                                <div className="mt-1 h-0.5 w-16 bg-teal-400/80"></div>
                            </h3>

                            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                                <Link to="/" className="text-white/80 hover:text-teal-400 transition-colors">Home</Link>
                                <Link to="events" className="text-white/80 hover:text-teal-400 transition-colors">Events</Link>
                                <Link to="/workshop" className="text-white/80 hover:text-teal-400 transition-colors">Workshop and Pronite</Link>
                                <Link to="/team" className="text-white/80 hover:text-teal-400 transition-colors">Team</Link>
                                <Link to="/contact" className="text-white/80 hover:text-teal-400 transition-colors">Contact</Link>
                                <Link to="/terms" className="text-white/80 hover:text-teal-400 transition-colors">Terms and Conditions</Link>
                                <Link to="/refund" className="text-white/80 hover:text-teal-400 transition-colors">Refund Policy</Link>
                            </div>
                        </div>

                        {/* Stay in Touch */}
                        <div>
                            <h3 className="text-white text-xl font-bold mb-6 relative inline-block">
                                <span>STAY IN TOUCH</span>
                                <div className="mt-1 h-0.5 w-16 bg-teal-400/80"></div>
                            </h3>

                            <div className="bg-purple-950/20 backdrop-blur-sm rounded-lg p-6 border border-purple-800/20">
                                {/* Social Links */}
                                <div className="mb-6">
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                                        <a href="https://www.instagram.com/malnad_technical_club/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-teal-400 transition-colors">Instagram</a>
                                        <a href="https://www.facebook.com/FoundationsMTC" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-teal-400 transition-colors">Facebook</a>
                                        <a href="https://twitter.com/MalnadTechClub/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-teal-400 transition-colors">Twitter</a>
                                        <a href="https://www.youtube.com/@themalnadtechnicalclub" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-teal-400 transition-colors">Youtube</a>
                                    </div>

                                    <div className="flex gap-4 mb-6">
                                        <a href="https://www.instagram.com/malnad_technical_club/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-teal-400 transition-colors text-xl">
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
                                        <a href="https://www.facebook.com/FoundationsMTC" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-teal-400 transition-colors text-xl">
                                            <i className="fa-brands fa-facebook"></i>
                                        </a>
                                        <a href="https://twitter.com/MalnadTechClub/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-teal-400 transition-colors text-xl">
                                            <i className="fa-brands fa-x-twitter"></i>
                                        </a>
                                        <a href="https://www.youtube.com/@themalnadtechnicalclub" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-teal-400 transition-colors text-xl">
                                            <i className="fa-brands fa-youtube"></i>
                                        </a>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="text-white/80">
                                    <a
                                        href="https://www.google.com/maps/place/Malnad+College+of+Engineering/@13.0237294,76.0999861,17z/data=!3m1!4b1!4m5!3m4!1s0x3ba5483386aa3ffd:0x1ffd88ffad2a1ca6!8m2!3d13.0237242!4d76.1021748?shorturl=1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block hover:text-teal-400 transition-colors"
                                    >
                                        <p>No. 21 . Salagame Road</p>
                                        <p>Rangoli Halla, Hassan</p>
                                        <p>Karnataka - 573202</p>
                                    </a>
                                    <p className="mt-2">
                                        <a
                                            href="mailto: mce.techclub@gmail.com"
                                            className="text-teal-400 hover:text-white transition-colors"
                                        >
                                            mce.techclub@gmail.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-12 pt-6 border-t border-purple-900/30 flex flex-col sm:flex-row justify-between items-center text-white/60 text-sm">
                        <p><i className="fa-regular fa-copyright"></i> Enigma'25</p>
                        <p className="mt-2 sm:mt-0">Designed and Developed by The Malnad Technical Club 🚀</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;