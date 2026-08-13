import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LayoutGrid, MessageSquare, Briefcase, User, Github, Linkedin, Battery, Wifi, Signal, ChevronLeft, ExternalLink, GraduationCap, Award, Settings, Moon, Sun, Globe, Upload, Play, X, Check, AtSign, Code2 } from 'lucide-react'
import { translations } from './translations'

const MotionDiv = motion.div
const MotionImg = motion.img

// Wallpaper Imports
import wallpaperAndroid from '../../assets/wallpapers/android.png'
import wallpaperIos from '../../assets/wallpapers/ios.png'
import wallpaperFlutter from '../../assets/wallpapers/flutter.png'
import profilePic from '../../assets/profile-pic.jpg'

import projectShayari from '../../../shayari shaala project.png'
import projectIssueSpotter from '../../../issue spotter project.png'
import projectBillingLibrary from '../../../billing monetization project.png'
import projectNeuralOCR from '../../../neural ocr project.png'

const ClockWidget = ({ isDark, wallpaper, lang }) => {
    const [now, setNow] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000)
        return () => clearInterval(timer)
    }, [])

    const localeMap = {
        en: 'en-US', es: 'es-ES', de: 'de-DE', fr: 'fr-FR', it: 'it-IT',
        pt: 'pt-PT', ru: 'ru-RU', ja: 'ja-JP', zh: 'zh-CN', ko: 'ko-KR',
        hi: 'hi-IN', bn: 'bn-BD', ar: 'ar-SA', id: 'id-ID'
    }

    const locale = localeMap[lang] || 'en-US'
    const dayOfWeek = now.toLocaleDateString(locale, { weekday: 'long' })
    const monthDay = now.toLocaleDateString(locale, { month: 'long', day: 'numeric' })
    const timeString = now.toLocaleTimeString(locale, { hour: 'numeric', minute: '2-digit' })

    return (
        <div className="mb-16 pl-2 relative z-10">
            <h2 className={`text-9xl font-thin mb-4 ${!isDark && !wallpaper ? 'text-black/90' : 'text-white/90'}`}>{timeString}</h2>
            <h3 className={`text-6xl ${!isDark && !wallpaper ? 'text-black/60' : 'text-white/60'}`}>{dayOfWeek}, {monthDay}</h3>
        </div>
    )
}

const HomeOS = ({ activeAppId, setActiveAppId }) => {
    // const [activeAppId, setActiveAppId] = useState(null) // Controlled by parent
    const [isDark, setIsDark] = useState(true)
    const [lang, setLang] = useState('en')
    const [wallpaper, setWallpaper] = useState(null)
    const [isLangOpen, setIsLangOpen] = useState(false)
    const [isWallpaperOpen, setIsWallpaperOpen] = useState(false)
    const [previewWallpaper, setPreviewWallpaper] = useState(null)
    const [uploadSuccess, setUploadSuccess] = useState(false)
    const [selectedPhoto, setSelectedPhoto] = useState(null)

    const t = translations[lang]

    const wallpapers = [
        { src: wallpaperAndroid, name: 'Android' },
        { src: wallpaperIos, name: 'iOS' },
        { src: wallpaperFlutter, name: 'Flutter' }
    ]

    const languages = [
        { code: 'en', name: 'English' },
        { code: 'es', name: 'Español' },
        { code: 'fr', name: 'Français' },
        { code: 'de', name: 'Deutsch' },
        { code: 'it', name: 'Italiano' },
        { code: 'pt', name: 'Português' },
        { code: 'ru', name: 'Русский' },
        { code: 'ja', name: '日本語' },
        { code: 'zh', name: '中文' },
        { code: 'ko', name: '한국어' },
        { code: 'hi', name: 'हिंदी' },
        { code: 'bn', name: 'বাংলা' },
        { code: 'ar', name: 'العربية' },
        { code: 'id', name: 'Bahasa Indonesia' },
    ]



    const projects = [
        {
            title: "Shayari Shaala",
            subtitle: "Android app with AI-powered shayari and offline content",
            tech: ["Kotlin", "Jetpack Compose", "Gemini AI", "Material 3", "Offline-First", "Caching"],
            color: "bg-amber-600",
            image: projectShayari,
            link: "https://github.com/MohitAnuragi/Shayari-Shaala"
        },
        {
            title: "Issue Spotter",
            subtitle: "Team project: issue reporting platform",
            tech: ["Android Studio", "Kotlin", "Jetpack Compose", "Google Maps API", "MVVM", "Supabase"],
            color: "bg-indigo-900",
            image: projectIssueSpotter,
            link: "https://github.com/MohitAnuragi/IssueSpotter"
        },
        {
            title: "Billing-Library / Monetization Kit",
            subtitle: "Open-source Android monetization SDK",
            tech: ["Kotlin", "Android SDK", "Jetpack Compose", "XML", "AdMob", "Meta Ads", "JitPack"],
            color: "bg-blue-500",
            image: projectBillingLibrary,
            link: "https://github.com/MohitAnuragi/Billing-Library"
        },
        {
            title: "Neural OCR",
            subtitle: "Personal project: ML and browser-based recognition",
            tech: ["Python", "NumPy", "HTML", "CSS", "JavaScript"],
            color: "bg-sky-500",
            image: projectNeuralOCR,
            link: "https://github.com/MohitAnuragi/Neural-OCR"
        }
    ]

    const myPhotos = [
        {
            id: 1,
            title: 'District Topper',
            subtitle: '98.25% in Class X',
            detail: 'MP Board • 2020',
            accent: 'from-amber-500 via-orange-500 to-amber-700',
            icon: '🏆',
            link: null,
            caption: 'District Topper • MP Board Class X'
        },
        {
            id: 2,
            title: 'State Rank',
            subtitle: 'Top-10 State Rank',
            detail: 'Class X • MP Board',
            accent: 'from-violet-500 via-purple-500 to-indigo-700',
            icon: '🥇',
            link: null,
            caption: 'Top 10 State Rank • Class X'
        },
        {
            id: 3,
            title: 'SRMC',
            subtitle: '14th Rank',
            detail: 'Mathematics Competition',
            accent: 'from-emerald-500 via-teal-500 to-cyan-700',
            icon: '📘',
            link: 'https://srmc.co.in/r1result/?data=eyJ1bnN0b3BpZCI6IjE0OTk4MzgtVUZBMTk5UzAiLCJoYXNoIjoiN2QxYjNjNGMwMDFlZDk5M2YzMjY0MWJhNWQwZDAwNTI4MjMwOWVlMzMyYzRiZTdlNjBhMmE2OGQ2YjJmMGQ4MiJ9',
            caption: 'SRMC Mathematics Competition • 14th Rank'
        },
        {
            id: 4,
            title: 'Hackathon',
            subtitle: 'App Innovation Winner',
            detail: 'Amity University • Noida',
            accent: 'from-sky-500 via-blue-500 to-indigo-700',
            icon: '💡',
            link: null,
            caption: 'App Innovation Hackathon • Amity University, Noida'
        },
        {
            id: 5,
            title: 'CDAC',
            subtitle: 'Ethical Hacking',
            detail: 'Cyber Security Certification',
            accent: 'from-rose-500 via-red-500 to-red-700',
            icon: '🛡️',
            link: 'https://drive.google.com/file/d/1dSMFZGEfzI91YMq-bYs8LPviM5D1R17a/view?usp=sharing',
            caption: 'CDAC Certificate • Ethical Hacking & Pentesting'
        },
        {
            id: 6,
            title: 'JEE Advanced',
            subtitle: 'Category Rank 3399',
            detail: 'Qualified in 2023',
            accent: 'from-cyan-500 via-sky-500 to-blue-700',
            icon: '🎯',
            link: null,
            caption: 'JEE Advanced • Category Rank 3399'
        },
    ]

    // Apps configuration
    const apps = [
        {
            id: 'about',
            name: t.about,
            icon: User,
            color: 'bg-indigo-500',
            content: (
                <div className="p-8 pb-32">
                    <div className="flex flex-col items-center mb-10">
                        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl mb-6 bg-gray-200">
                            {/* Placeholder Profile Pic - Replace with actual photo */}
                            <img
                                src={profilePic}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className={`text-8xl font-bold mb-4 text-center ${!isDark ? 'text-gray-900' : 'text-white'}`}>{t.aboutMe}</h2>
                    </div>

                    <div className="space-y-8 px-4">
                        <p className={`text-5xl leading-relaxed ${!isDark ? 'text-gray-600' : 'text-gray-300'}`}>
                            Final-year B.Tech Computer Science student at IIIT Kota, with hands-on experience in Java, Kotlin, and Android development. I enjoy building production-ready Android applications and integrating REST APIs into real-world user experiences.
                        </p>
                        <p className={`text-5xl leading-relaxed ${!isDark ? 'text-gray-600' : 'text-gray-300'}`}>
                            I have practical experience designing and shipping Android applications using Kotlin and Jetpack Compose, with a strong focus on MVVM, Retrofit, Room, Hilt, Coroutines, and Flow. I also work on backend integrations, reusable libraries, and clean app architecture that scales well for production use.
                        </p>
                        <p className={`text-5xl leading-relaxed ${!isDark ? 'text-gray-600' : 'text-gray-300'}`}>
                            I have published and maintained production Android applications, developed reusable open-source Android libraries, and contributed to app stability across different devices. My foundation in DSA and software engineering helps me build reliable, maintainable systems with a problem-solving mindset.
                        </p>
                        <p className={`text-5xl leading-relaxed ${!isDark ? 'text-gray-600' : 'text-gray-300'}`}>
                            I’ve solved 500+ questions on LeetCode and 380+ problems on GeeksforGeeks, and I continue to sharpen my understanding of data structures, algorithms, and system design fundamentals while building Android products.
                        </p>
                    </div>
                </div>
            )
        },
        {
            id: 'contact',
            name: t.contact,
            icon: MessageSquare,
            color: 'bg-green-500',
            content: (
                <div className="h-full flex flex-col items-center justify-center p-8">
                    {/* Digital Business Card */}
                    <div className={`w-full max-w-[90%] rounded-[5rem] p-16 shadow-2xl border-4 mb-16 ${!isDark ? 'bg-white border-gray-100' : 'bg-gray-800 border-gray-700'}`}>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-80 h-80 rounded-full border-[12px] border-blue-500 overflow-hidden mb-12 shadow-2xl">
                                <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
                            </div>
                            <h2 className={`text-9xl font-bold mb-6 ${!isDark ? 'text-gray-900' : 'text-white'}`}>Mohit Anuragi</h2>
                            <p className={`text-6xl font-medium mb-8 ${!isDark ? 'text-blue-500' : 'text-blue-400'}`}>Android Developer & Software Engineer</p>
                            <p className={`text-5xl font-medium mb-16 ${!isDark ? 'text-gray-700' : 'text-gray-300'}`}>techmohit468@gmail.com</p>

                            <div className="flex flex-wrap gap-8 w-full justify-center">
                                <a
                                    href="https://www.linkedin.com/in/mohit-a-52989b2b2/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`p-10 rounded-[3rem] transition-transform hover:scale-110 active:scale-95 ${!isDark ? 'bg-blue-50 text-blue-600' : 'bg-blue-900/30 text-blue-400'}`}
                                >
                                    <Linkedin size={80} />
                                </a>
                                <a
                                    href="https://github.com/MohitAnuragi/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`p-10 rounded-[3rem] transition-transform hover:scale-110 active:scale-95 ${!isDark ? 'bg-gray-900 text-white' : 'bg-black text-white'}`}
                                >
                                    <Github size={80} />
                                </a>
                                <a
                                    href="https://leetcode.com/u/MOHIT_ANURAGI/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`p-10 rounded-[3rem] transition-transform hover:scale-110 active:scale-95 ${!isDark ? 'bg-orange-50 text-orange-500' : 'bg-orange-900/30 text-orange-300'}`}
                                >
                                    <Code2 size={80} />
                                </a>
                                <a
                                    href="https://play.google.com/store/apps/dev?id=6727956513425778495"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`p-10 rounded-[3rem] transition-transform hover:scale-110 active:scale-95 ${!isDark ? 'bg-emerald-50 text-emerald-600' : 'bg-emerald-900/30 text-emerald-300'}`}
                                >
                                    <Play size={80} />
                                </a>
                                <a
                                    href="https://x.com/MohitAnu468"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`p-10 rounded-[3rem] transition-transform hover:scale-110 active:scale-95 ${!isDark ? 'bg-sky-50 text-sky-600' : 'bg-sky-900/30 text-sky-300'}`}
                                >
                                    <AtSign size={80} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={`w-full max-w-[90%] p-12 rounded-[4rem] text-center ${!isDark ? 'bg-gray-200/50' : 'bg-white/5'}`}>
                        <p className={`text-6xl font-medium leading-relaxed ${!isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                            +91 7697273248
                        </p>
                    </div>
                </div>
            )
        },
        {
            id: 'projects',
            name: t.projects,
            icon: Briefcase,
            color: 'bg-blue-500',
            content: (
                <div className="p-8 pb-48 space-y-16">
                    <h2 className={`text-9xl font-bold sticky top-0 backdrop-blur-md py-10 z-10 ${!isDark ? 'bg-white/80 text-gray-900' : 'bg-black/80 text-white'}`}>{t.featuredWork}</h2>

                    {projects.map((p, i) => (
                        <MotionDiv
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`rounded-[3rem] overflow-hidden border-2 shadow-2xl ${!isDark ? 'bg-white border-gray-200' : 'bg-gray-900 border-white/10'}`}
                        >
                            {/* Media Placeholder - ideally a GIF */}
                            <div className="h-[32rem] bg-gray-800 relative overflow-hidden group-hover:opacity-90 transition-opacity">
                                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                            </div>

                            <div className="p-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className={`font-bold text-7xl leading-tight mb-4 ${!isDark ? 'text-gray-900' : 'text-white'}`}>{p.title}</h3>
                                        <p className={`text-5xl ${!isDark ? 'text-gray-500' : 'text-gray-400'}`}>{p.subtitle}</p>
                                    </div>
                                    {p.link ? (
                                        <a href={p.link} target="_blank" rel="noreferrer" className={`p-5 rounded-full transition-colors ${!isDark ? 'bg-black/5 hover:bg-black/10 text-gray-900' : 'bg-white/10 hover:bg-white/20 text-white'}`}>
                                            <ExternalLink size={48} />
                                        </a>
                                    ) : (
                                        <div className={`p-5 rounded-full ${!isDark ? 'bg-black/5 text-gray-900' : 'bg-white/10 text-white'}`}>
                                            <ExternalLink size={48} />
                                        </div>
                                    )}
                                </div>

                                <div className="flex flex-wrap gap-4 mt-8">
                                    {p.tech.map((t) => (
                                        <span key={t} className={`px-6 py-2 rounded-2xl text-3xl border ${!isDark ? 'bg-black/5 text-gray-600 border-black/5' : 'bg-white/5 text-gray-300 border-white/5'}`}>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </MotionDiv>
                    ))}

                    <div className="text-center text-4xl text-gray-500 py-10">
                        {t.tapToView}
                    </div>
                </div>
            )
        },
        {
            id: 'education',
            name: 'Education',
            icon: GraduationCap,
            color: 'bg-violet-500',
            content: (
                <div className="h-full flex flex-col items-center justify-center p-8">
                    <div className="w-full max-w-[90%] space-y-8">
                        <h3 className={`text-8xl font-bold text-center ${!isDark ? 'text-gray-900' : 'text-white'}`}>Education</h3>

                        <div className="space-y-8">
                            <div className={`rounded-[2rem] p-8 border shadow-sm ${!isDark ? 'bg-white border-gray-200' : 'bg-gray-900 border-white/10'}`}>
                                <div className="flex flex-col gap-5">
                                    <div className="flex items-center justify-between gap-4">
                                        <span className="text-3xl font-semibold uppercase tracking-wide text-violet-500">School</span>
                                        <span className={`text-3xl ${!isDark ? 'text-gray-500' : 'text-gray-400'}`}>2019 - 2020</span>
                                    </div>
                                    <p className="text-4xl font-bold text-violet-500">Govt. H.S. Excellence School No. 1, Chhatarpur</p>
                                    <p className={`text-5xl font-semibold leading-snug ${!isDark ? 'text-gray-900' : 'text-white'}`}>Class X — 98.25% (District Topper | Top 10 State Rank)</p>
                                </div>
                            </div>

                            <div className={`rounded-[2rem] p-8 border shadow-sm ${!isDark ? 'bg-white border-gray-200' : 'bg-gray-900 border-white/10'}`}>
                                <div className="flex flex-col gap-5">
                                    <div className="flex items-center justify-between gap-4">
                                        <span className="text-3xl font-semibold uppercase tracking-wide text-emerald-500">School</span>
                                        <span className={`text-3xl ${!isDark ? 'text-gray-500' : 'text-gray-400'}`}>2021 - 2022</span>
                                    </div>
                                    <p className="text-4xl font-bold text-emerald-500">Govt Subhash H.S. Excellence School, Shivaji Nagar Bhopal</p>
                                    <p className={`text-5xl font-semibold leading-snug ${!isDark ? 'text-gray-900' : 'text-white'}`}>Class XII — 86.80%</p>
                                </div>
                            </div>

                            <div className={`rounded-[2rem] p-8 border shadow-sm ${!isDark ? 'bg-white border-gray-200' : 'bg-gray-900 border-white/10'}`}>
                                <div className="flex flex-col gap-5">
                                    <div className="flex items-center justify-between gap-4">
                                        <span className="text-3xl font-semibold uppercase tracking-wide text-sky-500">College</span>
                                        <span className={`text-3xl ${!isDark ? 'text-gray-500' : 'text-gray-400'}`}>2023 - 2027</span>
                                    </div>
                                    <p className="text-4xl font-bold text-sky-500">Indian Institute of Information Technology, Kota</p>
                                    <p className={`text-5xl font-semibold leading-snug ${!isDark ? 'text-gray-900' : 'text-white'}`}>B.Tech in Computer Science (CGPA: 7.07/10)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'awards',
            name: 'Awards & Certificates',
            icon: Award,
            color: 'bg-amber-500',
            content: (
                <div className="relative h-full flex flex-col">
                    <div className="p-4 pb-32 overflow-y-auto">
                        <div className="py-4">
                            <h2 className={`text-5xl font-bold px-4 ${!isDark ? 'text-gray-900' : 'text-white'}`}>Recognitions</h2>
                        </div>

                        <div className="space-y-4">
                            {myPhotos.map((photo) => (
                                <motion.div
                                    key={photo.id}
                                    layoutId={`photo-${photo.id}`}
                                    className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-lg"
                                >
                                    <div className={`flex min-h-[18rem] flex-col justify-between rounded-[2rem] bg-gradient-to-br ${photo.accent} p-5`}>
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="flex h-18 w-18 items-center justify-center rounded-2xl bg-white/15 text-[60px] backdrop-blur-sm">
                                                {photo.icon}
                                            </div>
                                            {photo.link && (
                                                <a
                                                    href={photo.link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="rounded-full bg-black/20 px-3 py-1 text-[30px] font-medium text-white backdrop-blur-sm transition-transform hover:scale-105"
                                                >
                                                    Open
                                                </a>
                                            )}
                                        </div>

                                        <div className="mt-6 text-white">
                                            <p className="text-[58px] font-bold leading-tight">{photo.title}</p>
                                            <p className="mt-2 text-[44px] font-medium text-white/90">{photo.subtitle}</p>
                                            <p className="mt-2 text-[26px] text-white/70">{photo.detail}</p>
                                        </div>

                                        {photo.link ? (
                                            <a
                                                href={photo.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="mt-5 inline-flex w-fit items-center justify-center rounded-full bg-white/15 px-4 py-2 text-[26px] font-semibold text-white shadow-sm backdrop-blur-sm transition-colors hover:bg-white/20"
                                            >
                                                View Certificate
                                            </a>
                                        ) : (
                                            <div className="mt-5 inline-flex w-fit items-center justify-center rounded-full bg-white/10 px-4 py-2 text-[26px] font-semibold text-white/90">
                                                Achievement
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="py-8 text-center text-gray-500 text-3xl">
                            {myPhotos.length} Achievements
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'settings',
            name: t.settings,
            icon: Settings,
            color: 'bg-gray-600',
            content: (
                <div className={`p-0 min-h-full pt-12 transition-colors duration-300 ${!isDark ? 'bg-gray-100 text-black' : 'bg-black text-white'}`}>
                    {/* Header removed to avoid duplication with generic app header */}

                    <div className={`mx-6 rounded-3xl overflow-hidden mb-8 transition-colors duration-300 ${!isDark ? 'bg-white shadow-lg' : 'bg-gray-900'}`}>
                        <div className={`p-8 flex items-center justify-between border-b ${!isDark ? 'border-gray-100' : 'border-gray-800'}`}>
                            <div className="flex items-center gap-6">
                                <div className="p-4 bg-blue-500 rounded-2xl"><Moon size={40} className="text-white" /></div>
                                <span className="text-6xl font-medium">{t.darkMode}</span>
                            </div>
                            <div
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setIsDark(!isDark)
                                }}
                                className={`w-24 h-14 rounded-full p-1 transition-colors duration-300 ${isDark ? 'bg-green-500' : 'bg-gray-600'}`}
                            >
                                <div className={`w-12 h-12 bg-white rounded-full shadow-md transition-transform duration-300 ${isDark ? 'translate-x-10' : 'translate-x-0'}`} />
                            </div>
                        </div>

                        <div className={`p-8 flex items-center justify-between relative z-20 border-b ${!isDark ? 'border-gray-100' : 'border-gray-800'}`}>
                            <div className="flex items-center gap-6">
                                <div className="p-4 bg-orange-500 rounded-2xl"><Globe size={40} className="text-white" /></div>
                                <span className="text-6xl font-medium">{t.language}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        setIsLangOpen(true)
                                    }}
                                    className={`text-5xl font-medium flex items-center gap-2 ${!isDark ? 'text-gray-500' : 'text-gray-400'}`}
                                >
                                    {languages.find(l => l.code === lang)?.name}
                                    <ChevronLeft size={32} className="rotate-180" />
                                </button>
                            </div>
                        </div>

                        <div className="p-8 flex items-center justify-between">
                            <div className="flex items-center gap-6">
                                <div className="p-4 bg-pink-500 rounded-2xl"><Upload size={40} className="text-white" /></div>
                                <span className="text-6xl font-medium">{t.wallpaper}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        setPreviewWallpaper(wallpaper) // Initialize preview
                                        setIsWallpaperOpen(true)
                                    }}
                                    className={`text-5xl font-medium flex items-center gap-2 ${!isDark ? 'text-gray-500' : 'text-gray-400'}`}
                                >
                                    {t.select}
                                    <ChevronLeft size={32} className="rotate-180" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Language Modal/Dropdown Portal-like behavior */}
                    <AnimatePresence>
                        {isLangOpen && (
                            <MotionDiv
                                initial={{ opacity: 0, y: '-100%' }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: '-100%' }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className={`fixed inset-0 z-50 flex flex-col ${!isDark ? 'bg-gray-100' : 'bg-black'}`}
                            >
                                <div className={`p-8 pt-12 flex items-center justify-between border-b ${!isDark ? 'border-gray-200 bg-white' : 'border-gray-800 bg-gray-900'}`}>
                                    <span className="text-6xl font-bold px-4">{t.language}</span>
                                    <button onClick={() => setIsLangOpen(false)} className="p-4 rounded-full bg-gray-500/10">
                                        <X size={48} />
                                    </button>
                                </div>
                                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                                    {languages.map((l) => (
                                        <button
                                            key={l.code}
                                            onClick={() => {
                                                setLang(l.code)
                                                setIsLangOpen(false)
                                            }}
                                            className={`w-full p-8 rounded-3xl flex items-center justify-between text-5xl font-medium transition-colors ${lang === l.code
                                                ? (!isDark ? 'bg-blue-500 text-white' : 'bg-blue-600 text-white')
                                                : (!isDark ? 'bg-white text-gray-900 hover:bg-gray-200' : 'bg-gray-900 text-gray-200 hover:bg-gray-800')
                                                }`}
                                        >
                                            <span>{l.name}</span>
                                            {lang === l.code && <Check size={40} />}
                                        </button>
                                    ))}
                                    <div className="h-32"></div>
                                </div>
                            </MotionDiv>
                        )}

                        {isWallpaperOpen && (
                            <MotionDiv
                                initial={{ opacity: 0, y: '100%' }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: '100%' }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className={`fixed inset-0 z-50 flex flex-col ${!isDark ? 'bg-gray-100' : 'bg-black'}`}
                                onLayoutAnimationComplete={() => {
                                    // Initialize preview with current wallpaper when opening
                                    if (!previewWallpaper && wallpaper) setPreviewWallpaper(wallpaper)
                                }}
                            >
                                <div className={`p-8 pt-12 flex items-center justify-between border-b ${!isDark ? 'border-gray-200 bg-white' : 'border-gray-800 bg-gray-900'}`}>
                                    <span className="text-6xl font-bold px-4">{t.wallpaper}</span>
                                    <button onClick={() => setIsWallpaperOpen(false)} className="p-4 rounded-full bg-gray-500/10">
                                        <X size={48} />
                                    </button>
                                </div>
                                <div className="flex-1 overflow-y-auto p-6 relative">
                                    <div className="grid grid-cols-2 gap-6 mb-8">
                                        {wallpapers.map((wp, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setPreviewWallpaper(wp.src)}
                                                className={`relative aspect-[9/16] rounded-[2.5rem] overflow-hidden border-4 transition-all duration-300 ${previewWallpaper === wp.src ? 'border-blue-500 scale-95 shadow-xl' : 'border-transparent hover:scale-95 shadow-md'}`}
                                            >
                                                <img src={wp.src} alt={wp.name} className="w-full h-full object-cover" />
                                                {previewWallpaper === wp.src && (
                                                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center backdrop-blur-[1px]">
                                                        <div className="bg-blue-500 p-3 rounded-full shadow-lg">
                                                            <Check size={32} className="text-white" />
                                                        </div>
                                                    </div>
                                                )}
                                            </button>
                                        ))}
                                    </div>

                                    <div className="p-2 pb-48">
                                        <label className={`w-full py-8 rounded-[2rem] flex items-center justify-center gap-4 text-4xl font-medium cursor-pointer transition-all active:scale-95 ${!isDark ? 'bg-white shadow-sm text-gray-700' : 'bg-gray-900 text-gray-300'} ${previewWallpaper && !wallpapers.find(w => w.src === previewWallpaper) ? 'ring-4 ring-blue-500' : ''}`}>
                                            <Upload size={40} />
                                            <span>{uploadSuccess ? 'Uploaded!' : 'Upload Custom'}</span>
                                            {previewWallpaper && !wallpapers.find(w => w.src === previewWallpaper) && <Check size={40} className="text-blue-500" />}
                                            <input
                                                type="file"
                                                accept="image/*"
                                                className="hidden"
                                                onChange={(e) => {
                                                    const file = e.target.files[0]
                                                    if (file) {
                                                        const url = URL.createObjectURL(file)
                                                        setPreviewWallpaper(url)
                                                        setUploadSuccess(true)
                                                        setTimeout(() => setUploadSuccess(false), 2000)
                                                    }
                                                }}
                                            />
                                        </label>
                                    </div>

                                    {/* Confirmation Button */}
                                    <div className="absolute bottom-12 left-0 w-full px-8">
                                        <button
                                            onClick={() => {
                                                if (previewWallpaper) {
                                                    setWallpaper(previewWallpaper)
                                                    setIsWallpaperOpen(false)
                                                }
                                            }}
                                            disabled={!previewWallpaper || previewWallpaper === wallpaper}
                                            className={`w-full py-6 rounded-[2rem] text-4xl font-bold shadow-xl transition-all ${previewWallpaper && previewWallpaper !== wallpaper
                                                ? 'bg-blue-500 text-white hover:bg-blue-600 hover:scale-105'
                                                : 'bg-gray-500/20 text-gray-400 cursor-not-allowed'
                                                }`}
                                        >
                                            Set Wallpaper
                                        </button>
                                    </div>
                                </div>
                            </MotionDiv>
                        )}
                    </AnimatePresence>
                </div>
            )
        },
        { id: 'github', name: 'GitHub', icon: Github, color: 'bg-gray-800', content: null, external: 'https://github.com/MohitAnuragi/' },
        { id: 'linkedin', name: 'LinkedIn', icon: Linkedin, color: 'bg-blue-700', content: null, external: 'https://www.linkedin.com/in/mohit-a-52989b2b2/' },
        { id: 'leetcode', name: 'LeetCode', icon: Code2, color: 'bg-orange-600', content: null, external: 'https://leetcode.com/u/MOHIT_ANURAGI/' },
        { id: 'playstore', name: 'Play Store', icon: Play, color: 'bg-emerald-600', content: null, external: 'https://play.google.com/store/apps/dev?id=6727956513425778495' },
        { id: 'x', name: 'X', icon: AtSign, color: 'bg-sky-600', content: null, external: 'https://x.com/MohitAnu468' },
    ]
    const activeApp = apps.find(a => a.id === activeAppId)



    // Apps configuration


    // Apps configuration

    return (
        <div
            className={`w-full h-full select-none flex flex-col font-sans transition-colors duration-300 ${isDark ? 'bg-transparent text-white' : 'bg-gray-100 text-black'}`}
            style={wallpaper ? { backgroundImage: `url(${wallpaper})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
            onPointerDown={(e) => e.stopPropagation()}
            onPointerUp={(e) => e.stopPropagation()}
            onPointerMove={(e) => e.stopPropagation()}
        >
            {/* Dynamic Island Area */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-50 pointer-events-none"></div>

            {/* Content Area */}
            <AnimatePresence mode="wait">
                {!activeAppId ? (
                    <MotionDiv
                        key="home"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="flex-1 p-6 flex flex-col pt-16 relative z-10"
                    >
                        {/* Date Widget */}
                        <ClockWidget isDark={isDark} wallpaper={wallpaper} lang={lang} />

                        {/* App Grid */}
                        <div className="grid grid-cols-4 gap-y-16 gap-x-2">
                            {apps.map((app, i) => (
                                <MotionDiv
                                    key={app.id}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => {
                                        if (app.external) {
                                            window.open(app.external, '_blank')
                                        } else {
                                            setActiveAppId(app.id)
                                        }
                                    }}
                                    className="flex flex-col items-center gap-4 cursor-pointer group"
                                >
                                    <div className={`${app.color} w-48 h-48 rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                                        <MotionDiv
                                            initial={{ scale: 1 }}
                                            animate={{ scale: [1, 1.15, 1] }}
                                            transition={{
                                                duration: 0.4,
                                                delay: 1.0 + (i * 0.1), // Initial fade in finishes around 0.5-0.8s, so we start after that
                                                ease: "easeOut"
                                            }}
                                        >
                                            <app.icon size={96} color="white" />
                                        </MotionDiv>
                                    </div>
                                    <span className={`text-5xl font-medium tracking-wide ${!isDark && !wallpaper ? 'text-gray-800' : 'text-gray-200'}`}>{app.name}</span>
                                </MotionDiv>
                            ))}
                        </div>
                    </MotionDiv>
                ) : (
                    <MotionDiv
                        key="app-view"
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 300, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className={`flex-1 w-full h-full relative pt-12 overflow-y-auto transition-colors duration-300 ${!isDark ? 'bg-gray-100 text-black' : 'bg-black text-white'}`}
                    >
                        {/* App Header */}
                        <div className="absolute top-12 left-0 w-full px-8 mb-6 flex items-center gap-4">
                            <button
                                onClick={() => setActiveAppId(null)}
                                className={`p-3 rounded-full transition-colors ${!isDark ? 'hover:bg-black/10' : 'hover:bg-white/10'}`}
                            >
                                <ChevronLeft size={64} />
                            </button>
                            <span className="font-semibold text-5xl">{activeApp.name}</span>
                        </div>

                        {/* App Content Container */}
                        <div className="mt-24">
                            {activeApp.content}
                        </div>
                    </MotionDiv>
                )}
            </AnimatePresence>

            {/* Global Lightbox Overlay */}
            <AnimatePresence>
                {selectedPhoto && (
                    <MotionDiv
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-[60] bg-black/95 flex flex-col items-center justify-center p-8 pointer-events-auto"
                        onClick={() => setSelectedPhoto(null)}
                    >
                        <MotionDiv
                            key={selectedPhoto.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.2}
                            onDragEnd={(e, { offset }) => {
                                const swipe = offset.x;

                                if (swipe < -50) {
                                    // Swipe Left - Next Photo
                                    const currentIndex = myPhotos.findIndex(p => p.id === selectedPhoto.id)
                                    const nextIndex = (currentIndex + 1) % myPhotos.length
                                    setSelectedPhoto(myPhotos[nextIndex])
                                } else if (swipe > 50) {
                                    // Swipe Right - Previous Photo
                                    const currentIndex = myPhotos.findIndex(p => p.id === selectedPhoto.id)
                                    const prevIndex = (currentIndex - 1 + myPhotos.length) % myPhotos.length
                                    setSelectedPhoto(myPhotos[prevIndex])
                                }
                            }}
                            className="w-full aspect-square bg-gray-900 rounded-3xl overflow-hidden shadow-2xl mb-12 relative touch-none cursor-grab active:cursor-grabbing"
                            onClick={(e) => e.stopPropagation()}
                            onPointerDown={(e) => e.stopPropagation()}
                            onPointerUp={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedPhoto.src}
                                alt={selectedPhoto.caption}
                                className="w-full h-full object-contain pointer-events-none"
                            />
                        </MotionDiv>
                        <MotionDiv
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="text-center w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <p className="text-white text-5xl font-medium mb-12">{selectedPhoto.caption}</p>
                            <div className="flex flex-col items-center gap-4">
                                <p className="text-white/50 text-3xl animate-pulse">Swipe to navigate</p>
                                <button
                                    onClick={() => setSelectedPhoto(null)}
                                    className="px-12 py-5 bg-white/10 rounded-full text-white text-4xl backdrop-blur-md border border-white/20 active:scale-95 transition-transform mt-4"
                                >
                                    Close
                                </button>
                            </div>
                        </MotionDiv>
                    </MotionDiv>
                )}
            </AnimatePresence>
        </div>
    )
}

export default HomeOS
