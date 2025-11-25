

const About = () => {
    return (
        <section className="py-16 px-4 md:px-8 bg-base-bg">
            <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-8">
                <div className="md:flex-none flex justify-center md:justify-end">
                    <img src="climbing.jpeg" alt="Profile Picture" className="rounded-full object-cover w-48 h-48 md:w-64 md:h-64" />
                </div>
                <div className="md:flex-1 text-center md:text-left">
                    <p className="text-lg text-content-dark max-w-3xl mx-auto md:mx-0 font-semibold">
                        Hi, I'm Cole, a senior at Northwestern University pursuing a combined BS/MS degree in Mechanical Engineering. I'm interested in robotics and embedded systems.
                    </p>
                </div>
            </div>
        </section>
    )
};

export default About;