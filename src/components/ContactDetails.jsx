import React from 'react';

const ContactDetails = () => {
    return (
        <div className="w-full bg-black min-h-screen relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8 mt-16">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 to-black z-0"></div>

            {/* Decorative grid */}
            <div className="absolute inset-0 opacity-5">
                <div className="h-full w-full border-t border-l border-purple-500/20 grid grid-cols-6 grid-rows-6">
                    {[...Array(36)].map((_, i) => (
                        <div key={i} className="border-b border-r border-purple-500/20"></div>
                    ))}
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-700/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl"></div>

            {/* Curved lines */}
            <div className="absolute left-0 top-0 w-32 h-32 opacity-20 z-0">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 0C44.7715 0 0 44.7715 0 100" stroke="#4ECDC4" strokeWidth="1" />
                </svg>
            </div>
            <div className="absolute right-0 bottom-0 w-32 h-32 opacity-20 z-0 rotate-180">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 0C44.7715 0 0 44.7715 0 100" stroke="#8B5CF6" strokeWidth="1" />
                </svg>
            </div>

            {/* Main content */}
            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Heading */}
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center relative">
                    <span className="relative z-10">CONTACT US</span>
                    <span className="absolute -left-1 -top-1 text-teal-400 opacity-30 blur-sm z-0 w-full text-center">CONTACT US</span>
                    <div className="mt-4 h-1 w-32 bg-gradient-to-r from-purple-600 to-teal-400 mx-auto"></div>
                </h1>

                <div className="bg-purple-950/10 backdrop-blur-sm rounded-xl border border-purple-800/20 p-6 md:p-8 shadow-lg">
                    <h2 className="text-white text-2xl sm:text-3xl font-bold mb-8 inline-block relative">
                        <span className="relative z-10">Get in Touch.</span>
                        <div className="mt-2 h-0.5 w-full bg-teal-400/60"></div>
                    </h2>

                    {/* Contact cards */}
                    <div className="space-y-6">
                        {/* Contact Card 1 */}
                        <div className="bg-black/50 rounded-lg overflow-hidden border border-purple-800/20 hover:border-teal-400/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(45,212,191,0.15)] group">
                            <div className="flex flex-col sm:flex-row p-4 sm:p-5">
                                <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                                    <p className="text-white text-lg sm:text-xl font-bold group-hover:text-teal-400 transition-colors">Manvith G S</p>
                                    <span className="text-white/70 text-sm sm:text-base">Committee Chairperson</span>
                                </div>
                                <div className="w-full sm:w-1/2 flex flex-col">
                                    <a
                                        href="tel:+916361034226"
                                        className="text-white/80 hover:text-teal-400 transition-colors mb-2 flex items-center"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        Ph: +91 6361034226
                                    </a>
                                    <a
                                        href="mailto: manvith@malnadtechnicalclub.com"
                                        className="text-white/80 hover:text-teal-400 transition-colors flex items-center"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        manvith@malnadtechnicalclub.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Card 2 */}
                        <div className="bg-black/50 rounded-lg overflow-hidden border border-purple-800/20 hover:border-teal-400/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(45,212,191,0.15)] group">
                            <div className="flex flex-col sm:flex-row p-4 sm:p-5">
                                <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                                    <p className="text-white text-lg sm:text-xl font-bold group-hover:text-teal-400 transition-colors">Vidwath K T</p>
                                    <span className="text-white/70 text-sm sm:text-base">Head of Marketing and Publicity</span>
                                </div>
                                <div className="w-full sm:w-1/2 flex flex-col">
                                    <a
                                        href="tel:+917019347171"
                                        className="text-white/80 hover:text-teal-400 transition-colors mb-2 flex items-center"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        +91 7019347171
                                    </a>
                                    <a
                                        href="mailto: vidwath@malnadtechnicalclub.com"
                                        className="text-white/80 hover:text-teal-400 transition-colors flex items-center"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        vidwath@malnadtechnicalclub.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Card 3 */}
                        <div className="bg-black/50 rounded-lg overflow-hidden border border-purple-800/20 hover:border-teal-400/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(45,212,191,0.15)] group">
                            <div className="flex flex-col sm:flex-row p-4 sm:p-5">
                                <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                                    <p className="text-white text-lg sm:text-xl font-bold group-hover:text-teal-400 transition-colors">Mayura M L</p>
                                    <span className="text-white/70 text-sm sm:text-base">Marketing and Publicity</span>
                                </div>
                                <div className="w-full sm:w-1/2 flex flex-col">
                                    <a
                                        href="tel:+918431121367"
                                        className="text-white/80 hover:text-teal-400 transition-colors mb-2 flex items-center"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        +91 8431121367
                                    </a>
                                    <a
                                        href="mailto: mayura@malnadtechnicalclub.com"
                                        className="text-white/80 hover:text-teal-400 transition-colors flex items-center"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        mayura@malnadtechnicalclub.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Card 4 */}
                        <div className="bg-black/50 rounded-lg overflow-hidden border border-purple-800/20 hover:border-teal-400/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(45,212,191,0.15)] group">
                            <div className="flex flex-col sm:flex-row p-4 sm:p-5">
                                <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                                    <p className="text-white text-lg sm:text-xl font-bold group-hover:text-teal-400 transition-colors">Tejas Noojile</p>
                                    <span className="text-white/70 text-sm sm:text-base">Event Coordinator</span>
                                </div>
                                <div className="w-full sm:w-1/2 flex flex-col">
                                    <a
                                        href="tel:+919742845340"
                                        className="text-white/80 hover:text-teal-400 transition-colors mb-2 flex items-center"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        +91 9742845340
                                    </a>
                                    <a
                                        href="mailto: tejas@malnadtechnicalclub.com"
                                        className="text-white/80 hover:text-teal-400 transition-colors flex items-center"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        tejas@malnadtechnicalclub.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Card 5 */}
                        <div className="bg-black/50 rounded-lg overflow-hidden border border-purple-800/20 hover:border-teal-400/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(45,212,191,0.15)] group">
                            <div className="flex flex-col sm:flex-row p-4 sm:p-5">
                                <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                                    <p className="text-white text-lg sm:text-xl font-bold group-hover:text-teal-400 transition-colors">Mail to:</p>
                                </div>
                                <div className="w-full sm:w-1/2 flex flex-col">
                                    <a
                                        href="mailto: mce.techclub@gmail.com"
                                        className="text-white/80 hover:text-teal-400 transition-colors flex items-center"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        mce.techclub@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;