"use client";

import { useEffect, useState } from 'react';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation after component mounts
        setIsVisible(true);
    }, []);

    return (
        <section className="py-16 px-4 md:px-8">
            <div className={`max-w-2xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
                <div className={`md:flex-none flex justify-center md:justify-end transition-all duration-700 delay-100 ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}>
                    <img 
                        src="climbing.jpeg" 
                        alt="Profile Picture" 
                        className="rounded-full object-cover w-48 h-48 md:w-64 md:h-64 shadow-xl ring-4 ring-accent/20 hover:ring-accent/40 transition-all duration-300 hover:scale-105" 
                    />
                </div>
                <div className={`md:flex-1 text-center md:text-left transition-all duration-700 delay-200 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}>
                    <p className="text-lg text-content-dark max-w-3xl mx-auto md:mx-0 font-semibold leading-relaxed">
                        Hi, I&apos;m Cole, a senior at Northwestern University pursuing a combined BS/MS degree in Mechanical Engineering. I&apos;m interested in robotics and embedded systems.
                    </p>
                </div>
            </div>
        </section>
    )
};

export default About;