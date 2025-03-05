import React, { useState, useEffect } from 'react';

// This would be the main Sponsors component
const Sponsors = () => {
    // Sample sponsor data - replace images with your actual sponsor images
    const sponsDetails = [
        { id: 1, image: "/sponsors/ktm.jpg", desc: "TITLE" },
        { id: 2, image: "/sponsors/hassanNews.png", desc: "SOCIAL MEDIA" },
        { id: 3, image: "/sponsors/poorvika.png", desc: "CERTIFICATE" },
        { id: 4, image: "/sponsors/hexa.jpg", desc: "TICKETING" },
        { id: 5, image: "/sponsors/stockgro.png", desc: "PLATFORM" },
        { id: 6, image: "/sponsors/teachnook.png", desc: "EDUCATION" },
        { id: 7, image: "/sponsors/esscee.png", desc: "PRINTING" },
        { id: 8, image: "/sponsors/vcc.jpg", desc: "NEWS" },
    ];

    // Animation effect for sponsors appearing
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative w-full bg-black overflow-hidden py-16 md:py-24">
            {/* Background elements and effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 to-black z-0"></div>

            {/* Animated background grid */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute w-full h-full">
                    {[...Array(10)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute bg-purple-500/10 backdrop-blur-sm"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                width: `${Math.random() * 5 + 1}px`,
                                height: `${Math.random() * 5 + 1}px`,
                                boxShadow: '0 0 15px 2px rgba(168, 85, 247, 0.2)',
                                animation: `float ${Math.random() * 10 + 10}s linear infinite`
                            }}
                        ></div>
                    ))}
                </div>
            </div>

            {/* Decorative curved lines */}
            <div className="absolute left-0 top-20 w-32 h-32 opacity-30 z-0">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 0C44.7715 0 0 44.7715 0 100" stroke="#4ECDC4" strokeWidth="1" />
                </svg>
            </div>
            <div className="absolute right-0 bottom-20 w-32 h-32 opacity-30 z-0">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0C55.2285 0 100 44.7715 100 100" stroke="#8B5CF6" strokeWidth="1" />
                </svg>
            </div>

            {/* Main content */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading with creative styling */}
                <div className="text-center mb-16 relative">
                    {/* 3D-like effect for the heading */}
                    <div className="relative inline-block">
                        {[...Array(5)].map((_, i) => (
                            <h1
                                key={i}
                                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black absolute left-0 top-0"
                                style={{
                                    transform: `translate(${-4 + i}px, ${-4 + i}px)`,
                                    opacity: 0.15,
                                    zIndex: i
                                }}
                            >
                                OUR PREVIOUS SPONSORS
                            </h1>
                        ))}

                        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black relative z-10">
                            OUR PREVIOUS SPONSORS
                        </h1>
                    </div>

                    {/* Decorative elements under heading */}
                    <div className="flex justify-center mt-6">
                        <div className="h-0.5 w-16 bg-purple-600"></div>
                        <div className="h-0.5 w-16 bg-teal-400 ml-2"></div>
                    </div>
                </div>

                {/* Sponsors grid */}
                <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
                    {sponsDetails.map((sponsor, index) => (
                        <SponsorCard
                            key={sponsor.id}
                            image={sponsor.image}
                            desc={sponsor.desc}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>

            {/* Animation styles */}
            <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
          100% { transform: translateY(0) rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 1; }
        }
        
        @keyframes shine {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(100%) rotate(45deg); }
        }
        
        @keyframes spin-clockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-counter {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
      `}</style>
        </div>
    );
};

// Individual Sponsor Card component
const SponsorCard = ({ image, desc, delay }) => {
    const [hover, setHover] = useState(false);

    return (
        <div
            className="group relative"
            style={{ animationDelay: `${delay}s` }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {/* Card container with hover effects */}
            <div className="relative rounded-xl overflow-hidden transition-all duration-500 transform group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(79,209,197,0.3)]">
                {/* Background elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black/90 to-purple-900/40 z-0"></div>

                {/* Border effect */}
                <div className="absolute inset-0 p-0.5 z-10 opacity-70 group-hover:opacity-100 transition-opacity">
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600/80 via-teal-400/80 to-purple-600/80 animate-gradient-slow"></div>
                </div>

                {/* Card content */}
                <div className="relative flex flex-col items-center text-center p-6 z-20">
                    {/* Logo container with hexagonal frame */}
                    <div className="relative w-full aspect-[3/2] mb-6 flex items-center justify-center">
                        {/* Hexagonal frame with glowing effect */}
                        <div className="absolute w-full h-full flex items-center justify-center">
                            <div className={`absolute w-11/12 h-11/12 transition-all duration-500 ${hover ? 'opacity-100' : 'opacity-60'}`}>
                                {/* Hexagon shape */}
                                <svg viewBox="0 0 100 100" className="w-full h-full">
                                    <defs>
                                        <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
                                            <stop offset="50%" stopColor="#4ECDC4" stopOpacity="0.4" />
                                            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.4" />
                                        </linearGradient>
                                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                            <feGaussianBlur stdDeviation="3" result="blur" />
                                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                        </filter>
                                    </defs>
                                    <polygon
                                        points="50,3 95,25 95,75 50,97 5,75 5,25"
                                        fill="url(#hexGradient)"
                                        stroke="url(#hexGradient)"
                                        strokeWidth="1"
                                        className={`transition-all duration-500 ${hover ? 'filter' : ''}`}
                                        filter="url(#glow)"
                                    />
                                </svg>
                            </div>

                            {/* Rotating circles around the logo */}
                            <div className={`absolute w-full h-full transition-opacity duration-300 ${hover ? 'opacity-100' : 'opacity-0'}`}>
                                {[...Array(3)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute top-0 left-0 w-full h-full"
                                        style={{
                                            animation: `spin-${i % 2 === 0 ? 'clockwise' : 'counter'} ${8 + i * 4}s linear infinite`,
                                            opacity: 0.4 - (i * 0.1)
                                        }}
                                    >
                                        <div
                                            className="absolute rounded-full bg-teal-400/30"
                                            style={{
                                                width: '8px',
                                                height: '8px',
                                                top: `${50 - 45 * Math.cos(i * 2)}%`,
                                                left: `${50 + 45 * Math.sin(i * 2)}%`
                                            }}
                                        ></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Logo with backdrop glow */}
                        <div className="relative z-10 p-4 flex items-center justify-center w-4/5 h-4/5">
                            <div className={`absolute inset-0 bg-white/5 rounded-full filter blur-xl transition-opacity duration-500 ${hover ? 'opacity-40' : 'opacity-0'}`}></div>
                            <img
                                src={image}
                                alt={`${desc} Partner`}
                                className="relative max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                    </div>

                    {/* Partner type text */}
                    <p className="text-white text-base sm:text-lg md:text-xl font-bold tracking-wide mt-2">
                        {desc} <span className="text-teal-400">PARTNER</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Sponsors;