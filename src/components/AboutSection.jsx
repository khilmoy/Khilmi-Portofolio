import React, { useState, useEffect } from "react";

import {
    Briefcase,
    User,
    Download,
    Calendar,
    Sparkles,
    Target,
    Star,
} from "lucide-react";

import {
    motion,
    AnimatePresence,
} from "framer-motion";

export const AboutSection = () => {
    const [activeTab, setActiveTab] =
        useState("personal");

    const [mousePosition, setMousePosition] =
        useState({
            x: 0,
            y: 0,
        });

    const [counter, setCounter] =
        useState(0);

    const achievements = [
        {
            number: "6+",
            label: "Projects",
            icon: (
                <Briefcase className="h-4 w-4" />
            ),
        },

        {
            number: "1+",
            label: "Years Learning",
            icon: (
                <Calendar className="h-4 w-4" />
            ),
        },

        {
            number: "100%",
            label: "Creative",
            icon: (
                <Target className="h-4 w-4" />
            ),
        },

        {
            number: "Open",
            label: "Freelance",
            icon: (
                <User className="h-4 w-4" />
            ),
        },
    ];

    const features = [
        "Modern UI Design",
        "Responsive Website",
        "Clean Code",
        "Creative Interface",
        "Frontend Development",
        "Fast Learning",
    ];

    const tabContent = {
        personal:
            "Passionate about building modern and interactive web interfaces while continuously improving my frontend and UI/UX design skills.",

        professional:
            "I focus on frontend development using React, Tailwind CSS, PHP, and Laravel to create responsive and modern websites.",

        approach:
            "I believe clean design, smooth user experience, and responsive layouts are important to create modern digital products.",
    };

    useEffect(() => {
        const handleMouseMove = (e) =>
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });

        window.addEventListener(
            "mousemove",
            handleMouseMove
        );

        return () =>
            window.removeEventListener(
                "mousemove",
                handleMouseMove
            );
    }, []);

    useEffect(() => {
        const interval = setInterval(
            () =>
                setCounter(
                    (prev) =>
                        (prev + 1) % 4
                ),
            2000
        );

        return () =>
            clearInterval(interval);
    }, []);

    const handleDownload = () => {
        window.open(
            "/resume.pdf",
            "_blank"
        );
    };

    return (
        <section
            id="about"
            className="relative overflow-hidden px-4 py-24 scroll-mt-24 sm:px-6 lg:px-8"
        >

            {/* BG */}
            <div className="absolute inset-0 overflow-hidden">

                <div
                    className="absolute left-0 top-0 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl transition-all duration-1000 md:h-96 md:w-96"
                    style={{
                        transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
                    }}
                />

                <div
                    className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl transition-all duration-1000 md:h-80 md:w-80"
                    style={{
                        transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`,
                    }}
                />

                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />

            </div>

            <div className="relative mx-auto max-w-7xl">

                {/* HEADER */}
                <div className="mb-14 text-center md:mb-20">

                    <div className="mb-5 inline-flex items-center gap-3 rounded-2xl border border-pink-500/20 bg-pink-500/10 px-4 py-3 sm:px-6">

                        <Sparkles className="h-4 w-4 text-pink-400 sm:h-5 sm:w-5" />

                        <span className="text-sm font-semibold tracking-wide text-pink-400">

                            ABOUT ME

                        </span>

                    </div>

                    <h1 className="mb-5 text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">

                        <span className="bg-gradient-to-r from-white to-pink-400 bg-clip-text text-transparent">

                            Transforming

                        </span>

                        <span className="mt-2 block text-pink-400">

                            Ideas Into Reality

                        </span>

                    </h1>

                    <p className="mx-auto max-w-3xl px-2 text-base leading-relaxed text-white/70 sm:text-lg">

                        Building modern digital experiences with clean UI,
                        smooth interaction, and creative frontend development.

                    </p>

                </div>

                {/* MAIN GRID */}
                <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.15fr_0.85fr] xl:gap-8">

                    {/* LEFT */}
                    <div className="space-y-6">

                        {/* PROFILE CARD */}
                        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-[0_0_60px_rgba(236,72,153,0.12)] backdrop-blur-xl sm:rounded-[32px] sm:p-7 lg:p-8">

                            <div className="absolute right-0 top-0 h-32 w-32 translate-x-16 -translate-y-16 rounded-full bg-pink-500/10" />

                            <div className="relative">

                                {/* TOP */}
                                <div className="flex flex-col items-center gap-7 text-center lg:flex-row lg:items-start lg:text-left">

                                    {/* IMAGE */}
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            scale: 0.8,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                        }}
                                        transition={{
                                            duration: 0.8,
                                        }}
                                        className="relative shrink-0"
                                    >

                                        <div className="absolute inset-0 rounded-3xl bg-pink-500/30 blur-2xl" />

                                        <div className="relative h-32 w-32 overflow-hidden rounded-3xl border-4 border-pink-500/40 shadow-[0_0_50px_rgba(236,72,153,0.35)] sm:h-40 sm:w-40 lg:h-44 lg:w-44">

                                            <img
                                                src="/Profile.png"
                                                alt="Muhammad Khilmi Lutfan Albab"
                                                className="h-full w-full object-cover object-[center_20%]"
                                            />

                                        </div>

                                    </motion.div>

                                    {/* INFO */}
                                    <div className="flex-1">

                                        <h2 className="mb-2 text-2xl font-bold leading-tight text-white sm:text-3xl">

                                            Muhammad Khilmi
                                            Lutfan Albab

                                        </h2>

                                        <p className="mb-6 text-sm font-semibold text-pink-400 sm:text-lg">

                                            Frontend Developer & UI Designer

                                        </p>

                                        {/* STATS */}
                                        <div className="grid grid-cols-2 gap-3">

                                            {achievements.map(
                                                (
                                                    achievement,
                                                    index
                                                ) => (
                                                    <div
                                                        key={
                                                            index
                                                        }
                                                        className={`rounded-2xl border border-white/10 bg-white/5 p-3 transition-all duration-300 sm:p-4 ${
                                                            counter ===
                                                            index
                                                                ? "border-pink-500/40 bg-pink-500/10"
                                                                : ""
                                                        }`}
                                                    >

                                                        <div className="flex items-center gap-2">

                                                            {
                                                                achievement.icon
                                                            }

                                                            <div>

                                                                <div className="text-sm font-bold text-white sm:text-base">

                                                                    {
                                                                        achievement.number
                                                                    }

                                                                </div>

                                                                <div className="text-[10px] text-white/60 sm:text-xs">

                                                                    {
                                                                        achievement.label
                                                                    }

                                                                </div>

                                                            </div>

                                                        </div>

                                                    </div>
                                                )
                                            )}

                                        </div>

                                    </div>

                                </div>

                                {/* TABS */}
                                <div className="mt-8 flex overflow-hidden rounded-2xl border border-white/10 bg-white/5">

                                    {[
                                        "personal",
                                        "professional",
                                        "approach",
                                    ].map(
                                        (
                                            tab
                                        ) => (
                                            <button
                                                key={
                                                    tab
                                                }
                                                onClick={() =>
                                                    setActiveTab(
                                                        tab
                                                    )
                                                }
                                                className={`flex-1 px-2 py-3 text-[11px] font-medium transition-all duration-300 sm:px-4 sm:text-sm ${
                                                    activeTab ===
                                                    tab
                                                        ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                                                        : "text-white/60 hover:bg-white/5 hover:text-white"
                                                }`}
                                            >

                                                {tab
                                                    .charAt(
                                                        0
                                                    )
                                                    .toUpperCase() +
                                                    tab.slice(
                                                        1
                                                    )}

                                            </button>
                                        )
                                    )}

                                </div>

                                {/* CONTENT */}
                                <div className="mt-6 min-h-[110px] rounded-2xl border border-white/10 bg-black/20 p-5">

                                    <AnimatePresence mode="wait">

                                        <motion.p
                                            key={
                                                activeTab
                                            }
                                            initial={{
                                                opacity: 0,
                                                y: 10,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                y: -10,
                                            }}
                                            transition={{
                                                duration: 0.3,
                                            }}
                                            className="text-sm leading-relaxed text-white/70 sm:text-base"
                                        >

                                            {
                                                tabContent[
                                                    activeTab
                                                ]
                                            }

                                        </motion.p>

                                    </AnimatePresence>

                                </div>

                            </div>

                        </div>

                        {/* TECH STACK */}
                        <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-[0_0_60px_rgba(236,72,153,0.12)] backdrop-blur-xl sm:rounded-[32px] sm:p-7 lg:p-8">

                            <h3 className="mb-7 text-2xl font-bold text-white sm:text-3xl">

                                Tech Stack Overview

                            </h3>

                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">

                                {/* FRONTEND */}
                                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">

                                    <h4 className="mb-5 text-lg font-semibold text-white">

                                        Frontend

                                    </h4>

                                    <ul className="space-y-3">

                                        {[
                                            "React",
                                            "JavaScript",
                                            "Tailwind CSS",
                                            "HTML",
                                            "CSS",
                                        ].map(
                                            (
                                                item,
                                                index
                                            ) => (
                                                <li
                                                    key={
                                                        index
                                                    }
                                                    className="flex items-center gap-3 text-sm text-white/70"
                                                >

                                                    <div className="h-2 w-2 rounded-full bg-pink-400" />

                                                    {item}

                                                </li>
                                            )
                                        )}

                                    </ul>

                                </div>

                                {/* BACKEND */}
                                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">

                                    <h4 className="mb-5 text-lg font-semibold text-white">

                                        Backend

                                    </h4>

                                    <ul className="space-y-3">

                                        {[
                                            "PHP",
                                            "Laravel",
                                            "MySQL",
                                        ].map(
                                            (
                                                item,
                                                index
                                            ) => (
                                                <li
                                                    key={
                                                        index
                                                    }
                                                    className="flex items-center gap-3 text-sm text-white/70"
                                                >

                                                    <div className="h-2 w-2 rounded-full bg-pink-400" />

                                                    {item}

                                                </li>
                                            )
                                        )}

                                    </ul>

                                </div>

                                {/* DESIGN */}
                                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">

                                    <h4 className="mb-5 text-lg font-semibold text-white">

                                        Design

                                    </h4>

                                    <ul className="space-y-3">

                                        {[
                                            "Figma",
                                            "UI/UX Design",
                                            "Responsive Design",
                                        ].map(
                                            (
                                                item,
                                                index
                                            ) => (
                                                <li
                                                    key={
                                                        index
                                                    }
                                                    className="flex items-center gap-3 text-sm text-white/70"
                                                >

                                                    <div className="h-2 w-2 rounded-full bg-pink-400" />

                                                    {item}

                                                </li>
                                            )
                                        )}

                                    </ul>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* RIGHT */}
                    <div className="space-y-6">

                        {/* CONTACT */}
                        <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-[0_0_60px_rgba(236,72,153,0.12)] backdrop-blur-xl sm:rounded-[32px] sm:p-7">

                            <h3 className="mb-6 text-center text-2xl font-bold text-white">

                                Let's Work Together

                            </h3>

                            <div className="space-y-4">

                                <a
                                    href="#contact"
                                    className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 p-4 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] sm:text-base"
                                >

                                    <User className="h-5 w-5" />

                                    Start Project

                                </a>

                                <button
                                    onClick={
                                        handleDownload
                                    }
                                    className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:border-pink-500/30 sm:text-base"
                                >

                                    <Download className="h-5 w-5" />

                                    Download Resume

                                </button>

                            </div>

                        </div>

                        {/* FEATURES */}
                        <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-[0_0_60px_rgba(236,72,153,0.12)] backdrop-blur-xl sm:rounded-[32px] sm:p-7">

                            <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-white">

                                <Star className="h-5 w-5 text-pink-400" />

                                Why Choose Me

                            </h3>

                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-1">

                                {features.map(
                                    (
                                        feature,
                                        index
                                    ) => (
                                        <div
                                            key={
                                                index
                                            }
                                            className="flex items-center gap-3 rounded-xl border border-white/5 bg-black/20 p-3"
                                        >

                                            <div className="h-2 w-2 rounded-full bg-pink-400" />

                                            <span className="text-sm text-white/70">

                                                {
                                                    feature
                                                }

                                            </span>

                                        </div>
                                    )
                                )}

                            </div>

                        </div>

                        {/* AVAILABLE */}
                        <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-[0_0_60px_rgba(236,72,153,0.12)] backdrop-blur-xl sm:rounded-[32px] sm:p-7">

                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                                <div>

                                    <h3 className="text-lg font-bold text-white">

                                        Available

                                    </h3>

                                    <p className="mt-1 text-sm text-white/70">

                                        Open for freelance & projects

                                    </p>

                                </div>

                                <div className="w-fit rounded-full bg-green-500/20 px-4 py-2 text-sm font-medium text-green-400">

                                    Active

                                </div>

                            </div>

                            <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4 text-center text-sm text-white/70">

                                ⚡ Response time: Under 24 hours

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};