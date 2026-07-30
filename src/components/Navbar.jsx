"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Menu,
    X,
    Search,
    ChevronDown,
    House,
    Pin,
} from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const navLinks = [
        { title: "Home", href: "/" },
        { title: "Reviews", href: "#reviews" },
        { title: "Buying Guides", href: "#buying-guides" },
        { title: "Categories", href: "#categories", dropdown: true },
        { title: "About", href: "#about" },
    ];

    return (
        <header className="sticky top-0 z-50 border-b border-stone-200 bg-[#F8F6F2]/90 backdrop-blur-xl">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#365947] text-white shadow">
                        <House size={20} />
                    </div>

                    <div>
                        <h1 className="font-serif text-xl font-bold tracking-tight text-[#1E1E1E]">
                            DreamHomeDecorHub
                        </h1>

                        <p className="text-xs text-stone-500">
                            Home Decor Reviews
                        </p>
                    </div>
                </Link>

                {/* Desktop Navigation */}

                <nav className="hidden items-center gap-8 lg:flex">
                    {navLinks.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            className="group flex items-center gap-1 font-medium text-stone-700 transition hover:text-[#365947]"
                        >
                            {item.title}

                            {item.dropdown && (
                                <ChevronDown
                                    size={16}
                                    className="transition group-hover:rotate-180"
                                />
                            )}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Right */}

                <div className="hidden items-center gap-3 lg:flex">

                    <button className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white transition hover:border-[#365947] hover:text-[#365947]">
                        <Search size={18} />
                    </button>

                    <a
                        href="https://in.pinterest.com/DecorHomeDecorHub/" target="_blank"
                        className="flex items-center gap-2 rounded-full bg-[#365947] px-5 py-3 font-medium text-white transition hover:bg-[#294437]"
                    >
                        <Pin size={17} />
                        Pinterest
                    </a>
                </div>

                {/* Mobile Button */}

                <button
                    onClick={() => setOpen(!open)}
                    className="rounded-lg p-2 lg:hidden"
                >
                    {open ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Menu */}

            <div
                className={`overflow-hidden transition-all duration-300 lg:hidden ${open ? "max-h-[500px]" : "max-h-0"
                    }`}
            >
                <div className="space-y-1 border-t border-stone-200 bg-[#F8F6F2] px-5 py-5">

                    {navLinks.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            className="flex items-center justify-between rounded-xl px-4 py-3 font-medium text-stone-700 transition hover:bg-white hover:text-[#365947]"
                            onClick={() => setOpen(false)}
                        >
                            {item.title}

                            {item.dropdown && <ChevronDown size={18} />}
                        </Link>
                    ))}

                    <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#365947] py-3 font-medium text-white transition hover:bg-[#294437]">
                        <Pin size={18} />
                        Pinterest
                    </button>
                </div>
            </div>
        </header>
    );
}