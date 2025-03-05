import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate = "2025-04-24T00:00:00" }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const [isLive, setIsLive] = useState(false);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = new Date(targetDate) - new Date();

            if (difference <= 0) {
                setIsLive(true);
                return {
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                };
            }

            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        };

        // Set the initial value
        setTimeLeft(calculateTimeLeft());

        // Update every second
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Clean up the interval on component unmount
        return () => clearInterval(timer);
    }, [targetDate]);

    // Function to pad numbers with leading zeros
    const padWithZero = (num, length = 2) => {
        return String(num).padStart(length, '0');
    };

    // Digital style number component
    const DigitalNumber = ({ value, label }) => {
        const paddedValue = padWithZero(value);

        return (
            <div className="flex flex-col items-center mx-1 sm:mx-2 md:mx-4">
                {/* Transparent background with subtle border and glow */}
                <div className="relative bg-purple-950/20 backdrop-blur-sm px-1 py-2 border border-purple-800/30 rounded-sm mb-3 shadow-[0_0_15px_rgba(45,212,191,0.1)]">
                    <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-mono font-bold tracking-wider text-white relative z-10">
                        {paddedValue.split('').map((digit, index) => (
                            <span key={index} className="inline-block px-1 relative">
                                {digit}
                                {/* Add the digital "breaks" in the numbers */}
                                <span className="absolute inset-0 bg-black opacity-30" style={{
                                    height: '2px',
                                    left: '0',
                                    right: '0',
                                    top: '48%'
                                }}></span>
                            </span>
                        ))}
                    </div>

                    {/* Subtle inner glow */}
                    <div className="absolute inset-0 rounded-sm">
                        <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-purple-600/0 via-teal-400/30 to-purple-600/0 blur-sm rounded-md"></div>
                    </div>
                </div>

                <span className="text-white/80 text-xs sm:text-sm md:text-base font-medium">{label}</span>
            </div>
        );
    };

    return (
        <div className="w-full max-w-4xl mx-auto py-8 md:py-12">
            {/* Content container - no background, just decorative elements */}
            <div className="relative py-6">
                {/* Decorative elements that blend with site background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl max-h-64 rounded-full opacity-10 bg-gradient-to-r from-purple-700/30 via-transparent to-teal-500/30 blur-3xl -z-10"></div>

                {/* Thin decorative lines */}
                <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
                <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-teal-400/40 to-transparent"></div>

                <div className="flex flex-col items-center">
                    <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-8 relative">
                        <span className="relative z-10">Enigma'25 Countdown</span>
                        {/* Text glow effect */}
                        <span className="absolute -left-0.5 -top-0.5 text-teal-400 opacity-20 z-0 blur-sm">Enigma'25 Countdown</span>
                    </h2>

                    {!isLive ? (
                        <div className="flex flex-wrap justify-center items-center gap-1 sm:gap-0">
                            <DigitalNumber value={padWithZero(timeLeft.days, 2)} label="Days" />
                            <span className="text-2xl sm:text-4xl text-teal-400/70 mx-0.5 md:mx-2 mt-2 font-thin">:</span>
                            <DigitalNumber value={timeLeft.hours} label="Hours" />
                            <span className="text-2xl sm:text-4xl text-teal-400/70 mx-0.5 md:mx-2 mt-2 font-thin">:</span>
                            <DigitalNumber value={timeLeft.minutes} label="Minutes" />
                            <span className="text-2xl sm:text-4xl text-teal-400/70 mx-0.5 md:mx-2 mt-2 font-thin">:</span>
                            <DigitalNumber value={timeLeft.seconds} label="Seconds" />
                        </div>
                    ) : (
                        <div className="text-center py-4 sm:py-6 px-4 relative">
                            <div className="inline-block relative bg-purple-950/30 backdrop-blur-sm px-12 py-6 rounded-lg border border-purple-800/30">
                                <div className="text-teal-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 animate-pulse relative z-10">
                                    EVENT IS LIVE
                                </div>
                                {/* Glow effect for live text */}
                                <div className="absolute inset-0 bg-teal-400 opacity-10 blur-md z-0 rounded-lg"></div>
                                <p className="text-white/90 text-base sm:text-lg mt-2">Join us now!</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;