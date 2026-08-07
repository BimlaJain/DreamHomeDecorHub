"use client";
import Link from "next/link";

import Footer from "@/components/home-page/Footer";
import Header from "@/components/home-page/Header";
import {
    AlertCircle,
    ShieldCheck,
    Home,
    ShoppingBag,
    Lightbulb,
    Link as LinkIcon,
    Info,
    ChevronRight,
} from "lucide-react";

export default function Disclaimer() {
    return (
        <main className="min-h-screen bg-[#FDFBF8] text-[#2F2F2F]">
            <Header/>

            {/* ================= HERO ================= */}

            <section className="relative overflow-hidden">

                <div className="absolute inset-0 bg-gradient-to-br from-[#F6EEE5] via-[#FDFBF8] to-[#F3E9DE]" />

                <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">

                    <div className="max-w-3xl">

                        <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-medium text-[#8A5A32] shadow-sm">

                            <ShieldCheck size={18} />

                            Transparency & Trust

                        </div>


                        <h1 className="mt-7 text-5xl font-bold leading-tight tracking-tight md:text-6xl">

                            Disclaimer

                        </h1>


                        <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600 md:text-xl">

                            The information shared on DreamHomeDecorHub is created
                            to inspire, educate, and help you explore ideas for
                            creating a beautiful and comfortable home.

                        </p>


                        <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm text-gray-600 shadow-sm">

                            <Info size={17} className="text-[#B07A4F]" />

                            Last Updated: August 7, 2026

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= GENERAL DISCLAIMER ================= */}

            <section className="mx-auto max-w-7xl px-6 py-16">

                <div className="rounded-[32px] border border-[#EEE7DD] bg-white p-8 shadow-sm md:p-12">

                    <div className="flex flex-col gap-6 md:flex-row md:items-start">

                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#F8F1E8] text-[#B07A4F]">

                            <AlertCircle size={30} />

                        </div>


                        <div>

                            <h2 className="text-3xl font-bold">

                                General Disclaimer

                            </h2>


                            <p className="mt-5 leading-8 text-gray-600">

                                All information published on DreamHomeDecorHub is
                                provided for general informational, educational, and
                                inspirational purposes only.

                            </p>


                            <p className="mt-5 leading-8 text-gray-600">

                                While we make reasonable efforts to provide useful,
                                accurate, and up-to-date information, we do not guarantee
                                that all content will always be complete, accurate,
                                current, or suitable for every individual situation.

                            </p>


                            <div className="mt-7 rounded-2xl bg-[#FAF6F1] p-6">

                                <p className="font-medium leading-7 text-gray-700">

                                    Your use of information found on this website is
                                    entirely at your own discretion and risk.

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= HOME DECOR CONTENT ================= */}

            <section className="mx-auto max-w-7xl px-6 pb-20">

                <div className="grid gap-8 lg:grid-cols-2">


                    {/* DECOR CONTENT */}

                    <div className="rounded-[32px] border border-[#EEE7DD] bg-white p-8 shadow-sm md:p-10">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8F1E8] text-[#B07A4F]">

                            <Home size={27} />

                        </div>


                        <h2 className="mt-7 text-3xl font-bold">

                            Home Decor & Design Ideas

                        </h2>


                        <p className="mt-5 leading-8 text-gray-600">

                            Our articles may include room layouts, color palettes,
                            furniture suggestions, organization ideas, styling tips,
                            DIY inspiration, and decorating recommendations.

                        </p>


                        <p className="mt-5 leading-8 text-gray-600">

                            Every home is different. Room dimensions, lighting,
                            construction, materials, climate, budget, personal
                            preferences, and other circumstances can affect the
                            suitability of a particular idea.

                        </p>


                        <p className="mt-5 leading-8 text-gray-600">

                            You should evaluate any decorating or home improvement
                            idea based on your own space and requirements.

                        </p>

                    </div>


                    {/* PROFESSIONAL ADVICE */}

                    <div className="rounded-[32px] border border-[#EEE7DD] bg-white p-8 shadow-sm md:p-10">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8F1E8] text-[#B07A4F]">

                            <Lightbulb size={27} />

                        </div>


                        <h2 className="mt-7 text-3xl font-bold">

                            Not Professional Advice

                        </h2>


                        <p className="mt-5 leading-8 text-gray-600">

                            Content on DreamHomeDecorHub should not be considered
                            professional architectural, structural, engineering,
                            electrical, construction, interior design, financial,
                            legal, or other professional advice.

                        </p>


                        <p className="mt-5 leading-8 text-gray-600">

                            For projects involving structural changes, electrical
                            work, plumbing, construction, safety concerns, or other
                            potentially hazardous activities, consult an appropriately
                            qualified professional.

                        </p>

                    </div>

                </div>

            </section>


            {/* ================= PRODUCT DISCLAIMER ================= */}

            <section className="mx-auto max-w-7xl px-6 pb-20">

                <div className="relative overflow-hidden rounded-[36px] bg-[#2F2A26] p-8 text-white md:p-12">

                    <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#B07A4F]/20 blur-3xl" />


                    <div className="relative z-10">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">

                            <ShoppingBag size={27} />

                        </div>


                        <h2 className="mt-7 text-3xl font-bold">

                            Product Information Disclaimer

                        </h2>


                        <p className="mt-5 max-w-4xl leading-8 text-white/75">

                            DreamHomeDecorHub may recommend or feature furniture,
                            lighting, rugs, decor accessories, storage products,
                            kitchen products, bedroom products, and other home-related
                            items.

                        </p>


                        <p className="mt-5 max-w-4xl leading-8 text-white/75">

                            Product prices, availability, colors, sizes, specifications,
                            shipping information, discounts, ratings, and other details
                            may change without notice.

                        </p>


                        <div className="mt-8 grid gap-5 md:grid-cols-3">


                            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                                <p className="text-2xl">
                                    💰
                                </p>

                                <h3 className="mt-4 font-semibold">
                                    Prices
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-white/60">

                                    Prices may change after an article is published.

                                </p>

                            </div>


                            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                                <p className="text-2xl">
                                    📦
                                </p>

                                <h3 className="mt-4 font-semibold">
                                    Availability
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-white/60">

                                    Products may become unavailable or go out of stock.

                                </p>

                            </div>


                            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                                <p className="text-2xl">
                                    📝
                                </p>

                                <h3 className="mt-4 font-semibold">
                                    Specifications
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-white/60">

                                    Product specifications may be updated by retailers.

                                </p>

                            </div>


                        </div>

                    </div>

                </div>

            </section>


            {/* ================= THIRD PARTY LINKS ================= */}

            <section className="mx-auto max-w-7xl px-6 pb-20">

                <div className="rounded-[32px] border border-[#EEE7DD] bg-white p-8 shadow-sm md:p-10">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8F1E8] text-[#B07A4F]">

                        <LinkIcon size={27} />

                    </div>


                    <h2 className="mt-7 text-3xl font-bold">

                        Third-Party Websites & Links

                    </h2>


                    <p className="mt-5 leading-8 text-gray-600">

                        Our website may contain links to third-party websites,
                        including online retailers, marketplaces, social platforms,
                        and other external services.

                    </p>


                    <p className="mt-5 leading-8 text-gray-600">

                        We do not control the content, availability, security,
                        policies, products, services, or practices of third-party
                        websites.

                    </p>


                    <div className="mt-8 rounded-2xl bg-[#FAF6F1] p-6">

                        <p className="leading-7 text-gray-600">

                            Before making a purchase or providing personal information
                            to a third-party website, review that website's own terms,
                            privacy policy, and other applicable policies.

                        </p>

                    </div>

                </div>

            </section>
            {/* ================= AFFILIATE DISCLOSURE ================= */}

            <section className="mx-auto max-w-7xl px-6 pb-20">

                <div className="rounded-[32px] border border-[#EEE7DD] bg-white p-8 shadow-sm md:p-10">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8F1E8] text-[#B07A4F]">
                        <ShoppingBag size={27} />
                    </div>

                    <h2 className="mt-7 text-3xl font-bold">
                        Affiliate & Amazon Disclosure
                    </h2>

                    <p className="mt-5 leading-8 text-gray-600">
                        DreamHomeDecorHub may participate in affiliate marketing
                        programs. Some product links on our website may be affiliate
                        links, including links associated with the Amazon Associates
                        Program.
                    </p>

                    <p className="mt-5 leading-8 text-gray-600">
                        If you click an eligible affiliate link and make a qualifying
                        purchase, we may receive a commission at no additional cost
                        to you.
                    </p>

                    <div className="mt-8 rounded-2xl bg-[#FAF6F1] p-6">

                        <p className="leading-7 text-gray-600">
                            Affiliate relationships do not change the price you pay for
                            a product. The final price, availability, and purchasing
                            terms are determined by the applicable retailer.
                        </p>

                    </div>

                    <a
                        href="/affiliate-disclosure"
                        className="mt-6 inline-flex items-center gap-2 font-semibold text-[#9A653E] transition hover:text-[#70452A]"
                    >
                        Read our Affiliate Disclosure
                        <span>→</span>
                    </a>

                </div>

            </section>


            {/* ================= DIY & SAFETY ================= */}

            <section className="mx-auto max-w-7xl px-6 pb-20">

                <div className="rounded-[36px] bg-[#F3E9DE] p-8 md:p-12">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#B07A4F] shadow-sm">
                        ⚠️
                    </div>

                    <h2 className="mt-7 text-3xl font-bold">
                        DIY, Installation & Safety Disclaimer
                    </h2>

                    <p className="mt-5 max-w-4xl leading-8 text-gray-700">
                        Some of our articles may include DIY projects, installation
                        suggestions, furniture arrangements, decorating techniques,
                        or home improvement ideas.
                    </p>

                    <p className="mt-5 max-w-4xl leading-8 text-gray-700">
                        These ideas are provided for general inspiration and should
                        not be treated as professional instructions for potentially
                        hazardous work.
                    </p>

                    <div className="mt-8 grid gap-5 md:grid-cols-2">

                        <div className="rounded-2xl bg-white p-6 shadow-sm">

                            <h3 className="font-semibold">
                                Electrical Work
                            </h3>

                            <p className="mt-3 leading-7 text-gray-600">
                                Electrical installations, wiring, fixtures, and repairs
                                should be handled by a qualified professional where
                                required.
                            </p>

                        </div>

                        <div className="rounded-2xl bg-white p-6 shadow-sm">

                            <h3 className="font-semibold">
                                Structural Work
                            </h3>

                            <p className="mt-3 leading-7 text-gray-600">
                                Structural changes, wall removal, major construction,
                                or similar work should be evaluated by an appropriately
                                qualified professional.
                            </p>

                        </div>

                        <div className="rounded-2xl bg-white p-6 shadow-sm">

                            <h3 className="font-semibold">
                                Tools & Equipment
                            </h3>

                            <p className="mt-3 leading-7 text-gray-600">
                                Always follow the manufacturer's instructions and use
                                appropriate safety equipment when working with tools.
                            </p>

                        </div>

                        <div className="rounded-2xl bg-white p-6 shadow-sm">

                            <h3 className="font-semibold">
                                Your Responsibility
                            </h3>

                            <p className="mt-3 leading-7 text-gray-600">
                                Evaluate your own skills, space, materials, and safety
                                requirements before attempting a project.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= ACCURACY ================= */}

            <section className="mx-auto max-w-7xl px-6 pb-20">

                <div className="rounded-[32px] border border-[#EEE7DD] bg-white p-8 shadow-sm md:p-10">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8F1E8] text-[#B07A4F]">
                        <Info size={27} />
                    </div>

                    <h2 className="mt-7 text-3xl font-bold">
                        Accuracy & Updates
                    </h2>

                    <p className="mt-5 leading-8 text-gray-600">
                        We make reasonable efforts to keep the information on
                        DreamHomeDecorHub useful and accurate. However, information
                        can become outdated as products, retailers, trends, and
                        other external factors change.
                    </p>

                    <p className="mt-5 leading-8 text-gray-600">
                        We do not guarantee that every article, recommendation,
                        product detail, price, image, link, or other information
                        will always be complete, current, or error-free.
                    </p>

                    <div className="mt-8 rounded-2xl bg-[#FAF6F1] p-6">

                        <p className="leading-7 text-gray-600">
                            If you notice information that appears inaccurate or
                            outdated, you can contact us and we will review it.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= LIMITATION OF LIABILITY ================= */}

            <section className="mx-auto max-w-7xl px-6 pb-20">

                <div className="rounded-[36px] bg-[#2F2A26] p-8 text-white md:p-12">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                        <ShieldCheck size={27} />
                    </div>

                    <h2 className="mt-7 text-3xl font-bold">
                        Limitation of Liability
                    </h2>

                    <p className="mt-5 max-w-4xl leading-8 text-white/75">
                        To the extent permitted by applicable law, DreamHomeDecorHub
                        and its owners, contributors, affiliates, or representatives
                        shall not be responsible for losses, damages, injuries, or
                        other issues arising from the use of information provided
                        on this website.
                    </p>

                    <p className="mt-5 max-w-4xl leading-8 text-white/75">
                        This includes, where legally applicable, reliance on
                        decorating ideas, product recommendations, DIY information,
                        external websites, or third-party products and services.
                    </p>

                    <p className="mt-6 text-sm leading-7 text-white/50">
                        Nothing in this Disclaimer is intended to exclude or limit
                        any liability that cannot legally be excluded or limited
                        under applicable law.
                    </p>

                </div>

            </section>


            {/* ================= PERSONAL DECISIONS ================= */}

            <section className="mx-auto max-w-7xl px-6 pb-20">

                <div className="rounded-[32px] border border-[#EEE7DD] bg-white p-8 shadow-sm md:p-10">

                    <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-start">

                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F8F1E1] text-[#B07A4F]">
                            ❤️
                        </div>

                        <div>

                            <h2 className="text-3xl font-bold">
                                Make Decisions That Work for Your Home
                            </h2>

                            <p className="mt-5 leading-8 text-gray-600">
                                Every home, budget, lifestyle, and personal preference
                                is different. A decorating idea that works beautifully
                                in one space may not be suitable for another.
                            </p>

                            <p className="mt-5 leading-8 text-gray-600">
                                We encourage you to consider your own measurements,
                                budget, needs, safety requirements, and preferences before
                                purchasing products or starting a home project.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= CHANGES ================= */}

            <section className="mx-auto max-w-7xl px-6 pb-20">

                <div className="rounded-[32px] border border-[#EEE7DD] bg-white p-8 shadow-sm md:p-10">

                    <h2 className="text-3xl font-bold">
                        Changes to This Disclaimer
                    </h2>

                    <p className="mt-5 max-w-4xl leading-8 text-gray-600">
                        We may update this Disclaimer from time to time to reflect
                        changes to our website, content, affiliate relationships,
                        legal requirements, or business practices.
                    </p>

                    <p className="mt-5 max-w-4xl leading-8 text-gray-600">
                        When changes are made, the "Last Updated" date at the top
                        of this page will also be updated.
                    </p>

                </div>

            </section>


            {/* ================= RELATED PAGES ================= */}

            <section className="mx-auto max-w-7xl px-6 pb-20">

                <div className="grid gap-5 md:grid-cols-3">

                    <a
                        href="/privacy-policy"
                        className="group rounded-3xl border border-[#EEE7DD] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                    >

                        <div className="text-2xl">
                            🔒
                        </div>

                        <h3 className="mt-5 text-xl font-semibold">
                            Privacy Policy
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-gray-600">
                            Learn how we handle information and privacy-related matters.
                        </p>

                        <span className="mt-5 inline-block font-semibold text-[#9A653E]">
                            Read Policy →
                        </span>

                    </a>


                    <a
                        href="/terms-and-conditions"
                        className="group rounded-3xl border border-[#EEE7DD] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                    >

                        <div className="text-2xl">
                            📄
                        </div>

                        <h3 className="mt-5 text-xl font-semibold">
                            Terms & Conditions
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-gray-600">
                            Read the rules and guidelines for using our website.
                        </p>

                        <span className="mt-5 inline-block font-semibold text-[#9A653E]">
                            Read Terms →
                        </span>

                    </a>


                    <a
                        href="/affiliate-disclosure"
                        className="group rounded-3xl border border-[#EEE7DD] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                    >

                        <div className="text-2xl">
                            🛍️
                        </div>

                        <h3 className="mt-5 text-xl font-semibold">
                            Affiliate Disclosure
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-gray-600">
                            Learn how affiliate links and product recommendations work.
                        </p>

                        <span className="mt-5 inline-block font-semibold text-[#9A653E]">
                            Read Disclosure →
                        </span>

                    </a>

                </div>

            </section>


            {/* ================= CONTACT CTA ================= */}

            <section className="mx-auto max-w-7xl px-6 pb-24">

                <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#B07A4F] to-[#8C603A] p-10 text-white md:p-14">

                    <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

                    <div className="relative z-10 max-w-3xl">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                            <ShieldCheck size={27} />
                        </div>

                        <p className="mt-7 text-sm font-semibold uppercase tracking-[3px] text-white/70">
                            Have a Question?
                        </p>

                        <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                            We're Here to Help
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-white/85">
                            If you have questions about this Disclaimer, our content,
                            product recommendations, or anything related to
                            DreamHomeDecorHub, feel free to contact us.
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


            {/* ================= FINAL NOTE ================= */}

            <section className="mx-auto max-w-4xl px-6 pb-28 text-center">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F8F1E8] text-[#B07A4F]">
                    <ShieldCheck size={28} />
                </div>

                <h2 className="mt-6 text-3xl font-bold">
                    Thank You for Visiting DreamHomeDecorHub
                </h2>

                <p className="mt-5 leading-8 text-gray-600">
                    We appreciate your trust and hope our content helps you
                    create a home that feels beautiful, comfortable, and
                    uniquely yours.
                </p>

            </section>
<Footer/>

        </main>
    );
}