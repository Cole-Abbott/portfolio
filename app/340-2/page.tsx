'use client';

import Header from '../components/Header';
import { Briefcase, FlaskConical, Hammer } from 'lucide-react';

export default function InjectionMoldingPage() {
    const project = {
        title: "Injection Molding Project - Axolotl Boat",
        description: "Designed and manufactured a multi-part injection molded toy featuring an axolotl riding a boat, created for a manufacturing processes course.",
        tools: ["CAD Design", "CNC Machining", "Injection Molding", "Mold Design"],
        images: [
            "/projects/340-2/IMG_0998.jpeg",
            "/projects/340-2/IMG_0999.jpeg",
            "/projects/340-2/IMG_1001.jpeg",
            "/projects/340-2/IMG_1003.jpeg",
            "/projects/340-2/IMG_1004.jpeg"
        ],
    };

    return (
        <div className="min-h-screen bg-base-bg text-content-dark">
            <Header />
            
            <main className="max-w-4xl mx-auto px-4 md:px-8 py-8">
                {/* Hero Image */}
                <div className="relative rounded-xl overflow-hidden mb-8 shadow-2xl">
                    <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-64 md:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-white p-6">{project.title}</h1>
                    </div>
                </div>

                {/* Project Summary */}
                <section className="mb-8 p-6 bg-base-bg rounded-xl border border-content-dark">
                    <h2 className="text-xl font-semibold text-heading mb-3 flex items-center">
                        <Briefcase className="w-5 h-5 mr-2" /> Project Summary
                    </h2>
                    <p className="text-content-dark leading-relaxed mb-4">{project.description}</p>
                    <p className="text-content-dark leading-relaxed">
                        This project was completed as part of a manufacturing processes course at Northwestern University. 
                        Our team of three designed and produced an axolotl riding a boat toy using injection molding techniques. 
                        I was responsible for designing the boat component, creating the mold design for the boat, and machining 
                        the boat molds, while my teammates handled the axolotl design and fabrication.
                    </p>
                </section>

                {/* Design Process */}
                <section className="mb-8 p-6 bg-base-bg rounded-xl border border-content-dark">
                    <h2 className="text-xl font-semibold text-heading mb-3 flex items-center">
                        <FlaskConical className="w-5 h-5 mr-2" /> Design Process
                    </h2>
                    <p className="text-content-dark leading-relaxed mb-4">
                        The design phase involved creating a CAD model of the boat that would be suitable for injection molding. 
                        Key considerations included:
                    </p>
                    <ul className="list-disc list-inside text-content-dark space-y-2 ml-4">
                        <li><strong>Draft Angles:</strong> Ensuring proper draft angles on all surfaces to allow the part to eject from the mold</li>
                        <li><strong>Parting Lines:</strong> Strategically placing the parting line to minimize visible seams on the final part</li>
                        <li><strong>Wall Thickness:</strong> Maintaining uniform wall thickness to prevent warping and ensure proper material flow</li>
                        <li><strong>Undercuts:</strong> Avoiding or carefully designing undercuts that would complicate mold design</li>
                    </ul>
                </section>

                {/* Mold Design */}
                <section className="mb-8 p-6 bg-base-bg rounded-xl border border-content-dark">
                    <h2 className="text-xl font-semibold text-heading mb-3">Mold Design & Machining</h2>
                    <p className="text-content-dark leading-relaxed mb-4">
                        After finalizing the part design, I created the mold design for the boat. The mold consisted of two 
                        halves that would form the cavity when closed. I used CNC machining to fabricate the mold cavities, 
                        ensuring high precision and smooth surface finishes for optimal part quality.
                    </p>
                    <p className="text-content-dark leading-relaxed">
                        The machining process required careful toolpath planning, proper fixturing, and multiple operations 
                        to achieve the final mold geometry. Surface finish was critical to ensure the molded parts would 
                        release easily and have an aesthetically pleasing appearance.
                    </p>
                </section>

                {/* Image Gallery */}
                <section className="mb-8">
                    <h3 className="text-lg font-semibold text-heading mb-3">Project Images</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {project.images.slice(1).map((image, index) => (
                            <div key={index}>
                                <img
                                    src={image}
                                    alt={`Project image ${index + 2}`}
                                    className="w-full rounded-xl shadow-lg"
                                />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Injection Molding Process */}
                <section className="mb-8 p-6 bg-base-bg rounded-xl border border-content-dark">
                    <h2 className="text-xl font-semibold text-heading mb-3">Injection Molding Process</h2>
                    <p className="text-content-dark leading-relaxed mb-4">
                        Once the molds were machined and assembled, we proceeded with the injection molding process. 
                        This involved:
                    </p>
                    <ul className="list-disc list-inside text-content-dark space-y-2 ml-4">
                        <li>Selecting appropriate plastic material for the boat components</li>
                        <li>Setting proper injection parameters (temperature, pressure, cooling time)</li>
                        <li>Testing and iterating to optimize part quality</li>
                        <li>Producing multiple parts and assembling the final axolotl boat toy</li>
                    </ul>
                </section>

                {/* Results & Learning */}
                <section className="mb-8 p-6 bg-base-bg rounded-xl border border-content-dark">
                    <h2 className="text-xl font-semibold text-heading mb-3">Results & Learning Outcomes</h2>
                    <p className="text-content-dark leading-relaxed mb-4">
                        This project provided hands-on experience with the complete injection molding workflow, from initial 
                        design through mold fabrication to final part production. Key takeaways included:
                    </p>
                    <ul className="list-disc list-inside text-content-dark space-y-2 ml-4">
                        <li>Understanding the relationship between part design and manufacturability</li>
                        <li>Practical experience with CNC machining for mold making</li>
                        <li>Insight into material behavior during the injection molding process</li>
                        <li>Collaboration and division of labor in a team manufacturing project</li>
                    </ul>
                </section>

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
            </main>

            <footer className="py-6 px-4 md:px-8 bg-base-bg mt-10">
                <div className="max-w-6xl mx-auto text-center text-sm text-content-light">
                    Built with React & Tailwind CSS by Cole Abbott | Northwestern ME &apos;26
                </div>
            </footer>
        </div>
    );
}
