
"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Back to top"
            title="Back to top"
            className={`
                fixed bottom-7 right-6 z-50
                flex h-12 w-12 items-center justify-center
                rounded-full border border-[#c8a88e]
                bg-[#42362e] text-[#f8f3ed]
                shadow-lg shadow-[#42362e]/15
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-[#a77c5b]
                hover:shadow-xl
                focus:outline-none focus:ring-2
                focus:ring-[#a77c5b] focus:ring-offset-2
                sm:bottom-9 sm:right-9
                ${visible
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-5 opacity-0"
                }
            `}
        >
            <FaArrowUp size={16} />
        </button>
    );
}
