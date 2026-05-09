import { motion } from "framer-motion";

import {
    Award,
    ExternalLink,
    Sparkles,
    ShieldCheck,
} from "lucide-react";

/* CERTIFICATE IMAGES */
import pythonCert from "../assets/certification/python.png";

import visualisasiCert from "../assets/certification/visualisasi-data.png";

import machineLearningCert from "../assets/certification/machine-learning.png";

import webinarAiCert from "../assets/certification/webinar-ai.png";

const certifications = [
    {
        title:
            "Memulai Pemrograman dengan Python",

        issuer:
            "Dicoding Indonesia",

        year: "2024",

        type:
            "Certification",

        image:
            pythonCert,
    },

    {
        title:
            "Belajar Dasar Visualisasi Data",

        issuer:
            "Dicoding Indonesia",

        year: "2024",

        type:
            "Certification",

        image:
            visualisasiCert,
    },

    {
        title:
            "Belajar Machine Learning untuk Pemula",

        issuer:
            "Dicoding Indonesia",

        year: "2024",

        type:
            "Certification",

        image:
            machineLearningCert,
    },

    {
        title:
            "Webinar Nasional AI & Multimedia",

        issuer:
            "Universitas STEKOM",

        year: "2025",

        type:
            "Workshop",

        image:
            webinarAiCert,
    },
];

export const CertificationsSection =
    () => {
        return (
            <section
                id="certifications"
                className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
            >

                {/* BACKGROUND */}
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
                            y: 40,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: false,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.8,
                        }}
                        className="mb-14 text-center md:mb-20"
                    >

                        {/* BADGE */}
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/10 px-5 py-2 text-sm font-medium text-pink-400">

                            <Sparkles className="h-4 w-4" />

                            My Certifications

                        </div>

                        {/* TITLE */}
                        <h2 className="mb-5 bg-gradient-to-r from-white via-pink-200 to-pink-500 bg-clip-text text-4xl font-bold leading-[1.05] text-transparent sm:text-5xl md:text-6xl lg:text-7xl">

                            Certifications
                            <br />
                            & Achievements

                        </h2>

                        {/* DESC */}
                        <p className="mx-auto max-w-3xl px-2 text-sm leading-relaxed text-white/70 sm:text-base md:text-lg">

                            Certifications and
                            workshops that
                            helped improve my
                            programming,
                            design, and
                            technology skills.

                        </p>

                    </motion.div>

                    {/* GRID */}
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">

                        {certifications.map(
                            (
                                cert,
                                index
                            ) => (
                                <motion.div
                                    key={
                                        index
                                    }
                                    initial={{
                                        opacity: 0,
                                        y: 60,
                                        scale: 0.92,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        scale: 1,
                                    }}
                                    viewport={{
                                        once: false,
                                        amount: 0.2,
                                    }}
                                    transition={{
                                        duration: 0.7,
                                        delay:
                                            index *
                                            0.08,
                                        ease: "easeOut",
                                    }}
                                    whileHover={{
                                        y: -10,
                                    }}
                                    className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.04] shadow-[0_0_50px_rgba(236,72,153,0.08)] backdrop-blur-xl transition-all duration-300 hover:border-pink-500/30 hover:shadow-[0_0_80px_rgba(236,72,153,0.18)] sm:rounded-[32px]"
                                >

                                    {/* GLOW */}
                                    <div className="absolute -top-20 right-0 h-40 w-40 rounded-full bg-pink-500/10 blur-3xl" />

                                    {/* TOP LINE */}
                                    <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-pink-500 to-purple-600" />

                                    {/* IMAGE */}
                                    <div className="relative overflow-hidden bg-white p-2 sm:p-3">

                                        <div className="absolute inset-0 z-10 bg-black/5 transition-all duration-300 group-hover:bg-black/0" />

                                        <img
                                            src={
                                                cert.image
                                            }
                                            alt={
                                                cert.title
                                            }
                                            className="h-[95px] w-full rounded-lg object-contain transition-all duration-500 group-hover:scale-[1.03] sm:h-[170px] sm:rounded-xl"
                                        />

                                    </div>

                                    {/* CONTENT */}
                                    <div className="flex flex-1 flex-col p-3 text-left sm:p-5">

                                        {/* TOP */}
                                        <div className="mb-3 flex items-center justify-between gap-2">

                                            <div className="inline-flex items-center gap-1 rounded-full border border-pink-500/20 bg-pink-500/10 px-2 py-1 text-[8px] font-medium text-pink-400 sm:gap-2 sm:px-3 sm:text-xs">

                                                <Award className="h-3 w-3" />

                                                {
                                                    cert.type
                                                }

                                            </div>

                                            <div className="flex items-center gap-1 text-[9px] text-white/50 sm:gap-2 sm:text-sm">

                                                <ShieldCheck className="h-3.5 w-3.5 text-pink-400" />

                                                {
                                                    cert.year
                                                }

                                            </div>

                                        </div>

                                        {/* TITLE */}
                                        <h3 className="mb-2 text-[11px] font-bold leading-[1.5] text-white transition-all duration-300 group-hover:text-pink-300 sm:mb-3 sm:text-lg lg:text-xl">

                                            {
                                                cert.title
                                            }

                                        </h3>

                                        {/* ISSUER */}
                                        <p className="mb-4 text-[10px] leading-relaxed text-white/60 sm:mb-6 sm:text-sm">

                                            {
                                                cert.issuer
                                            }

                                        </p>

                                        {/* BUTTON */}
                                        <a
                                            href={
                                                cert.image
                                            }
                                            target="_blank"
                                            rel="noreferrer"
                                            className="mt-auto inline-flex items-center justify-center gap-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-3 py-2 text-[9px] font-medium text-white transition-all duration-300 hover:scale-105 sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm"
                                        >

                                            <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4" />

                                            View Certificate

                                        </a>

                                    </div>

                                </motion.div>
                            )
                        )}

                    </div>

                </div>

            </section>
        );
    };