// EventDetail.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { nationalData, designBuild, paperData, onlineData, funData, showsData, workshopData } from '../assets/data/EventData'; 

const EventDetail = () => {
    const [loading, setLoading] = useState(true);
    const [event, setEvent] = useState(null);
    const { id, category } = useParams();

    useEffect(() => {
        // Combine all event data
        const allEvents = [
            ...nationalData,
            ...designBuild,
            ...paperData,
            ...onlineData,
            ...funData,
            ...showsData,
            ...workshopData
        ];

        // Find the event by id (convert both to strings for safe comparison)
        const foundEvent = allEvents.find(event => String(event.id) === String(id) && event.category === category);

        if (foundEvent) {
            setEvent(foundEvent);
        }

        setLoading(false);
    }, [id, category]);

    if (loading) {
        return (
            <div className="w-full min-h-screen bg-black flex items-center justify-center">
                <div className="text-teal-400 text-2xl">Loading...</div>
            </div>
        );
    }

    if (!event) {
        return (
            <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center p-4">
                <div className="text-white text-2xl mb-6">Event not found</div>
                <Link
                    to="/Enigma25/events"
                    className="px-6 py-2 bg-gradient-to-r from-purple-700/80 to-teal-500/80 rounded-full text-white font-medium hover:from-teal-500/80 hover:to-purple-700/80 transition-all duration-300"
                >
                    Back to Events
                </Link>
            </div>
        );
    }

    return (
        <div className="w-full bg-black min-h-screen relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 to-black z-0"></div>

            {/* Decorative grid */}
            <div className="absolute inset-0 opacity-5">
                <div className="h-full w-full border-t border-l border-purple-500/20 grid grid-cols-6 grid-rows-6">
                    {[...Array(36)].map((_, i) => (
                        <div key={`grid-${i}`} className="border-b border-r border-purple-500/20"></div>
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
            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Back button */}
                <Link
                    to="/Enigma25/events"
                    className="inline-flex items-center text-white hover:text-teal-400 transition-colors mb-6"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Back to Events
                </Link>

                <div className="bg-purple-950/10 backdrop-blur-sm rounded-xl border border-purple-800/20 p-6 md:p-8 shadow-lg overflow-hidden">
                    {/* Main content container */}
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Image section */}
                        <div className="w-full lg:w-2/5">
                            <div className="aspect-video rounded-lg overflow-hidden relative">
                                <img
                                    src={event.imgloc}
                                    alt={event.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            </div>

                            {/* Event info card */}
                            <div className="mt-6 bg-black/50 rounded-lg border border-purple-800/30 p-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Event details */}
                                    <div>
                                        <h3 className="text-teal-400 text-lg font-bold mb-4">Event Details</h3>

                                        <div className="space-y-3">
                                            <div>
                                                <p className="text-white/60 text-sm">Venue:</p>
                                                <p className="text-white font-medium">{event.loc}</p>
                                            </div>

                                            <div>
                                                <p className="text-white/60 text-sm">Date:</p>
                                                <p className="text-white font-medium">{event.date}</p>
                                            </div>

                                            <div>
                                                <p className="text-white/60 text-sm">Contact:</p>
                                                {event.contact && event.contact.map((phone, index) => (
                                                    <p key={index} className="text-white font-medium">{phone}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Event organizers */}
                                    <div>
                                        <h3 className="text-teal-400 text-lg font-bold mb-4">Event Heads</h3>

                                        <div className="space-y-1">
                                            {event.heads && event.heads.map((head, index) => (
                                                <p key={index} className="text-white font-medium">{head}</p>
                                            ))}
                                        </div>

                                        {/* Register button */}
                                        {event.registerForm && (
                                            <a
                                                href={event.registerForm}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center mt-6 px-6 py-2 bg-gradient-to-r from-purple-700/80 to-teal-500/80 rounded-full text-white font-medium hover:from-teal-500/80 hover:to-purple-700/80 transition-all duration-300"
                                            >
                                                <span>Register Now</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Event description */}
                        <div className="w-full lg:w-3/5">
                            <h1 className="text-white text-3xl sm:text-4xl font-bold mb-6 relative inline-block">
                                <span className="relative z-10">{event.name}</span>
                                <span className="absolute -left-1 -top-1 text-teal-400 opacity-30 blur-sm z-0">{event.name}</span>
                            </h1>

                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-teal-400 text-xl font-bold mb-3 relative inline-block">
                                        <span>Description</span>
                                        <div className="mt-1 h-0.5 w-full bg-teal-400/60"></div>
                                    </h2>

                                    <p className="text-white/80 text-base leading-relaxed">
                                        {event.desciption}
                                    </p>
                                </div>

                                {/* Event details sections */}
                                {event.details && event.details.map((detail, index) => (
                                    <div key={index}>
                                        <h2 className="text-teal-400 text-xl font-bold mb-3 relative inline-block">
                                            <span>{detail.heading}</span>
                                            <div className="mt-1 h-0.5 w-full bg-teal-400/60"></div>
                                        </h2>

                                        <div className="space-y-2">
                                            {detail.desc && detail.desc.map((content, idx) => (
                                                <p key={idx} className="text-white/80 text-base leading-relaxed">
                                                    {content}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetail;