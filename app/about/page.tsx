
"use client";

import React, { useEffect, useState } from "react";
import Header from "../components/Header";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className="min-h-screen text-content-dark">
      <Header />
      <main className="max-w-4xl mx-auto py-16 px-4 md:px-8">
        <div className={`transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-4xl md:text-5xl font-bold text-heading mb-6 pb-4 border-b-2 border-accent/30">
            About Me
          </h1>
        </div>
        
        <div className={`mb-12 transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="mb-6 text-gray-700 leading-relaxed text-lg bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
            I am Cole Abbott, an engineer, maker and artist with a passion for bringing my ideas to life. I am currently at Northwestern University pursuing a Bachelors and a Masters in mechanical engineering with a concentration in robotics. At Northwestern, I am part of the NU Baja SAE engineering team, where we design, build, and race an offroad racecar. I also do research in the HAND ERC, where I work on an eskin project. I also work as an advanced trainer in the segal design shop where I train engineers to use tools such as mills and lathes, and assist students with their projects.
          </p>
          
          <p className="mb-6 text-gray-700 leading-relaxed text-lg bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
            I'm always building something new, whether it's a 3D printed robot arm, or a metal sculpture. I love the process of taking an idea from concept to creation, and I'm always looking for new challenges to tackle. My skills include CAD design, 3D printing, CNC machining, electronics, programming, and welding.
          </p>

          <p className="mb-6 text-gray-700 leading-relaxed text-lg bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
            When I'm not working on projects, I'll be leading hiking trips in the outdoors, rock climbing in Wisconsin, or competing for the Northwestern sailing team.
          </p>
        </div>

        <div className={`transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-4xl md:text-5xl font-bold text-heading mb-6 pb-4 border-b-2 border-accent/30">
            Contact
          </h1>
        </div>

        <div className={`space-y-4 bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-md transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-gray-700 text-lg">
            <span className="font-semibold text-content-dark">Email:</span>{" "}
            <a 
              href="mailto:cole@coleabbott.xyz" 
              className="text-accent hover:text-pop transition-colors duration-300 font-medium underline decoration-accent/30 hover:decoration-pop"
            >
              cole@coleabbott.xyz
            </a>
          </p>
          
          <p className="text-gray-700 text-lg">
            <span className="font-semibold text-content-dark">LinkedIn:</span>{" "}
            <a 
              href="https://www.linkedin.com/in/coleabbott/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-pop transition-colors duration-300 font-medium underline decoration-accent/30 hover:decoration-pop"
            >
              linkedin.com/in/coleabbott
            </a>
          </p>
          
          <p className="text-gray-700 text-lg">
            <span className="font-semibold text-content-dark">GitHub:</span>{" "}
            <a 
              href="https://github.com/Cole-Abbott" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-pop transition-colors duration-300 font-medium underline decoration-accent/30 hover:decoration-pop"
            >
              github.com/Cole-Abbott
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}