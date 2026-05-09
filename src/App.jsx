import { useState } from "react";

import {
    Menu,
    X,
} from "lucide-react";

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
            <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl">

                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:justify-center lg:px-8 lg:py-5">

                    {/* MOBILE BUTTON */}
                    <button
                        onClick={() =>
                            setIsOpen(
                                !isOpen
                            )
                        }
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
                    >

                        {isOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}

                    </button>

                    {/* DESKTOP NAV */}
                    <nav className="hidden flex-wrap items-center justify-center gap-12 text-xl font-semibold text-white/80 lg:flex">

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
                                    className="transition duration-300 hover:text-pink-400"
                                >

                                    {
                                        item.name
                                    }

                                </a>
                            )
                        )}

                    </nav>

                    {/* MOBILE TITLE */}
                    <div className="absolute left-1/2 -translate-x-1/2 text-lg font-bold text-white lg:hidden">

                        Portfolio

                    </div>

                </div>

                {/* MOBILE MENU */}
                <div
                    className={`overflow-hidden border-t border-white/10 bg-black/40 backdrop-blur-xl transition-all duration-300 lg:hidden ${
                        isOpen
                            ? "max-h-[500px] opacity-100"
                            : "max-h-0 opacity-0"
                    }`}
                >

                    <nav className="flex flex-col px-4 py-4">

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
                                    className="rounded-xl px-4 py-4 text-base font-semibold text-white/80 transition-all duration-300 hover:bg-white/5 hover:text-pink-400"
                                >

                                    {
                                        item.name
                                    }

                                </a>
                            )
                        )}

                    </nav>

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