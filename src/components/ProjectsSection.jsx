import { motion } from "framer-motion";

import {
    ExternalLink,
    Sparkles,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

const projects = [
    {
        number: "01",

        title: "BelanjaKu App",

        description:
            "Modern mobile shopping application with wishlist, cart system, and responsive user interface.",

        tech: [
            "React Native",
            "Expo",
            "Firebase",
        ],

        github: "#",

        demo: "#",

        status:
            "In Development",
    },

    {
        number: "02",

        title: "Dead Zone Survival",

        description:
            "Game UI design concept with survival theme, dark atmosphere, and immersive interface experience.",

        tech: [
            "Figma",
            "UI Design",
            "Game Design",
        ],

        github: "#",

        demo: "#",

        status:
            "Design Concept",
    },

    {
        number: "03",

        title: "Yumigo App",

        description:
            "Modern food ordering mobile app designed in Figma with clean UI and user-friendly experience.",

        tech: [
            "Figma",
            "UI/UX",
            "Mobile Design",
        ],

        github: "#",

        demo: "#",

        status:
            "UI Design",
    },

    {
        number: "04",

        title: "Workforge",

        description:
            "Modern job portal website for job seekers and recruiters with clean and responsive design.",

        tech: [
            "React",
            "Laravel",
            "Tailwind",
        ],

        github: "#",

        demo: "#",

        status:
            "In Development",
    },

    {
        number: "05",

        title: "EZFutsal",

        description:
            "Futsal field booking website with modern booking flow and user-friendly interface.",

        tech: [
            "React",
            "PHP",
            "MySQL",
        ],

        github: "#",

        demo: "#",

        status:
            "In Development",
    },

    {
        number: "06",

        title: "Personal Portfolio",

        description:
            "Modern animated portfolio website with neon UI, responsive layout, and smooth interaction.",

        tech: [
            "React",
            "Tailwind",
            "Framer Motion",
        ],

        github: "#",

        demo: "#",

        status:
            "Live Project",
    },

    {
    number: "07",

    title: "My Cooking Hobby",

    description:
        "Modern mobile cooking application with clean UI, recipe categories, wishlist feature, and smooth user experience.",

    tech: [
        "React Native",
        "Expo",
        "JavaScript",
        "Tailwind CSS",
    ],

    github: "#",

    demo: "#",

    status:
        "Mobile App",
},
];

export const ProjectsSection =
    () => {
        return (
            <section
                id="projects"
                className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
            >

                {/* BG */}
                <div className="absolute inset-0 overflow-hidden">

                    <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl md:h-96 md:w-96" />

                    <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl md:h-96 md:w-96" />

                    <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />

                </div>

                <div className="relative mx-auto w-full max-w-7xl">

                    {/* HEADER */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 30,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.7,
                        }}
                        className="mb-14 text-center md:mb-20"
                    >

                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/10 px-5 py-2 text-sm font-medium text-pink-400">

                            <Sparkles className="h-4 w-4" />

                            My Projects

                        </div>

                        <h2 className="mb-5 bg-gradient-to-r from-white to-pink-400 bg-clip-text text-4xl font-bold leading-[1.05] text-transparent sm:text-5xl md:text-6xl lg:text-7xl">

                            Featured
                            <br />
                            Projects

                        </h2>

                        <p className="mx-auto max-w-3xl px-2 text-base leading-relaxed text-white/70 sm:text-lg">

                            A collection of
                            projects I built
                            to improve my
                            frontend and UI
                            development
                            skills with
                            modern design
                            experiences.

                        </p>

                    </motion.div>

                    {/* PROJECT GRID */}
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">

                        {projects.map(
                            (
                                project,
                                index
                            ) => (
                                <motion.div
                                    key={
                                        index
                                    }
                                    initial={{
                                        opacity: 0,
                                        y: 30,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        delay:
                                            index *
                                            0.1,
                                    }}
                                    className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/5 p-4 shadow-[0_0_60px_rgba(236,72,153,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-pink-500/30 hover:shadow-[0_0_90px_rgba(236,72,153,0.18)] sm:rounded-[32px] sm:p-6 lg:p-7"
                                >

                                    {/* TOP LINE */}
                                    <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-pink-500 to-purple-600" />

                                    {/* NUMBER */}
                                    <div className="mb-4 text-[10px] font-semibold tracking-[0.25em] text-pink-400/70 sm:mb-5 sm:text-sm">

                                        {
                                            project.number
                                        }

                                    </div>

                                    {/* STATUS */}
                                    <div className="mb-4 inline-flex w-fit rounded-full border border-pink-500/20 bg-pink-500/10 px-3 py-1 text-[10px] font-medium text-pink-400 sm:mb-5 sm:px-4 sm:text-xs">

                                        {
                                            project.status
                                        }

                                    </div>

                                    {/* TITLE */}
                                    <h3 className="mb-3 text-lg font-bold leading-tight text-white sm:mb-4 sm:text-2xl">

                                        {
                                            project.title
                                        }

                                    </h3>

                                    {/* DESC */}
                                    <p className="mb-5 text-xs leading-relaxed text-white/70 sm:mb-6 sm:text-sm">

                                        {
                                            project.description
                                        }

                                    </p>

                                    {/* TECH */}
                                    <div className="mb-6 flex flex-wrap gap-2 sm:mb-8">

                                        {project.tech.map(
                                            (
                                                item,
                                                i
                                            ) => (
                                                <span
                                                    key={
                                                        i
                                                    }
                                                    className="rounded-full border border-pink-500/20 bg-white/5 px-2 py-1 text-[10px] text-pink-300 sm:px-3 sm:text-xs"
                                                >

                                                    {
                                                        item
                                                    }

                                                </span>
                                            )
                                        )}

                                    </div>

                                    {/* BUTTONS */}
                                    <div className="mt-auto flex flex-col gap-3 sm:flex-row sm:flex-wrap">

                                        <a
                                            href={
                                                project.github
                                            }
                                            className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white transition-all duration-300 hover:border-pink-500/30 hover:bg-pink-500/10 sm:text-sm"
                                        >

                                            <FaGithub className="h-4 w-4" />

                                            GitHub

                                        </a>

                                        <a
                                            href={
                                                project.demo
                                            }
                                            className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 text-xs font-medium text-white transition-all duration-300 hover:scale-105 sm:text-sm"
                                        >

                                            <ExternalLink className="h-4 w-4" />

                                            Live Demo

                                        </a>

                                    </div>

                                </motion.div>
                            )
                        )}

                        {/* COMING SOON */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.7,
                                delay: 0.3,
                            }}
                            className="flex min-h-[240px] items-center justify-center rounded-[24px] border border-dashed border-pink-500/20 bg-white/[0.03] p-6 text-center sm:min-h-[320px] sm:rounded-[32px] sm:p-10"
                        >

                            <div>

                                <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">

                                    More Projects
                                    Soon...

                                </h3>

                                <p className="text-sm text-white/60 sm:text-base">

                                    Currently building
                                    more modern and
                                    interactive projects.

                                </p>

                            </div>

                        </motion.div>

                    </div>

                </div>

            </section>
        );
    };