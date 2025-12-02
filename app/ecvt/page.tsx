'use client';

import Header from '../components/Header';
import { Briefcase, FlaskConical, Hammer, GitBranch, FileText } from 'lucide-react';

export default function ECVTPage() {
    const project = {
        title: "Electronic CVT System",
        description: "Designed and built an electronic continuously variable transmission (eCVT) for a Baja SAE off-road vehicle, implementing position sensing, motor control, and PID-based actuation.",
        tools: ["ESP32", "C++", "PID Control", "Hall Sensors", "BLDC Motors", "PCB Design"],
        githubUrl: "https://github.com/Cole-Abbott/ecvt",
        images: [
            "/projects/ecvt/overview.png",
            "/projects/ecvt/cross_section.png",
            "/projects/ecvt/block_diagram.png",
            "/projects/ecvt/board.png",
            "/projects/ecvt/electronics_box.png",
            "/projects/ecvt/test_setup_no_cvt.png",
            "/projects/ecvt/test_setup_running.png"
        ],
        video: "/projects/ecvt/testing_on_car.mov"
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
                    <p className="text-content-dark leading-relaxed">{project.description}</p>
                </section>

                {/* Technical Overview */}
                <section className="mb-8 p-6 bg-base-bg rounded-xl border border-content-dark">
                    <h2 className="text-xl font-semibold text-heading mb-3 flex items-center">
                        <FlaskConical className="w-5 h-5 mr-2" /> What is an eCVT?
                    </h2>
                    <p className="text-content-dark leading-relaxed mb-4">
                        A continuously variable transmission (CVT) uses two sets of sheaves (conical metal pieces) 
                        connected by a cogged V-belt that slide together or apart to create different gear ratios. 
                        In our electronic CVT, this motion is created by a motor that spins a lead screw, which 
                        translates rotational motion into linear axial motion.
                    </p>
                    <p className="text-content-dark leading-relaxed">
                        One sheave (the primary) is actuated along the axis of the engine shaft while the other 
                        (the secondary) remains fixed. The secondary sheave responds to changing pressure with a 
                        spring that allows it to expand or contract. We use a linear bearing and post for stability 
                        and smooth sliding motion.
                    </p>
                </section>

                {/* Cross Section Image */}
                <section className="mb-8">
                    <h3 className="text-lg font-semibold text-heading mb-3">Primary Sheave Cross Section</h3>
                    <img
                        src={project.images[1]}
                        alt="CVT Cross Section"
                        className="w-full rounded-xl shadow-lg"
                    />
                </section>

                {/* System Architecture */}
                <section className="mb-8 p-6 bg-base-bg rounded-xl border border-content-dark">
                    <h2 className="text-xl font-semibold text-heading mb-3 flex items-center">
                        <FlaskConical className="w-5 h-5 mr-2" /> System Architecture
                    </h2>
                    <p className="text-content-dark leading-relaxed mb-4">
                        We read the RPM of the engine using magnets embedded in the back of the stationary primary 
                        sheave with a latching hall sensor. Both the RPM and the position of the moving primary 
                        sheave are fed into the ESP32 microcontroller, which runs a PID control loop to move the 
                        motor (and thus the sheave) to the desired position.
                    </p>
                    <img
                        src={project.images[2]}
                        alt="Electrical Block Diagram"
                        className="w-full rounded-xl shadow-lg mt-4"
                    />
                </section>

                {/* Motor Selection */}
                <section className="mb-8 p-6 bg-base-bg rounded-xl border border-content-dark">
                    <h2 className="text-xl font-semibold text-heading mb-3">Motor Selection</h2>
                    <p className="text-content-dark leading-relaxed mb-4">
                        The motor is the most critical component, as it must provide sufficient side force to hold 
                        the belt in place without slipping. We required a minimum of 3Nm torque with 150+ RPM speed 
                        (to move the sheaves fully in 1 second).
                    </p>
                    <p className="text-content-dark leading-relaxed mb-4">
                        After exploring planetary geared brushless DC motors, stepper motors, and hybrid steppers, 
                        we settled on a geared brushless DC motor that met our criteria: reasonable weight, 24V 
                        operation, acceptable current draw, and sufficient torque/speed specifications.
                    </p>
                    <p className="text-content-dark leading-relaxed">
                        The motor is driven by a BLD-510B motor driver that translates the microcontroller&apos;s 
                        PWM signals into the three-phase signals needed for BLDC operation. This motor driver was not the best choice, because it does not support FOC, meaning it is hard to get smooth low-speed operation, and struggles to change direction. However, it was very affordable and works well enough for our application.
                    </p>
                </section>

                {/* Electronics Board */}
                <section className="mb-8">
                    <h3 className="text-lg font-semibold text-heading mb-3">Custom Control Board</h3>
                    <img
                        src={project.images[3]}
                        alt="Electronics Board"
                        className="w-full rounded-xl shadow-lg"
                    />
                    <p className="text-content-dark leading-relaxed mt-4">
                        A solderable breadboard integrates the ESP32 microcontroller, motor driver connections, sensor inputs, 
                        and power regulation circuitry into a compact package designed for the harsh environment of 
                        off-road racing.
                    </p>
                </section>

                {/* Position Sensing */}
                <section className="mb-8 p-6 bg-base-bg rounded-xl border border-content-dark">
                    <h2 className="text-xl font-semibold text-heading mb-3">Position Sensing</h2>
                    <p className="text-content-dark leading-relaxed mb-4">
                        We use a combination approach for position sensing: a linear potentiometer reads the initial 
                        position on startup, then the motor&apos;s built-in encoder tracks position during operation. 
                        This approach minimizes noise issues that would arise from relying solely on a potentiometer 
                        mounted on a vibrating vehicle, and avoids the need for a startup homing routine.
                    </p>
                </section>

                {/* Battery System */}
                <section className="mb-8 p-6 bg-base-bg rounded-xl border border-content-dark">
                    <h2 className="text-xl font-semibold text-heading mb-3">Power System</h2>
                    <p className="text-content-dark leading-relaxed mb-4">
                        The system runs on 24V using two 12V LiFePO4 batteries connected in series. With a motor 
                        rated current of 7A and additional electronics drawing ~0.2A, we sized the batteries for 
                        40Ah capacity to ensure reliable operation throughout a 4-hour endurance race.
                    </p>
                    <p className="text-content-dark leading-relaxed">
                        A buck converter steps down the 24V to the 5V needed by the ESP32 and hall sensors, chosen 
                        for its efficiency and minimal heat dissipation compared to linear regulators.
                    </p>
                </section>

                {/* Electronics Housing */}
                <section className="mb-8">
                    <h3 className="text-lg font-semibold text-heading mb-3">Electronics Housing</h3>
                    <img
                        src={project.images[4]}
                        alt="Electronics Box"
                        className="w-full rounded-xl shadow-lg"
                    />
                    <p className="text-content-dark leading-relaxed mt-4">
                        The electronics are housed in a waterproof enclosure mounted behind the wings above the 
                        splash guard, protecting them from mud, water, and debris encountered during off-road racing.
                    </p>
                </section>

                {/* Testing */}
                <section className="mb-8 p-6 bg-base-bg rounded-xl border border-content-dark">
                    <h2 className="text-xl font-semibold text-heading mb-3">Testing & Validation</h2>
                    <p className="text-content-dark leading-relaxed mb-4">
                        Extensive testing was performed on a bench setup before vehicle integration. Each component 
                        and code section was validated individually, then as a complete system.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div>
                            <img
                                src={project.images[5]}
                                alt="Test Setup"
                                className="w-full rounded-xl shadow-lg"
                            />
                            <p className="text-sm text-content-dark mt-2">Bench test setup for component validation</p>
                        </div>
                        <div>
                            <img
                                src={project.images[6]}
                                alt="Test Running"
                                className="w-full rounded-xl shadow-lg"
                            />
                            <p className="text-sm text-content-dark mt-2">System under test with simulated loads</p>
                        </div>
                    </div>
                </section>

                {/* Video */}
                <section className="mb-8">
                    <h3 className="text-lg font-semibold text-heading mb-3">Testing on Vehicle</h3>
                    <video
                        controls
                        className="w-full rounded-xl shadow-lg"
                        poster={project.images[0]}
                    >
                        <source src={project.video} type="video/quicktime" />
                        <source src={project.video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
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
