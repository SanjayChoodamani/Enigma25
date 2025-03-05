import React, { useState } from 'react';
import scheduleContent from '../assets/data/ScheduleData';

const Schedule = () => {
    const [activeDay, setActiveDay] = useState(0);

    // Function to handle day selection
    const handleDayClick = (dayIndex) => {
        setActiveDay(dayIndex);
    };

    // Timeline Schedule component
    const TimelineSchedule = ({ events }) => {
        // Sort events by time
        const sortedEvents = [...events].sort((a, b) => {
            // Convert time to 24-hour format for sorting
            const aTime = a.timings.includes('AM') ?
                parseFloat(a.timings.replace('AM', '').replace(':', '.')) :
                parseFloat(a.timings.replace('PM', '').replace(':', '.')) + 12;

            const bTime = b.timings.includes('AM') ?
                parseFloat(b.timings.replace('AM', '').replace(':', '.')) :
                parseFloat(b.timings.replace('PM', '').replace(':', '.')) + 12;

            return aTime - bTime;
        });

        return (
            <div className="w-full max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                <div className="relative">
                    {/* Timeline center line */}
                    <div className="absolute h-full w-0.5 bg-gradient-to-b from-purple-600/50 via-teal-400/50 to-purple-600/50 left-4 sm:left-16 top-0 z-0"></div>

                    {/* Events */}
                    {sortedEvents.map((event, index) => (
                        <div
                            key={index}
                            className="relative flex items-start mb-8 last:mb-0 ml-7 sm:ml-24 group"
                        >
                            {/* Time dot on timeline */}
                            <div className="absolute -left-7 sm:-left-24 flex flex-col items-center">
                                <div className="w-8 h-8 rounded-full bg-black border-2 border-teal-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <div className="w-3 h-3 rounded-full bg-teal-400 group-hover:animate-pulse"></div>
                                </div>
                                {/* Time label */}
                                <div className="bg-black/80 rounded-full px-3 py-1 mt-2 min-w-20 text-center">
                                    <span className="text-teal-400 font-mono font-bold text-sm sm:text-base tracking-wider">
                                        {event.timings}
                                    </span>
                                </div>
                            </div>

                            {/* Event card - now as an anchor for navigation */}
                            <a
                                href={`/event/${event.eventCategory}/${event.eventId}`}
                                className="bg-black/70 rounded-lg p-4 border-l-4 border-teal-400 w-full transition-all hover:translate-x-1 hover:shadow-[0_0_15px_rgba(45,212,191,0.15)] relative overflow-hidden block"
                            >
                                {/* Glow effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-teal-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="relative z-10">
                                    <h3 className="text-white text-lg md:text-xl font-bold group-hover:text-teal-300 transition-colors">
                                        {event.eventName}
                                    </h3>

                                    <div className="flex items-center mt-2">
                                        <svg className="h-4 w-4 text-purple-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <p className="text-purple-300/80 text-sm">
                                            {event.eventLoc}
                                        </p>
                                    </div>
                                </div>

                                {/* Arrow indicator */}
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <svg className="h-5 w-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="w-full bg-black relative overflow-hidden py-16 md:py-20">
            {/* Dark noise texture overlay */}
            <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 to-black"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-20 right-10 w-64 h-64 bg-purple-700/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl"></div>

            {/* Grid lines */}
            <div className="absolute inset-0 overflow-hidden opacity-5">
                <div className="h-full w-full border-t border-l border-purple-500/20 grid grid-cols-6 grid-rows-6">
                    {[...Array(36)].map((_, i) => (
                        <div key={i} className="border-b border-r border-purple-500/20"></div>
                    ))}
                </div>
            </div>

            {/* Decorative curve */}
            <div className="absolute right-0 top-1/3 opacity-20">
                <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
                    <path d="M150 0C67.1573 0 0 67.1573 0 150" stroke="#4ECDC4" strokeWidth="2" />
                </svg>
            </div>
            <div className="absolute left-0 bottom-1/4 opacity-20 rotate-180">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                    <path d="M100 0C44.7715 0 0 44.7715 0 100" stroke="#FFD700" strokeWidth="2" />
                </svg>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Heading with tech style */}
                <div className="text-center mb-12 relative">
                    <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold relative inline-block">
                        <span className="relative z-10">SCHEDULE</span>
                        {/* Text shadow effect */}
                        <span className="absolute -left-1 -top-1 text-teal-500 opacity-30 blur-sm z-0">SCHEDULE</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-teal-400 mx-auto mt-4"></div>
                </div>

                {/* Date selection tabs */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10 relative">
                    <div className="absolute h-0.5 bottom-0 left-0 right-0 bg-purple-800/30 -z-10"></div>

                    {["18", "19", "20", "21"].map((day, index) => (
                        <div
                            key={index}
                            onClick={() => handleDayClick(index)}
                            className={`relative cursor-pointer px-6 py-3 text-center transition-all duration-200 ${activeDay === index
                                    ? "z-10"
                                    : "opacity-70 hover:opacity-100"
                                }`}
                        >
                            <div className={`absolute inset-0 ${activeDay === index
                                    ? "bg-gradient-to-b from-teal-500/20 to-transparent"
                                    : "bg-transparent hover:bg-purple-900/10"
                                } rounded-t-lg transition-colors`}></div>

                            <h3 className="text-white text-xl sm:text-2xl font-bold relative">
                                {day}<span className="text-sm sm:text-base align-top ml-0.5">{index === 3 ? "ST" : "TH"}</span>
                            </h3>

                            {activeDay === index && (
                                <>
                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-400"></div>
                                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-teal-400 rotate-45"></div>
                                </>
                            )}
                        </div>
                    ))}
                </div>

                {/* Content container */}
                <div className="relative rounded-lg overflow-hidden">
                    {/* Container background with glowing border effect */}
                    <div className="absolute inset-0 rounded-lg p-0.5 bg-gradient-to-br from-purple-700/30 via-teal-500/30 to-purple-700/30 animate-gradient-slow"></div>

                    <div className="relative p-6 rounded-lg bg-black/95">
                        {scheduleContent[activeDay].length === 0 ? (
                            <div className="py-12 text-center">
                                <p className="text-purple-300 text-lg">No events scheduled for this day.</p>
                            </div>
                        ) : (
                            <TimelineSchedule events={scheduleContent[activeDay]} />
                        )}
                    </div>
                </div>
            </div>

            {/* Add some CSS for custom scrollbar */}
            <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(79, 209, 197, 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(79, 209, 197, 0.5);
        }
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

export default Schedule;