"use client";

import Link from "next/link";
import {
    Menu,
    Search,
    X,
    PinIcon,
    House,
    ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/HomePage";

export default function Header() {

    const [open, setOpen] = useState(false);
    const [desktopDropdown, setDesktopDropdown] = useState(false);
    const [mobileDropdown, setMobileDropdown] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/90 backdrop-blur-md">

            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">

                {/* Logo */}

                <Link
                    href="/"
                    className="flex items-center gap-3"
                >

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

                        <div
                            key={item.title}
                            className="relative"
                            onMouseEnter={() => {
                                if (item.dropdown) {
                                    setDesktopDropdown(true);
                                }
                            }}
                            onMouseLeave={() => {
                                if (item.dropdown) {
                                    setDesktopDropdown(false);
                                }
                            }}
                        >

                            {/* Normal Link */}

                            {!item.dropdown ? (

                                <Link
                                    href={item.href}
                                    className="text-[15px] font-medium text-stone-700 transition hover:text-black"
                                >
                                    {item.title}
                                </Link>

                            ) : (

                                <>

                                    {/* Home Decor */}

                                    <Link
                                        href={item.href}
                                        className="flex items-center gap-1 text-[15px] font-medium text-stone-700 transition hover:text-black"
                                    >
                                        {item.title}

                                        <ChevronDown
                                            size={16}
                                            className={`transition-transform duration-300 ${desktopDropdown
                                                    ? "rotate-180"
                                                    : ""
                                                }`}
                                        />
                                    </Link>


                                    {/* Desktop Dropdown */}

                                    {desktopDropdown && (

                                        <div className="absolute left-1/2 top-full w-[600px]  -translate-x-1/2 pt-4">

                                            <div className="rounded-3xl border border-stone-200 bg-white p-7 shadow-xl">

                                                    <div className="grid grid-cols-2  gap-10">

                                                    {item.categories?.map(
                                                        (category) => (

                                                            <div
                                                                key={
                                                                    category.title
                                                                }
                                                            >

                                                                <h3 className="mb-4 text-xs font-semibold uppercase  text-stone-400">
                                                                    {
                                                                        category.title
                                                                    }
                                                                </h3>


                                                                <div className="space-y-1">

                                                                    {category.items.map(
                                                                        (
                                                                            subItem
                                                                        ) => (

                                                                            <Link
                                                                                key={
                                                                                    subItem.title
                                                                                }
                                                                                href={
                                                                                    subItem.href
                                                                                }
                                                                                className="block rounded-xl px-3 py-2.5 text-sm text-stone-700 transition hover:bg-stone-100 hover:text-black"
                                                                            >
                                                                                {
                                                                                    subItem.title
                                                                                }
                                                                            </Link>

                                                                        )
                                                                    )}

                                                                </div>

                                                            </div>

                                                        )
                                                    )}

                                                </div>


                                               

                                            </div>

                                        </div>

                                    )}

                                </>

                            )}

                        </div>

                    ))}

                </nav>


                {/* Right */}

                <div className="hidden items-center gap-4 lg:flex">

                    <button
                        className="rounded-full p-2 hover:bg-stone-100"
                        aria-label="Search"
                    >
                        <Search size={20} />
                    </button>


                    <Link
                        href="https://in.pinterest.com/DecorHomeDecorHub/"
                        target="_blank"
                        className="flex items-center justify-center gap-2 rounded-3xl bg-black px-4 py-3 font-medium text-white transition hover:scale-105"
                    >
                        <PinIcon size={16} />
                        Pinterest
                    </Link>

                </div>


                {/* Mobile */}

                <button
                    onClick={() => setOpen(!open)}
                    className="lg:hidden"
                    aria-label="Toggle menu"
                >
                    {open ? <X /> : <Menu />}
                </button>

            </div>


            {/* Mobile Menu */}

            {open && (

                <div className="border-t bg-white lg:hidden">

                    <div className="flex flex-col p-5">

                        {navItems.map((item) => (

                            <div key={item.title}>

                                {!item.dropdown ? (

                                    <Link
                                        href={item.href}
                                        className="block border-b border-stone-100 py-4 text-stone-700"
                                        onClick={() => setOpen(false)}
                                    >
                                        {item.title}
                                    </Link>

                                ) : (

                                    <>

                                        {/* Mobile Home Decor Button */}

                                        <button
                                            onClick={() =>
                                                setMobileDropdown(
                                                    !mobileDropdown
                                                )
                                            }
                                            className="flex w-full items-center justify-between border-b border-stone-100 py-4 text-left text-stone-700"
                                        >

                                            <span>
                                                {item.title}
                                            </span>

                                            <ChevronDown
                                                size={18}
                                                className={`transition-transform ${mobileDropdown
                                                        ? "rotate-180"
                                                        : ""
                                                    }`}
                                            />

                                        </button>


                                        {/* Mobile Categories */}

                                        {mobileDropdown && (

                                            <div className="border-b border-stone-100 py-3">

                                                {item.categories?.map(
                                                    (category) => (

                                                        <div
                                                            key={
                                                                category.title
                                                            }
                                                            className="mb-4"
                                                        >

                                                            <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-widest text-stone-400">
                                                                {
                                                                    category.title
                                                                }
                                                            </p>


                                                            {category.items.map(
                                                                (
                                                                    subItem
                                                                ) => (

                                                                    <Link
                                                                        key={
                                                                            subItem.title
                                                                        }
                                                                        href={
                                                                            subItem.href
                                                                        }
                                                                        onClick={() =>
                                                                            setOpen(
                                                                                false
                                                                            )
                                                                        }
                                                                        className="block rounded-lg px-3 py-2.5 text-sm text-stone-600 hover:bg-stone-100"
                                                                    >
                                                                        {
                                                                            subItem.title
                                                                        }
                                                                    </Link>

                                                                )
                                                            )}

                                                        </div>

                                                    )
                                                )}

                                            </div>

                                        )}

                                    </>

                                )}

                            </div>

                        ))}


                        {/* Pinterest */}

                        <Link
                            href="https://in.pinterest.com/DecorHomeDecorHub/"
                            target="_blank"
                            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-black py-3 font-medium text-white transition hover:bg-stone-800"
                        >
                            <PinIcon size={16} />
                            Pinterest
                        </Link>

                    </div>

                </div>

            )}

        </header>
    );
}