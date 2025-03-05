import React from 'react';

const TermsCond = () => {
    // Terms and conditions data
    const termsData = [
        {
            "heading": "Eligibility: ",
            "desc": [
                `Open to all students currently enrolled in a recognized engineering college.`,
                `Individual and team registrations are allowed, depending on the event format.`,
                `Age restrictions may apply for certain events. Please refer to specific event descriptions. `
            ]
        },
        {
            "heading": "Registration: ",
            "desc": [
                `Registration is mandatory for participation in all events.`,
                `Registration fees may apply depending on the event. All fees are non-refundable.`,
                `Online and offline registration options may be available. Please refer to the official website for details. `,
                `Teams must register with a unique team name and list all team members.  `
            ]
        },
        {
            "heading": "Participation: ",
            "desc": [
                `Participants must adhere to the rules and regulations specific to each event.`,
                `All entries must be original work and free from plagiarism.`,
                `Participants are responsible for bringing their own equipment (laptops, tools, etc.) unless otherwise specified.`,
                `Judges' decisions are final and cannot be contested.  `
            ]
        },
        {
            "heading": "Intellectual Property:  ",
            "desc": [
                `All intellectual property rights associated with the submitted entries remain with the participants. `,
                `However, participants grant the organisers a non-exclusive, royalty-free right to use their entry for promotional purposes related to the festival.  `
            ]
        },
        {
            "heading": "Conduct:  ",
            "desc": [
                `Participants must conduct themselves professionally and respectfully throughout the festival.`,
                `Any form of harassment, discrimination, or disruptive behaviour will not be tolerated and may lead to disqualification.`,
                `The organizers and college management reserve the right to remove any participant who violates these terms and conditions. `
            ]
        },
        {
            "heading": "Disclaimer:  ",
            "desc": [
                `The organisers take all reasonable precautions to ensure the safety and well-being of participants. 
        However, they are not responsible for any injuries, accidents, or losses incurred during the festival. `,
                `Participants participate at their own risk and agree to hold the organisers harmless from any claims or liabilities arising from their participation.  `
            ]
        },
        {
            "heading": "Modifications:  ",
            "desc": [
                `The organizers reserve the right to modify these terms and conditions at any time without prior notice.`,
                `Participants are responsible for checking the official website for updates.  `
            ]
        },
        {
            "heading": "Data Privacy:  ",
            "desc": [
                `The organizers collect personal information during registration for administrative purposes only. `,
                `This information will not be shared with any third party without the participant's consent. `,
                `Participants have the right to access and modify their personal information upon request.  `
            ]
        },
        {
            "heading": "Contact: ",
            "desc": [
                ` For any questions regarding these terms and conditions or the festival in general, please contact mce.techclub@gmail.com or visit the official website at www.enigma24.in `,
            ]
        },
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
                    <span className="relative z-10">Terms and Conditions</span>
                    <span className="absolute -left-1 -top-1 text-teal-400 opacity-30 blur-sm z-0 w-full text-center">Terms and Conditions</span>
                    <div className="mt-4 h-1 w-32 bg-gradient-to-r from-purple-600 to-teal-400 mx-auto"></div>
                </h1>

                {/* Terms container */}
                <div className="bg-purple-950/10 backdrop-blur-sm rounded-xl border border-purple-800/20 p-6 md:p-8 shadow-lg">
                    {termsData.map((term, index) => (
                        <div
                            key={`term-${index}`}
                            className="mb-8 last:mb-0 relative"
                        >
                            <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600/50 to-teal-400/50 opacity-70"></div>

                            <h2 className="text-white text-xl sm:text-2xl font-bold mb-4 relative inline-block">
                                <span className="relative z-10">{term.heading}</span>
                                <div className="mt-1 h-0.5 w-full bg-teal-400/60"></div>
                            </h2>

                            <div className="space-y-3">
                                {term.desc.map((desc, i) => (
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

                {/* Small decorative element at bottom */}
                <div className="mt-8 flex justify-center">
                    <div className="h-1 w-16 bg-gradient-to-r from-purple-600/30 to-teal-400/30 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default TermsCond;