"use client";
import Link from "next/link";

import Footer from "@/components/home-page/Footer";
import Header from "@/components/home-page/Header";
import {
    ShoppingBag,
    Heart,
    Link as LinkIcon,
    ShieldCheck,
    Sparkles,
    Info,
    ChevronRight,
} from "lucide-react";

export default function AffiliateDisclosure() {
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
                            Transparency Matters
                        </div>

                        <h1 className="mt-7 text-5xl font-bold leading-tight tracking-tight md:text-6xl">
                            Affiliate Disclosure
                        </h1>

                        <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600 md:text-xl">
                            At DreamHomeDecorHub, we believe in being transparent about
                            how our website works and how we may earn money from some of
                            the products we recommend.
                        </p>

                        <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm text-gray-600 shadow-sm">
                            <Info size={18} className="text-[#B07A4F]" />
                            Last Updated: August 7, 2026
                        </div>

                    </div>

                </div>
            </section>


            {/* ================= INTRO ================= */}

            <section className="mx-auto max-w-7xl px-6 py-16">

                <div className="rounded-[32px] border border-[#EEE7DD] bg-white p-8 shadow-sm md:p-12">

                    <div className="flex flex-col gap-6 md:flex-row md:items-start">

                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#F8F1E8] text-[#B07A4F]">
                            <ShoppingBag size={30} />
                        </div>

                        <div>

                            <h2 className="text-3xl font-bold">
                                Why You'll See Affiliate Links
                            </h2>

                            <p className="mt-5 leading-8 text-gray-600">
                                DreamHomeDecorHub creates home decor inspiration,
                                decorating guides, product roundups, and styling ideas
                                to help you create a beautiful and comfortable home.
                            </p>

                            <p className="mt-4 leading-8 text-gray-600">
                                Some of the products mentioned on our website may be
                                linked through affiliate programs. This means that when
                                you click an eligible affiliate link and make a qualifying
                                purchase, we may receive a commission.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= AMAZON DISCLOSURE ================= */}

            <section className="mx-auto max-w-7xl px-6 pb-20">

                <div className="relative overflow-hidden rounded-[36px] bg-[#2F2A26] p-8 text-white md:p-12">

                    <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#B07A4F]/20 blur-3xl" />

                    <div className="relative z-10">

                        <div className="flex items-center gap-4">

                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
                                <ShoppingBag size={30} />
                            </div>

                            <div>

                                <p className="text-sm uppercase tracking-[3px] text-white/60">
                                    Important Disclosure
                                </p>

                                <h2 className="mt-1 text-3xl font-bold">
                                    Amazon Associates
                                </h2>

                            </div>

                        </div>

                        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">

                            <p className="text-lg leading-8 text-white/90">
                                As an Amazon Associate, DreamHomeDecorHub may earn from
                                qualifying purchases made through eligible Amazon links
                                on our website.
                            </p>

                        </div>

                        <p className="mt-6 max-w-3xl leading-8 text-white/70">
                            This means that if you click certain product links on
                            DreamHomeDecorHub and make an eligible purchase, we may
                            receive a commission. The price you pay is not increased
                            because of our affiliate relationship.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= HOW IT WORKS ================= */}

            <section className="mx-auto max-w-7xl px-6 pb-20">

                <div className="mb-10 max-w-2xl">

                    <p className="text-sm font-semibold uppercase tracking-[3px] text-[#B07A4F]">
                        Simple & Transparent
                    </p>

                    <h2 className="mt-3 text-4xl font-bold">
                        How Affiliate Links Work
                    </h2>

                    <p className="mt-4 leading-8 text-gray-600">
                        Here's a simple look at what happens when you use one of
                        our product links.
                    </p>

                </div>


                <div className="grid gap-6 md:grid-cols-3">

                    {/* STEP 1 */}

                    <div className="rounded-3xl border border-[#EEE7DD] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8F1E8] text-[#B07A4F]">
                            <Sparkles size={25} />
                        </div>

                        <span className="mt-7 block text-sm font-semibold text-[#B07A4F]">
                            STEP 01
                        </span>

                        <h3 className="mt-2 text-2xl font-semibold">
                            Discover
                        </h3>

                        <p className="mt-4 leading-7 text-gray-600">
                            You discover a product through one of our decorating
                            guides, product recommendations, or Shop the Look sections.
                        </p>

                    </div>


                    {/* STEP 2 */}

                    <div className="rounded-3xl border border-[#EEE7DD] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8F1E8] text-[#B07A4F]">
                            <LinkIcon size={25} />
                        </div>

                        <span className="mt-7 block text-sm font-semibold text-[#B07A4F]">
                            STEP 02
                        </span>

                        <h3 className="mt-2 text-2xl font-semibold">
                            Click
                        </h3>

                        <p className="mt-4 leading-7 text-gray-600">
                            You click the product link and are taken to the retailer's
                            website where you can view the product and its current details.
                        </p>

                    </div>


                    {/* STEP 3 */}

                    <div className="rounded-3xl border border-[#EEE7DD] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8F1E8] text-[#B07A4F]">
                            <Heart size={25} />
                        </div>

                        <span className="mt-7 block text-sm font-semibold text-[#B07A4F]">
                            STEP 03
                        </span>

                        <h3 className="mt-2 text-2xl font-semibold">
                            Purchase
                        </h3>

                        <p className="mt-4 leading-7 text-gray-600">
                            If you decide to purchase an eligible product, we may
                            receive a commission at no additional cost to you.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= TRUST ================= */}

            <section className="mx-auto max-w-7xl px-6 pb-24">

                <div className="rounded-[32px] border border-[#EEE7DD] bg-[#FAF6F1] p-8 md:p-12">

                    <div className="max-w-3xl">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#B07A4F] shadow-sm">
                            <ShieldCheck size={27} />
                        </div>

                        <h2 className="mt-7 text-3xl font-bold">
                            Our Commitment to You
                        </h2>

                        <p className="mt-5 leading-8 text-gray-600">
                            Affiliate relationships do not change our goal of creating
                            useful and inspiring home decor content. We aim to provide
                            helpful information so you can make your own purchasing
                            decisions.
                        </p>

                        <div className="mt-7 space-y-4">

                            {[
                                "We clearly identify affiliate relationships where appropriate.",
                                "Affiliate links do not increase the price you pay.",
                                "We focus on products that fit the topic and purpose of our content.",
                                "We encourage readers to check current product details before purchasing.",
                            ].map((item, index) => (

                                <div
                                    key={index}
                                    className="flex items-start gap-3"
                                >

                                    <ChevronRight
                                        size={19}
                                        className="mt-1 shrink-0 text-[#B07A4F]"
                                    />

                                    <p className="leading-7 text-gray-600">
                                        {item}
                                    </p>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </section>
            {/* ================= HOW WE CHOOSE PRODUCTS ================= */}

            <section className="mx-auto max-w-7xl px-6 pb-20">

                <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

                    {/* LEFT CONTENT */}

                    <div className="rounded-[32px] bg-[#2F2A26] p-8 text-white md:p-10">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                            <Sparkles size={27} />
                        </div>

                        <p className="mt-7 text-sm font-semibold uppercase tracking-[3px] text-white/60">
                            Our Approach
                        </p>

                        <h2 className="mt-3 text-3xl font-bold">
                            How We Choose Products
                        </h2>

                        <p className="mt-5 leading-8 text-white/70">
                            We create our recommendations around the purpose of each
                            article and the needs of our readers. We aim to highlight
                            products that can complement the decorating ideas we share.
                        </p>

                    </div>


                    {/* RIGHT CARDS */}

                    <div className="grid gap-5 sm:grid-cols-2">

                        <div className="rounded-3xl border border-[#EEE7DD] bg-white p-7 shadow-sm">

                            <div className="text-2xl">
                                🏡
                            </div>

                            <h3 className="mt-5 text-xl font-semibold">
                                Relevance
                            </h3>

                            <p className="mt-3 leading-7 text-gray-600">
                                Products should be relevant to the room, decorating idea,
                                or design concept discussed in the article.
                            </p>

                        </div>


                        <div className="rounded-3xl border border-[#EEE7DD] bg-white p-7 shadow-sm">

                            <div className="text-2xl">
                                ✨
                            </div>

                            <h3 className="mt-5 text-xl font-semibold">
                                Style
                            </h3>

                            <p className="mt-3 leading-7 text-gray-600">
                                We look for products that can complement different
                                interior styles and decorating aesthetics.
                            </p>

                        </div>


                        <div className="rounded-3xl border border-[#EEE7DD] bg-white p-7 shadow-sm">

                            <div className="text-2xl">
                                💡
                            </div>

                            <h3 className="mt-5 text-xl font-semibold">
                                Usefulness
                            </h3>

                            <p className="mt-3 leading-7 text-gray-600">
                                We aim to recommend products that can provide practical
                                value in a real home.
                            </p>

                        </div>


                        <div className="rounded-3xl border border-[#EEE7DD] bg-white p-7 shadow-sm">

                            <div className="text-2xl">
                                🤍
                            </div>

                            <h3 className="mt-5 text-xl font-semibold">
                                Reader First
                            </h3>

                            <p className="mt-3 leading-7 text-gray-600">
                                Our priority is to provide useful inspiration rather than
                                encouraging unnecessary purchases.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= PRICES & AVAILABILITY ================= */}

            <section className="mx-auto max-w-7xl px-6 pb-20">

                <div className="rounded-[32px] border border-[#EEE7DD] bg-white p-8 shadow-sm md:p-10">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8F1E8] text-[#B07A4F]">
                        <Info size={27} />
                    </div>

                    <h2 className="mt-7 text-3xl font-bold">
                        Product Prices & Availability
                    </h2>

                    <p className="mt-5 max-w-4xl leading-8 text-gray-600">
                        Product prices, discounts, availability, shipping information,
                        colors, sizes, and other details may change at any time.
                        Information shown in our articles should therefore be considered
                        general guidance rather than a guarantee of a product's current
                        price or availability.
                    </p>

                    <div className="mt-7 rounded-2xl bg-[#FAF6F1] p-6">

                        <p className="leading-7 text-gray-600">
                            <strong className="text-[#2F2F2F]">
                                Before purchasing:
                            </strong>{" "}
                            We recommend checking the retailer's product page for the
                            latest price, specifications, availability, shipping details,
                            return policies, and customer reviews.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= EDITORIAL INDEPENDENCE ================= */}

            <section className="mx-auto max-w-7xl px-6 pb-20">

                <div className="rounded-[36px] bg-[#F3E9DE] p-8 md:p-12">

                    <div className="max-w-4xl">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#B07A4F] shadow-sm">
                            <ShieldCheck size={27} />
                        </div>

                        <h2 className="mt-7 text-3xl font-bold">
                            Editorial Independence
                        </h2>

                        <p className="mt-5 leading-8 text-gray-700">
                            Our affiliate relationships do not guarantee positive
                            coverage of a particular product or brand. We aim to keep
                            our decorating content useful, relevant, and focused on
                            helping readers find ideas and products that fit their needs.
                        </p>

                        <p className="mt-5 leading-8 text-gray-700">
                            We may update product recommendations when products,
                            availability, trends, or reader needs change.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= THIRD PARTY RETAILERS ================= */}

            <section className="mx-auto max-w-7xl px-6 pb-20">

                <div className="rounded-[32px] border border-[#EEE7DD] bg-white p-8 shadow-sm md:p-10">

                    <h2 className="text-3xl font-bold">
                        Third-Party Retailers
                    </h2>

                    <p className="mt-5 max-w-4xl leading-8 text-gray-600">
                        When you click an affiliate or external product link,
                        you may leave DreamHomeDecorHub and visit a third-party
                        retailer's website.
                    </p>

                    <p className="mt-5 max-w-4xl leading-8 text-gray-600">
                        Purchases made on third-party websites are subject to the
                        retailer's own terms, conditions, privacy policies, shipping
                        policies, return policies, and other applicable rules.
                    </p>

                    <div className="mt-8 grid gap-5 md:grid-cols-3">

                        <div className="rounded-2xl bg-[#FAF6F1] p-6">

                            <h3 className="font-semibold">
                                🔗 External Website
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-gray-600">
                                You may be redirected to another website after clicking
                                a product link.
                            </p>

                        </div>

                        <div className="rounded-2xl bg-[#FAF6F1] p-6">

                            <h3 className="font-semibold">
                                🛒 Purchase
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-gray-600">
                                Any purchase is completed directly through the retailer.
                            </p>

                        </div>

                        <div className="rounded-2xl bg-[#FAF6F1] p-6">

                            <h3 className="font-semibold">
                                📋 Retailer Policies
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-gray-600">
                                Always review the retailer's latest policies before buying.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= FAQ ================= */}

            <section className="mx-auto max-w-5xl px-6 pb-20">

                <div className="text-center">

                    <p className="text-sm font-semibold uppercase tracking-[3px] text-[#B07A4F]">
                        Good To Know
                    </p>

                    <h2 className="mt-3 text-4xl font-bold">
                        Frequently Asked Questions
                    </h2>

                </div>


                <div className="mt-10 space-y-5">

                    <div className="rounded-3xl border border-[#EEE7DD] bg-white p-7 shadow-sm">

                        <h3 className="text-xl font-semibold">
                            Do affiliate links cost me extra?
                        </h3>

                        <p className="mt-3 leading-7 text-gray-600">
                            No. Using an affiliate link does not add an affiliate fee
                            to your purchase price. The retailer determines the final
                            price and applicable charges.
                        </p>

                    </div>


                    <div className="rounded-3xl border border-[#EEE7DD] bg-white p-7 shadow-sm">

                        <h3 className="text-xl font-semibold">
                            Do I have to purchase through your links?
                        </h3>

                        <p className="mt-3 leading-7 text-gray-600">
                            No. Our affiliate links are completely optional. You are
                            always free to search for products directly through the
                            retailer of your choice.
                        </p>

                    </div>


                    <div className="rounded-3xl border border-[#EEE7DD] bg-white p-7 shadow-sm">

                        <h3 className="text-xl font-semibold">
                            Can product information change?
                        </h3>

                        <p className="mt-3 leading-7 text-gray-600">
                            Yes. Prices, availability, colors, specifications, and
                            product offerings can change. Always verify the latest
                            information on the retailer's website before purchasing.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= CONTACT CTA ================= */}

            <section className="mx-auto max-w-7xl px-6 pb-24">

                <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#B07A4F] to-[#8C603A] p-10 text-white md:p-14">

                    <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

                    <div className="relative z-10 max-w-3xl">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                            <Heart size={27} />
                        </div>

                        <p className="mt-7 text-sm font-semibold uppercase tracking-[3px] text-white/70">
                            Questions?
                        </p>

                        <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                            We Believe in Transparency
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-white/85">
                            If you have questions about our affiliate relationships,
                            product recommendations, or anything on DreamHomeDecorHub,
                            feel free to reach out.
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
                    <Heart size={27} />
                </div>

                <h2 className="mt-6 text-3xl font-bold">
                    Thank You for Supporting DreamHomeDecorHub
                </h2>

                <p className="mt-5 leading-8 text-gray-600">
                    Every visit, click, and interaction helps us continue creating
                    beautiful and useful home decor inspiration. We appreciate your
                    trust and support.
                </p>

            </section>
            <Footer/>

        </main>
    );
}