import { House } from "lucide-react";

const BrandPoster = () => {

    return (

        <section className="py-24">


            <div
                className=" flex flex-col items-center justify-center text-center rounded-[40px] bg-[#f8f5ef] py-16 px-8 relative overflow-hidden ">
                {/* Decorative Circle */}
                <div className=" absolute top-6 left-6 h-20 w-20 rounded-full border border-[#D8A06B]/30 " />
                <div className=" absolute bottom-6 right-6 h-28 w-28 rounded-full border border-[#D8A06B]/20 " />
                {/* Logo Icon */}
                <div className=" relative flex h-20 w-20 items-center justify-center rounded-full bg-[#D8A06B] text-white shadow-lg ">
                    <House size={32} />
                </div>
                {/* Brand Name */}
                <h1 className=" mt-8 font-serif text-3xl md:text-5xl font-bold tracking-tight text-[#1E1E1E] ">
                    DreamHomeDecorHub
                </h1>
                {/* Tagline */}
                <p className=" mt-3 text-sm md:text-base uppercase tracking-[0.25em] text-stone-500 " >
                    Home Decor Reviews
                </p>
            </div>
        </section>
    );
};
export default BrandPoster;