import Link from "next/link";
import { FaPinterest } from "react-icons/fa";


export default function Footer() {

    return (

        <footer className="bg-[#1E1E1E] text-white">


            <div className="mx-auto max-w-7xl px-6 py-16">


                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">


                    {/* Brand */}

                    <div>

                        <h2 className="font-serif text-2xl font-bold">
                            DreamHomeDecorHub
                        </h2>


                        <p className="mt-5 leading-7 text-white/60">
                            Helping you find the best wall shelves,
                            home decor ideas, and smart storage solutions
                            for beautiful spaces.
                        </p>


                    </div>




                    {/* Quick Links */}

                    <div>

                        <h3 className="text-lg font-semibold">
                            Inspiration
                        </h3>


                        <ul className="mt-5 space-y-3 text-white/60">


                            <li>
                                <Link
                                    href="#top-picks"
                                    className="transition hover:text-white"
                                >
                                    Living Room
                                </Link>
                            </li>


                            <li>
                                <Link
                                    href="#reviews"
                                    className="transition hover:text-white"
                                >
                                    Bedroom
                                </Link>
                            </li>


                            <li>
                                <Link
                                    href="#comparision-table"
                                    className="transition hover:text-white"
                                >
                                    About Us
                                </Link>
                            </li>


                        </ul>

                    </div>





                    {/* Categories */}

                    <div>

                        <h3 className="text-lg font-semibold">
                            Categories
                        </h3>


                        <ul className="mt-5 space-y-3 text-white/60">


                            <li>
                                Floating Shelves
                            </li>

                            <li>
                                Wooden Shelves
                            </li>

                            <li>
                                Corner Shelves
                            </li>

                            <li>
                                Modern Shelves
                            </li>


                        </ul>


                    </div>





                    {/* Social + Legal */}

                    <div>

                        <h3 className="text-lg font-semibold">
                            Follow Us
                        </h3>


                        <Link
                            href="https://in.pinterest.com/DecorHomeDecorHub/"
                            target="_blank"
                            className="mt-5 flex w-fit items-center gap-2 text-white/60 transition hover:text-white"
                        >
                            Pinterest

                            <FaPinterest size={18} />

                        </Link>



                        <h3 className="mt-8 text-lg font-semibold">
                            Legal
                        </h3>


                        <ul className="mt-4 space-y-3 text-white/60">


                            <Link href="/privacy-policy">Privacy Policy</Link>

                            <Link href="/Terms & Conditions">Terms & Conditions</Link>


                            <Link href="/Affiliate Disclosure">Affiliate Disclosure</Link>


                        </ul>


                    </div>


                </div>


            </div>





            {/* Bottom */}

            <div className="border-t border-white/10">

                <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between">


                    <p>
                        © {new Date().getFullYear()} DreamHomeDecorHub. All rights reserved.
                    </p>


                    <p>
                        Some links may be affiliate links. We may earn a commission
                        at no extra cost to you.
                    </p>


                </div>

            </div>


        </footer>

    );
}