"use client";

import Link from "next/link";
import { Menu, Search, X, PinIcon , House } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/HomePage";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/90 backdrop-blur-md">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
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

                <nav className="hidden items-center gap-8 lg:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            className="text-[15px] font-medium text-stone-700 transition hover:text-black"
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>

                {/* Right */}

                <div className="hidden items-center gap-4 lg:flex">
                    <button className="rounded-full p-2 hover:bg-stone-100">
                        <Search size={20} />
                    </button>

                    <Link
                        href="https://in.pinterest.com/DecorHomeDecorHub/"
                        target="_blank"
                        className="mt-3 flex w-full items-center justify-center gap-2 rounded-3xl bg-black py-3 px-4 font-medium text-white transition hover:scale-110"
                    >
                        <PinIcon size={16} />
                        Pinterest
                    </Link>
                </div>

                {/* Mobile */}

                <button
                    onClick={() => setOpen(!open)}
                    className="lg:hidden"
                >
                    {open ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}

            {open && (
                <div className="border-t bg-white lg:hidden">
                    <div className="flex flex-col p-5">
                        {navItems.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                className="border-b border-stone-100 py-4 text-stone-700"
                                onClick={() => setOpen(false)}
                            >
                                {item.title}
                            </Link>
                        ))}

                        <Link
                            href="https://pinterest.com"
                            target="_blank"
                            className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-black py-3 font-medium text-white transition hover:bg-[#294437]"
                        >
                            Pinterest
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}