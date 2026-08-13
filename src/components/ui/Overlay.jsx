import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Smartphone, Globe, X, ChevronRight, ExternalLink, Mail } from 'lucide-react'

const Section = ({ children, className, ...props }) => (
    <section className={`w-full flex flex-col justify-center py-32 px-8 ${className}`} {...props}>
        {children}
    </section>
)

const experiences = [
    {
        id: 'sanatan-swar',
        company: 'Sanatan Swar',
        role: 'Android Development Intern',
        period: 'Dec 2025 – Apr 2026',
        website: null,
        shortDescription: 'Built Android features using Kotlin, Compose, MVVM, Retrofit, Room, and Hilt in production apps.',
        fullDescription: 'Built Android features using Kotlin, Jetpack Compose, MVVM, Retrofit, Room, and Hilt following clean, modular architecture. Developed and published a reusable Android monetization library to JitPack, supported AdMob and Meta Ads, converted Figma designs into Compose screens, debugged and optimized Android components, and worked on production applications used by real users.',
        aboutCompany: 'Sanatan Swar is a production-focused mobile development environment where clean architecture, product stability, and real-user impact matter. The work centers on shipping Android features and maintaining reliable experiences across devices.',
        color: 'from-blue-500 to-indigo-600'
    },
    {
        id: 'iiit-kota',
        company: 'IIIT Kota',
        role: 'B.Tech in Computer Science',
        period: 'Aug 2023 – June 2027',
        website: null,
        shortDescription: 'Final-year CSE student focused on DSA, system fundamentals, and modern software engineering.',
        fullDescription: 'Final-year B.Tech Computer Science student at IIIT Kota focusing on core fundamentals such as data structures, algorithms, operating systems, DBMS, object-oriented programming, and software development principles. Actively building Android projects, solving competitive programming problems, and strengthening backend and system design fundamentals.',
        aboutCompany: 'IIIT Kota is a premier institute where Mohit is building a strong foundation in computer science, software engineering, and problem-solving through coursework and practical development work.',
        color: 'from-purple-500 to-pink-600'
    },
    {
        id: 'achievements',
        company: 'Achievements',
        role: 'Competitive Programming & Recognition',
        period: '2023 – Present',
        website: null,
        shortDescription: 'Qualified JEE Advanced 2023, 500+ LeetCode problems, 380+ GFG problems, and hackathon wins.',
        fullDescription: 'Qualified JEE Advanced 2023 with Category Rank 3399, solved 500+ LeetCode questions, maintained a 1400+ contest rating, solved 380+ DSA problems on GeeksforGeeks, ranked in the top 40 of the institute coding list, and won the App Innovation Hackathon organized by Amity University, Noida.',
        aboutCompany: 'Mohit’s recognition reflects a strong base in DSA, problem solving, and practical software development, balanced with real-world Android engineering experience.',
        color: 'from-emerald-500 to-teal-600'
    }
]

const blogs = [
    {
        id: 'education',
        title: 'Education',
        date: 'Aug 2023 – June 2027',
        preview: 'B.Tech in Computer Science at IIIT Kota, with coursework in DSA, OS, DBMS, OOP, ML, AI, Computer Networks, and System Design basics.',
        content: `Indian Institute of Information Technology, Kota

B.Tech in Computer Science

Duration: Aug 2023 – June 2027
CGPA: 7.07/10

Relevant coursework includes Data Structures & Algorithms, Operating Systems, Database Management Systems, Object-Oriented Programming, Machine Learning, Artificial Intelligence, Computer Networks, and System Design (Basics).`,
        color: 'from-green-500 to-emerald-700',
        images: []
    },
    {
        id: 'skills',
        title: 'Core Skills',
        date: 'Android • Java • Kotlin • DSA',
        preview: 'Kotlin, Java, C++, Python, SQL, JavaScript, Android SDK, Jetpack Compose, MVVM, Retrofit, Room, Hilt, Coroutines, Flow, and REST APIs.',
        content: `Mohit’s technical stack spans Android development, backend integration, and core computing foundations.

Languages: Kotlin, Java, C++, Python, SQL, JavaScript.
Android: Android SDK, Jetpack Compose, XML, MVVM, ViewModel, Coroutines, Flow, Retrofit, Room, Hilt, REST APIs.
Backend / Databases: Firebase, Supabase, MySQL, MongoDB, SQL.
Tools: Git, GitHub, Android Studio, VS Code, Postman, Google Play Console.
AI / Data: Gemini AI, NumPy, Pandas, Matplotlib.`,
        color: 'from-purple-500 to-pink-500',
        images: []
    },
    {
        id: 'highlights',
        title: 'Key Achievements',
        date: '2023 – 2025',
        preview: 'Qualified JEE Advanced 2023, 500+ LeetCode questions, 380+ GFG problems, and district top performer in MP Board Class X.',
        content: `Qualified JEE Advanced 2023 with Category Rank 3399.
Solved 500+ questions on LeetCode and 380+ DSA problems on GeeksforGeeks.
Achieved 1400+ LeetCode contest rating and top-40 institute coding rank.
Won the App Innovation Hackathon organized by Amity University, Noida.
Secured 14th rank in the SRMC Mathematics Competition organized by IIT Bombay and IIT Madras.
District Topper in MP Board Class X with 98.25% and Top-10 State Rank in Class X.
Certified in Ethical Hacking & Penetration Testing from CDAC Noida.`,
        color: 'from-blue-500 to-indigo-600',
        images: []
    }
]

import Header from './Header'
import ScrollDownIndicator from './ScrollDownIndicator'

const MotionDiv = motion.div
const MotionImg = motion.img

const Overlay = ({ setPhoneModel, currentModel, setActiveAppId }) => {
    const [selectedExperience, setSelectedExperience] = useState(null)
    const [selectedBlog, setSelectedBlog] = useState(null)
    const [selectedImage, setSelectedImage] = useState(null)

    return (
        <div className="absolute top-0 left-0 w-full z-10 pointer-events-none">
            <Header />
            <ScrollDownIndicator />

            {/* Hero Section */}
            <Section className="min-h-screen items-start pt-0 md:pt-20 relative" id="hero">
                <div className="max-w-2xl">
                    <MotionDiv
                        className="pointer-events-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-4">
                            SDE(ANDROID) <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">DEVELOPER</span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-4 md:mb-8 max-w-lg">
                            Building production-ready Android apps with Kotlin and Jetpack Compose.
                            Focused on clean architecture, scalable systems, and reliable user experiences.
                        </p>
                        <div className="flex gap-4">
                            <button
                                onClick={() => setActiveAppId('projects')}
                                className="px-6 py-2 md:px-8 md:py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors text-center text-sm md:text-base"
                            >
                                View Projects
                            </button>
                            <button
                                onClick={() => setActiveAppId('contact')}
                                className="px-6 py-2 md:px-8 md:py-3 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-colors text-center text-sm md:text-base"
                            >
                                Contact Me
                            </button>
                        </div>


                    </MotionDiv>
                </div>

                {/* Phone Switcher - Vertical on right side (responsive positioning) */}
                <MotionDiv
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute right-4 md:right-8 bottom-8 md:bottom-auto md:top-1/2 md:-translate-y-1/2 flex flex-col items-end gap-2 md:gap-4 pointer-events-auto"
                >
                    <span className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-wider text-right hidden md:block">Select<br />Device</span>
                    <div className="flex flex-col bg-white/5 backdrop-blur-md rounded-xl md:rounded-2xl p-1.5 md:p-2 border border-white/10 gap-1.5 md:gap-2">
                        <button
                            onClick={() => setPhoneModel('default')}
                            className={`w-9 h-9 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center transition-all ${currentModel === 'default' ? 'bg-white text-black shadow-lg scale-110' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
                            title="Default"
                        >
                            <div className="w-4 h-6 md:w-6 md:h-10 border-2 border-current rounded-[3px] md:rounded-[4px] relative bg-black/50 overflow-hidden">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 md:w-4 h-0.5 md:h-1 bg-current rounded-b-[1px] md:rounded-b-[2px]" />
                            </div>
                        </button>
                        <button
                            onClick={() => setPhoneModel('iphone')}
                            className={`w-9 h-9 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center transition-all ${currentModel === 'iphone' ? 'bg-white text-black shadow-lg scale-110' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
                            title="iPhone"
                        >
                            <div className="w-4 h-6 md:w-6 md:h-10 border-2 border-current rounded-[4px] md:rounded-[5px] relative overflow-hidden">
                                <div className="absolute top-0.5 md:top-1 left-1/2 -translate-x-1/2 w-1.5 md:w-2 h-[2px] md:h-[3px] bg-current rounded-full" />
                            </div>
                        </button>
                        <button
                            onClick={() => setPhoneModel('pixel')}
                            className={`w-9 h-9 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center transition-all ${currentModel === 'pixel' ? 'bg-white text-black shadow-lg scale-110' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
                            title="Google Pixel"
                        >
                            <div className="w-4 h-6 md:w-6 md:h-10 border-2 border-current rounded-[3px] md:rounded-[4px] relative overflow-hidden">
                                <div className="absolute top-1 md:top-2 left-1/2 -translate-x-1/2 w-3 md:w-5 h-[3px] md:h-[4px] bg-current rounded-full" />
                            </div>
                        </button>
                        <button
                            onClick={() => setPhoneModel('flip7')}
                            className={`w-9 h-9 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center transition-all ${currentModel === 'flip7' ? 'bg-white text-black shadow-lg scale-110' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
                            title="Galaxy Flip 7"
                        >
                            <div className="relative w-4 h-6 md:w-6 md:h-10">
                                {/* Folded phone icon - two rectangles */}
                                <div className="absolute top-0 left-0 w-4 md:w-6 h-3 md:h-5 border-2 border-current rounded-t-[3px] md:rounded-t-[4px]" />
                                <div className="absolute bottom-0 left-0 w-4 md:w-6 h-3 md:h-5 border-2 border-current rounded-b-[3px] md:rounded-b-[4px]" />
                            </div>
                        </button>
                    </div>
                </MotionDiv>
            </Section>

            {/* Tech Stack / About Section */}
            <Section className="" id="about">
                <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center pointer-events-auto">
                    {/* Left Column: Bio */}
                    <div>
                        <h2 className="text-4xl font-bold mb-8">About Me</h2>
                        <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                            Final-year B.Tech Computer Science student at IIIT Kota with practical Android engineering experience. I build production-ready applications using Kotlin, Jetpack Compose, MVVM, Retrofit, Room, Hilt, Coroutines, and Flow while integrating REST APIs and backend services.
                        </p>
                    </div>

                    {/* Right Column: Stack */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Engineering Stack.</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-gray-900/50 border border-white/5 rounded-xl">
                                <Smartphone className="mb-2 text-primary" />
                                <h3 className="font-bold">Android Development</h3>
                                <p className="text-sm text-gray-400">
                                    Kotlin, Java <br />
                                    Jetpack Compose, XML, MVVM
                                </p>
                            </div>
                            <div className="p-4 bg-gray-900/50 border border-white/5 rounded-xl">
                                <Code className="mb-2 text-secondary" />
                                <h3 className="font-bold">Architecture</h3>
                                <p className="text-sm text-gray-400">Retrofit, Room, Hilt, Coroutines, Flow</p>
                            </div>
                            <div className="p-4 bg-gray-900/50 border border-white/5 rounded-xl">
                                <Globe className="mb-2 text-green-400" />
                                <h3 className="font-bold">Backend & APIs</h3>
                                <p className="text-sm text-gray-400">REST APIs, Firebase, Supabase, MySQL, MongoDB</p>
                            </div>
                            <div className="p-4 bg-gray-900/50 border border-white/5 rounded-xl">
                                <Mail className="mb-2 text-purple-400" />
                                <h3 className="font-bold">Problem Solving</h3>
                                <p className="text-sm text-gray-400">DSA, C++, Python, SQL, Git, Android Studio</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Experience Section */}
            <Section className="items-start" id="work">
                <div className="max-w-6xl w-full mx-auto pointer-events-auto">
                    <h2 className="text-4xl font-bold mb-12">Experience</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {experiences.map((exp) => (
                            <MotionDiv
                                key={exp.id}
                                layoutId={`card-${exp.id}`}
                                onClick={() => setSelectedExperience(exp)}
                                className="group relative p-6 bg-gray-900/50 border border-white/5 rounded-2xl cursor-pointer hover:bg-gray-800/50 transition-colors overflow-hidden"
                            >
                                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${exp.color} opacity-50 group-hover:opacity-100 transition-opacity`} />

                                <div className="mb-4">
                                    <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">{exp.company}</h3>
                                    <p className="text-sm text-gray-500 font-mono">{exp.period}</p>
                                </div>

                                <h4 className="text-lg font-medium text-white/90 mb-3">{exp.role}</h4>

                                <p className="text-sm text-gray-400 line-clamp-3 mb-6">
                                    {exp.shortDescription}
                                </p>

                                <div className="flex items-center text-sm font-bold text-white group-hover:translate-x-1 transition-transform">
                                    Read More <ChevronRight className="w-4 h-4 ml-1" />
                                </div>
                            </MotionDiv>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Experience Detail Modal */}
            <AnimatePresence>
                {selectedExperience && (
                    <>
                        <MotionDiv
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedExperience(null)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 pointer-events-auto"
                        />
                        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none p-4">
                            <MotionDiv
                                layoutId={`card-${selectedExperience.id}`}
                                className="w-full max-w-2xl bg-gray-900 border border-white/10 rounded-2xl overflow-hidden pointer-events-auto shadow-2xl"
                            >
                                <div className={`h-2 w-full bg-gradient-to-r ${selectedExperience.color}`} />
                                <div className="p-8 max-h-[80vh] overflow-y-auto">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <div className="flex items-center gap-3">
                                                <h3 className="text-3xl font-bold mb-1">{selectedExperience.company}</h3>
                                                {selectedExperience.website && (
                                                    <a
                                                        href={selectedExperience.website}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-1.5 bg-white/5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                                                        title="Visit Website"
                                                    >
                                                        <ExternalLink className="w-5 h-5" />
                                                    </a>
                                                )}
                                            </div>
                                            <p className="text-gray-400 font-mono">{selectedExperience.period}</p>
                                        </div>
                                        <button
                                            onClick={() => setSelectedExperience(null)}
                                            className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    </div>

                                    <div className="mb-8">
                                        <h4 className="text-xl font-bold text-primary mb-4">{selectedExperience.role}</h4>
                                        <div className="bg-white/5 p-4 rounded-xl border border-white/5 mb-6">
                                            <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">About Company</h5>
                                            <p className="text-sm text-gray-300 leading-relaxed italic">
                                                {selectedExperience.aboutCompany}
                                            </p>
                                        </div>
                                        <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Key Contributions</h5>
                                        <p className="text-gray-300 leading-relaxed text-lg">
                                            {selectedExperience.fullDescription}
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => setSelectedExperience(null)}
                                        className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors"
                                    >
                                        Close Details
                                    </button>
                                </div>
                            </MotionDiv>
                        </div>
                    </>
                )}
            </AnimatePresence>

            {/* Blog Section */}
            <Section className="items-start" id="blog">
                <div className="max-w-6xl w-full mx-auto pointer-events-auto">
                    <h2 className="text-4xl font-bold mb-12">Latest Thoughts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {blogs.map((blog) => (
                            <MotionDiv
                                key={blog.id}
                                layoutId={`blog-${blog.id}`}
                                onClick={() => setSelectedBlog(blog)}
                                className="group relative p-6 bg-gray-900/50 border border-white/5 rounded-2xl cursor-pointer hover:bg-gray-800/50 transition-colors overflow-hidden"
                            >
                                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${blog.color} opacity-50 group-hover:opacity-100 transition-opacity`} />

                                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{blog.title}</h3>
                                <p className="text-sm text-gray-500 font-mono mb-4">{blog.date}</p>

                                <p className="text-sm text-gray-400 line-clamp-3 mb-6">
                                    {blog.preview}
                                </p>

                                <div className="flex items-center text-sm font-bold text-white group-hover:translate-x-1 transition-transform">
                                    Read Article <ChevronRight className="w-4 h-4 ml-1" />
                                </div>
                            </MotionDiv>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Blog Detail Modal */}
            <AnimatePresence>
                {selectedBlog && (
                    <>
                        <MotionDiv
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedBlog(null)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 pointer-events-auto"
                        />
                        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none p-4">
                            <MotionDiv
                                layoutId={`blog-${selectedBlog.id}`}
                                className="w-full max-w-2xl bg-gray-900 border border-white/10 rounded-2xl overflow-hidden pointer-events-auto shadow-2xl"
                            >
                                <div className={`h-2 w-full bg-gradient-to-r ${selectedBlog.color}`} />
                                <div className="p-8 max-h-[80vh] overflow-y-auto">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <h3 className="text-3xl font-bold mb-2">{selectedBlog.title}</h3>
                                            <p className="text-gray-400 font-mono">{selectedBlog.date}</p>
                                        </div>
                                        <button
                                            onClick={() => setSelectedBlog(null)}
                                            className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    </div>

                                    <div className="prose prose-invert prose-sm max-w-none mb-8">
                                        {selectedBlog.content.split('\n\n').map((paragraph, index) => (
                                            <p key={index} className="text-gray-300 leading-relaxed text-lg mb-6">
                                                {paragraph}
                                            </p>
                                        ))}

                                        {selectedBlog.images && selectedBlog.images.length > 0 && (
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                                                {selectedBlog.images.map((image, index) => (
                                                    <div
                                                        key={index}
                                                        className="relative aspect-video rounded-xl overflow-hidden bg-gray-800 border border-white/5 cursor-zoom-in"
                                                        onClick={(e) => {
                                                            e.stopPropagation()
                                                            setSelectedImage(image)
                                                        }}
                                                    >
                                                        <img
                                                            src={image}
                                                            alt={`${selectedBlog.title} - Image ${index + 1}`}
                                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <button
                                        onClick={() => setSelectedBlog(null)}
                                        className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors"
                                    >
                                        Close Article
                                    </button>
                                </div>
                            </MotionDiv>
                        </div>
                    </>
                )}
            </AnimatePresence>

            {/* Image Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <MotionDiv
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 pointer-events-auto cursor-zoom-out"
                    >
                        <MotionImg
                            src={selectedImage}
                            alt="Full screen view"
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                            layoutId={`image-${selectedImage}`}
                        />
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </MotionDiv>
                )}
            </AnimatePresence>

            {/* Resume / Contact Section */}
            <Section className="items-center text-center" id="resume">
                <div className="pointer-events-auto max-w-2xl">
                    <h2 className="text-4xl font-bold mb-6">Ready to work together?</h2>
                    <p className="text-gray-400 mb-8 text-lg">
                        Final-year B.Tech CSE student at IIIT Kota with a strong foundation in Android development, data structures, and product engineering.
                        <br />
                        <span className="text-white font-bold mt-4 block">techmohit468@gmail.com</span>
                    </p>
                    <div className="flex justify-center gap-4">
                        <button
                            type="button"
                            style={{ pointerEvents: 'auto', zIndex: 9999, position: 'relative' }}
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                const resumeUrl = `${import.meta.env.BASE_URL}documents/Mohit_New_Rsm.pdf`;
                                const fallbackUrl = `${import.meta.env.BASE_URL}documents/Mohit_AI_Resume.pdf`;
                                const link = document.createElement('a');
                                link.href = resumeUrl;
                                link.download = 'Mohit_New_Rsm.pdf';
                                link.rel = 'noopener noreferrer';
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);

                                setTimeout(() => {
                                    if (typeof window !== 'undefined' && !window.location.pathname.endsWith('/documents/Mohit_New_Rsm.pdf')) {
                                        window.open(fallbackUrl, '_blank', 'noopener,noreferrer');
                                    }
                                }, 300);
                            }}
                            className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors cursor-pointer inline-flex items-center gap-2"
                        >
                            Download Resume
                        </button>
                    </div>
                    <p className="mt-16 text-gray-600 text-sm">© 2025 Mohit Anuragi. All rights reserved.</p>
                </div>
            </Section>



        </div>
    )
}

export default Overlay
