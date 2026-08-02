import { ArrowRight, Pin } from "lucide-react";
import Link from "next/link";


export default function Newsletter() {

    return (

        <section className="bg-[#F8F6F2] py-20">

            <div className="mx-auto max-w-6xl px-6">


                <div className="rounded-3xl bg-[#365947] px-8 py-14 text-center lg:px-20">


                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-white">

                        <Pin size={32} />

                    </div>



                    <h2 className="mt-6 font-serif text-4xl font-bold text-white">
                        Get More Wall Decor Ideas on Pinterest
                    </h2>



                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/80">
                        Follow us on Pinterest for beautiful wall shelf ideas,
                        home decor inspiration, styling tips, and space-saving ideas.
                    </p>




                    <Link
                        href="https://in.pinterest.com/DecorHomeDecorHub/"
                        target="_blank"
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-[#365947] transition hover:bg-gray-100"
                    >

                        Follow on Pinterest

                        <ArrowRight size={18} />

                    </Link>



                </div>


            </div>


        </section>

    );
}