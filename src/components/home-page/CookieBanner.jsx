"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const CookieBanner = () => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");

        if (!consent) {
            setShowBanner(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookieConsent", "accepted");
        setShowBanner(false);
    };

    const declineCookies = () => {
        localStorage.setItem("cookieConsent", "declined");
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-5 left-1/2 z-50 w-[95%] max-w-3xl -translate-x-1/2 rounded-3xl border border-[#E8DFD3] bg-white/95 backdrop-blur-xl shadow-2xl">
            <div className="p-6 md:p-8">
                <div className="flex items-start gap-4">

                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F5EFE7] text-3xl">
                        🍪
                    </div>

                    <div className="flex-1">

                        <h3 className="text-xl font-semibold text-[#2F2F2F]">
                            We Value Your Privacy
                        </h3>

                        <p className="mt-3 text-[15px] leading-7 text-gray-600">
                            DreamHomeDecorHub uses cookies to improve your browsing
                            experience, analyze website traffic, and support affiliate
                            recommendations. By clicking <strong>Accept</strong>, you
                            agree to our use of cookies. Learn more in our{" "}
                            <Link href="/privacy-policy">
                                Privacy Policy
                            </Link>
                            .
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">

                            <button
                                onClick={acceptCookies}
                                className="rounded-full bg-[#B07A4F] px-7 py-3 font-medium text-white transition hover:bg-[#94633E]"
                            >
                                Accept All
                            </button>

                            <button
                                onClick={declineCookies}
                                className="rounded-full border border-gray-300 bg-white px-7 py-3 font-medium text-gray-700 transition hover:bg-gray-100"
                            >
                                Decline
                            </button>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default CookieBanner;