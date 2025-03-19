import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-clip-text bg-gradient-to-r text-transparent from-blue-400 to-purple-600   text-center">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                        <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-3">Food Ordering Application</h3>
                            <p className="text-gray-400 mb-4">Built a full-stack food ordering platform to enhance user convenience and streamline the online food ordering experience. Designed and implemented secure user authentication and intuitive shopping cart functionality where users can add items, view them in the cart, and proceed to checkout, and comprehensive admin features for user management and analytics.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Node.js", "Express.js", "MongoDB"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10  text-blue-500 py-2 px-4 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all ">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/Harshith50/Food_app" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    <img src="/github.png" alt="" className="w-5 bg-white mt-2" /> Github </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-3">Advanced Auth Login System</h3>
                            <p className="text-gray-400 mb-4"> Developed a secure authentication system with signup, login, email verification, and password recovery.Built the frontend with React.js for a user-friendly interface. Developed backend APIs in Node.js with secure authentication workflows and Implemented email verification and password recovery using JWT and Mailtrap</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Node.js", "Express.js", "MongoDB"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10  text-blue-500 py-2 px-4 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all ">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/Harshith50/Auth_Login" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    <img src="/github.png" alt="" className="w-5 bg-white mt-2" /> Github </a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}