"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Search, Menu, X , House } from "lucide-react";

const navLinks = [
    {
        name: "Inspiration",
        href: "#inspiration",
    },
    {
        name: "Room Ideas",
        href: "#room-ideas",
    },
    {
        name: "Decor Tips",
        href: "#decor-tips",
    },
];

export default function BlogNavbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/90 backdrop-blur-md shadow-sm"
                    : "bg-[#F8F6F2]"
                }`}
        >
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white shadow">
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

                {/* Desktop Menu */}
                <nav className="hidden items-center gap-10 lg:flex">
                    {navLinks.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="relative text-[15px] text-stone-700 transition hover:text-black after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Right Side */}
                <div className="hidden items-center gap-5 lg:flex">

                    <button className="text-stone-700 hover:text-black">
                        <Search size={20} />
                    </button>

                    <Link
                        href="/floating-shelves"
                        className="rounded-full border border-stone-300 px-5 py-2 text-sm transition hover:bg-stone-900 hover:text-white"
                    >
                        Shop Collection
                    </Link>

                </div>

                {/* Mobile Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden"
                >
                    {isOpen ? <X /> : <Menu />}
                </button>

            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="border-t bg-white lg:hidden">
                    <nav className="flex flex-col px-6 py-6">

                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="py-3 text-stone-700"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}

                        <Link
                            href="/floating-shelves"
                            className="mt-4 rounded-full border border-stone-300 px-5 py-3 text-center"
                            onClick={() => setIsOpen(false)}
                        >
                            Shop Collection
                        </Link>

                    </nav>
                </div>
            )}
        </header>
    );
}