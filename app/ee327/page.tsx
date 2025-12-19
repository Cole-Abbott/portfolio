'use client';

import Header from '../components/Header';
import { Briefcase, FlaskConical, Hammer, GitBranch } from 'lucide-react';

export default function EE327Page() {
    const project = {
        title: "QuackTrack Robot",
        description: "Designed and built a robotic duck toy that autonomously detects and follows a person using computer vision, WebSocket communication, and real-time PID motor control with an IMU for smooth and responsive motion.",
        tools: ["ESP32-CAM", "C++", "Python", "OpenCV", "YOLO", "PID Control", "IMU", "WebSockets"],
        githubUrl: "https://github.com/Cole-Abbott/EE327",
        images: [
            "/projects/ee327/quacktrack.jpeg",
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
                        This project was completed for EE327: Electronic System Design II at Northwestern University. 
                        The goal was to create an interactive robotic toy that could autonomously follow a person using 
                        computer vision and embedded control systems.
                    </p>
                </section>

                {/* System Architecture */}
                <section className="mb-8 p-6 bg-base-bg rounded-xl border border-content-dark">
                    <h2 className="text-xl font-semibold text-heading mb-3 flex items-center">
                        <FlaskConical className="w-5 h-5 mr-2" /> System Architecture
                    </h2>
                    <p className="text-content-dark leading-relaxed mb-4">
                        The QuackTrack robot uses a distributed architecture that separates image processing from motor 
                        control. The ESP32-CAM microcontroller captures images and handles motor control, while a Python 
                        server running on a computer performs the computationally intensive computer vision processing.
                    </p>
                    <h3 className="text-lg font-semibold text-heading mb-2 mt-4">Communication Flow</h3>
                    <ul className="list-disc list-inside text-content-dark space-y-2 ml-4">
                        <li>ESP32-CAM captures images and sends them to the server over WebSocket</li>
                        <li>Server processes images using YOLO object detection to identify and locate people</li>
                        <li>Server sends target coordinates back to the ESP32-CAM</li>
                        <li>ESP32-CAM adjusts motor speeds to follow the target using PID control</li>
                    </ul>
                </section>

                {/* Hardware Components */}
                <section className="mb-8 p-6 bg-base-bg rounded-xl border border-content-dark">
                    <h2 className="text-xl font-semibold text-heading mb-3">Hardware Components</h2>
                    <p className="text-content-dark leading-relaxed mb-4">
                        The robot is built around several key hardware components that work together to enable 
                        autonomous following behavior:
                    </p>
                    <ul className="list-disc list-inside text-content-dark space-y-2 ml-4">
                        <li><strong>ESP32-CAM:</strong> Dual-core microcontroller with integrated camera for image capture and wireless communication</li>
                        <li><strong>MPU-6050 IMU:</strong> 6-axis inertial measurement unit for measuring angular velocity and implementing precise rotation control</li>
                        <li><strong>Micro Metal Gear Motors:</strong> Two high-torque motors with different gear ratios for differential drive locomotion</li>
                        <li><strong>3.7V LiPo Battery:</strong> Rechargeable power source for portable operation</li>
                    </ul>
                </section>

                {/* Computer Vision */}
                <section className="mb-8 p-6 bg-base-bg rounded-xl border border-content-dark">
                    <h2 className="text-xl font-semibold text-heading mb-3">Computer Vision Processing</h2>
                    <p className="text-content-dark leading-relaxed mb-4">
                        The Python server uses OpenCV and the YOLOv3 deep learning model for real-time person detection. 
                        When a person is detected in the image, the system calculates the center position of all detected 
                        people and sends the averaged coordinates back to the robot.
                    </p>
                    <p className="text-content-dark leading-relaxed">
                        The server processes images with a confidence threshold of 0.5, filtering for class ID 0 (person). 
                        When multiple people are detected, their positions are averaged to determine the primary tracking target. 
                        The processed image with bounding boxes and tracking indicators is sent back to a web interface for visualization.
                    </p>
                </section>

                {/* PID Control System */}
                <section className="mb-8 p-6 bg-base-bg rounded-xl border border-content-dark">
                    <h2 className="text-xl font-semibold text-heading mb-3">Dual PID Control System</h2>
                    <p className="text-content-dark leading-relaxed mb-4">
                        The robot implements a cascaded control architecture with two PID loops working in tandem:
                    </p>
                    
                    <h3 className="text-lg font-semibold text-heading mb-2 mt-4">Camera PID Controller</h3>
                    <p className="text-content-dark leading-relaxed mb-2">
                        The outer loop uses target position from the camera to calculate desired angular velocity and forward speed:
                    </p>
                    <ul className="list-disc list-inside text-content-dark space-y-1 ml-4 mb-4">
                        <li>Maintains the target centered in the camera&apos;s field of view (setpoint: x=160 pixels)</li>
                        <li>Adjusts forward speed based on target distance (y-axis position)</li>
                        <li>Updates only when new camera data is received</li>
                    </ul>

                    <h3 className="text-lg font-semibold text-heading mb-2 mt-4">IMU PID Controller</h3>
                    <p className="text-content-dark leading-relaxed mb-2">
                        The inner loop reads gyroscope data and controls motor speeds to achieve the desired angular velocity:
                    </p>
                    <ul className="list-disc list-inside text-content-dark space-y-1 ml-4">
                        <li>Runs at 200 Hz (5ms intervals) for responsive control</li>
                        <li>Uses z-axis gyroscope readings to measure actual angular velocity</li>
                        <li>Applies differential drive: left and right motors receive opposite turning commands plus forward speed</li>
                        <li>Tuned PID gains (Kp=350, Ki=15) provide stable tracking with minimal oscillation</li>
                    </ul>
                </section>

                {/* Firmware Architecture */}
                <section className="mb-8 p-6 bg-base-bg rounded-xl border border-content-dark">
                    <h2 className="text-xl font-semibold text-heading mb-3">Firmware Architecture</h2>
                    <p className="text-content-dark leading-relaxed mb-4">
                        The ESP32 firmware is built using FreeRTOS tasks for concurrent operation. The camera PID and 
                        IMU control loops run on separate tasks pinned to core 1, allowing them to execute independently 
                        without blocking WebSocket communication.
                    </p>
                    <p className="text-content-dark leading-relaxed">
                        The modular code structure separates concerns: camera.cpp handles image capture, myWebsocket.cpp 
                        manages network communication, control.cpp implements the PID algorithms, and motor.h provides a 
                        simple interface for motor control with PWM and direction management.
                    </p>
                </section>

                {/* Operating Modes */}
                <section className="mb-8 p-6 bg-base-bg rounded-xl border border-content-dark">
                    <h2 className="text-xl font-semibold text-heading mb-3">Operating Modes</h2>
                    <p className="text-content-dark leading-relaxed mb-4">
                        The robot supports two operating modes that can be toggled remotely:
                    </p>
                    <ul className="list-disc list-inside text-content-dark space-y-2 ml-4">
                        <li><strong>Manual Mode:</strong> Direct motor control via web interface commands</li>
                        <li><strong>Autonomous Mode:</strong> Camera-based PID control for person following</li>
                    </ul>
                    <p className="text-content-dark leading-relaxed mt-4">
                        When no person is detected in autonomous mode, the robot gradually reduces its turning rate to 
                        80% to continue searching for the target while maintaining smoother motion.
                    </p>
                </section>

                {/* Challenges & Solutions */}
                <section className="mb-8 p-6 bg-base-bg rounded-xl border border-content-dark">
                    <h2 className="text-xl font-semibold text-heading mb-3">Challenges & Solutions</h2>
                    <p className="text-content-dark leading-relaxed mb-4">
                        Several technical challenges were overcome during development:
                    </p>
                    <ul className="list-disc list-inside text-content-dark space-y-2 ml-4">
                        <li><strong>I2C Bus Conflict:</strong> The camera and IMU both use I2C. Initialization order was critical—the camera must be initialized first before the IMU setup</li>
                        <li><strong>Real-time Performance:</strong> FreeRTOS tasks enabled concurrent execution of control loops and network communication</li>
                        <li><strong>Motor Asymmetry:</strong> Different gear ratios between motors required careful calibration and individual motor direction flags</li>
                        <li><strong>Network Latency:</strong> The cascaded PID approach allows the inner IMU loop to maintain smooth control even when camera updates are delayed</li>
                    </ul>
                </section>

                {/* Results */}
                <section className="mb-8 p-6 bg-base-bg rounded-xl border border-content-dark">
                    <h2 className="text-xl font-semibold text-heading mb-3">Results</h2>
                    <p className="text-content-dark leading-relaxed">
                        The robot successfully demonstrated autonomous person-following behavior with smooth tracking 
                        and responsive turns. The dual PID control system effectively compensated for motor asymmetries 
                        and provided stable tracking despite network latency. The project showcased effective integration 
                        of embedded systems, computer vision, and control theory to create an engaging interactive robot.
                    </p>
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
