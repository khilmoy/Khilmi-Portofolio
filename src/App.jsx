import { useState } from "react";

import {
    Menu,
    X,
} from "lucide-react";

import logo from "./assets/logo/logo.png";

import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { CertificationsSection } from "./components/CertificationsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactSection } from "./components/ContactSection";

function App() {
    const [isOpen, setIsOpen] =
        useState(false);

    const navLinks = [
        {
            name: "Home",
            href: "#hero",
        },

        {
            name: "About",
            href: "#about",
        },

        {
            name: "Projects",
            href: "#projects",
        },

        {
            name: "Certificates",
            href: "#certifications",
        },

        {
            name: "Feedback",
            href: "#testimonials",
        },

        {
            name: "Contact",
            href: "#contact",
        },
    ];

    return (
        <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-[#07010F] via-[#0d0717] to-[#12091f] text-white">

            {/* NAVBAR */}
            <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/25 backdrop-blur-2xl">

                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

                    {/* DESKTOP LOGO */}
                    <a
                        href="#hero"
                        className="hidden items-center lg:flex"
                    >

                        <img
                            src={logo}
                            alt="KH Logo"
                            className="h-14 w-auto object-contain scale-[2.2] transition-all duration-300 hover:scale-[2.3]"
                        />

                    </a>

                    {/* MOBILE BUTTON */}
                    <button
                        onClick={() =>
                            setIsOpen(
                                !isOpen
                            )
                        }
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-pink-500/40 hover:bg-pink-500/10 lg:hidden"
                    >

                        {isOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}

                    </button>

                    {/* DESKTOP NAV */}
                    <nav className="hidden items-center gap-7 text-sm font-semibold text-white/75 lg:flex xl:gap-9 xl:text-base">

                        {navLinks.map(
                            (
                                item,
                                index
                            ) => (
                                <a
                                    key={
                                        index
                                    }
                                    href={
                                        item.href
                                    }
                                    className="relative transition-all duration-300 hover:text-pink-400"
                                >

                                    <span className="relative">

                                        {
                                            item.name
                                        }

                                    </span>

                                </a>
                            )
                        )}

                    </nav>

                    {/* MOBILE TITLE */}
                    <div className="absolute left-1/2 -translate-x-1/2 text-sm font-bold tracking-wide text-white lg:hidden">

                        Portfolio

                    </div>

                </div>

                {/* MOBILE MENU */}
                <div
                    className={`overflow-hidden border-t border-white/10 bg-[#0b0614]/95 backdrop-blur-2xl transition-all duration-300 lg:hidden ${
                        isOpen
                            ? "max-h-[700px] opacity-100"
                            : "max-h-0 opacity-0"
                    }`}
                >

                    <div className="flex flex-col items-center px-5 py-6">

                        {/* MOBILE LOGO */}
                        <div className="mb-6 flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-4">

                            <img
                                src={logo}
                                alt="KH Logo"
                                className="h-16 w-auto object-contain"
                            />

                        </div>

                        {/* MOBILE NAV */}
                        <nav className="flex w-full flex-col gap-2">

                            {navLinks.map(
                                (
                                    item,
                                    index
                                ) => (
                                    <a
                                        key={
                                            index
                                        }
                                        href={
                                            item.href
                                        }
                                        onClick={() =>
                                            setIsOpen(
                                                false
                                            )
                                        }
                                        className="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-4 text-sm font-semibold text-white/80 transition-all duration-300 hover:border-pink-500/30 hover:bg-pink-500/10 hover:text-pink-400 active:border-pink-500/40 active:bg-pink-500/20 active:text-pink-400"
                                    >

                                        <span>

                                            {
                                                item.name
                                            }

                                        </span>

                                        <span className="h-2 w-2 rounded-full bg-transparent transition-all duration-300 group-hover:bg-pink-400 group-hover:shadow-[0_0_12px_rgba(236,72,153,0.9)] group-active:bg-pink-400 group-active:shadow-[0_0_12px_rgba(236,72,153,0.9)]" />

                                    </a>
                                )
                            )}

                        </nav>

                    </div>

                </div>

            </header>

            {/* MAIN */}
            <main className="overflow-hidden">

                <HeroSection />

                <AboutSection />

                <SkillsSection />

                <ProjectsSection />

                <CertificationsSection />

                <TestimonialsSection />

                <ContactSection />

            </main>

        </div>
    );
}

export default App;