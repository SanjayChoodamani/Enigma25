import React from 'react';
import { Link } from 'react-router-dom';
import { showsData, workshopData } from '../assets/data/EventData'; 

const Shows = () => {

    return (
        <section className="w-full bg-black min-h-screen relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8 mt-16">
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
                {/* Pronite Section */}
                <div className="mb-24">
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-12 relative inline-block">
                        <span className="relative z-10">PRONITE</span>
                        <span className="absolute -left-1 -top-1 text-teal-400 opacity-30 blur-sm z-0">PRONITE</span>
                        <div className="mt-2 h-1 w-24 bg-gradient-to-r from-purple-600 to-teal-400"></div>
                    </h1>

                    <div className="space-y-12">
                        {showsData.map((data, index) => (
                            <EventContainer
                                key={`show-${index}`}
                                content={{
                                    imgURL: data.imgloc,
                                    eventName: data.name,
                                    eventDate: data.date,
                                    eventLoc: data.loc,
                                    eventDesc: data.desciption,
                                    eventHeads: data.head,
                                    eventContact: data.contact,
                                    register: data.register,
                                    eventId: data.id,
                                    eventCategory: data.category
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Workshop Section */}
                <div id="workshop" className="mb-24">
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-12 relative inline-block">
                        <span className="relative z-10">WORKSHOP</span>
                        <span className="absolute -left-1 -top-1 text-teal-400 opacity-30 blur-sm z-0">WORKSHOP</span>
                        <div className="mt-2 h-1 w-24 bg-gradient-to-r from-purple-600 to-teal-400"></div>
                    </h1>

                    <div className="space-y-12">
                        {workshopData.map((data, index) => (
                            <EventContainer
                                key={`workshop-${index}`}
                                content={{
                                    imgURL: data.imgloc,
                                    eventName: data.name,
                                    eventDate: data.date,
                                    eventLoc: data.loc,
                                    eventDesc: data.desciption,
                                    eventHeads: data.head,
                                    eventContact: data.contact,
                                    register: data.register,
                                    eventId: data.id,
                                    eventCategory: data.category
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Event Container Component
const EventContainer = (props) => {
    const {
        imgURL,
        eventName,
        eventDate,
        eventLoc,
        eventDesc,
        eventId,
        eventCategory
    } = props.content;

    return (
        <div className="bg-purple-950/20 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-800/20 hover:border-teal-400/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(45,212,191,0.1)] group">
            <div className="flex flex-col md:flex-row">
                {/* Image container */}
                <div className="w-full md:w-1/3 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-teal-400/30 opacity-60 group-hover:opacity-30 transition-opacity z-10"></div>
                    <img
                        src={imgURL}
                        alt={eventName}
                        className="w-full h-48 md:h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Glowing effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20"></div>
                </div>

                {/* Content container */}
                <div className="w-full md:w-2/3 p-6 flex flex-col">
                    <h2 className="text-white text-xl sm:text-2xl font-bold mb-2 group-hover:text-teal-400 transition-colors">
                        {eventName}
                    </h2>

                    <div className="mb-3 opacity-80">
                        <p className="text-white text-sm flex items-center mb-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {eventDate}
                        </p>

                        <p className="text-white text-sm flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {eventLoc}
                        </p>
                    </div>

                    <p className="text-white/80 mb-6 flex-grow text-sm sm:text-base">
                        {eventDesc}
                    </p>

                    <Link
                        to={`/event/${eventCategory}/${eventId}`}
                        className="self-start px-6 py-2 bg-gradient-to-r from-purple-700/80 to-teal-500/80 rounded-full text-white font-medium hover:from-teal-500/80 hover:to-purple-700/80 transition-all duration-300 group flex items-center"
                    >
                        <span>Know More</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Shows;