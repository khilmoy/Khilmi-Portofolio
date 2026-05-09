import {
    MousePointerClick,
    Code,
    Award,
    Download,
    Shield,
    Zap,
    TrendingUp,
    Briefcase,
    Mail,
} from "lucide-react";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export const HeroSection = () => {
    const ref = useRef(null);

    useInView(ref, {
        once: true,
    });

    const [currentCodeLine, setCurrentCodeLine] =
        useState(0);

    const [displayedCode, setDisplayedCode] =
        useState("");

    const codeSnippets = [
        "import { FrontendDeveloper } from 'khilmi.dev';",
        "",
        "const developer = new FrontendDeveloper({",
        "  name: 'Muhammad Khilmi Lutfan Albab',",
        "  stack: ['React', 'JavaScript', 'Tailwind', 'PHP', 'Laravel'],",
        "  focus: 'Modern UI & Frontend Development',",
        "  status: 'Open for freelance projects'",
        "});",
        "",
        "await developer.launchPortfolio();",
        "",
        "console.log('🚀 Ready to build amazing UI');",
    ];

    const achievements = [
        {
            number: "1+",
            label: "Years Learning",
            icon: <Shield className="h-3 w-3" />,
        },

        {
            number: "6+",
            label: "Projects Built",
            icon: (
                <TrendingUp className="h-3 w-3" />
            ),
        },

        {
            number: "UI/UX",
            label: "Figma Designs",
            icon: <Award className="h-3 w-3" />,
        },

        {
            number: "Open",
            label: "Freelance",
            icon: <Zap className="h-3 w-3" />,
        },
    ];

    useEffect(() => {
        const currentLine =
            codeSnippets[currentCodeLine];

        if (
            displayedCode.length <
            currentLine.length
        ) {
            setTimeout(() => {
                setDisplayedCode(
                    currentLine.slice(
                        0,
                        displayedCode.length + 1
                    )
                );
            }, 30);
        } else {
            setTimeout(() => {
                if (
                    currentCodeLine <
                    codeSnippets.length - 1
                ) {
                    setCurrentCodeLine(
                        (prev) => prev + 1
                    );

                    setDisplayedCode("");
                } else {
                    setTimeout(() => {
                        setCurrentCodeLine(0);

                        setDisplayedCode("");
                    }, 3000);
                }
            }, 700);
        }
    }, [displayedCode, currentCodeLine]);

    const handleViewResume = () => {
        window.open(
            "/resume.pdf",
            "_blank"
        );
    };

    return (
        <section
            id="hero"
            ref={ref}
            className="relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-40 sm:px-6 lg:px-8 lg:pt-32"
        >

            {/* BACKGROUND */}
            <div className="absolute inset-0 overflow-hidden">

                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />

                <motion.div
                    className="absolute left-0 top-20 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl md:h-96 md:w-96"
                    animate={{
                        x: [0, 40, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                    }}
                />

                <motion.div
                    className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl md:h-80 md:w-80"
                    animate={{
                        x: [0, -30, 0],
                        y: [0, 40, 0],
                    }}
                    transition={{
                        duration: 14,
                        repeat: Infinity,
                    }}
                />

            </div>

            {/* CONTENT */}
            <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">

                {/* LEFT */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                    className="w-full text-center lg:text-left"
                >

                    {/* BADGE */}
                    <div className="mb-6 inline-flex items-center gap-3 rounded-2xl border border-pink-500/20 bg-pink-500/10 px-4 py-3 sm:px-6">

                        <Briefcase className="h-4 w-4 text-pink-400 sm:h-5 sm:w-5" />

                        <span className="text-xs font-semibold tracking-wide text-pink-400 sm:text-sm">

                            AVAILABLE FOR FREELANCE

                        </span>

                    </div>

                    {/* TITLE */}
                    <h1 className="text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">

                        <span className="bg-gradient-to-r from-white to-pink-400 bg-clip-text text-transparent">

                            I'M Muhammad Khilmi

                        </span>

                        <span className="mt-2 block text-pink-400">

                            Lutfan Albab

                        </span>

                    </h1>

                    {/* DESC */}
                    <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg lg:mx-0 lg:mt-8">

                        Building modern digital experiences with clean UI,
                        smooth interaction, and creative frontend development.

                    </p>

                    {/* STATS */}
                    <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 md:mt-10">

                        {achievements.map(
                            (
                                achievement,
                                index
                            ) => (
                                <div
                                    key={index}
                                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center shadow-[0_0_60px_rgba(236,72,153,0.12)] backdrop-blur-xl transition-all duration-300 hover:border-pink-500/30"
                                >

                                    <div className="mb-2 flex items-center justify-center gap-2">

                                        {
                                            achievement.icon
                                        }

                                        <div className="text-xl font-bold text-white sm:text-2xl">

                                            {
                                                achievement.number
                                            }

                                        </div>

                                    </div>

                                    <div className="text-[11px] text-white/60 sm:text-xs">

                                        {
                                            achievement.label
                                        }

                                    </div>

                                </div>
                            )
                        )}

                    </div>

                    {/* BUTTONS */}
                    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap lg:justify-start md:mt-10">

                        <motion.a
                            href="#projects"
                            whileHover={{
                                scale: 1.05,
                            }}
                            className="flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-4 text-sm font-semibold text-white shadow-[0_0_60px_rgba(236,72,153,0.18)] sm:px-8 sm:text-base"
                        >

                            <Code className="h-5 w-5" />

                            View Projects

                        </motion.a>

                        <motion.a
                            href="#contact"
                            whileHover={{
                                scale: 1.05,
                            }}
                            className="flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-white backdrop-blur-xl sm:px-8 sm:text-base"
                        >

                            <Mail className="h-4 w-4" />

                            Contact Me

                        </motion.a>

                        <motion.button
                            onClick={
                                handleViewResume
                            }
                            whileHover={{
                                scale: 1.05,
                            }}
                            className="flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-white/70 backdrop-blur-xl sm:text-base"
                        >

                            <Download className="h-4 w-4" />

                            View Resume

                        </motion.button>

                    </div>

                </motion.div>

                {/* RIGHT */}
                <motion.div
                    initial={{
                        opacity: 0,
                        x: 40,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                    className="relative w-full"
                >

                    <div className="w-full rounded-3xl border border-white/10 bg-white/5 p-4 shadow-[0_0_60px_rgba(236,72,153,0.12)] backdrop-blur-xl sm:p-6 lg:ml-4 lg:p-8">

                        {/* TOP */}
                        <div className="relative mb-6 flex items-center">

                            <div className="flex gap-2">

                                <div className="h-3 w-3 rounded-full bg-red-400" />

                                <div className="h-3 w-3 rounded-full bg-yellow-400" />

                                <div className="h-3 w-3 rounded-full bg-green-400" />

                            </div>

                            <div className="absolute left-1/2 -translate-x-1/2 font-mono text-xs text-white/50 sm:text-sm">

                                portfolio.js

                            </div>

                        </div>

                        {/* CODE */}
                        <div className="min-h-[340px] overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 font-mono text-[11px] sm:min-h-[420px] sm:p-6 sm:text-sm">

                            {codeSnippets.map(
                                (
                                    line,
                                    index
                                ) => (
                                    <div
                                        key={index}
                                        className="min-h-[24px] break-words"
                                    >

                                        {index <
                                        currentCodeLine ? (
                                            <span
                                                className={`${
                                                    line.includes(
                                                        "import"
                                                    )
                                                        ? "text-purple-400"
                                                        : line.includes(
                                                              "const"
                                                          )
                                                        ? "text-pink-400"
                                                        : line.includes(
                                                              "name:"
                                                          )
                                                        ? "text-cyan-400"
                                                        : line.includes(
                                                              "stack:"
                                                          )
                                                        ? "text-yellow-300"
                                                        : line.includes(
                                                              "focus:"
                                                          )
                                                        ? "text-green-400"
                                                        : line.includes(
                                                              "status:"
                                                          )
                                                        ? "text-orange-300"
                                                        : line.includes(
                                                              "console.log"
                                                          )
                                                        ? "text-red-400"
                                                        : "text-white/80"
                                                }`}
                                            >
                                                {line}
                                            </span>
                                        ) : (
                                            ""
                                        )}

                                        {index ===
                                            currentCodeLine && (
                                            <>
                                                <span
                                                    className={`${
                                                        displayedCode.includes(
                                                            "import"
                                                        )
                                                            ? "text-purple-400"
                                                            : displayedCode.includes(
                                                                  "const"
                                                              )
                                                            ? "text-pink-400"
                                                            : displayedCode.includes(
                                                                  "name:"
                                                              )
                                                            ? "text-cyan-400"
                                                            : displayedCode.includes(
                                                                  "stack:"
                                                              )
                                                            ? "text-yellow-300"
                                                            : displayedCode.includes(
                                                                  "focus:"
                                                              )
                                                            ? "text-green-400"
                                                            : displayedCode.includes(
                                                                  "status:"
                                                              )
                                                            ? "text-orange-300"
                                                            : displayedCode.includes(
                                                                  "console.log"
                                                              )
                                                            ? "text-red-400"
                                                            : "text-white/80"
                                                    }`}
                                                >
                                                    {
                                                        displayedCode
                                                    }
                                                </span>

                                                <motion.span
                                                    animate={{
                                                        opacity: [
                                                            1,
                                                            0,
                                                            1,
                                                        ],
                                                    }}
                                                    transition={{
                                                        duration: 0.8,
                                                        repeat:
                                                            Infinity,
                                                    }}
                                                    className="ml-1 text-pink-400"
                                                >
                                                    ▊
                                                </motion.span>
                                            </>
                                        )}

                                    </div>
                                )
                            )}

                        </div>

                    </div>

                </motion.div>

            </div>

            {/* SCROLL */}
            <motion.div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center sm:flex">

                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-pink-400 backdrop-blur-xl">

                    <MousePointerClick className="h-3 w-3" />

                    Explore Portfolio

                </div>

            </motion.div>

        </section>
    );
};