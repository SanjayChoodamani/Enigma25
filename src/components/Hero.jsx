import React, { useEffect, useState } from 'react';

const HeroSection = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(() => {
        // Initialize animations when component mounts - one-time only
        const animateElements = () => {
            const elements = document.querySelectorAll('.animate-on-load');
            elements.forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('animate-active');
                }, index * 120);
            });
        };

        setTimeout(() => {
            setIsLoaded(true);
            animateElements();
        }, 100);
    }, []);

    return (
        <div className="relative overflow-hidden w-full bg-black" style={{ height: '100dvh' }}>
            {/* Background elements with added floating objects */}
            <div className="absolute inset-0 z-0">
                {/* Deep space gradient - very subtle */}
                <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-black to-black"></div>
                
                {/* Extremely subtle tech grid - reduced opacity */}
                <div className="absolute inset-0 tech-grid opacity-3"></div>
                
                {/* Minimal scanlines */}
                <div className="absolute inset-0 scan-lines opacity-2"></div>
                
                {/* Decorative boxes on left side */}
                <div className="absolute left-4 top-1/4 w-16 h-16 border border-purple-900/30 opacity-40 rotate-12"></div>
                <div className="absolute left-8 top-1/3 w-8 h-8 border border-blue-900/30 opacity-30 -rotate-12"></div>
                <div className="absolute left-12 top-2/3 w-12 h-12 bg-purple-900/5 opacity-30"></div>
                
                {/* Decorative boxes on right side */}
                <div className="absolute right-4 top-1/5 w-12 h-12 border border-pink-900/30 opacity-40 rotate-45"></div>
                <div className="absolute right-16 top-1/4 w-10 h-10 border border-indigo-900/30 opacity-30 -rotate-15"></div>
                <div className="absolute right-8 bottom-1/4 w-14 h-14 bg-indigo-900/5 opacity-30"></div>
                
                {/* NEW - Additional floating geometric elements */}
                <div className="absolute left-1/4 top-1/6 w-8 h-8 border-b border-r border-cyan-800/20 opacity-20 animate-float-slow"></div>
                <div className="absolute right-1/4 top-1/5 w-6 h-6 border-t border-l border-purple-800/20 opacity-20 animate-float-slower rotate-45"></div>
                <div className="absolute left-1/3 bottom-1/5 w-10 h-10 border border-blue-900/15 opacity-15 animate-pulse-slow"></div>
                <div className="absolute right-1/3 bottom-1/4 w-5 h-5 bg-indigo-900/5 opacity-15 animate-float-slow rotate-12"></div>
                
                {/* NEW - Subtle circuit-like lines */}
                <div className="absolute left-1/5 top-0 w-px h-1/4 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent opacity-20"></div>
                <div className="absolute right-1/4 top-0 w-px h-1/3 bg-gradient-to-b from-transparent via-blue-900/15 to-transparent opacity-15"></div>
                <div className="absolute left-2/5 bottom-0 w-px h-1/4 bg-gradient-to-t from-transparent via-purple-900/20 to-transparent opacity-20"></div>
                <div className="absolute right-2/5 bottom-0 w-px h-1/3 bg-gradient-to-t from-transparent via-indigo-900/15 to-transparent opacity-15"></div>
                
                {/* NEW - Horizontal connecting lines */}
                <div className="absolute top-1/4 left-0 w-1/5 h-px bg-gradient-to-r from-transparent via-purple-900/20 to-transparent opacity-20"></div>
                <div className="absolute top-1/3 right-0 w-1/5 h-px bg-gradient-to-l from-transparent via-blue-900/15 to-transparent opacity-15"></div>
                <div className="absolute bottom-1/4 left-0 w-1/5 h-px bg-gradient-to-r from-transparent via-cyan-900/20 to-transparent opacity-20"></div>
                <div className="absolute bottom-1/3 right-0 w-1/5 h-px bg-gradient-to-l from-transparent via-indigo-900/15 to-transparent opacity-15"></div>
                
                {/* NEW - Subtle particle dots */}
                <div className="particles-container">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <div 
                            key={i} 
                            className="absolute rounded-full bg-purple-800/30 opacity-10 animate-twinkle"
                            style={{
                                width: `${Math.random() * 3 + 1}px`, 
                                height: `${Math.random() * 3 + 1}px`,
                                left: `${Math.random() * 100}%`, 
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 10}s`,
                                animationDuration: `${Math.random() * 5 + 5}s`
                            }}
                        ></div>
                    ))}
                </div>
                
                {/* NEW - Subtle tech nodes */}
                <div className="absolute left-1/6 top-2/5 w-3 h-3 rounded-full border border-purple-800/20 opacity-20"></div>
                <div className="absolute right-1/6 top-3/5 w-3 h-3 rounded-full border border-blue-800/20 opacity-20"></div>
                <div className="absolute left-3/5 bottom-1/6 w-2 h-2 rounded-full border border-indigo-800/20 opacity-20"></div>
                <div className="absolute right-2/5 bottom-2/6 w-2 h-2 rounded-full border border-cyan-800/20 opacity-20"></div>
            </div>

            {/* Robot images - responsive positioning */}
            <div className="absolute inset-0 z-10">
                <div className="w-full h-full flex flex-col md:flex-row items-center justify-between px-4 lg:px-0">
                    {/* Left robot with responsive positioning */}
                    <div className="w-full md:w-5/12 lg:w-5/12 relative order-1">
                        <div className={`relative ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'} transition-all duration-1000 ease-out`}>
                            <img
                                src="/leftRobot.png"
                                alt="Enigma Robot Left"
                                className="w-full h-auto object-contain max-h-48 md:max-h-screen mx-auto md:mx-0"
                            />
                            {/* Very subtle darker aura */}
                            <div className="absolute inset-0 -z-1 robot-aura-left"></div>
                            
                            {/* Power accent lines - static after appearing */}
                            <div className={`absolute top-1/3 right-0 w-16 h-px bg-purple-800/30 ${isLoaded ? 'opacity-30' : 'opacity-0'} transition-all duration-700 delay-700`}></div>
                            <div className={`absolute top-1/2 right-0 w-20 h-px bg-blue-800/30 ${isLoaded ? 'opacity-40' : 'opacity-0'} transition-all duration-700 delay-800`}></div>
                            <div className={`absolute top-2/3 right-0 w-12 h-px bg-pink-800/30 ${isLoaded ? 'opacity-30' : 'opacity-0'} transition-all duration-700 delay-900`}></div>
                            
                            {/* NEW - Additional power lines */}
                            <div className={`absolute top-1/4 right-0 w-10 h-px bg-cyan-800/20 ${isLoaded ? 'opacity-20' : 'opacity-0'} transition-all duration-700 delay-750`}></div>
                            <div className={`absolute top-3/5 right-0 w-14 h-px bg-indigo-800/20 ${isLoaded ? 'opacity-25' : 'opacity-0'} transition-all duration-700 delay-850`}></div>
                        </div>
                    </div>

                    {/* Right robot with responsive positioning */}
                    <div className="w-full md:w-5/12 lg:w-5/12 relative order-3 md:order-3">
                        <div className={`relative ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'} transition-all duration-1000 ease-out`}>
                            <img
                                src="/rightRobot.png"
                                alt="Enigma Robot Right"
                                className="w-full h-auto object-contain max-h-48 md:max-h-screen mx-auto md:mx-0"
                            />
                            {/* Very subtle darker aura */}
                            <div className="absolute inset-0 -z-1 robot-aura-right"></div>
                            
                            {/* Power accent lines - static after appearing */}
                            <div className={`absolute top-1/3 left-0 w-16 h-px bg-purple-800/30 ${isLoaded ? 'opacity-30' : 'opacity-0'} transition-all duration-700 delay-700`}></div>
                            <div className={`absolute top-1/2 left-0 w-20 h-px bg-blue-800/30 ${isLoaded ? 'opacity-40' : 'opacity-0'} transition-all duration-700 delay-800`}></div>
                            <div className={`absolute top-2/3 left-0 w-12 h-px bg-pink-800/30 ${isLoaded ? 'opacity-30' : 'opacity-0'} transition-all duration-700 delay-900`}></div>
                            
                            {/* NEW - Additional power lines */}
                            <div className={`absolute top-1/4 left-0 w-10 h-px bg-cyan-800/20 ${isLoaded ? 'opacity-20' : 'opacity-0'} transition-all duration-700 delay-750`}></div>
                            <div className={`absolute top-3/5 left-0 w-14 h-px bg-indigo-800/20 ${isLoaded ? 'opacity-25' : 'opacity-0'} transition-all duration-700 delay-850`}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Text content positioned according to screen size */}
            <div className="absolute inset-x-0 z-50 flex justify-center pointer-events-none order-2 md:order-2 
                             bottom-8 md:bottom-20">
                <div className="text-center relative">
                    {/* Tech panel with corner decorations */}
                    <div className="tech-panel px-8 py-6 md:px-10 md:py-8 rounded-xl inline-block relative">
                        {/* Tech corner decorations */}
                        <div className={`absolute top-0 left-0 w-6 h-6 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-all duration-500 delay-300`}>
                            <div className="absolute top-0 left-0 w-full h-2 bg-purple-900"></div>
                            <div className="absolute top-0 left-0 w-2 h-full bg-purple-900"></div>
                        </div>
                        <div className={`absolute top-0 right-0 w-6 h-6 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-all duration-500 delay-400`}>
                            <div className="absolute top-0 right-0 w-full h-2 bg-purple-900"></div>
                            <div className="absolute top-0 right-0 w-2 h-full bg-purple-900"></div>
                        </div>
                        <div className={`absolute bottom-0 left-0 w-6 h-6 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-all duration-500 delay-500`}>
                            <div className="absolute bottom-0 left-0 w-full h-2 bg-purple-900"></div>
                            <div className="absolute bottom-0 left-0 w-2 h-full bg-purple-900"></div>
                        </div>
                        <div className={`absolute bottom-0 right-0 w-6 h-6 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-all duration-500 delay-600`}>
                            <div className="absolute bottom-0 right-0 w-full h-2 bg-purple-900"></div>
                            <div className="absolute bottom-0 right-0 w-2 h-full bg-purple-900"></div>
                        </div>
                        
                        {/* Tech box borders - appearing one by one */}
                        <div className={`absolute top-3 left-6 right-6 h-px bg-purple-900/40 ${isLoaded ? 'opacity-40' : 'opacity-0'} transition-all duration-700 delay-700`}></div>
                        <div className={`absolute bottom-3 left-6 right-6 h-px bg-purple-900/40 ${isLoaded ? 'opacity-40' : 'opacity-0'} transition-all duration-700 delay-800`}></div>
                        <div className={`absolute left-3 top-6 bottom-6 w-px bg-purple-900/40 ${isLoaded ? 'opacity-40' : 'opacity-0'} transition-all duration-700 delay-900`}></div>
                        <div className={`absolute right-3 top-6 bottom-6 w-px bg-purple-900/40 ${isLoaded ? 'opacity-40' : 'opacity-0'} transition-all duration-700 delay-1000`}></div>
                        
                        {/* Pre-heading with one-time fade-in animation */}
                        <div className="relative mb-3 md:mb-4">
                            <p className={`text-yellow-400 font-bold tracking-wide text-lg sm:text-xl md:text-2xl uppercase ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-all duration-700 delay-200`}>
                                The Malnad Technical Club Presents
                            </p>
                        </div>

                        {/* Main heading with one-time reveal animation */}
                        <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black leading-none tracking-tight text-shadow-darker">
                            <span className={`relative inline-block ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'} transition-all duration-1000 delay-300`}>
                                <span className="relative z-10 text-white">ENIGMA</span>
                                <span className="absolute -left-1 -top-1 text-cyan-800/50 z-0 blur-[1px]">ENIGMA</span>
                                <span className="absolute -left-2 -top-2 text-pink-900/40 z-0 blur-[2px]">ENIGMA</span>
                            </span>
                            <span className={`relative inline-block ml-2 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'} transition-all duration-1000 delay-500`}>
                                <span className="relative z-10 text-yellow-500">'25</span>
                                <span className="absolute -left-1 -top-1 text-cyan-800/50 z-0 blur-[1px]">'25</span>
                                <span className="absolute -left-2 -top-2 text-pink-900/40 z-0 blur-[2px]">'25</span>
                            </span>
                        </h1>

                        {/* Subheading with fade-in animation */}
                        <div className="inline-block mt-4 md:mt-6">
                            <p className={`text-gray-200 text-xl sm:text-2xl md:text-3xl font-bold ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700 delay-800`}>
                                Unleash the mystery of Technology
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Responsive design adjustments */}
            <div className="block md:hidden">
                {/* Mobile-specific positioning helpers */}
                <style jsx global>{`
                    @media (max-width: 768px) {
                        .order-1 {
                            margin-top: 10rem;
                            height: 60vh;
                            margin-left: -10rem;
                        }
                        .order-2{
                            margin-bottom: 60%;
                            max-height: 30vh;
                            padding: 20px
                        }
                        .order-3 {
                            margin-bottom: -4rem;
                            height: 60vh;
                            margin-right: -10rem;
                        }
                    }
                `}</style>
            </div>

            {/* CSS effects */}
            <style jsx global>{`
                /* Minimalist tech grid */
                .tech-grid {
                    background-image: 
                        linear-gradient(rgba(139, 92, 246, 0.5) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(139, 92, 246, 0.5) 1px, transparent 1px);
                    background-size: 100px 100px;
                }
                
                /* Subtle scan lines */
                .scan-lines {
                    background: linear-gradient(to bottom, 
                        transparent 49.5%, 
                        rgba(255, 255, 255, 0.3) 50%, 
                        transparent 50.5%);
                    background-size: 100% 4px;
                }
                
                /* Darker robot auras that don't obscure the images */
                .robot-aura-left {
                    background: radial-gradient(ellipse at center right, 
                        rgba(88, 28, 135, 0.15) 0%, 
                        rgba(76, 29, 149, 0.08) 40%, 
                        transparent 70%);
                    filter: blur(15px);
                }
                
                .robot-aura-right {
                    background: radial-gradient(ellipse at center left, 
                        rgba(112, 26, 117, 0.15) 0%, 
                        rgba(88, 28, 135, 0.08) 40%, 
                        transparent 70%);
                    filter: blur(15px);
                }
                
                /* Tech panel with darker backdrop */
                .tech-panel {
                    background: linear-gradient(135deg, 
                        rgba(0, 0, 0, 0.7) 0%, 
                        rgba(25, 5, 58, 0.5) 100%);
                    backdrop-filter: blur(5px);
                    border: 1px solid rgba(88, 28, 135, 0.2);
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
                }
                
                /* Darker text shadow */
                .text-shadow-darker {
                    text-shadow: 
                        0 0 8px rgba(88, 28, 135, 0.3),
                        0 4px 12px rgba(0, 0, 0, 0.9);
                }
                
                /* Custom opacity classes */
                .opacity-2 {
                    opacity: 0.02;
                }
                
                .opacity-3 {
                    opacity: 0.03;
                }
                
                /* Added animation classes */
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0) rotate(0); }
                    50% { transform: translateY(-10px) rotate(2deg); }
                }
                
                @keyframes float-slower {
                    0%, 100% { transform: translateY(0) rotate(0); }
                    50% { transform: translateY(-15px) rotate(-2deg); }
                }
                
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.15; }
                    50% { opacity: 0.3; }
                }
                
                @keyframes twinkle {
                    0%, 100% { opacity: 0.05; }
                    50% { opacity: 0.2; }
                }
                
                .animate-float-slow {
                    animation: float-slow 8s ease-in-out infinite;
                }
                
                .animate-float-slower {
                    animation: float-slower 12s ease-in-out infinite;
                }
                
                .animate-pulse-slow {
                    animation: pulse-slow 10s ease-in-out infinite;
                }
                
                .animate-twinkle {
                    animation: twinkle 5s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default HeroSection;