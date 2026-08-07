"use client";
import Link from "next/link";

import Footer from "@/components/home-page/Footer";
import Header from "@/components/home-page/Header";
import {
    FileText,
    ShieldCheck,
    BookOpen,
    Copyright,
    Link as LinkIcon,
    UserCheck,
    AlertCircle,
    ChevronRight,
    ShoppingBag,
} from "lucide-react";

export default function TermsConditions() {
    return (
        <main className="min-h-screen bg-[#FDFBF8] text-[#2F2F2F]">
            <Header/>

            {/* ================= HERO ================= */}

            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F6EEE5] via-[#FDFBF8] to-[#F3E9DE]" />

                <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">

                    <div className="max-w-3xl">

                        <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-medium text-[#8A5A32] shadow-sm">
                            <FileText size={18} />
                            Website Guidelines
                        </div>

                        <h1 className="mt-7 text-5xl font-bold leading-tight tracking-tight md:text-6xl">
                            Terms & Conditions
                        </h1>

                        <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600 md:text-xl">
                            Welcome to DreamHomeDecorHub. These Terms & Conditions
                            explain the rules and guidelines that apply when you access
                            and use our website.
                        </p>

                        <div className="mt-8 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm text-gray-600 shadow-sm">
                            📅 Last Updated: August 7, 2026
                        </div>

                    </div>

                </div>
            </section>


            {/* ================= INTRODUCTION ================= */}

            <section className="mx-auto max-w-7xl px-6 py-16">

                <div className="rounded-[32px] border border-[#EEE7DD] bg-white p-8 shadow-sm md:p-12">

                    <div className="flex flex-col gap-6 md:flex-row md:items-start">

                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#F8F1E8] text-[#B07A4F]">
                            <BookOpen size={30} />
                        </div>

                        <div>

                            <h2 className="text-3xl font-bold">
                                Welcome to DreamHomeDecorHub
                            </h2>

                            <p className="mt-5 leading-8 text-gray-600">
                                These Terms & Conditions govern your use of
                                DreamHomeDecorHub and its content, features, articles,
                                product recommendations, images, links, and other
                                services available through our website.
                            </p>

                            <p className="mt-4 leading-8 text-gray-600">
                                By accessing or using DreamHomeDecorHub, you acknowledge
                                that you have read, understood, and agreed to these
                                Terms & Conditions.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= ACCEPTANCE ================= */}

            <section className="mx-auto max-w-7xl px-6 pb-20">

                <div className="grid gap-8 lg:grid-cols-2">

                    <div className="rounded-[32px] border border-[#EEE7DD] bg-white p-8 shadow-sm md:p-10">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8F1E8] text-[#B07A4F]">
                            <UserCheck size={27} />
                        </div>

                        <h2 className="mt-7 text-3xl font-bold">
                            Acceptance of Terms
                        </h2>

                        <p className="mt-5 leading-8 text-gray-600">
                            By visiting and using this website, you agree to comply
                            with these Terms & Conditions and all applicable laws
                            and regulations.
                        </p>

                        <p className="mt-4 leading-8 text-gray-600">
                            If you do not agree with any part of these terms, please
                            discontinue use of the website.
                        </p>

                    </div>


                    <div className="rounded-[32px] border border-[#EEE7DD] bg-white p-8 shadow-sm md:p-10">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8F1E8] text-[#B07A4F]">
                            <ShieldCheck size={27} />
                        </div>

                        <h2 className="mt-7 text-3xl font-bold">
                            Responsible Website Use
                        </h2>

                        <p className="mt-5 leading-8 text-gray-600">
                            You agree to use DreamHomeDecorHub only for lawful
                            purposes and in a way that does not harm the website,
                            its visitors, or its content.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= WEBSITE CONTENT ================= */}

            <section className="mx-auto max-w-7xl px-6 pb-20">

                <div className="rounded-[32px] border border-[#EEE7DD] bg-white p-8 shadow-sm md:p-10">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8F1E8] text-[#B07A4F]">
                        <BookOpen size={27} />
                    </div>

                    <h2 className="mt-7 text-3xl font-bold">
                        Website Content
                    </h2>

                    <p className="mt-5 leading-8 text-gray-600">
                        DreamHomeDecorHub provides home decor inspiration,
                        decorating ideas, organization tips, product suggestions,
                        styling guides, and related lifestyle content.
                    </p>

                    <p className="mt-5 leading-8 text-gray-600">
                        Our content is created for informational and inspirational
                        purposes. Room layouts, decorating recommendations,
                        measurements, product information, and other details may
                        not be suitable for every home or situation.
                    </p>

                    <div className="mt-8 grid gap-5 md:grid-cols-3">

                        <div className="rounded-2xl bg-[#FAF6F1] p-6">

                            <h3 className="font-semibold">
                                💡 Inspiration
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-gray-600">
                                Our ideas are intended to inspire your own decorating
                                decisions.
                            </p>

                        </div>

                        <div className="rounded-2xl bg-[#FAF6F1] p-6">

                            <h3 className="font-semibold">
                                🏡 Home Projects
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-gray-600">
                                Consider your own space, budget, measurements, and
                                requirements before starting a project.
                            </p>

                        </div>

                        <div className="rounded-2xl bg-[#FAF6F1] p-6">

                            <h3 className="font-semibold">
                                🛍️ Products
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-gray-600">
                                Product prices, availability, and specifications may
                                change without notice.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= INTELLECTUAL PROPERTY ================= */}

            <section className="mx-auto max-w-7xl px-6 pb-20">

                <div className="rounded-[36px] bg-[#2F2A26] p-8 text-white md:p-12">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                        <Copyright size={27} />
                    </div>

                    <h2 className="mt-7 text-3xl font-bold">
                        Intellectual Property
                    </h2>

                    <p className="mt-5 max-w-4xl leading-8 text-white/75">
                        Unless otherwise stated, the original content published
                        on DreamHomeDecorHub, including written articles, graphics,
                        logos, page designs, original illustrations, and other
                        website materials, belongs to DreamHomeDecorHub or is used
                        with appropriate permission.
                    </p>

                    <div className="mt-8 grid gap-5 md:grid-cols-2">

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                            <h3 className="font-semibold">
                                Allowed
                            </h3>

                            <p className="mt-3 leading-7 text-white/65">
                                You may view, read, and share links to our content for
                                personal and non-commercial purposes.
                            </p>

                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                            <h3 className="font-semibold">
                                Not Allowed
                            </h3>

                            <p className="mt-3 leading-7 text-white/65">
                                You may not reproduce, copy, republish, sell, modify,
                                or distribute our original content without permission.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= EXTERNAL LINKS ================= */}

            <section className="mx-auto max-w-7xl px-6 pb-20">

                <div className="rounded-[32px] border border-[#EEE7DD] bg-white p-8 shadow-sm md:p-10">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8F1E8] text-[#B07A4F]">
                        <LinkIcon size={27} />
                    </div>

                    <h2 className="mt-7 text-3xl font-bold">
                        External Links & Third-Party Websites
                    </h2>

                    <p className="mt-5 leading-8 text-gray-600">
                        Our website may contain links to third-party websites,
                        retailers, social media platforms, and other external
                        services.
                    </p>

                    <p className="mt-5 leading-8 text-gray-600">
                        We do not control or guarantee the availability, accuracy,
                        security, or policies of external websites. Visiting a
                        third-party website is done at your own discretion.
                    </p>

                </div>

            </section>


            {/* ================= NOTICE ================= */}

            <section className="mx-auto max-w-7xl px-6 pb-20">

                <div className="rounded-[32px] border border-[#E9D8C5] bg-[#FBF3E9] p-8 md:p-10">

                    <div className="flex items-start gap-5">

                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-[#B07A4F] shadow-sm">
                            <AlertCircle size={27} />
                        </div>

                        <div>

                            <h2 className="text-2xl font-bold">
                                Important Notice
                            </h2>

                            <p className="mt-4 leading-8 text-gray-700">
                                The information provided on DreamHomeDecorHub is for
                                general informational and inspirational purposes only.
                                You should use your own judgment and consider your
                                individual circumstances before making decisions based
                                on information found on this website.
                            </p>

                        </div>

                    </div>

                </div>

            </section>
            {/* ================= AFFILIATE LINKS ================= */}

            <section className="mx-auto max-w-7xl px-6 pb-20">

                <div className="rounded-[32px] border border-[#EEE7DD] bg-white p-8 shadow-sm md:p-10">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8F1E1] text-[#B07A4F]">
                        <ShoppingBag size={27} />
                    </div>

                    <h2 className="mt-7 text-3xl font-bold">
                        Affiliate Links & Product Recommendations
                    </h2>

                    <p className="mt-5 leading-8 text-gray-600">
                        DreamHomeDecorHub may participate in affiliate marketing
                        programs. Some links on our website may be affiliate links,
                        including links associated with the Amazon Associates Program.
                    </p>

                    <p className="mt-5 leading-8 text-gray-600">
                        When you click an eligible affiliate link and make a qualifying
                        purchase, we may earn a commission at no additional cost to you.
                    </p>

                    <div className="mt-8 rounded-2xl bg-[#FAF6F1] p-6">

                        <p className="leading-7 text-gray-600">
                            Product prices, availability, specifications, discounts,
                            shipping information, and other details are controlled by
                            the applicable retailer and may change at any time.
                        </p>

                    </div>

                    <p className="mt-6 text-sm leading-7 text-gray-500">
                        For more information, please review our Affiliate Disclosure.
                    </p>

                </div>

            </section>


            {/* ================= USER RESPONSIBILITIES ================= */}

            <section className="mx-auto max-w-7xl px-6 pb-20">

                <div className="grid gap-8 lg:grid-cols-2">

                    <div className="rounded-[32px] border border-[#EEE7DD] bg-white p-8 shadow-sm md:p-10">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8F1E8] text-[#B07A4F]">
                            <UserCheck size={27} />
                        </div>

                        <h2 className="mt-7 text-3xl font-bold">
                            User Responsibilities
                        </h2>

                        <p className="mt-5 leading-8 text-gray-600">
                            When using DreamHomeDecorHub, you agree to use the website
                            responsibly and lawfully.
                        </p>

                        <div className="mt-7 space-y-4">

                            {[
                                "Use the website only for lawful purposes.",
                                "Do not attempt to damage, disrupt, or interfere with the website.",
                                "Do not use our content for fraudulent or misleading purposes.",
                                "Do not copy or republish protected content without permission.",
                                "Do not attempt unauthorized access to website systems or data."
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


                    {/* USER CONTENT */}

                    <div className="rounded-[32px] border border-[#EEE7DD] bg-white p-8 shadow-sm md:p-10">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8F1E8] text-[#B07A4F]">
                            💬
                        </div>

                        <h2 className="mt-7 text-3xl font-bold">
                            Comments & User Submissions
                        </h2>

                        <p className="mt-5 leading-8 text-gray-600">
                            If DreamHomeDecorHub allows comments, reviews, contact
                            submissions, or other user-generated content, you are
                            responsible for the information and material you submit.
                        </p>

                        <p className="mt-5 leading-8 text-gray-600">
                            We reserve the right to remove content that is abusive,
                            misleading, unlawful, spam-related, offensive, or otherwise
                            inappropriate for our website.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= DISCLAIMER ================= */}

            <section className="mx-auto max-w-7xl px-6 pb-20">

                <div className="rounded-[36px] bg-[#2F2A26] p-8 text-white md:p-12">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                        <AlertCircle size={27} />
                    </div>

                    <h2 className="mt-7 text-3xl font-bold">
                        Disclaimer
                    </h2>

                    <p className="mt-5 max-w-4xl leading-8 text-white/75">
                        The content published on DreamHomeDecorHub is provided for
                        general informational and inspirational purposes. While we
                        make reasonable efforts to provide useful and accurate
                        information, we do not guarantee that every piece of content
                        is complete, current, or error-free.
                    </p>

                    <p className="mt-5 max-w-4xl leading-8 text-white/75">
                        Home decor ideas, measurements, product recommendations,
                        organization methods, DIY suggestions, and other information
                        should be evaluated based on your own circumstances.
                    </p>

                </div>

            </section>


            {/* ================= LIMITATION OF LIABILITY ================= */}

            <section className="mx-auto max-w-7xl px-6 pb-20">

                <div className="rounded-[32px] border border-[#EEE7DD] bg-white p-8 shadow-sm md:p-10">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8F1E8] text-[#B07A4F]">
                        <ShieldCheck size={27} />
                    </div>

                    <h2 className="mt-7 text-3xl font-bold">
                        Limitation of Liability
                    </h2>

                    <p className="mt-5 leading-8 text-gray-600">
                        To the extent permitted by applicable law, DreamHomeDecorHub
                        and its owners, contributors, or affiliates will not be
                        responsible for losses, damages, or issues arising from your
                        use of information, products, services, or third-party
                        websites accessed through our website.
                    </p>

                    <p className="mt-5 leading-8 text-gray-600">
                        You use the information available on DreamHomeDecorHub at
                        your own discretion and risk.
                    </p>

                </div>

            </section>


            {/* ================= ACCURACY ================= */}

            <section className="mx-auto max-w-7xl px-6 pb-20">

                <div className="rounded-[32px] border border-[#EEE7DD] bg-white p-8 shadow-sm md:p-10">

                    <h2 className="text-3xl font-bold">
                        Accuracy of Information
                    </h2>

                    <p className="mt-5 leading-8 text-gray-600">
                        We aim to keep our articles and recommendations useful and
                        up to date. However, information can become outdated as
                        products, prices, trends, technologies, and external websites
                        change.
                    </p>

                    <p className="mt-5 leading-8 text-gray-600">
                        If you notice an error or outdated information, you are
                        welcome to contact us so we can review it.
                    </p>

                </div>

            </section>


            {/* ================= WEBSITE AVAILABILITY ================= */}

            <section className="mx-auto max-w-7xl px-6 pb-20">

                <div className="grid gap-6 md:grid-cols-3">

                    <div className="rounded-3xl border border-[#EEE7DD] bg-white p-7 shadow-sm">

                        <div className="text-2xl">
                            🌐
                        </div>

                        <h3 className="mt-5 text-xl font-semibold">
                            Website Availability
                        </h3>

                        <p className="mt-3 leading-7 text-gray-600">
                            We aim to keep DreamHomeDecorHub available, but we cannot
                            guarantee uninterrupted access at all times.
                        </p>

                    </div>


                    <div className="rounded-3xl border border-[#EEE7DD] bg-white p-7 shadow-sm">

                        <div className="text-2xl">
                            🔧
                        </div>

                        <h3 className="mt-5 text-xl font-semibold">
                            Maintenance
                        </h3>

                        <p className="mt-3 leading-7 text-gray-600">
                            The website may occasionally be unavailable because of
                            maintenance, updates, hosting issues, or technical problems.
                        </p>

                    </div>


                    <div className="rounded-3xl border border-[#EEE7DD] bg-white p-7 shadow-sm">

                        <div className="text-2xl">
                            🔄
                        </div>

                        <h3 className="mt-5 text-xl font-semibold">
                            Changes
                        </h3>

                        <p className="mt-3 leading-7 text-gray-600">
                            We may modify, update, remove, or discontinue website
                            content or features without prior notice.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= PRIVACY ================= */}

            <section className="mx-auto max-w-7xl px-6 pb-20">

                <div className="rounded-[32px] border border-[#EEE7DD] bg-[#FAF6F1] p-8 md:p-10">

                    <div className="flex items-start gap-5">

                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-[#B07A4F] shadow-sm">
                            🔒
                        </div>

                        <div>

                            <h2 className="text-3xl font-bold">
                                Privacy
                            </h2>

                            <p className="mt-5 leading-8 text-gray-600">
                                Your use of DreamHomeDecorHub is also subject to our
                                Privacy Policy, which explains how information may be
                                collected, used, and protected when you visit our website.
                            </p>

                            <a
                                href="/privacy-policy"
                                className="mt-6 inline-flex items-center gap-2 font-semibold text-[#9A653E] hover:text-[#70452A]"
                            >
                                Read our Privacy Policy
                                <ChevronRight size={18} />
                            </a>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= CHANGES TO TERMS ================= */}

            <section className="mx-auto max-w-7xl px-6 pb-20">

                <div className="rounded-[32px] border border-[#EEE7DD] bg-white p-8 shadow-sm md:p-10">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8F1E8] text-[#B07A4F]">
                        🔄
                    </div>

                    <h2 className="mt-7 text-3xl font-bold">
                        Changes to These Terms
                    </h2>

                    <p className="mt-5 leading-8 text-gray-600">
                        We may update these Terms & Conditions from time to time
                        to reflect changes to our website, services, legal requirements,
                        or business practices.
                    </p>

                    <p className="mt-5 leading-8 text-gray-600">
                        Updated terms will be posted on this page along with a
                        revised "Last Updated" date. Your continued use of the website
                        after changes are posted means you accept the updated terms.
                    </p>

                </div>

            </section>


            {/* ================= GOVERNING LAW ================= */}

            <section className="mx-auto max-w-7xl px-6 pb-20">

                <div className="rounded-[32px] border border-[#EEE7DD] bg-white p-8 shadow-sm md:p-10">

                    <h2 className="text-3xl font-bold">
                        Governing Law
                    </h2>

                    <p className="mt-5 leading-8 text-gray-600">
                        These Terms & Conditions shall be interpreted and applied
                        in accordance with applicable laws. Any legal matters relating
                        to the website will be handled in accordance with the
                        applicable jurisdiction and laws governing DreamHomeDecorHub.
                    </p>

                    <p className="mt-5 text-sm leading-7 text-gray-500">
                        If you require specific legal advice regarding your website,
                        business structure, or applicable laws, please consult a
                        qualified legal professional.
                    </p>

                </div>

            </section>


            {/* ================= CONTACT CTA ================= */}

            <section className="mx-auto max-w-7xl px-6 pb-24">

                <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#B07A4F] to-[#8C603A] p-10 text-white md:p-14">

                    <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

                    <div className="relative z-10 max-w-3xl">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                            <FileText size={27} />
                        </div>

                        <p className="mt-7 text-sm font-semibold uppercase tracking-[3px] text-white/70">
                            Need Help?
                        </p>

                        <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                            Questions About These Terms?
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-white/85">
                            If you have questions about these Terms & Conditions or
                            anything related to DreamHomeDecorHub, you can contact us
                            directly.
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

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F8F1E1] text-[#B07A4F]">
                    <ShieldCheck size={28} />
                </div>

                <h2 className="mt-6 text-3xl font-bold">
                    Thank You for Visiting DreamHomeDecorHub
                </h2>

                <p className="mt-5 leading-8 text-gray-600">
                    We appreciate you taking the time to understand the guidelines
                    that help us maintain a useful, welcoming, and trustworthy
                    home decor website.
                </p>

            </section>
<Footer/>

        </main>
    );
}