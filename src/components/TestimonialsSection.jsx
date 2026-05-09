import { motion } from "framer-motion";

import {
    Quote,
    Sparkles,
    Star,
} from "lucide-react";

/* AVATARS */
import client1 from "../assets/testimonials/client 1.png";
import client2 from "../assets/testimonials/client 2.png";
import client3 from "../assets/testimonials/client 3.png";

const testimonials = [
    {
        name: "Michael Carter",

        role: "UI/UX Designer",

        image: client1,

        review:
            "Khilmi delivered a modern UI with smooth interaction and responsive design. The final result feels premium and professional.",

        featured: false,
    },

    {
        name: "Sarah Johnson",

        role: "Frontend Collaborator",

        image: client2,

        review:
            "Very clean frontend structure and beautiful visual presentation. The animations and layouts were incredibly smooth.",

        featured: true,
    },

    {
        name: "Daniel Lee",

        role: "Project Partner",

        image: client3,

        review:
            "The portfolio and project presentation look amazing. Everything feels modern, elegant, and well organized.",

        featured: false,
    },
];

export const TestimonialsSection =
    () => {
        return (
            <section
                id="testimonials"
                className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
            >

                {/* BG */}
                <div className="absolute inset-0 overflow-hidden">

                    <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-pink-500/10 blur-3xl md:h-[450px] md:w-[450px]" />

                    <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-3xl md:h-[450px] md:w-[450px]" />

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
                            duration: 0.8,
                        }}
                        className="mb-14 text-center md:mb-20"
                    >

                        {/* BADGE */}
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/10 px-5 py-2 text-sm font-medium text-pink-400">

                            <Sparkles className="h-4 w-4" />

                            Client Feedback

                        </div>

                        {/* TITLE */}
                        <h2 className="mb-5 bg-gradient-to-r from-white via-pink-200 to-pink-500 bg-clip-text text-4xl font-bold leading-[1.05] text-transparent sm:text-5xl md:text-6xl lg:text-7xl">

                            What People
                            <br />
                            Say About Me

                        </h2>

                        {/* DESC */}
                        <p className="mx-auto max-w-3xl px-2 text-base leading-relaxed text-white/70 sm:text-lg">

                            Feedback from
                            collaborators,
                            project partners,
                            and creative people
                            who worked with me.

                        </p>

                    </motion.div>

                    {/* GRID */}
                    <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-8">

                        {testimonials.map(
                            (
                                item,
                                index
                            ) => (
                                <motion.div
                                    key={
                                        index
                                    }
                                    initial={{
                                        opacity: 0,
                                        y: 50,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.7,
                                        delay:
                                            index *
                                            0.15,
                                    }}
                                    className={`group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-pink-500/30 hover:bg-pink-500/[0.07] sm:rounded-[30px] sm:p-6 lg:p-8
                                        
                                        ${
                                            item.featured
                                                ? "shadow-[0_0_80px_rgba(236,72,153,0.18)]"
                                                : "shadow-[0_0_50px_rgba(236,72,153,0.08)]"
                                        }
                                    `}
                                >

                                    {/* GLOW */}
                                    <div className="absolute -top-24 right-0 h-44 w-44 rounded-full bg-pink-500/10 blur-3xl" />

                                    {/* QUOTE */}
                                    <div className="mb-5 flex items-center justify-between sm:mb-6">

                                        <div className="flex gap-1">

                                            {[...Array(5)].map(
                                                (
                                                    _,
                                                    i
                                                ) => (
                                                    <Star
                                                        key={
                                                            i
                                                        }
                                                        className="h-3 w-3 fill-pink-400 text-pink-400 sm:h-4 sm:w-4"
                                                    />
                                                )
                                            )}

                                        </div>

                                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-[0_0_30px_rgba(236,72,153,0.35)] sm:h-12 sm:w-12">

                                            <Quote className="h-4 w-4 sm:h-5 sm:w-5" />

                                        </div>

                                    </div>

                                    {/* REVIEW */}
                                    <p className="mb-6 text-xs leading-relaxed text-white/70 sm:mb-8 sm:text-[15px]">

                                        "
                                        {
                                            item.review
                                        }
                                        "

                                    </p>

                                    {/* USER */}
                                    <div className="mt-auto flex items-center gap-3 sm:gap-4">

                                        {/* AVATAR */}
                                        <img
                                            src={
                                                item.image
                                            }
                                            alt={
                                                item.name
                                            }
                                            className="h-12 w-12 rounded-2xl object-cover ring-2 ring-pink-500/20 sm:h-16 sm:w-16"
                                        />

                                        {/* INFO */}
                                        <div>

                                            <h3 className="text-sm font-semibold text-white sm:text-lg">

                                                {
                                                    item.name
                                                }

                                            </h3>

                                            <p className="text-xs text-pink-400 sm:text-sm">

                                                {
                                                    item.role
                                                }

                                            </p>

                                        </div>

                                    </div>

                                </motion.div>
                            )
                        )}

                    </div>

                </div>

            </section>
        );
    };