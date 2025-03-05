import React from 'react';

const Overview = () => {
    // Event data - in a real app, you might fetch this from an API
    const events = [
        {
            id: "design-build",
            title: "Design and Build Events",
            description: "The Design and Build events celebrate the convergence of creativity and engineering. Participants are required to craft robots that display resilient traits. Robots are specially tailored to engage in challenges like RoboKombat, Robosoccer, Mystique Locomotor and many other dynamic events.",
            icon: "/robot.jpg" 
        },
        {
            id: "paper",
            title: "Paper Events",
            description: "As participants engage in this intellectual journey, the Paper Events emerge as a celebration of diverse knowledge, offering a platform where minds collide. It includes events that celebrate the diversity of intellect and fuel the passion for knowledge exploration.",
            icon: "/paper.jpg" 
        },
        {
            id: "online",
            title: "Online Events",
            description: "Online events not only offer a platform for intellectual engagement but also create a space for financial acumen to shine. Online quiz and MCE dollars are two such events that offer intellectual challenges and financial intrigue.",
            icon: "/online.jpg" 
        },
        {
            id: "fun",
            title: "Fun Events",
            description: "The ultimate destination where technology meets the thrill. Fun events include a spectrum of endeavours where participants engage in dynamic challenges, unraveling the mysteries of problem-solving.",
            icon: "/fun.jpg" 
        }
    ];

    return (
        <div className="relative w-full bg-black overflow-hidden py-16 md:py-24">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 to-black z-0"></div>
            <div className="absolute inset-0 opacity-10 z-0">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent"></div>
            </div>

            {/* Decorative curved lines similar to reference */}
            <div className="absolute left-0 top-20 w-32 h-32 opacity-30 z-0">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 0C44.7715 0 0 44.7715 0 100" stroke="white" strokeWidth="1" />
                </svg>
            </div>
            <div className="absolute right-0 bottom-20 w-32 h-32 opacity-30 z-0">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0C55.2285 0 100 44.7715 100 100" stroke="white" strokeWidth="1" />
                </svg>
            </div>

            {/* Content container */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading with creative styling */}
                <div className="mb-16 text-center">
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold relative inline-block">
                        <span className="relative z-10">WHAT WE'VE GOT FOR YOU</span>
                        <span className="absolute -left-1 -top-1 text-teal-400 opacity-30 blur-sm z-0">WHAT WE'VE GOT FOR YOU</span>
                        <div className="mt-4 h-1 w-32 bg-gradient-to-r from-purple-600 to-teal-400 mx-auto"></div>
                    </h1>
                </div>

                {/* Event sections */}
                <div className="space-y-20 md:space-y-32">
                    {events.map((event, index) => (
                        <div key={event.id} className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 md:gap-12`}>
                            {/* Decorative border around the section */}
                            <div className="absolute inset-0 -m-6 rounded-3xl opacity-10 border border-purple-500 blur-[2px] z-0"></div>

                            {/* Image container with glow effect */}
                            <div className="relative w-full md:w-2/5 mb-6 md:mb-0 group">
                                <div className="relative aspect-square max-w-sm mx-auto overflow-hidden rounded-2xl">
                                    {/* Fancy border effect */}
                                    <div className="absolute inset-0 p-1">
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/30 via-teal-400/30 to-purple-600/30 animate-gradient-slow"></div>
                                    </div>

                                    {/* Image with overlay */}
                                    <div className="absolute inset-1 rounded-2xl bg-purple-950/70 flex items-center justify-center overflow-hidden">
                                        <img
                                            src={event.icon}
                                            alt={event.title}
                                            className="w-3/4 h-2/3 object-contain transition-transform duration-500 group-hover:scale-110 z-10"
                                        />

                                        {/* Cool background effect for the icon */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-32 h-32 bg-gradient-to-br from-purple-500/20 to-teal-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Text content with creative styling */}
                            <div className="w-full md:w-3/5 text-left">
                                <a href={`/Events#${event.id}`} className="group">
                                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors flex items-center">
                                        {event.title}
                                        <span className="ml-3 text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </span>
                                    </h2>
                                </a>

                                <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                                    {event.description}
                                </p>

                                <a
                                    href={`/Events#${event.id}`}
                                    className="inline-flex items-center mt-4 text-teal-400 hover:text-white group transition-colors"
                                >
                                    <span className="mr-2">Learn More</span>
                                    <span className="w-6 h-6 rounded-full flex items-center justify-center bg-teal-400 group-hover:bg-white transition-colors">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 text-black"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    ))}
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

export default Overview;