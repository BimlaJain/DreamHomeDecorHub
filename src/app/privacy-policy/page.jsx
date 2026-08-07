"use client";
import Link from "next/link";
import Footer from "@/components/home-page/Footer";
import Header from "@/components/home-page/Header";
import {
    Shield,
    ChevronRight,
} from "lucide-react";
import { sections } from "@/data/HomePage";

export default function PrivacyPolicy() {
    return (
        <div className="bg-[#FDFBF8] min-h-screen">
            <Header/>

            {/* Hero Section */}

            <section className="relative overflow-hidden">

                <div className="absolute inset-0 bg-gradient-to-r from-[#F5EFE7] via-white to-[#F9F6F2]" />

                <div className="relative max-w-7xl mx-auto px-6 py-28">

                    <div className="max-w-3xl">

                        <span className="inline-flex items-center gap-2 rounded-full bg-[#F3E7D7] px-5 py-2 text-[#8A5A32] font-medium">

                            <Shield size={18} />

                            Your Privacy Matters

                        </span>

                        <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight text-[#2F2F2F]">

                            Privacy Policy

                        </h1>

                        <p className="mt-8 text-lg leading-9 text-gray-600">

                            At <span className="font-semibold">DreamHomeDecorHub</span>,
                            protecting your privacy is one of our top priorities.
                            This Privacy Policy explains what information we collect,
                            how we use it, and how we keep it safe while you explore
                            our home decor inspiration, decorating guides,
                            and affiliate recommendations.

                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">

                            <div className="rounded-full bg-white px-6 py-3 shadow">

                                📅 Last Updated:
                                <span className="font-semibold ml-2">
                                    August 7, 2026
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Intro */}

            <section className="max-w-7xl mx-auto px-6 py-16">

                <div className="rounded-3xl bg-white p-10 shadow-sm border border-[#EEE7DD]">

                    <h2 className="md:text-3xl text-2xl font-bold text-[#2F2F2F]">

                        Welcome to DreamHomeDecorHub

                    </h2>

                    <p className="mt-6 text-gray-600 leading-8">

                        DreamHomeDecorHub is dedicated to sharing beautiful,
                        practical, and inspiring home decor ideas. Whether you're
                        looking for bedroom inspiration, kitchen styling tips,
                        living room makeovers, or bathroom organization ideas,
                        we want you to enjoy our content with confidence.

                    </p>

                    <p className="mt-5 text-gray-600 leading-8">

                        This Privacy Policy explains how we collect, use, protect,
                        and manage your information whenever you visit our website.

                    </p>

                </div>

            </section>

            {/* Sections */}

            <section className="max-w-7xl mx-auto px-6 pb-20">

                <div className="grid gap-8">

                    {sections.map((item, index) => (

                        <div
                            key={index}
                            className="bg-white rounded-3xl border border-[#EEE7DD] shadow-sm p-8 hover:shadow-lg transition duration-300"
                        >

                            <div className="flex items-center gap-4">

                                <div className="w-16 h-16 rounded-2xl bg-[#F8F1E8] flex items-center justify-center text-[#B07A4F]">

                                    {item.icon}

                                </div>

                                <h2 className="text-2xl font-semibold text-[#2F2F2F]">

                                    {item.title}

                                </h2>

                            </div>

                            <div className="mt-8 space-y-5">

                                {item.content.map((point, i) => (

                                    <div
                                        key={i}
                                        className="flex items-start gap-3"
                                    >

                                        <ChevronRight
                                            size={18}
                                            className="text-[#B07A4F] mt-1"
                                        />

                                        <p className="text-gray-600 leading-8">

                                            {point}

                                        </p>

                                    </div>

                                ))}

                            </div>

                        </div>

                    ))}

                </div>

            </section>
            {/* Affiliate & Legal Sections */}

            <section className="max-w-7xl mx-auto px-6 pb-20">

                <div className="grid lg:grid-cols-2 gap-8">

                    {/* Affiliate Disclosure */}

                    <div className="rounded-3xl border border-[#EEE7DD] bg-white p-8 shadow-sm hover:shadow-lg transition duration-300">

                        <div className="w-16 h-16 rounded-2xl bg-[#F8F1E8] flex items-center justify-center text-[#B07A4F] text-3xl">
                            🛍️
                        </div>

                        <h2 className="mt-6 text-2xl font-semibold text-[#2F2F2F]">
                            Affiliate Disclosure
                        </h2>

                        <p className="mt-5 leading-8 text-gray-600">
                            DreamHomeDecorHub participates in affiliate marketing
                            programs, including the Amazon Associates Program.
                            Some of the links on this website are affiliate links.
                        </p>

                        <div className="mt-6 space-y-4">

                            <div className="flex gap-3">
                                <ChevronRight className="text-[#B07A4F] mt-1" size={18} />
                                <p className="text-gray-600">
                                    If you purchase through an affiliate link, we may earn a
                                    small commission at no additional cost to you.
                                </p>
                            </div>

                            <div className="flex gap-3">
                                <ChevronRight className="text-[#B07A4F] mt-1" size={18} />
                                <p className="text-gray-600">
                                    Our recommendations are based on research,
                                    functionality, design quality, and overall value.
                                </p>
                            </div>

                            <div className="flex gap-3">
                                <ChevronRight className="text-[#B07A4F] mt-1" size={18} />
                                <p className="text-gray-600">
                                    Purchasing through our links helps support
                                    DreamHomeDecorHub and allows us to continue creating
                                    free home decor content.
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* Third Party Services */}

                    <div className="rounded-3xl border border-[#EEE7DD] bg-white p-8 shadow-sm hover:shadow-lg transition duration-300">

                        <div className="w-16 h-16 rounded-2xl bg-[#F8F1E8] flex items-center justify-center text-3xl">
                            🌐
                        </div>

                        <h2 className="mt-6 text-2xl font-semibold text-[#2F2F2F]">
                            Third-Party Services
                        </h2>

                        <p className="mt-5 text-gray-600 leading-8">
                            We may use trusted third-party services to improve
                            website functionality, performance, and user experience.
                        </p>

                        <ul className="mt-6 space-y-4 text-gray-600">

                            <li className="flex gap-3">
                                <ChevronRight className="text-[#B07A4F] mt-1" size={18} />
                                Google Analytics
                            </li>

                            <li className="flex gap-3">
                                <ChevronRight className="text-[#B07A4F] mt-1" size={18} />
                                Amazon Associates
                            </li>

                            <li className="flex gap-3">
                                <ChevronRight className="text-[#B07A4F] mt-1" size={18} />
                                Pinterest
                            </li>

                            <li className="flex gap-3">
                                <ChevronRight className="text-[#B07A4F] mt-1" size={18} />
                                Email Service Providers
                            </li>

                            <li className="flex gap-3">
                                <ChevronRight className="text-[#B07A4F] mt-1" size={18} />
                                Google AdSense (Future)
                            </li>

                        </ul>

                    </div>

                </div>

            </section>

            {/* Advertising */}

            <section className="max-w-7xl mx-auto px-6 pb-20">

                <div className="rounded-3xl bg-white border border-[#EEE7DD] shadow-sm p-10">

                    <h2 className="text-3xl font-semibold text-[#2F2F2F]">
                        Advertising & Sponsored Content
                    </h2>

                    <p className="mt-6 leading-8 text-gray-600">

                        DreamHomeDecorHub may display advertisements through trusted
                        advertising partners, including Google AdSense.
                        Advertising partners may use cookies and similar technologies
                        to display personalized or non-personalized advertisements
                        depending on your preferences and applicable privacy laws.

                    </p>

                    <div className="mt-8 grid md:grid-cols-2 gap-6">

                        <div className="rounded-2xl bg-[#FAF6F2] p-6">

                            <h3 className="font-semibold text-[#2F2F2F]">
                                Personalized Ads
                            </h3>

                            <p className="mt-3 text-gray-600 leading-7">

                                Advertising partners may use cookies to provide ads
                                based on your browsing activity.

                            </p>

                        </div>

                        <div className="rounded-2xl bg-[#FAF6F2] p-6">

                            <h3 className="font-semibold text-[#2F2F2F]">
                                Sponsored Recommendations
                            </h3>

                            <p className="mt-3 text-gray-600 leading-7">

                                Sponsored products or affiliate recommendations
                                will always be clearly identified whenever applicable.

                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* External Links */}

            <section className="max-w-7xl mx-auto px-6 pb-20">

                <div className="rounded-3xl border border-[#EEE7DD] bg-white shadow-sm p-10">

                    <h2 className="text-3xl font-semibold text-[#2F2F2F]">

                        External Links

                    </h2>

                    <p className="mt-6 text-gray-600 leading-8">

                        DreamHomeDecorHub may contain links to external websites,
                        online stores, social media platforms, and affiliate partners.
                        We are not responsible for the privacy practices,
                        policies, or content of third-party websites.

                    </p>

                    <p className="mt-5 text-gray-600 leading-8">

                        We encourage all visitors to review the privacy policies
                        of every website they visit before providing personal information.

                    </p>

                </div>

            </section>

            {/* Data Security */}

            <section className="max-w-7xl mx-auto px-6 pb-20">

                <div className="rounded-3xl border border-[#EEE7DD] bg-white shadow-sm p-10">

                    <h2 className="text-3xl font-semibold text-[#2F2F2F]">

                        Data Security

                    </h2>

                    <p className="mt-6 text-gray-600 leading-8">

                        We take appropriate technical and organizational measures
                        to help protect your information against unauthorized access,
                        misuse, disclosure, or alteration.

                    </p>

                    <div className="mt-8 grid md:grid-cols-3 gap-6">

                        <div className="rounded-2xl bg-[#FAF6F2] p-6">

                            <h3 className="font-semibold text-[#2F2F2F]">

                                🔒 Secure Hosting

                            </h3>

                            <p className="mt-3 text-gray-600 leading-7">

                                Our website is hosted on secure infrastructure
                                designed for reliability and performance.

                            </p>

                        </div>

                        <div className="rounded-2xl bg-[#FAF6F2] p-6">

                            <h3 className="font-semibold text-[#2F2F2F]">

                                🔐 Encryption

                            </h3>

                            <p className="mt-3 text-gray-600 leading-7">

                                Data transmitted between your browser and our website
                                is protected using HTTPS encryption.

                            </p>

                        </div>

                        <div className="rounded-2xl bg-[#FAF6F2] p-6">

                            <h3 className="font-semibold text-[#2F2F2F]">

                                🛡️ Protection

                            </h3>

                            <p className="mt-3 text-gray-600 leading-7">

                                Although we strive to protect your information,
                                no internet transmission can be guaranteed to be
                                completely secure.

                            </p>

                        </div>

                    </div>

                </div>

            </section>
            {/* Children's Privacy */}

            <section className="max-w-7xl mx-auto px-6 pb-20">

                <div className="rounded-3xl border border-[#EEE7DD] bg-white shadow-sm p-10">

                    <h2 className="text-3xl font-semibold text-[#2F2F2F]">
                        Children's Privacy
                    </h2>

                    <p className="mt-6 text-gray-600 leading-8">

                        DreamHomeDecorHub is intended for a general audience and
                        is not specifically directed toward children under the age
                        of 13.

                    </p>

                    <p className="mt-5 text-gray-600 leading-8">

                        We do not knowingly collect personal information from
                        children. If you believe a child has submitted personal
                        information to us, please contact us immediately so we can
                        remove the information as quickly as possible.

                    </p>

                </div>

            </section>

            {/* Your Rights */}

            <section className="max-w-7xl mx-auto px-6 pb-20">

                <div className="rounded-3xl border border-[#EEE7DD] bg-white shadow-sm p-10">

                    <h2 className="text-3xl font-semibold text-[#2F2F2F]">
                        Your Privacy Rights
                    </h2>

                    <p className="mt-6 text-gray-600 leading-8">
                        Depending on your country or region, you may have certain
                        privacy rights regarding your personal information.
                    </p>

                    <div className="mt-8 grid md:grid-cols-2 gap-6">

                        {[
                            "Request access to your personal information.",
                            "Request correction of inaccurate information.",
                            "Request deletion of your personal information.",
                            "Withdraw consent where applicable.",
                            "Request additional information about your data.",
                            "Contact us with privacy-related questions."
                        ].map((item, index) => (

                            <div
                                key={index}
                                className="rounded-2xl bg-[#FAF6F2] p-6 flex items-start gap-3"
                            >

                                <div className="text-[#B07A4F] text-xl">
                                    ✓
                                </div>

                                <p className="text-gray-600 leading-7">
                                    {item}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* Policy Updates */}

            <section className="max-w-7xl mx-auto px-6 pb-20">

                <div className="rounded-3xl border border-[#EEE7DD] bg-white shadow-sm p-10">

                    <h2 className="text-3xl font-semibold text-[#2F2F2F]">
                        Changes to This Privacy Policy
                    </h2>

                    <p className="mt-6 text-gray-600 leading-8">

                        We may update this Privacy Policy from time to time to
                        reflect changes in our website, legal requirements,
                        technologies, or business practices.

                    </p>

                    <p className="mt-5 text-gray-600 leading-8">

                        Whenever changes are made, the
                        <strong> Last Updated </strong>
                        date at the top of this page will also be updated.

                    </p>

                </div>

            </section>

            {/* Contact Card */}

            <section className="max-w-7xl mx-auto px-6 pb-20">

                <div className="rounded-[40px] bg-gradient-to-r from-[#B07A4F] to-[#8C603A] p-12 text-white overflow-hidden relative">

                    <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>

                    <div className="relative z-10 max-w-3xl">

                        <p className="uppercase tracking-[4px] text-white/70 font-medium">
                            Contact Us
                        </p>

                        <h2 className="mt-4 text-4xl font-bold">

                            Have Questions About Your Privacy?

                        </h2>

                        <p className="mt-6 text-lg leading-8 text-white/90">

                            If you have any questions regarding this Privacy Policy,
                            your personal information, or anything related to
                            DreamHomeDecorHub, we'd love to hear from you.

                        </p>

                        <Link
                            href="/contact"
                            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 font-semibold text-[#8C603A] transition hover:bg-[#FFF9F3]"
                        >
                            Contact Us
                            <ChevronRight size={19} />
                        </Link>

                    </div>

                </div>

            </section>

            {/* Footer Note */}

            <section className="max-w-5xl mx-auto px-6 pb-28">

                <div className="text-center">

                    <h2 className="text-3xl font-bold text-[#2F2F2F]">

                        Thank You ❤️

                    </h2>

                    <p className="mt-6 text-gray-600 leading-8">

                        Thank you for trusting
                        <span className="font-semibold">
                            {" "}DreamHomeDecorHub{" "}
                        </span>

                        as your destination for beautiful home decor inspiration,
                        decorating ideas, styling guides, and carefully curated
                        product recommendations.

                    </p>

                    <p className="mt-5 text-gray-600 leading-8">

                        Your trust means everything to us, and we are committed
                        to protecting your privacy while providing valuable,
                        inspiring, and reliable content for every room in your home.

                    </p>

                </div>

            </section>
                <Footer/>

        </div>
    );
}