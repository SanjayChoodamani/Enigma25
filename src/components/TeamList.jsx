import React from 'react';
import {
    anaga,
    ankitha,
    arun,
    bharath,
    deekshith,
    gaargi,
    harshitha,
    keerthi,
    mayura,
    pavan,
    pruthvi,
    sanjay,
    srusti,
    tejas,
    avaneesh,
    dhanush,
    deshak,
    neethu,
    prajwal,
    praharsha,
    shreyas
} from '../assets/team/image';

const TeamList = () => {
    // Sample team data - replace with your actual imports
    const finalYears = [
        { imgloc: ankitha, name: 'Ankitha T' },
        { imgloc: arun, name: 'Arun Kumar' },
        { imgloc: pruthvi, name: 'Pruthvi P M' },
        // { imgloc: gaargi, name: 'Gaargi H A' },
        { imgloc: deekshith, name: 'Deekshith H U' },
        // { imgloc: pavan, name: 'Pavan B' },
        { imgloc: keerthi, name: 'Keerthi H B' },
        { imgloc: bharath, name: 'Bharath M' },
        { imgloc: sanjay, name: 'Sanjay B S' },
        { imgloc: harshitha, name: 'Harshitha' },
        { imgloc: mayura, name: 'Mayura M L' },
        { imgloc: anaga, name: 'Anagha P Nadig' },
        { imgloc: srusti, name: 'Srusti H G' },
        { imgloc: tejas, name: 'Tejas Noojile' }
    ];

    const thirdYears = [
        { imgloc: avaneesh, name: 'Avaneesh' },
        { imgloc: dhanush, name: 'Dhansuh P' },
        { imgloc: deshak, name: 'Deshak Gowda' },
        { imgloc: neethu, name: 'Neethu' },
        { imgloc: prajwal, name: 'Prajwal' },
        { imgloc: praharsha, name: 'Praharsha' },
        { imgloc: shreyas, name: 'Shreyas' },
    ];

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
            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Heading */}
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-center relative">
                    <span className="relative z-10">ENIGMA'25 CREW</span>
                    <span className="absolute -left-1 -top-1 text-teal-400 opacity-30 blur-sm z-0 w-full text-center">ENIGMA'25 CREW</span>
                    <div className="mt-4 h-1 w-32 bg-gradient-to-r from-purple-600 to-teal-400 mx-auto"></div>
                </h1>

                {/* Final Years Section */}
                <div className="mb-20">
                    <h2 className="text-white text-2xl sm:text-3xl font-bold mb-8 relative inline-block">
                        <span className="relative z-10">Final Years</span>
                        <div className="mt-2 h-0.5 w-full bg-teal-400/60"></div>
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {finalYears.map((person, index) => (
                            <TeamCard key={`final-${index}`} img={person.imgloc} name={person.name} />
                        ))}
                    </div>
                </div>

                {/* Third Years Section */}
                <div className="mb-20">
                    <h2 className="text-white text-2xl sm:text-3xl font-bold mb-8 relative inline-block">
                        <span className="relative z-10">Third Years</span>
                        <div className="mt-2 h-0.5 w-full bg-teal-400/60"></div>
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {thirdYears.map((person, index) => (
                            <TeamCard key={`third-${index}`} img={person.imgloc} name={person.name} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Team Card Component
const TeamCard = ({ img, name }) => {
    return (
        <div className="relative group overflow-hidden transition-all duration-300 rounded-lg">
            {/* Card Container */}
            <div className="bg-purple-950/20 backdrop-blur-sm rounded-lg overflow-hidden border border-purple-800/20 hover:border-teal-400/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(45,212,191,0.15)] h-full flex flex-col">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden">
                    {/* Image */}
                    <img
                        src={img}
                        alt={name}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/20 to-transparent opacity-70 group-hover:opacity-40 transition-opacity"></div>

                    {/* Hexagonal frame overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg viewBox="0 0 100 100" className="w-full h-full absolute" style={{ transform: 'scale(1.1)' }}>
                            <polygon
                                points="50,3 95,25 95,75 50,97 5,75 5,25"
                                fill="none"
                                stroke="url(#hexGradient)"
                                strokeWidth="1"
                                className="opacity-70"
                            />
                            <defs>
                                <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#8B5CF6" />
                                    <stop offset="50%" stopColor="#4ECDC4" />
                                    <stop offset="100%" stopColor="#8B5CF6" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    {/* Circle accent in bottom corner */}
                    <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-teal-400/20 rounded-full blur-md transform rotate-45 transition-all duration-300 group-hover:scale-125 group-hover:bg-teal-400/30"></div>
                </div>

                {/* Name Container */}
                <div className="relative py-3 px-2 text-center flex-grow flex items-center justify-center z-10">
                    <p className="text-white font-medium text-sm sm:text-base truncate w-full group-hover:text-teal-400 transition-colors">
                        {name}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TeamList;