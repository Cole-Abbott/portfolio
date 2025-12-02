'use client';

import Header from '../components/Header';
import { Briefcase, FlaskConical, Hammer, GitBranch } from 'lucide-react';

export default function ESkinPage() {
    const project = {
        title: "E-skin Research",
        description: "Developed firmware for a robotic electronic skin sensor system using PIC32 microcontrollers and MPLAB Harmony framework for tactile sensing applications in robotics research.",
        tools: ["PIC 32", "C", "Harmony Framework", "MPLAB X IDE"],
        githubUrl: "https://github.com/Cole-Abbott/e_skin_firmware_final",
        images: [
            "/projects/eskin/trigger_int.png",
            "/projects/eskin/graphic.png",
            "/projects/eskin/sample_data.png",
        ],
        video : "IMG_1427.MOV",
    };

    return (
        <div className="min-h-screen bg-base-bg text-content-dark">
            <Header />
            
            <main className="max-w-4xl mx-auto px-4 md:px-8 py-8">
                {/* Hero Section */}
                <div className="relative rounded-xl overflow-hidden mb-8 shadow-2xl bg-linear-to-br from-accent to-pop p-8">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-white">{project.title}</h1>
                    <p className="text-white/80 mt-2">Northwestern University Research Project</p>
                </div>

                {/* Project Summary */}
                <section className="mb-8 p-6 bg-base-bg rounded-xl border border-content-dark">
                    <h2 className="text-xl font-semibold text-heading mb-3 flex items-center">
                        <Briefcase className="w-5 h-5 mr-2" /> Project Summary
                    </h2>
                    <p className="text-content-dark leading-relaxed">{project.description}</p>
                </section>

                {/* Technical Overview */}
                <section className="mb-8 p-6 bg-base-bg rounded-xl border border-content-dark">
                    <h2 className="text-xl font-semibold text-heading mb-3 flex items-center">
                        <FlaskConical className="w-5 h-5 mr-2" /> Technical Overview
                    </h2>
                    <p className="text-content-dark leading-relaxed mb-4">
                        Electronic skin (e-skin) is a flexible, stretchable electronic system that mimics the 
                        properties of human skin, enabling robots to have precise touch and force sensing. 
                        This research project focuses on developing the embedded firmware that powers a acoustic tomagraphic eskin.
                    </p>
                    <p className="text-content-dark leading-relaxed mb-4">
                        The system uses a PIC32 microcontroller running the MPLAB Harmony framework to:
                    </p>
                    <ul className="list-disc list-inside text-content-dark space-y-2 ml-4">
                        <li>Sample a 12 bit ADC at 6.25 Msps</li>
                        <li>Send data over USB to a PC</li>
                        <li>Syncronize with another microcontroller using a trigger signal</li>
                    </ul>
                </section>

                {/* Firmware Architecture */}
                <section className="mb-8 p-6 bg-base-bg rounded-xl border border-content-dark">
                    <h2 className="text-xl font-semibold text-heading mb-3">Firmware Architecture</h2>
                    <p className="text-content-dark leading-relaxed mb-4">
                        The firmware is built on Microchip&apos;s MPLAB Harmony framework, which provides a 
                        modular, driver-based architecture for embedded development. Key components include:
                    </p>
                    <ul className="list-disc list-inside text-content-dark space-y-2 ml-4">
                        <li><strong>ADC:</strong> Uses the high speed 12-bit Analog to Digital Converter peripheral of the PIC32 MZ EF to collect data at 6.25 Msps</li>
                        <li><strong>DMA:</strong> Direct Memory Access transfers ADC samples to RAM with minimal CPU overhead</li>
                        <li><strong>Communication Protocol:</strong> USB Vendor device for streaming data to PC</li>
                        <li><strong>State Machine:</strong> Manages system modes and error handling</li>
                    </ul>
                    <div>
                            <img
                                src={project.images[0]}
                                alt="Test Running"
                                className="w-full rounded-xl shadow-lg"
                            />
                        </div>
                </section>

                {/* Applications */}
                <section className="mb-8 p-6 bg-base-bg rounded-xl border border-content-dark">
                    <h2 className="text-xl font-semibold text-heading mb-3">Applications</h2>
                    <p className="text-content-dark leading-relaxed mb-4">
                        E-skin technology has numerous applications in robotics and beyond:
                    </p>
                    <ul className="list-disc list-inside text-content-dark space-y-2 ml-4">
                        <li>Robotic manipulation and grasping with tactile feedback</li>
                        <li>Human-robot interaction and collaborative robotics</li>
                        <li>Prosthetics with sensory feedback</li>
                        <li>Soft robotics and wearable devices</li>
                    </ul>
                </section>

                {/* Video Demo */}
                {project.video && (
                    <section className="mb-8 p-6 bg-base-bg rounded-xl border border-content-dark">
                        <h2 className="text-xl font-semibold text-heading mb-3">Video Demo</h2>
                        <video controls className="w-full rounded-xl shadow-lg">
                            <source src={`/projects/eskin/${project.video}`} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </section>
                )}

                {/* Tools */}
                <section className="mb-8 p-6 bg-base-bg rounded-xl border border-content-dark">
                    <h2 className="text-xl font-semibold text-heading mb-3 flex items-center">
                        <Hammer className="w-5 h-5 mr-2" /> Key Tools & Technologies
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {project.tools.map((tool, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 text-sm font-medium bg-content-dark text-content-light rounded-lg shadow-md"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Links */}
                <section className="flex flex-wrap gap-4">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-6 py-3 text-sm font-semibold text-base-bg bg-accent rounded-lg hover:bg-accent-hover transition duration-300"
                        >
                            <GitBranch className="w-4 h-4 mr-2" /> View on GitHub
                        </a>
                    )}
                </section>
            </main>

            <footer className="py-6 px-4 md:px-8 bg-base-bg mt-10">
                <div className="max-w-6xl mx-auto text-center text-sm text-content-light">
                    Built with React & Tailwind CSS by Cole Abbott | Northwestern ME &apos;26
                </div>
            </footer>
        </div>
    );
}
