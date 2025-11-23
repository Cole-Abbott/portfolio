

const Header = () => {
    return (
            <header>
                <div className="py-4 px-4 md:px-8 bg-gray-800 border-b border-indigo-500/30 shadow-lg">
                    <div className="max-w-6xl mx-auto flex items-center justify-between">
                        <a href="#" className="text-2xl font-bold text-indigo-400 hover:text-indigo-500 transition">
                            Cole Abbott
                        </a>
                        <nav>
                            <ul className="flex space-x-6">
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white transition">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#projects" className="text-gray-300 hover:text-white transition">
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a href="#about" className="text-gray-300 hover:text-white transition">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className="text-gray-300 hover:text-white transition">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            
    );
};

export default Header;