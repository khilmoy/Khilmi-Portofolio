import { useState } from "react";

import {
    motion,
    AnimatePresence,
} from "framer-motion";

/* ICONS */
import htmlIcon from "../assets/icon/html.png";
import cssIcon from "../assets/icon/css.png";
import jsIcon from "../assets/icon/javascript.png";
import reactIcon from "../assets/icon/react.png";
import tailwindIcon from "../assets/icon/tailwind.png";
import phpIcon from "../assets/icon/php.png";
import laravelIcon from "../assets/icon/laravel.png";
import mysqlIcon from "../assets/icon/mysql.png";
import figmaIcon from "../assets/icon/figma.png";
import gitIcon from "../assets/icon/git.png";
import githubIcon from "../assets/icon/github.png";
import vscodeIcon from "../assets/icon/vscode.png";
import pythonIcon from "../assets/icon/python.png";

const skills = [
    {
        name: "HTML",
        level: 90,
        category: "frontend",
        icon: "html",
    },

    {
        name: "CSS",
        level: 85,
        category: "frontend",
        icon: "css",
    },

    {
        name: "JavaScript",
        level: 82,
        category: "frontend",
        icon: "javascript",
    },

    {
        name: "React",
        level: 86,
        category: "frontend",
        icon: "react",
    },

    {
        name: "Tailwind",
        level: 88,
        category: "frontend",
        icon: "tailwind",
    },

    {
        name: "PHP",
        level: 75,
        category: "backend",
        icon: "php",
    },

    {
        name: "Laravel",
        level: 72,
        category: "backend",
        icon: "laravel",
    },

    {
        name: "MySQL",
        level: 78,
        category: "backend",
        icon: "mysql",
    },

    {
        name: "Python",
        level: 65,
        category: "backend",
        icon: "python",
    },

    {
        name: "Git",
        level: 82,
        category: "tools",
        icon: "git",
    },

    {
        name: "GitHub",
        level: 85,
        category: "tools",
        icon: "github",
    },

    {
        name: "VS Code",
        level: 95,
        category: "tools",
        icon: "vscode",
    },

    {
        name: "Figma",
        level: 80,
        category: "tools",
        icon: "figma",
    },
];

const categories = [
    {
        id: "all",
        label: "All Skills",
    },

    {
        id: "frontend",
        label: "Frontend",
    },

    {
        id: "backend",
        label: "Backend",
    },

    {
        id: "tools",
        label: "Tools",
    },
];

const iconImages = {
    html: htmlIcon,
    css: cssIcon,
    javascript: jsIcon,
    react: reactIcon,
    tailwind: tailwindIcon,
    php: phpIcon,
    laravel: laravelIcon,
    mysql: mysqlIcon,
    figma: figmaIcon,
    git: gitIcon,
    github: githubIcon,
    vscode: vscodeIcon,
    python: pythonIcon,
};

const SkillBar = ({
    level,
}) => (
    <div className="h-3 w-full overflow-hidden rounded-full bg-white/10">

        <motion.div
            initial={{
                width: 0,
            }}
            whileInView={{
                width: `${level}%`,
            }}
            transition={{
                duration: 1.5,
            }}
            className="h-full rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
        />

    </div>
);

const InfiniteScrollSkills = ({
    skills,
}) => {
    const duplicatedSkills = [
        ...skills,
        ...skills,
    ];

    return (
        <div className="space-y-8 overflow-hidden py-6 sm:space-y-10 sm:py-10">

            {/* ROW 1 */}
            <motion.div
                className="flex gap-6 sm:gap-8"
                animate={{
                    x: [
                        "0%",
                        "-50%",
                    ],
                }}
                transition={{
                    duration: 18,
                    repeat:
                        Infinity,
                    ease: "linear",
                }}
            >

                {duplicatedSkills.map(
                    (
                        skill,
                        index
                    ) => (
                        <div
                            key={`${skill.name}-${index}`}
                            className="flex min-w-[100px] flex-col items-center gap-3 sm:min-w-[120px]"
                        >

                            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-pink-500/20 bg-white/5 shadow-[0_0_35px_rgba(236,72,153,0.12)] backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-pink-500/40 sm:h-20 sm:w-20">

                                <img
                                    src={
                                        iconImages[
                                            skill.icon
                                        ]
                                    }
                                    alt={
                                        skill.name
                                    }
                                    className="h-8 w-8 object-contain sm:h-10 sm:w-10"
                                />

                            </div>

                            <span className="text-xs font-medium text-white/70 sm:text-sm">

                                {
                                    skill.name
                                }

                            </span>

                        </div>
                    )
                )}

            </motion.div>

            {/* ROW 2 */}
            <motion.div
                className="flex gap-6 sm:gap-8"
                animate={{
                    x: [
                        "-50%",
                        "0%",
                    ],
                }}
                transition={{
                    duration: 18,
                    repeat:
                        Infinity,
                    ease: "linear",
                }}
            >

                {[...duplicatedSkills]
                    .reverse()
                    .map(
                        (
                            skill,
                            index
                        ) => (
                            <div
                                key={`${skill.name}-reverse-${index}`}
                                className="flex min-w-[100px] flex-col items-center gap-3 sm:min-w-[120px]"
                            >

                                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-pink-500/20 bg-white/5 shadow-[0_0_35px_rgba(236,72,153,0.12)] backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-pink-500/40 sm:h-20 sm:w-20">

                                    <img
                                        src={
                                            iconImages[
                                                skill
                                                    .icon
                                            ]
                                        }
                                        alt={
                                            skill.name
                                        }
                                        className="h-8 w-8 object-contain sm:h-10 sm:w-10"
                                    />

                                </div>

                                <span className="text-xs font-medium text-white/70 sm:text-sm">

                                    {
                                        skill.name
                                    }

                                </span>

                            </div>
                        )
                    )}

            </motion.div>

        </div>
    );
};

export const SkillsSection =
    () => {
        const [
            activeCategory,
            setActiveCategory,
        ] = useState(
            "all"
        );

        const filteredSkills =
            skills.filter(
                (
                    skill
                ) =>
                    activeCategory ===
                        "all" ||
                    skill.category ===
                        activeCategory
            );

        return (
            <section
                id="skills"
                className="relative overflow-hidden bg-transparent px-4 py-24 sm:px-6 lg:px-8"
            >

                {/* BG */}
                <div className="absolute inset-0 overflow-hidden">

                    <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl md:h-96 md:w-96" />

                    <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl md:h-96 md:w-96" />

                    <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />

                </div>

                <div className="relative mx-auto w-full max-w-7xl">

                    {/* HEADER */}
                    <div className="mb-14 text-center md:mb-20">

                        <h2 className="mb-5 bg-gradient-to-r from-white to-pink-400 bg-clip-text text-4xl font-bold leading-[1.05] text-transparent sm:text-5xl md:text-6xl lg:text-7xl">

                            My Skills

                        </h2>

                        <p className="mx-auto max-w-2xl px-2 text-base leading-relaxed text-white/70 sm:text-lg">

                            Technologies and tools
                            I use to build modern
                            digital experiences.

                        </p>

                    </div>

                    {/* CATEGORY */}
                    <div className="mb-12 flex flex-wrap justify-center gap-3 sm:mb-16 sm:gap-4">

                        {categories.map(
                            (
                                category
                            ) => (
                                <motion.button
                                    key={
                                        category.id
                                    }
                                    whileHover={{
                                        scale: 1.05,
                                    }}
                                    whileTap={{
                                        scale: 0.95,
                                    }}
                                    onClick={() =>
                                        setActiveCategory(
                                            category.id
                                        )
                                    }
                                    className={`rounded-full border px-5 py-3 text-sm font-medium transition-all duration-300 sm:px-6 ${
                                        activeCategory ===
                                        category.id
                                            ? "border-pink-500/40 bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-[0_0_35px_rgba(236,72,153,0.2)]"
                                            : "border-white/10 bg-white/5 text-white/70 hover:border-pink-500/20"
                                    }`}
                                >

                                    {
                                        category.label
                                    }

                                </motion.button>
                            )
                        )}

                    </div>

                    {/* ALL */}
                    {activeCategory ===
                    "all" ? (
                        <InfiniteScrollSkills
                            skills={
                                skills
                            }
                        />
                    ) : (
                        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">

                            <AnimatePresence>

                                {filteredSkills.map(
                                    (
                                        skill
                                    ) => (
                                        <motion.div
                                            key={
                                                skill.name
                                            }
                                            initial={{
                                                opacity: 0,
                                                y: 20,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            exit={{
                                                opacity: 0,
                                            }}
                                            className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_0_50px_rgba(236,72,153,0.08)] backdrop-blur-xl transition-all duration-300 hover:border-pink-500/30 hover:shadow-[0_0_60px_rgba(236,72,153,0.18)] sm:p-6"
                                        >

                                            <div className="mb-5 flex items-center gap-4">

                                                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-pink-500/20 bg-white/5 sm:h-14 sm:w-14">

                                                    <img
                                                        src={
                                                            iconImages[
                                                                skill
                                                                    .icon
                                                            ]
                                                        }
                                                        alt={
                                                            skill.name
                                                        }
                                                        className="h-7 w-7 object-contain sm:h-8 sm:w-8"
                                                    />

                                                </div>

                                                <div className="flex-1">

                                                    <div className="mb-2 flex items-center justify-between gap-3">

                                                        <h3 className="text-sm font-semibold text-white sm:text-base">

                                                            {
                                                                skill.name
                                                            }

                                                        </h3>

                                                        <span className="text-xs font-medium text-pink-400 sm:text-sm">

                                                            {
                                                                skill.level
                                                            }
                                                            %

                                                        </span>

                                                    </div>

                                                    <SkillBar
                                                        level={
                                                            skill.level
                                                        }
                                                    />

                                                </div>

                                            </div>

                                        </motion.div>
                                    )
                                )}

                            </AnimatePresence>

                        </div>
                    )}

                </div>

            </section>
        );
    };