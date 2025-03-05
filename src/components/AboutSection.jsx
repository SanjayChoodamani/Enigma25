import React from 'react';

const AboutSection = () => {
    return (
        <div className="relative w-full bg-black overflow-hidden">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-950/40 to-purple-950/20"></div>

            {/* Decorative accent */}
            <div className="absolute right-0 bottom-0 w-24 h-24 bg-yellow-400/10 rounded-full blur-3xl"></div>
            <div className="absolute left-10 bottom-5 w-1 h-12 bg-teal-400/30 rounded-full"></div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
                <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-wide">
                    ABOUT US
                </h2>

                <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed">
                    Enigma 2025 is a National-level Technical Extravaganza that promises an immersive experience,
                    uniting tech enthusiasts. Enigma unfolds an unparalleled celebration of technology, creativity,
                    and the boundless possibilities. Dive into the world of Technology at Enigma to be a part of
                    the tech revolution!
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-900/30 via-teal-400/40 to-purple-900/30"></div>
            </div>
        </div>
    );
};

export default AboutSection;