"use client";

import { useState } from "react";
import Footer from "@/components/home-page/Footer";
import Header from "@/components/home-page/Header";
import {
    Mail,
    MessageCircle,
    Clock,
    Send,
    MapPin,
    ChevronRight,
    Heart,
} from "lucide-react";

export default function Contact() {
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;

        setIsSending(true);
        setErrorMessage("");

        const formData = {
            name: form.Name.value,
            email: form.Email.value,
            subject: form.Subject.value,
            message: form.Message.value,
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(
                    result.message || "Something went wrong."
                );
            }

            // Clear form
            form.reset();

            // Show success screen
            setIsSent(true);
        } catch (error) {
            console.error("Contact form error:", error);

            setErrorMessage(
                error.message ||
                    "Unable to send your message. Please try again."
            );
        } finally {
            setIsSending(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#FDFBF8] text-[#2F2F2F]">
            <Header />

            {/* ================= HERO ================= */}

            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F6EEE5] via-[#FDFBF8] to-[#F3E9DE]" />

                <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-medium text-[#8A5A32] shadow-sm">
                            <MessageCircle size={18} />
                            We'd Love to Hear From You
                        </div>

                        <h1 className="mt-7 text-5xl font-bold leading-tight tracking-tight md:text-6xl">
                            Let's Talk About
                            <span className="block text-[#B07A4F]">
                                Your Home
                            </span>
                        </h1>

                        <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600 md:text-xl">
                            Have a question, suggestion, collaboration idea,
                            or simply want to say hello? We'd love to hear
                            from you.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= CONTACT INFO + FORM ================= */}

            <section className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

                    {/* ================= LEFT INFO ================= */}

                    <div className="rounded-[36px] bg-[#2F2A26] p-8 text-white md:p-10">
                        <p className="text-sm font-semibold uppercase tracking-[3px] text-white/60">
                            Get In Touch
                        </p>

                        <h2 className="mt-4 text-3xl font-bold">
                            We'd Love to Connect
                        </h2>

                        <p className="mt-5 leading-8 text-white/70">
                            Whether you're looking for help with our content,
                            have feedback about an article, or want to explore
                            a collaboration, feel free to reach out.
                        </p>

                        {/* EMAIL */}

                        <div className="mt-10 flex items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                                <Mail size={21} />
                            </div>

                            <div>
                                <p className="text-sm text-white/50">
                                    Email
                                </p>

                                <a
                                    href="mailto:vj13798@gmail.com"
                                    className="mt-1 block font-medium transition hover:text-[#D7B08B]"
                                >
                                    vj13798@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* RESPONSE TIME */}

                        <div className="mt-7 flex items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                                <Clock size={21} />
                            </div>

                            <div>
                                <p className="text-sm text-white/50">
                                    Response Time
                                </p>

                                <p className="mt-1 font-medium">
                                    Usually within 24–48 hours
                                </p>
                            </div>
                        </div>

                        {/* WEBSITE */}

                        <div className="mt-7 flex items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                                <MapPin size={21} />
                            </div>

                            <div>
                                <p className="text-sm text-white/50">
                                    Website
                                </p>

                                <p className="mt-1 font-medium">
                                    DreamHomeDecorHub
                                </p>
                            </div>
                        </div>

                        {/* NOTE */}

                        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">
                            <Heart
                                size={22}
                                className="text-[#D7B08B]"
                            />

                            <p className="mt-4 text-sm leading-7 text-white/65">
                                Your feedback helps us make
                                DreamHomeDecorHub better and create content
                                that is genuinely useful for our readers.
                            </p>
                        </div>
                    </div>

                    {/* ================= CONTACT FORM ================= */}

                    <div className="rounded-[36px] border border-[#EEE7DD] bg-white p-8 shadow-sm md:p-10">

                        {!isSent ? (
                            <>
                                <p className="text-sm font-semibold uppercase tracking-[3px] text-[#B07A4F]">
                                    Send a Message
                                </p>

                                <h2 className="mt-3 text-3xl font-bold">
                                    How Can We Help?
                                </h2>

                                <p className="mt-4 leading-7 text-gray-600">
                                    Fill out the form below and we'll get back
                                    to you as soon as possible.
                                </p>

                                <form
                                    onSubmit={handleSubmit}
                                    className="mt-8 space-y-6"
                                >
                                    {/* NAME */}

                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="mb-2 block text-sm font-medium text-gray-700"
                                        >
                                            Your Name
                                        </label>

                                        <input
                                            id="name"
                                            name="Name"
                                            type="text"
                                            placeholder="Enter your name"
                                            required
                                            className="w-full rounded-2xl border border-[#E7DED4] bg-[#FDFBF8] px-5 py-4 outline-none transition placeholder:text-gray-400 focus:border-[#B07A4F] focus:ring-2 focus:ring-[#B07A4F]/10"
                                        />
                                    </div>

                                    {/* EMAIL */}

                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="mb-2 block text-sm font-medium text-gray-700"
                                        >
                                            Email Address
                                        </label>

                                        <input
                                            id="email"
                                            name="Email"
                                            type="email"
                                            placeholder="you@example.com"
                                            required
                                            className="w-full rounded-2xl border border-[#E7DED4] bg-[#FDFBF8] px-5 py-4 outline-none transition placeholder:text-gray-400 focus:border-[#B07A4F] focus:ring-2 focus:ring-[#B07A4F]/10"
                                        />
                                    </div>

                                    {/* SUBJECT */}

                                    <div>
                                        <label
                                            htmlFor="subject"
                                            className="mb-2 block text-sm font-medium text-gray-700"
                                        >
                                            Subject
                                        </label>

                                        <input
                                            id="subject"
                                            name="Subject"
                                            type="text"
                                            placeholder="What would you like to talk about?"
                                            required
                                            className="w-full rounded-2xl border border-[#E7DED4] bg-[#FDFBF8] px-5 py-4 outline-none transition placeholder:text-gray-400 focus:border-[#B07A4F] focus:ring-2 focus:ring-[#B07A4F]/10"
                                        />
                                    </div>

                                    {/* MESSAGE */}

                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="mb-2 block text-sm font-medium text-gray-700"
                                        >
                                            Your Message
                                        </label>

                                        <textarea
                                            id="message"
                                            name="Message"
                                            rows={6}
                                            placeholder="Write your message here..."
                                            required
                                            className="w-full resize-none rounded-2xl border border-[#E7DED4] bg-[#FDFBF8] px-5 py-4 outline-none transition placeholder:text-gray-400 focus:border-[#B07A4F] focus:ring-2 focus:ring-[#B07A4F]/10"
                                        />
                                    </div>

                                    {/* ERROR */}

                                    {errorMessage && (
                                        <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm leading-6 text-red-700">
                                            {errorMessage}
                                        </div>
                                    )}

                                    {/* BUTTON */}

                                    <button
                                        type="submit"
                                        disabled={isSending}
                                        className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[#B07A4F] px-6 py-4 font-semibold text-white transition hover:bg-[#965F37] disabled:cursor-not-allowed disabled:opacity-70"
                                    >
                                        {isSending ? (
                                            <>
                                                <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send size={19} />
                                            </>
                                        )}
                                    </button>

                                    <p className="text-center text-xs leading-6 text-gray-500">
                                        By contacting us, you acknowledge that
                                        your message will be sent to our email
                                        address.
                                    </p>
                                </form>
                            </>
                        ) : (
                            /* ================= SUCCESS ================= */

                            <div className="flex min-h-[560px] flex-col items-center justify-center text-center">
                                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#F3E9DE] text-[#B07A4F]">
                                    <Send size={30} />
                                </div>

                                <h2 className="mt-7 text-3xl font-bold">
                                    Message Sent Successfully! ✨
                                </h2>

                                <p className="mt-4 max-w-md leading-7 text-gray-600">
                                    Thank you for reaching out to
                                    DreamHomeDecorHub. Your message has been
                                    sent successfully. We'll get back to you
                                    as soon as possible.
                                </p>

                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsSent(false);
                                        setErrorMessage("");
                                    }}
                                    className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#DCCFC2] px-6 py-3 font-semibold text-[#8C603A] transition hover:bg-[#FAF6F1]"
                                >
                                    Send Another Message
                                    <ChevronRight size={18} />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* ================= CONTACT TOPICS ================= */}

            <section className="mx-auto max-w-7xl px-6 pb-20">
                <div className="mb-10 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[3px] text-[#B07A4F]">
                        What Can You Contact Us About?
                    </p>

                    <h2 className="mt-3 text-4xl font-bold">
                        We're Open to Your Ideas
                    </h2>
                </div>

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

                    {[
                        {
                            icon: "💡",
                            title: "Suggestions",
                            text: "Have an article idea or topic you'd love to see?",
                        },
                        {
                            icon: "🏡",
                            title: "Decor Ideas",
                            text: "Share your favorite decorating ideas and inspiration.",
                        },
                        {
                            icon: "🤝",
                            title: "Collaborations",
                            text: "Interested in working together? We'd love to hear from you.",
                        },
                        {
                            icon: "📝",
                            title: "Feedback",
                            text: "Tell us what you like or what we can improve.",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="rounded-3xl border border-[#EEE7DD] bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8F1E8] text-2xl">
                                {item.icon}
                            </div>

                            <h3 className="mt-5 text-xl font-semibold">
                                {item.title}
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-gray-600">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= CTA ================= */}

            <section className="mx-auto max-w-7xl px-6 pb-24">
                <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#B07A4F] to-[#8C603A] p-10 text-white md:p-14">

                    <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

                    <div className="relative z-10 max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[3px] text-white/70">
                            Let's Create Something Beautiful
                        </p>

                        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                            Your Home, Your Style, Your Story.
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-white/85">
                            DreamHomeDecorHub is built around one simple idea:
                            beautiful homes don't have to look the same. Your
                            personality should be part of your space.
                        </p>

                        <a
                            href="/blog"
                            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 font-semibold text-[#8C603A] transition hover:bg-[#FFF9F3]"
                        >
                            Explore Our Ideas
                            <ChevronRight size={19} />
                        </a>
                    </div>
                </div>
            </section>

            {/* ================= FINAL NOTE ================= */}

            <section className="mx-auto max-w-4xl px-6 pb-28 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F8F1E8] text-[#B07A4F]">
                    <Heart size={28} />
                </div>

                <h2 className="mt-6 text-3xl font-bold">
                    Thank You for Reaching Out
                </h2>

                <p className="mt-5 leading-8 text-gray-600">
                    Every message, suggestion, and piece of feedback helps us
                    make DreamHomeDecorHub a better place for home decor
                    inspiration.
                </p>
            </section>

            <Footer />
        </main>
    );
}

