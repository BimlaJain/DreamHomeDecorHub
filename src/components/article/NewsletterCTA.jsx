const NewsletterCTA = () => {
    return (
        <section className="py-20">
            <div className="max-w-6xl mx-auto px-5">
                <div className=" rounded-[40px] bg-[#1E1E1E] px-8 py-14 md:px-16 md:py-20 text-center text-white ">
                    <p className=" text-xs uppercase tracking-[0.35em] text-[#D8A06B] ">
                        Stay Inspired
                    </p>
                    <h2 className=" mt-5 font-serif text-4xl md:text-6xl font-bold leading-tight ">
                        Get Beautiful Home Ideas <br /> Delivered To You
                    </h2>
                    <p className=" mt-6 mx-auto max-w-2xl text-stone-300 text-base md:text-lg ">
                        Subscribe to receive cozy decorating ideas,
                        home styling inspiration and the latest decor
                        trends from DreamHomeDecorHub.
                    </p>
                    <form className=" mt-10 mx-auto flex max-w-xl flex-col gap-3 sm:flex-row"  >

                        <input type="email" placeholder="Enter your email address" className=" h-14 flex-1 border border-white rounded-full px-6 text-[#1E1E1E] outline-none  placeholder:text-white/80" />
                        <button type="submit" className=" h-14 rounded-full bg-[#D8A06B] px-8 font-medium text-white transition hover:opacity-90 " >
                            Subscribe
                        </button>
                    </form>
                    <p className=" mt-5 text-xs text-stone-400 " >
                        Join our decor community. No spam, only inspiration.
                    </p>
                </div>
            </div>
        </section>
    );
};
export default NewsletterCTA;