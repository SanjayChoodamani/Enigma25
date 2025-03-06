import React from 'react';
import techsandhya from '/7th.jpg';

const Techsandhya = () => {
    return (
        <div className="relative w-full bg-black overflow-hidden py-16 md:py-24">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 to-black z-0"></div>

            {/* Decorative elements */}
            <div className="absolute top-20 right-10 w-64 h-64 bg-purple-700/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl"></div>

            {/* Decorative curved lines */}
            <div className="absolute right-0 bottom-0 opacity-20">
                <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
                    <path d="M150 0C67.1573 0 0 67.1573 0 150" stroke="white" strokeWidth="2" />
                </svg>
            </div>
            <div className="absolute left-0 top-1/3 opacity-20 rotate-180">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                    <path d="M100 0C44.7715 0 0 44.7715 0 100" stroke="#4ECDC4" strokeWidth="2" />
                </svg>
            </div>

            {/* Content container */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading with creative styling */}
                <div className="mb-16 text-center">
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold relative inline-block">
                        <span className="relative z-10">TECHSANDHYA</span>
                        <span className="absolute -left-1 -top-1 text-teal-400 opacity-30 blur-sm z-0">TECHSANDHYA</span>
                        <div className="mt-4 h-1 w-32 bg-gradient-to-r from-purple-600 to-teal-400 mx-auto"></div>
                    </h1>
                </div>

                {/* Main content */}
                <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    {/* Image container with fancy border */}
                    <div className="w-full md:w-1/2 relative group">
                        <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                            {/* Animated gradient border */}
                            <div className="absolute inset-0 p-1 z-10">
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-600/50 via-teal-400/50 to-purple-600/50 animate-gradient-slow"></div>
                            </div>

                            {/* Image with overlay */}
                            <div className="absolute inset-1 rounded-xl overflow-hidden z-20">
                                <div className="absolute inset-0 bg-purple-900/30 group-hover:bg-purple-900/10 transition-colors duration-500 z-30"></div>
                                <img
                                    src={techsandhya}
                                    alt="Techsandhya"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            {/* Glowing effect behind image */}
                            <div className="absolute inset-0 flex items-center justify-center z-10">
                                <div className="w-2/3 h-2/3 bg-teal-400/20 rounded-full blur-3xl"></div>
                            </div>
                        </div>
                    </div>

                    {/* Text content */}
                    <div className="w-full md:w-1/2 text-left p-6 bg-black/50 backdrop-blur-sm rounded-2xl border border-purple-700/20">
                        <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed mb-8">
                            Techsandhya is the technical newsletter of the college, published annually by The Malnad Technical Club. It was launched in 2016 with the vision of providing tech-savvy students an opportunity to showcase their ideas on technical topics.
                        </p>

                        <a
                            href="/techsandhya.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600/80 to-teal-500/80 hover:from-teal-500/80 hover:to-purple-600/80 text-white font-medium transition-all duration-300 group"
                        >
                            <span>Techsandhya 7.0</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Add necessary animations */}
            <style jsx>{`
        .animate-gradient-slow {
          animation: gradient 8s ease infinite;
          background-size: 200% 200%;
        }
        @keyframes gradient {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }
      `}</style>
        </div>
    );
};

export default Techsandhya;