import React from 'react';

const Refund = () => {
    // Refund policy data
    const refundData = [
        {
            "heading": "General Policy: ",
            "desc": [
                `All event registration fees and ticket fees are non-refundable.`,
                `Exceptions apply solely to event registration fees under specific circumstances. `
            ]
        },
        {
            "heading": "Event Cancellation:  ",
            "desc": [
                `If the entire technical fest is canceled due to unforeseen circumstances, a full refund will be issued to all registered participants.`,
                `If an individual event is canceled, a partial refund may be issued to participants who registered for 
        that specific event. The refund amount will be determined based on the costs incurred by the 
        organizers for that event.   `
            ]
        },
        {
            "heading": "Individual Issues:  ",
            "desc": [
                `No refunds will be issued for individual withdrawals or team member changes.`,
                `In special cases, such as documented medical emergencies or extenuating circumstances beyond the participant's control, a partial refund may be considered at the discretion of the organising 
        committee. `,
                `Requests for refunds due to individual circumstances must be submitted in writing to 
        mce.techclub@gmail.com along with supporting documentation.  `
            ]
        },
        {
            "heading": "Processing time:",
            "desc": [
                `Refunds will be processed within 10 business days of approval. `,
                `Refunds will be issued through the same payment method used for registration.  `
            ]
        },
        {
            "heading": "Additional Notes:   ",
            "desc": [
                `This policy is subject to change without prior notice. Please refer to the official website for the latest updates. `,
                `Participants must carefully review the event descriptions and rules before registering.`
            ]
        }
    ];

    return (
        <div className="w-full bg-black min-h-screen relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8 mt-16">
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
            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Heading */}
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center relative">
                    <span className="relative z-10">Refund Policy</span>
                    <span className="absolute -left-1 -top-1 text-teal-400 opacity-30 blur-sm z-0 w-full text-center">Refund Policy</span>
                    <div className="mt-4 h-1 w-32 bg-gradient-to-r from-purple-600 to-teal-400 mx-auto"></div>
                </h1>

                {/* Refund policy container */}
                <div className="bg-purple-950/10 backdrop-blur-sm rounded-xl border border-purple-800/20 p-6 md:p-8 shadow-lg">
                    {refundData.map((refund, index) => (
                        <div
                            key={`refund-${index}`}
                            className="mb-8 last:mb-0 relative"
                        >
                            <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600/50 to-teal-400/50 opacity-70"></div>

                            <h2 className="text-white text-xl sm:text-2xl font-bold mb-4 relative inline-block">
                                <span className="relative z-10">{refund.heading}</span>
                                <div className="mt-1 h-0.5 w-full bg-teal-400/60"></div>
                            </h2>

                            <div className="space-y-3">
                                {refund.desc.map((desc, i) => (
                                    <p
                                        key={`desc-${index}-${i}`}
                                        className="text-white/80 text-base leading-relaxed pl-6 relative"
                                    >
                                        <span className="absolute left-0 top-0 text-teal-400">{i + 1}.</span>
                                        {desc}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional information note */}
                <div className="mt-10 text-center">
                    <div className="inline-block bg-purple-950/30 backdrop-blur-sm rounded-lg border border-purple-800/20 px-6 py-4">
                        <p className="text-white/70 text-sm">
                            For any questions regarding our refund policy, please contact us at{' '}
                            <a href="mailto:mce.techclub@gmail.com" className="text-teal-400 hover:text-white transition-colors">
                                mce.techclub@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Refund;