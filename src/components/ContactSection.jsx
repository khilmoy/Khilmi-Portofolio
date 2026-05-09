import { motion } from "framer-motion";

import {
    Mail,
    MapPin,
    Sparkles,
    Send,
} from "lucide-react";

import {
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaWhatsapp,
} from "react-icons/fa";

/* FOTO */
import profileImage from "../assets/Projects/project-profile.png";

export const ContactSection = () => {
    return (
        <section
            id="contact"
            className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
        >

            {/* BG */}
            <div className="absolute inset-0 overflow-hidden">

                <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-pink-500/10 blur-3xl md:h-[500px] md:w-[500px]" />

                <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-3xl md:h-[500px] md:w-[500px]" />

                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />

            </div>

            {/* MAIN */}
            <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">

                {/* LEFT */}
                <motion.div
                    initial={{
                        opacity: 0,
                        x: -50,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                    className="relative z-20"
                >

                    {/* BADGE */}
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/10 px-5 py-2 text-sm font-medium text-pink-400">

                        <Sparkles className="h-4 w-4" />

                        Contact Me

                    </div>

                    {/* TITLE */}
                    <h2 className="mb-6 bg-gradient-to-r from-white via-pink-200 to-pink-500 bg-clip-text text-4xl font-bold leading-[1.05] text-transparent sm:text-5xl md:text-6xl lg:text-7xl">

                        Let’s Build
                        <br />
                        Something
                        <br />
                        Amazing

                    </h2>

                    {/* DESC */}
                    <p className="mb-10 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">

                        I’m open for collaboration,
                        freelance projects, and
                        creative digital experiences.
                        Let’s connect and create
                        something impactful together.

                    </p>

                    {/* SOCIAL GRID */}
                    <div className="grid grid-cols-2 gap-4">

                        {/* IG */}
                        <a
                            href="https://instagram.com/khlmiltfn_"
                            target="_blank"
                            rel="noreferrer"
                            className="group flex flex-col items-center gap-3 rounded-[24px] border border-white/10 bg-white/[0.04] p-4 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-pink-500/30 hover:bg-pink-500/10 sm:flex-row sm:items-center sm:gap-4 sm:p-5 sm:text-left"
                        >

                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-[0_0_30px_rgba(236,72,153,0.4)] sm:h-14 sm:w-14">

                                <FaInstagram className="text-xl sm:text-2xl" />

                            </div>

                            <div>

                                <h3 className="text-sm font-semibold text-white sm:text-base">

                                    Instagram

                                </h3>

                                <p className="text-xs text-white/60 sm:text-sm">

                                    @khlmiltfn_

                                </p>

                            </div>

                        </a>

                        {/* LINKEDIN */}
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                            className="group flex flex-col items-center gap-3 rounded-[24px] border border-white/10 bg-white/[0.04] p-4 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-pink-500/30 hover:bg-pink-500/10 sm:flex-row sm:items-center sm:gap-4 sm:p-5 sm:text-left"
                        >

                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-[0_0_30px_rgba(236,72,153,0.4)] sm:h-14 sm:w-14">

                                <FaLinkedin className="text-xl sm:text-2xl" />

                            </div>

                            <div>

                                <h3 className="text-sm font-semibold text-white sm:text-base">

                                    LinkedIn

                                </h3>

                                <p className="text-xs text-white/60 sm:text-sm">

                                    Khilmi Lutfan

                                </p>

                            </div>

                        </a>

                        {/* GITHUB */}
                        <a
                            href="https://github.com/khilmoy"
                            target="_blank"
                            rel="noreferrer"
                            className="group flex flex-col items-center gap-3 rounded-[24px] border border-white/10 bg-white/[0.04] p-4 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-pink-500/30 hover:bg-pink-500/10 sm:flex-row sm:items-center sm:gap-4 sm:p-5 sm:text-left"
                        >

                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-[0_0_30px_rgba(236,72,153,0.4)] sm:h-14 sm:w-14">

                                <FaGithub className="text-xl sm:text-2xl" />

                            </div>

                            <div>

                                <h3 className="text-sm font-semibold text-white sm:text-base">

                                    GitHub

                                </h3>

                                <p className="text-xs text-white/60 sm:text-sm">

                                    khilmoy

                                </p>

                            </div>

                        </a>

                        {/* WA */}
                        <a
                            href="https://wa.me/6282132929501"
                            target="_blank"
                            rel="noreferrer"
                            className="group flex flex-col items-center gap-3 rounded-[24px] border border-white/10 bg-white/[0.04] p-4 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-pink-500/30 hover:bg-pink-500/10 sm:flex-row sm:items-center sm:gap-4 sm:p-5 sm:text-left"
                        >

                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-[0_0_30px_rgba(236,72,153,0.4)] sm:h-14 sm:w-14">

                                <FaWhatsapp className="text-xl sm:text-2xl" />

                            </div>

                            <div>

                                <h3 className="text-sm font-semibold text-white sm:text-base">

                                    WhatsApp

                                </h3>

                                <p className="text-xs text-white/60 sm:text-sm">

                                    0821-3292-9501

                                </p>

                            </div>

                        </a>

                    </div>

                    {/* FORM */}
                    <div className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl shadow-[0_0_60px_rgba(236,72,153,0.08)] sm:rounded-[32px] sm:p-8">

                        <h3 className="mb-8 flex items-center gap-3 text-2xl font-bold text-white sm:text-3xl">

                            <span className="h-4 w-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600" />

                            Send Me a Message

                        </h3>

                        <form className="space-y-6">

                            <div>

                                <label className="mb-3 block text-sm font-medium text-white/80">

                                    Your Name

                                </label>

                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-pink-500/40 focus:ring-4 focus:ring-pink-500/10 sm:text-base"
                                />

                            </div>

                            <div>

                                <label className="mb-3 block text-sm font-medium text-white/80">

                                    Your Email

                                </label>

                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-pink-500/40 focus:ring-4 focus:ring-pink-500/10 sm:text-base"
                                />

                            </div>

                            <div>

                                <label className="mb-3 block text-sm font-medium text-white/80">

                                    Your Message

                                </label>

                                <textarea
                                    rows="6"
                                    placeholder="Hey, I'd love to collaborate on..."
                                    className="h-40 w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-pink-500/40 focus:ring-4 focus:ring-pink-500/10 sm:text-base"
                                />

                            </div>

                            <button
                                type="submit"
                                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-4 text-base font-semibold text-white shadow-[0_0_40px_rgba(236,72,153,0.35)] transition-all duration-300 hover:scale-[1.02] sm:text-lg"
                            >

                                Send Message

                                <Send className="h-5 w-5" />

                            </button>

                        </form>

                    </div>

                </motion.div>

                {/* RIGHT */}
                <motion.div
                    initial={{
                        opacity: 0,
                        x: 50,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                    className="relative flex flex-col items-center lg:pt-20"
                >

                    {/* GLOW */}
                    <div className="absolute top-20 h-[260px] w-[260px] rounded-full bg-pink-500/20 blur-3xl sm:top-32 sm:h-[420px] sm:w-[420px]" />

                    {/* IMAGE */}
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="relative z-10 w-full max-w-[240px] -translate-y-4 object-contain drop-shadow-[0_0_80px_rgba(236,72,153,0.35)] sm:max-w-[350px] lg:max-w-[450px]"
                    />

                    {/* CARD */}
                    <div className="relative z-20 w-full rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl shadow-[0_0_60px_rgba(236,72,153,0.08)] sm:rounded-[32px] sm:p-8">

                        {/* EMAIL */}
                        <div className="mb-5 rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-5">

                            <div className="flex items-start gap-4 text-left">

                                {/* ICON */}
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white">

                                    <Mail className="h-5 w-5" />

                                </div>

                                {/* CONTENT */}
                                <div className="min-w-0 flex-1 text-left">

                                    <p className="text-sm font-medium text-pink-400">

                                        Email

                                    </p>

                                    <h3 className="mt-1 break-words text-left text-sm font-medium leading-relaxed text-white sm:text-base">

                                        khilmilutfan76@gmail.com

                                    </h3>

                                </div>

                            </div>

                        </div>

                        {/* LOCATION */}
                        <div className="mb-8 rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-5">

                            <div className="flex items-start gap-4 text-left">

                                {/* ICON */}
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white">

                                    <MapPin className="h-5 w-5" />

                                </div>

                                {/* CONTENT */}
                                <div className="min-w-0 flex-1 text-left">

                                    <p className="text-sm font-medium text-pink-400">

                                        Location

                                    </p>

                                    <h3 className="mt-1 break-words text-left text-sm font-medium leading-relaxed text-white sm:text-base">

                                        Jl. Melati, Pandan, Canggu,
                                        Badas, Kediri, Jawa Timur

                                    </h3>

                                </div>

                            </div>

                        </div>

                        {/* QUOTE */}
                        <div className="border-t border-white/10 pt-8">

                            <h3 className="text-center text-2xl font-bold leading-[1.5] text-white sm:text-3xl md:text-4xl">

                                “Creating clean code
                                and meaningful
                                experiences.”

                            </h3>

                            <div className="mx-auto mt-8 h-[3px] w-24 rounded-full bg-gradient-to-r from-pink-500 to-purple-600" />

                        </div>

                    </div>

                </motion.div>

            </div>

            {/* FOOTER */}
            <div className="relative mt-20 border-t border-white/10 pt-8 text-center sm:mt-24">

                <p className="text-xs text-white/50 sm:text-sm">

                    © 2026 Khilmi Lutfan
                    Portfolio • Built with
                    React & Tailwind CSS

                </p>

            </div>

        </section>
    );
};