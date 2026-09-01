import Link from "next/link";
import { FaPinterest } from "react-icons/fa";


export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (

        <footer className="bg-[#1E1E1E] text-white">


            <div className="mx-auto max-w-7xl px-6 py-16">


                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">


                    {/* Brand */}

                    <div>

                        <Link href="/">
                            <h2 className="font-serif text-2xl font-bold">
                                DreamHomeDecorHub
                            </h2></Link>


                        <p className="mt-5 leading-7 text-white/60">
                            Helping you find the best wall shelves,
                            home decor ideas, and smart storage solutions
                            for beautiful spaces.
                        </p>


                    </div>




                    <div>

                        <h3 className="mb-6 text-lg font-semibold text-white">
                            Explore
                        </h3>

                        <ul className="space-y-4">

                            <li>
                                <Link href="/home-decor/living-room" className="hover:text-white transition text-white/60">
                                    Living Room
                                </Link>
                            </li>

                            <li>
                                <Link href="/home-decor/bedroom" className="hover:text-white transition text-white/60">
                                    Bedroom
                                </Link>
                            </li>

                            <li>
                                <Link href="/home-decor/kitchen" className="hover:text-white transition text-white/60">
                                    Kitchen
                                </Link>
                            </li>

                            <li>
                                <Link href="/home-decor/bathroom" className="hover:text-white transition text-white/60">
                                    Bathroom
                                </Link>
                            </li>

                            <li>
                                <Link href="/home-decor/home-office" className="hover:text-white transition text-white/60">
                                    Home Office
                                </Link>
                            </li>

                        </ul>

                    </div>

                    {/* Resources */}

                    <div>

                        <h3 className="mb-6 text-lg font-semibold text-white">
                            Resources
                        </h3>

                        <ul className="space-y-4">

                            <li>
                                <Link href="/about" className="hover:text-white transition text-white/60">
                                    About Us
                                </Link>
                            </li>

                            <li>
                                <Link href="/latest-articles" className="hover:text-white transition text-white/60">
                                    Articles
                                </Link>
                            </li>

                            <li>
                                <Link href="/contact" className="hover:text-white transition text-white/60">
                                    Contact
                                </Link>
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


                            <li>
                                <Link href="/privacy-policy">Privacy Policy</Link>
                           </li>

                            <li>
                                <Link href="/terms-and-conditions">Terms & Conditions</Link>
                           </li>


                            <li>
                                <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>

                            </li>

                            <li>
                                <Link href="/disclaimer-policy">Disclaimer Policy</Link>

                            </li>

                        </ul>


                    </div>


                </div>


            </div>





            {/* Bottom */}

            <div className="border-t border-white/10">

                <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between">



                    <p>© {currentYear} DreamHomeDecorHub . All rights reserved.</p>


                    <p>
                        Some links may be affiliate links. We may earn a commission
                        at no extra cost to you.
                    </p>


                </div>

            </div>


        </footer>
        

    );
}