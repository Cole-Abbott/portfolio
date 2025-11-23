
const RESUME_PATH = "https://portfolio-eqcmlmf21-cole-abbotts-projects.vercel.app/resume.pdf";


const About = () => {
    return (
        <div className="py-16 px-4 md:px-8 bg-gray-800 border-b border-indigo-500/30 shadow-xl">
                <div className="max-w-6xl mx-auto">
                    <p className="text-indigo-400 text-sm font-medium uppercase mb-2">Mechanical Engineering Senior | Northwestern University</p>
                    <h1 className="4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-300">
                        Cole Abbott's Engineering Portfolio
                    </h1>
                    <p className="mt-4 text-lg text-gray-400 max-w-3xl">
                        A showcase of design, analysis, and control systems projects demonstrating proficiency in CAD, FEA, CFD, and embedded programming for complex mechanical systems.
                    </p>
                    <div className="mt-8 flex gap-4">
                        <a href={RESUME_PATH} className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition transform hover:scale-105">
                            Resume
                        </a>
                        <a href="#" className="px-6 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-700 transition">
                            Contact Me (Mock)
                        </a>
                    </div>
                </div>
            </div>
    )
};

export default About;