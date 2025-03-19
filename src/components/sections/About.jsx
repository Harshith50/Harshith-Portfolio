import { RevealOnScroll } from "../RevealOnScroll"

export const About = () => {

    const frontendSkills = [
        "HTML",
        "CSS",
        "TailwindCSS",
        "JavaScript",
        "React",
        "Git",
        "JSON",
        "Vite"
    ]

    const backendSkills = [
        "Node.js",
        "Express.js",
        "Python",
        "MongoDB",
        "Mongoose",
        "Postman"
    ]
    return (
        <section id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-clip-text bg-gradient-to-r text-transparent from-blue-400 to-purple-600   text-center"> About Me
                    </h2>



                    <div className=" rounded-xl p-8 border-white/20 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-400 text-xl">
                            I build scalable web applications and create innovative solutions. My passion for development drives me to constantly refine my skills in the  Full-stack and leverage Python for complex problem-solving. I'm eager to collaborate on projects that make a difference.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className=" rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">
                                    Frontend
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-100/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className=" rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">
                                    Backend
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-100/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 mt-8">
                        <div className="p-8 rounded-xl border border-white/20 bg-gradient-to-b  to-transparent shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                            <div className="flex flex-col items-center">
                                <h3 className="text-2xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Education</h3>
                                <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-6"></div>

                                <div>
                                    <ul className="space-y-6">
                                        <li>
                                            <ul className="space-y-2">
                                                <li className="font-bold text-xl text-white flex items-center justify-center">
                                                    <span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                                                    <span>Bachelor of Engineering in Electronics and Communication</span>
                                                </li>
                                                <li className="text-gray-400 font-medium pl-50">2019 - 2023</li>
                                                <li className="text-gray-400 italic text-center">Nagarjuna College of Engineering and Technology</li>
                                            </ul>
                                        </li>

                                        <li>
                                            <ul className="space-y-2 pr-24">
                                                <li className="font-bold text-xl text-white flex items-center justify-center">
                                                    <span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                                                    <span>Pre-University at Sbgns Rural Comp Pu College</span>
                                                </li>
                                                <li className="text-gray-400 font-medium text-center">2018 - 2019</li>
                                            </ul>
                                        </li>

                                        <li>
                                            <ul className="space-y-2 pr-23">
                                                <li className="font-bold text-xl text-white flex items-center justify-center">
                                                    <span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                                                    <span>Secondary School at Bgs Vidyanikethan School</span>
                                                </li>
                                                <li className="text-gray-400 font-medium text-center">2016 - 2017</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section >
    )
}