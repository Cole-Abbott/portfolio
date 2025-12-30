
import React from "react";
import Header from "../components/Header"; // optional: reuse header

export const metadata = {
  title: "About — Cole Abbott",
  description: "About page",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-base-bg text-content-light">
      <Header />
      <main className="max-w-6xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold text-heading mb-4">About Me</h1>
        <p className="mb-6 text-gray-700"> I am Cole Abbott, an engineer, maker and artist with a passion for bringing my ideas to life. I am currently at Northwestern University persuing a Bachlors and a Masters in mechanical engineering with a concentration in robotics. At Northwestern, I am part of the NU Baja SAE engineering team, where we design, build, and race an offroad racecar. I also do reasearch in the HAND ERC, where I work on an eskin project. I also work as an advanced trainer in the segal design shop where I train engineers to use tools such as mills and lathes, and assist students with their projects. 
          
        I'm always building something new, whether it's a 3D printed robot arm, or a metal sculpture. I love the process of taking an idea from concept to creation, and I'm always looking for new challenges to tackle. My skills include CAD design, 3D printing, CNC machining, electronics, programming, and welding.

        When I'm not working on projects, I'll be leading hiking trips in the outdoors, rock climbing in Wisconsin, or compeating for the Northwestern sailing team. 

        </p>
        <h1 className="text-3xl font-bold text-heading mb-4">Contact</h1>
        <p className="mb-6, text-gray-700">Email: <a href="mailto:cole@coleabbott.xyz" className="text-accent">cole@coleabbott.xyz</a></p>
        <p className="text-grey-700">Short contact/messaging instructions here.</p>
        <p className="text-grey-700">LinkedIn: <a href="https://www.linkedin.com/in/coleabbott/" className="text-accent">Linkedin</a></p>
        <p className="text-grey-700">GitHub: <a href="https://github.com/Cole-Abbott" className="text-accent">GitHub</a></p>


      </main>
    </div>
  );
}