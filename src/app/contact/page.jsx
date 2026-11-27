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
        <main className="min-h-screen bg-[#faf8f5] text-[#302923]">
            <Header />


            {/* ================= HERO ================= */}

            <section className="relative overflow-hidden bg-[#eee7de]">
                <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#d9cabc]/50" />
                <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-[#d9cabc]/50" />

                <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">

                    <div className="max-w-3xl">

                        <div className="flex items-center gap-3">
                            <span className="h-px w-9 bg-[#a77c5b]" />

                            <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#a77c5b]">
                                Let's Connect
                            </span>
                        </div>

                        <h1 className="mt-7 font-serif text-5xl font-normal leading-[1.15] tracking-tight text-[#302923] sm:text-6xl lg:text-7xl">
                            Every Lovely Idea
                            <span className="block italic text-[#a77c5b]">
                                Starts With A Hello.
                            </span>
                        </h1>

                        <p className="mt-7 max-w-2xl text-base leading-8 text-[#81776e] sm:text-lg">
                            Have a question, a lovely idea to share, a collaboration
                            in mind, or simply want to say hello? I'd love to hear
                            from you. Let's connect and make something beautiful
                            together.
                        </p>

                        <div className="mt-9 flex items-center gap-3">
                            <span className="h-px w-8 bg-[#c7a487]" />

                            <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#a39485]">
                                Styled by Vimal · A Little Space For Inspiration
                            </span>
                        </div>

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
                                    StyledByVimal
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
                                StyledByVimal better and create content
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
                                    StyledByVimal. Your message has been
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

            {/* ================= CONTACT TOPICS ================= */}

            <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">

                <div className="mb-14 text-center">

                    <div className="flex items-center justify-center gap-3">
                        <span className="h-px w-8 bg-[#b18a6a]" />

                        <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#a77c5b]">
                            Let's Talk About
                        </span>

                        <span className="h-px w-8 bg-[#b18a6a]" />
                    </div>

                    <h2 className="mt-5 font-serif text-4xl text-[#302923] sm:text-5xl">
                        What Would You Like
                        <span className="italic text-[#a77c5b]"> To Share?</span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#81776e]">
                        From creative ideas to thoughtful collaborations,
                        there's always room for a lovely conversation.
                    </p>

                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                    {[
                        {
                            icon: "💡",
                            title: "Ideas & Suggestions",
                            text: "Have an interesting topic or an idea you'd love to see on Styled by Vimal?",
                        },
                        {
                            icon: "🎁",
                            title: "Gift & Lifestyle Finds",
                            text: "Want to share beautiful finds, gift inspiration or something worth discovering?",
                        },
                        {
                            icon: "🤝",
                            title: "Collaborations",
                            text: "A brand, creator or business interested in working together? Let's connect.",
                        },
                        {
                            icon: "♡",
                            title: "Feedback & Love",
                            text: "Have feedback, a suggestion or simply something nice you'd like to share?",
                        },
                    ].map((item, index) => (

                        <div
                            key={index}
                            className="group rounded-2xl border border-[#ebe3da] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#c8a88e] hover:shadow-lg"
                        >

                            <div className="flex items-center justify-between">

                                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f5eee7] text-xl text-[#a77c5b] transition-colors group-hover:bg-[#a77c5b] group-hover:text-white">
                                    {item.icon}
                                </span>

                                <span className="font-serif text-sm italic text-[#b6a495]">
                                    0{index + 1}
                                </span>

                            </div>

                            <h3 className="mt-7 font-serif text-xl text-[#40352c]">
                                {item.title}
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-[#81776e]">
                                {item.text}
                            </p>

                            <div className="mt-6 h-px w-10 bg-[#c7a487] transition-all duration-300 group-hover:w-16" />

                        </div>

                    ))}

                </div>
            </section>


            {/* ================= CTA ================= */}

            <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8 lg:pb-28">

                <div className="relative overflow-hidden rounded-[30px] bg-[#42362e] px-7 py-16 text-white sm:px-12 lg:py-20">

                    <div className="absolute -right-16 -top-24 h-64 w-64 rounded-full border border-white/10" />
                    <div className="absolute -bottom-32 -left-16 h-72 w-72 rounded-full border border-white/10" />

                    <div className="relative z-10 max-w-3xl">

                        <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/50">
                            A Little Space For Beautiful Ideas
                        </span>

                        <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                            Good Things Begin
                            <span className="block italic text-[#d3ad8e]">
                                With A Conversation.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-xl text-sm leading-8 text-white/65 sm:text-base">
                            Whether it's about home inspiration, thoughtful gifts,
                            organization, seasonal ideas or a creative collaboration,
                            I'm always happy to hear from you.
                        </p>

                        <a
                            href="/blog"
                            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#f8f3ed] px-8 py-4 text-sm font-medium text-[#40352c] transition-all duration-300 hover:bg-white"
                        >
                            Explore Styled by Vimal

                            <ChevronRight size={18} />
                        </a>

                    </div>

                </div>

            </section>

            {/* ================= FINAL NOTE ================= */}

            {/* ================= FINAL NOTE ================= */}

            <section className="mx-auto max-w-4xl px-5 pb-24 text-center lg:pb-28">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#eee7de] text-[#a77c5b]">
                    <Heart size={23} />
                </div>

                <div className="mt-7 flex items-center justify-center gap-3">
                    <span className="h-px w-8 bg-[#b18a6a]" />

                    <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#a77c5b]">
                        With Love
                    </span>

                    <span className="h-px w-8 bg-[#b18a6a]" />
                </div>

                <h2 className="mt-5 font-serif text-3xl text-[#302923] sm:text-4xl">
                    So Glad You Stopped By.
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-[#81776e] sm:text-base">
                    Every message, thoughtful suggestion and kind word makes
                    Styled by Vimal a little more special. Thank you for being
                    part of this creative journey and for sharing a little
                    inspiration along the way.
                </p>

                <p className="mt-7 font-serif text-xl italic text-[#a77c5b]">
                    Until next time, keep finding beauty in the little things.
                </p>

            </section>

            <Footer />
        </main>
    );
}

