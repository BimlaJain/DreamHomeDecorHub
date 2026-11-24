
"use client";

import Link from "next/link";
import {
    Menu,
    Search,
    X,
    PinIcon,
    Sparkles,
    ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/HomePage";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [desktopDropdown, setDesktopDropdown] = useState(false);
    const [mobileDropdown, setMobileDropdown] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-[#E8DED2] bg-[#FAF7F2]/95 backdrop-blur-md">

            <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-5">

                {/* Desktop Navigation - Left */}
                <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
                    {navItems.map((item) => (
                        <div
                            key={item.title}
                            className="relative"
                            onMouseEnter={() => {
                                if (item.dropdown) setDesktopDropdown(true);
                            }}
                            onMouseLeave={() => {
                                if (item.dropdown) setDesktopDropdown(false);
                            }}
                        >
                            {!item.dropdown ? (
                                <Link
                                    href={item.href}
                                    className="text-[14px] font-medium text-[#776456] transition-colors duration-300 hover:text-[#9B7669]"
                                >
                                    {item.title}
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={item.href}
                                        className="flex items-center gap-1 text-[14px] font-medium text-[#776456] transition-colors duration-300 hover:text-[#9B7669]"
                                    >
                                        {item.title}

                                        <ChevronDown
                                            size={15}
                                            className={`transition-transform duration-300 ${desktopDropdown ? "rotate-180" : ""
                                                }`}
                                        />
                                    </Link>

                                    {/* Desktop Dropdown */}
                                    {desktopDropdown && (
                                        <div className="absolute left-1/2 top-full w-[580px] -translate-x-1/2 pt-4">
                                            <div className="rounded-2xl border border-[#E8DED2] bg-[#FAF7F2] p-7 shadow-[0_15px_45px_rgba(41,39,37,0.10)]">
                                                <div className="grid grid-cols-2 gap-10">
                                                    {item.categories?.map((category) => (
                                                        <div key={category.title}>
                                                            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9B7669]">
                                                                {category.title}
                                                            </h3>

                                                            <div className="space-y-1">
                                                                {category.items.map((subItem) => (
                                                                    <Link
                                                                        key={subItem.title}
                                                                        href={subItem.href}
                                                                        className="block rounded-lg px-3 py-2.5 text-sm text-[#776456] transition-all duration-200 hover:bg-[#F1E9E1] hover:pl-4 hover:text-[#292725]"
                                                                    >
                                                                        {subItem.title}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Centered Desktop Logo / Left Mobile Logo */}
                <Link
                    href="/"
                    className="group flex flex-col items-center lg:absolute lg:left-1/2 lg:-translate-x-1/2"
                >

                    <div className="flex items-baseline gap-1">
                        <span className="font-serif text-[21px] italic tracking-tight text-[#292725]">
                            Styled
                        </span>
                        <span className="font-serif text-[13px] italic text-[#a58b72]">
                            by
                        </span>
                    </div>

                    <h1 className="font-serif text-[35px] font-semibold uppercase leading-[0.85] tracking-[0.12em] text-[#292725] transition-all duration-300 group-hover:tracking-[0.18em]">
                        Vimal
                    </h1>

                </Link>

                {/* Right Actions - Desktop */}
                <div className="hidden items-center gap-4 lg:flex">
                    <button
                        className="rounded-full p-2.5 text-[#776456] transition-colors duration-300 hover:bg-[#F1E9E1] hover:text-[#292725]"
                        aria-label="Search"
                    >
                        <Search size={19} strokeWidth={1.7} />
                    </button>

                    <Link
                        href="https://in.pinterest.com/Styled_By_Vimal/"
                        target="_blank"
                        className="flex items-center gap-2 rounded-full bg-[#292725] px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#776456]"
                    >
                        <PinIcon size={15} />
                        Pinterest
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="rounded-full p-2 text-[#292725] transition-colors hover:bg-[#F1E9E1] lg:hidden"
                    aria-label="Toggle menu"
                >
                    {open ? <X size={23} /> : <Menu size={23} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="border-t border-[#E8DED2] bg-[#FAF7F2] lg:hidden">
                    <div className="flex flex-col p-5">
                        {navItems.map((item) => (
                            <div key={item.title}>
                                {!item.dropdown ? (
                                    <Link
                                        href={item.href}
                                        className="block border-b border-[#E8DED2] py-4 text-[15px] font-medium text-[#776456] transition-colors hover:text-[#9B7669]"
                                        onClick={() => setOpen(false)}
                                    >
                                        {item.title}
                                    </Link>
                                ) : (
                                    <>
                                        <button
                                            onClick={() =>
                                                setMobileDropdown(!mobileDropdown)
                                            }
                                            className="flex w-full items-center justify-between border-b border-[#E8DED2] py-4 text-left text-[15px] font-medium text-[#776456]"
                                        >
                                            <span>{item.title}</span>

                                            <ChevronDown
                                                size={18}
                                                className={`transition-transform duration-300 ${mobileDropdown ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>

                                        {mobileDropdown && (
                                            <div className="border-b border-[#E8DED2] py-4">
                                                {item.categories?.map((category) => (
                                                    <div
                                                        key={category.title}
                                                        className="mb-5 last:mb-0"
                                                    >
                                                        <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9B7669]">
                                                            {category.title}
                                                        </p>

                                                        {category.items.map((subItem) => (
                                                            <Link
                                                                key={subItem.title}
                                                                href={subItem.href}
                                                                onClick={() => setOpen(false)}
                                                                className="block rounded-lg px-3 py-2.5 text-sm text-[#776456] transition-colors hover:bg-[#F1E9E1] hover:text-[#292725]"
                                                            >
                                                                {subItem.title}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        ))}

                        {/* Mobile Pinterest */}
                        <Link
                            href="https://in.pinterest.com/Styled_By_Vimal/"
                            target="_blank"
                            className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#292725] py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#776456]"
                        >
                            <PinIcon size={16} />
                            Find us on Pinterest
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
