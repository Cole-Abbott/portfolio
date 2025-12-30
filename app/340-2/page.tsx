'use client';

import Header from '../components/Header';
import { Briefcase, FlaskConical, Hammer, FileText } from 'lucide-react';

export default function InjectionMoldingPage() {
    const project = {
        title: "Injection Molding Project - Axolotl Boat",
        description: "Designed and manufactured a multi-part injection molded toy featuring an axolotl riding a boat, created for ME 340-2 manufacturing processes course.",
        tools: ["NX CAD", "NX CAM", "CNC Machining", "Injection Molding", "Mold Design", "Manual Machining"],
        reportUrl: "/projects/340-2/340-2 Final Report.pdf",
        images: {
            hero: "/projects/340-2/in_injecton_mold_machine.jpeg",
            cad: "/projects/340-2/cad.png",
            drawing: "/projects/340-2/drawing.png",
            crossSection: "/projects/340-2/cross_section.png",
            moldCAD: "/projects/340-2/mold_cad.png",
            moldCAD2: "/projects/340-2/mold_cad_2.png",
            moldHalves: "/projects/340-2/both_mold_halfs.png",
            moldIRL: "/projects/340-2/mold_irl.png",
            mold: "/projects/340-2/mold.jpeg",
            lotsOfBoats: "/projects/340-2/lots_of_boats.jpeg",
            boatInHand: "/projects/340-2/boat_in_hand.jpeg",
            halfBoat: "/projects/340-2/half_boat_table.jpeg"
        }
    };

    return (
        <div className="min-h-screen bg-base-bg text-content-dark">
            <Header />
            
            <main className="max-w-4xl mx-auto px-4 md:px-8 py-8">
                {/* Hero Image */}
                <div className="relative rounded-xl overflow-hidden mb-8 shadow-2xl">
                    <img
                        src={project.images.hero}
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
                        Completed for ME 340-2 at Northwestern University, our team of three (Cole Abbott, Matthew Martinez, Xing Yu Chen) 
                        designed and produced an axolotl riding a boat toy using injection molding techniques. The final assembly features 
                        an axolotl with removable gills freely riding atop a boat made from two symmetrical halves. I was responsible for 
                        designing the boat component in NX CAD, creating the complete mold design (core and cavity), programming the CNC 
                        toolpaths in NX CAM, machining the boat molds on Haas CNC machines, and performing manual machining operations. 
                        My teammates handled the axolotl and gill design and fabrication.
                    </p>
                </section>

                {/* CAD Design */}
                <section className="mb-8">
                    <h3 className="text-lg font-semibold text-heading mb-3">CAD Models</h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <img
                                src={project.images.cad}
                                alt="Boat CAD Model"
                                className="w-full rounded-xl shadow-lg"
                            />
                            <p className="text-sm text-content-dark mt-2">Boat half CAD model designed in NX</p>
                        </div>
                        <div>
                            <img
                                src={project.images.drawing}
                                alt="Engineering Drawing"
                                className="w-full rounded-xl shadow-lg"
                            />
                            <p className="text-sm text-content-dark mt-2">Technical drawing with dimensions</p>
                        </div>
                    </div>
                </section>

                {/* Boat Design */}
                <section className="mb-8 p-6 bg-base-bg rounded-xl border border-content-dark">
                    <h2 className="text-xl font-semibold text-heading mb-3 flex items-center">
                        <FlaskConical className="w-5 h-5 mr-2" /> Boat Design for Injection Molding
                    </h2>
                    <p className="text-content-dark leading-relaxed mb-4">
                        The boat was designed with a uniform wall thickness of 0.05&quot; to ensure consistent material flow 
                        and minimize warping. Key design considerations included:
                    </p>
                    <ul className="list-disc list-inside text-content-dark space-y-2 ml-4 mb-4">
                        <li><strong>Draft Angles:</strong> All vertical surfaces include draft angles to facilitate part ejection from the mold</li>
                        <li><strong>Wall Thickness:</strong> Started at 0.05&quot; uniform thickness, increasing to 0.0845&quot; due to opposing draft angles required by the boat geometry</li>
                        <li><strong>Symmetrical Design:</strong> The boat was split into two identical halves, allowing for simpler mold design and the ability to create larger assemblies</li>
                        <li><strong>Interference Fit Assembly:</strong> Holes designed with 0.0625&quot; diameter for press-fit pins with 0.0025&quot; interference at 30 MPa design stress</li>
                    </ul>
                    <img
                        src={project.images.crossSection}
                        alt="Boat Cross Section"
                        className="w-full rounded-xl shadow-lg"
                    />
                    <p className="text-sm text-content-dark mt-2">Cross-section showing wall thickness and draft angles</p>
                </section>

                {/* Mold Design */}
                <section className="mb-8 p-6 bg-base-bg rounded-xl border border-content-dark">
                    <h2 className="text-xl font-semibold text-heading mb-3">Mold Design & Strategy</h2>
                    <p className="text-content-dark leading-relaxed mb-4">
                        The boat mold used a standard core/cavity design, but presented a unique challenge: the required geometry 
                        would have created a deep slot that was not machinable with our available tooling and CNC machines. To solve 
                        this, I designed the mold to be split into two separate parts that would be bolted together during molding.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <img
                                src={project.images.moldCAD}
                                alt="Mold CAD Design"
                                className="w-full rounded-xl shadow-lg"
                            />
                            <p className="text-sm text-content-dark mt-2">Mold core and cavity CAD models</p>
                        </div>
                        <div>
                            <img
                                src={project.images.moldCAD2}
                                alt="Mold CAD Design Detail"
                                className="w-full rounded-xl shadow-lg"
                            />
                            <p className="text-sm text-content-dark mt-2">Detailed view of mold assembly</p>
                        </div>
                    </div>
                    <p className="text-content-dark leading-relaxed">
                        One part was CNC machined using the NX CAM program I developed, while the other was made on a manual 
                        mill since its geometry was simple. A custom fixture plate was designed and machined to securely hold 
                        the mold insert during manual machining operations.
                    </p>
                </section>

                {/* CNC Machining */}
                <section className="mb-8 p-6 bg-base-bg rounded-xl border border-content-dark">
                    <h2 className="text-xl font-semibold text-heading mb-3">CNC Machining Process</h2>
                    <p className="text-content-dark leading-relaxed mb-4">
                        Using NX CAM, I programmed multi-axis toolpaths for the Haas CNC machines in the Ford machine shop. 
                        The machining strategy included:
                    </p>
                    <ul className="list-disc list-inside text-content-dark space-y-2 ml-4 mb-4">
                        <li>Roughing operations with larger tools (0.375&quot; ball mill) to remove bulk material quickly</li>
                        <li>Finishing passes with smaller tools (0.125&quot; and 0.25&quot; ball mills) for precision and surface finish</li>
                        <li>Planar milling for runner geometry</li>
                        <li>Cavity milling operations for detailed features</li>
                        <li>Post-machining light sanding to remove machine marks and ensure smooth part release</li>
                    </ul>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <img
                                src={project.images.moldHalves}
                                alt="Both Mold Halves"
                                className="w-full rounded-xl shadow-lg"
                            />
                            <p className="text-sm text-content-dark mt-2">Both mold halves after CNC machining</p>
                        </div>
                        <div>
                            <img
                                src={project.images.moldIRL}
                                alt="Mold In Real Life"
                                className="w-full rounded-xl shadow-lg"
                            />
                            <p className="text-sm text-content-dark mt-2">Finished mold ready for injection molding</p>
                        </div>
                    </div>
                </section>

                {/* Injection Molding Process */}
                <section className="mb-8 p-6 bg-base-bg rounded-xl border border-content-dark">
                    <h2 className="text-xl font-semibold text-heading mb-3">Injection Molding Parameters</h2>
                    <p className="text-content-dark leading-relaxed mb-4">
                        After machining and assembly, the boat molds were used to injection mold parts from polypropylene. 
                        Through iterative testing, we optimized the molding parameters:
                    </p>
                    <div className="bg-content-light bg-opacity-10 p-4 rounded-lg mb-4">
                        <ul className="space-y-2 text-content-dark">
                            <li><strong>Temperature:</strong> 450°C</li>
                            <li><strong>Injection Time:</strong> 6 seconds</li>
                            <li><strong>Cooling Time:</strong> 20 seconds</li>
                        </ul>
                    </div>
                    <p className="text-content-dark leading-relaxed mb-4">
                        We started with conservative parameters (20-second injection, 30-second cooling) and gradually 
                        reduced them until defects like short shots began to appear, then backed off to ensure quality. 
                        The draft angles and smooth surface finish allowed for easy part removal from the mold.
                    </p>
                    <img
                        src={project.images.hero}
                        alt="Mold in Injection Machine"
                        className="w-full rounded-xl shadow-lg" 

                    />
                    <p className="text-sm text-content-dark mt-2">Mold installed in the injection molding machine</p>
                </section>

                {/* Results */}
                <section className="mb-8">
                    <h3 className="text-lg font-semibold text-heading mb-3">Final Parts</h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <img
                                src={project.images.lotsOfBoats}
                                alt="Multiple Boat Parts"
                                className="w-full rounded-xl shadow-lg"
                            />
                            <p className="text-sm text-content-dark mt-2">Multiple boat halves successfully molded</p>
                        </div>
                        <div>
                            <img
                                src={project.images.boatInHand}
                                alt="Assembled Boat"
                                className="w-full rounded-xl shadow-lg"
                            />
                            <p className="text-sm text-content-dark mt-2">Assembled boat showing press-fit connection</p>
                        </div>
                    </div>
                    <img
                        src={project.images.halfBoat}
                        alt="Boat Half Detail"
                        className="w-full rounded-xl shadow-lg mb-2"
                    />
                    <p className="text-sm text-content-dark">Boat half showing detail and surface finish quality</p>
                </section>

                {/* Metrology */}
                <section className="mb-8 p-6 bg-base-bg rounded-xl border border-content-dark">
                    <h2 className="text-xl font-semibold text-heading mb-3">Quality Control & Metrology</h2>
                    <p className="text-content-dark leading-relaxed mb-4">
                        We conducted a metrology study on the boat&apos;s bottom thickness to validate dimensional accuracy. 
                        Results showed:
                    </p>
                    <ul className="list-disc list-inside text-content-dark space-y-2 ml-4">
                        <li>Molded parts were very accurate to the CAD design</li>
                        <li>Only a few parts fell more than 0.005&quot; off the intended size</li>
                        <li>Parts tended to be slightly smaller than designed due to polypropylene shrinkage (expected behavior)</li>
                        <li>Two identical boat halves press-fit together easily and securely to form the complete boat</li>
                    </ul>
                </section>

                {/* Challenges & Solutions */}
                <section className="mb-8 p-6 bg-base-bg rounded-xl border border-content-dark">
                    <h2 className="text-xl font-semibold text-heading mb-3">Challenges & Solutions</h2>
                    <p className="text-content-dark leading-relaxed mb-4">
                        Several technical challenges were encountered and resolved during the project:
                    </p>
                    <ul className="list-disc list-inside text-content-dark space-y-2 ml-4">
                        <li><strong>Deep Slot Machining:</strong> The required mold geometry created non-machinable deep slots with our tooling. Solved by splitting the mold into two parts - one CNC machined, one manually machined, then bolted together</li>
                        <li><strong>Tool Changer Issue:</strong> During cavity machining, the tool changer didn&apos;t properly grab the tool, resulting in a small gouge. Identified early and did not impact the final molded parts</li>
                        <li><strong>Collet Tightness:</strong> A collet wasn&apos;t held tight enough, drilling a small divot in the boat cavity. Caught early with minimal impact on final parts</li>
                        <li><strong>Surface Finish:</strong> Light sanding was required post-CNC to remove machine marks that would transfer to molded parts</li>
                    </ul>
                </section>

                {/* Learning Outcomes */}
                <section className="mb-8 p-6 bg-base-bg rounded-xl border border-content-dark">
                    <h2 className="text-xl font-semibold text-heading mb-3">Key Learning Outcomes</h2>
                    <p className="text-content-dark leading-relaxed mb-4">
                        This project provided comprehensive hands-on experience in the complete injection molding workflow:
                    </p>
                    <ul className="list-disc list-inside text-content-dark space-y-2 ml-4">
                        <li>Designing parts specifically for injection molding (draft angles, wall thickness, parting lines)</li>
                        <li>Creating mold designs that account for manufacturing constraints and available tooling</li>
                        <li>Developing CNC programs using NX CAM for complex 3D mold cavities</li>
                        <li>Operating Haas CNC machines and troubleshooting machining issues</li>
                        <li>Manual machining techniques for fixture plates and mold components</li>
                        <li>Optimizing injection molding parameters through iterative testing</li>
                        <li>Understanding material behavior (polypropylene shrinkage, flow characteristics)</li>
                        <li>Conducting dimensional metrology and statistical process control</li>
                        <li>Team collaboration and division of labor in a manufacturing project</li>
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

                {/* Links */}
                <section className="flex flex-wrap gap-4">
                    {project.reportUrl && (
                        <a
                            href={project.reportUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-6 py-3 text-sm font-semibold text-base-bg bg-accent rounded-lg hover:bg-accent-hover transition duration-300"
                        >
                            <FileText className="w-4 h-4 mr-2" /> View Full Report (PDF)
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
