import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";


export default function FinalCTA() {

    return (

        <section className="bg-white py-20">

            <div className="mx-auto max-w-7xl px-6">


                <div className="overflow-hidden rounded-3xl bg-[#365947] px-8 py-16 text-center lg:px-20">


                    {/* Rating Badge */}

                    <div className="mx-auto flex w-fit items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm text-white">

                        <Star
                            size={16}
                            className="fill-yellow-400 text-yellow-400"
                        />

                        Trusted Wall Shelf Recommendations

                    </div>



                    {/* Heading */}

                    <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl font-bold text-white lg:text-5xl">

                        Ready To Transform Your Walls?

                    </h2>



                    {/* Description */}

                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/80">

                        Explore our top-rated wall shelves, compare features,
                        and find the perfect shelf that matches your home style.

                    </p>




                    {/* Buttons */}

                    <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">


                        <Link
                            href="#top-picks"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-[#365947] transition hover:bg-gray-100"
                        >

                            Explore Top Picks

                            <ArrowRight size={18} />

                        </Link>




                        <Link
                            href="#product-1"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
                        >

                            View Detailed Reviews

                            <ArrowRight size={18} />

                        </Link>


                    </div>



                    {/* Small Text */}

                    <p className="mt-8 text-sm text-white/60">

                        Find the right style, quality, and value for your space.

                    </p>



                </div>


            </div>


        </section>

    );
}