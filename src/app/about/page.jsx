import React from "react";
import {
    FaLeaf,
    FaHome,
    FaLightbulb,
    FaHeart,
    FaArrowRight,
    FaPinterestP,
} from "react-icons/fa";
import Link from "next/link";
import Header from "@/components/home-page/Header";
import Footer from "@/components/home-page/Footer";

const About = () => {
    return (<>
        <Header/>
        <section className="bg-[#faf8f5] py-20">
            <div className="max-w-7xl mx-auto px-5 lg:px-8">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Image */}
                    <div className="">

                        <img
                            src="/images/home-page/about-hero.webp"
                            alt="Dream Home Decor"
                            className="w-full h-[650px] object-cover rounded-[30px]"
                        />

                        {/* Floating Card */}

                        <div className="mt-10 bg-white shadow-xl rounded-3xl p-8 max-w-sm">

                            <h3 className="text-5xl font-bold text-[#B07A4F]">
                                100+
                            </h3>

                            <p className="text-gray-600 mt-3 leading-7">
                                Home decor guides, styling ideas, and room inspiration
                                created to help you design a home you'll truly love.
                            </p>

                        </div>

                    </div>

                    {/* Right Content */}

                    <div>

                        <span className="uppercase tracking-[5px] text-[#B07A4F] font-semibold text-sm">
                            About DreamHomeDecorHub
                        </span>

                        <h2 className="text-5xl lg:text-6xl font-serif text-gray-900 mt-5 leading-tight">
                            Beautiful Homes Begin
                            <span className="block text-[#B07A4F]">
                                With Beautiful Ideas.
                            </span>
                        </h2>

                        <p className="text-gray-600 mt-8 leading-8 text-lg">
                            Welcome to <strong>DreamHomeDecorHub</strong>, your destination
                            for inspiring home decor ideas, room makeovers, and interior
                            styling tips that make every corner of your home feel warm,
                            elegant, and inviting.
                        </p>

                        <p className="text-gray-600 mt-5 leading-8 text-lg">
                            Whether you're decorating a cozy bedroom, designing a stylish
                            kitchen, refreshing your living room, or organizing your home,
                            you'll find practical ideas, timeless inspiration, and
                            budget-friendly decorating solutions designed for real homes.
                        </p>

                        {/* Feature Cards */}

                        <div className="grid sm:grid-cols-2 gap-5 mt-10">

                            <div className="bg-white rounded-2xl p-5 shadow-sm flex gap-4">
                                <FaHome className="text-[#B07A4F] text-2xl mt-1" />
                                <div>
                                    <h4 className="font-semibold text-lg">
                                        Room Inspiration
                                    </h4>
                                    <p className="text-gray-500 text-sm mt-2">
                                        Bedroom, Kitchen, Living Room & Bathroom ideas.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-5 shadow-sm flex gap-4">
                                <FaLeaf className="text-[#B07A4F] text-2xl mt-1" />
                                <div>
                                    <h4 className="font-semibold text-lg">
                                        Cozy Styling
                                    </h4>
                                    <p className="text-gray-500 text-sm mt-2">
                                        Warm interiors inspired by modern, Japandi and Scandinavian styles.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-5 shadow-sm flex gap-4">
                                <FaLightbulb className="text-[#B07A4F] text-2xl mt-1" />
                                <div>
                                    <h4 className="font-semibold text-lg">
                                        Smart Decor Tips
                                    </h4>
                                    <p className="text-gray-500 text-sm mt-2">
                                        Affordable upgrades that instantly elevate your home.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-5 shadow-sm flex gap-4">
                                <FaPinterestP className="text-[#B07A4F] text-2xl mt-1" />
                                <div>
                                    <h4 className="font-semibold text-lg">
                                        Pinterest Worthy
                                    </h4>
                                    <p className="text-gray-500 text-sm mt-2">
                                        Trendy ideas you'll love to save and recreate.
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Quote */}

                        <div className="mt-10 border-l-4 border-[#B07A4F] pl-6">

                            <FaHeart className="text-[#B07A4F] text-xl mb-3" />

                            <p className="text-gray-700 italic leading-8">
                                "We believe every home deserves to feel beautiful, cozy,
                                and uniquely yours—no matter your budget."
                            </p>

                        </div>

                        {/* Button */}

                        <Link href="/blog" passHref>
                            <button className="mt-10 bg-[#B07A4F] hover:bg-[#94633E] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center gap-3">

                                Explore Ideas

                                <FaArrowRight />

                            </button></Link>

                    </div>

                </div>

            </div>
        </section>
        <Footer/>
    </>
    );
};

export default About;