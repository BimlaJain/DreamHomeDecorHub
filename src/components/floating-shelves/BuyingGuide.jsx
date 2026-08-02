import { guides } from "../../data/WallShelves";

export default function BuyingGuide() {

    return (
        <section id="buying-guides" className="bg-white py-20">

            <div className="mx-auto max-w-7xl px-6">


                {/* Heading */}

                <div className="mx-auto max-w-3xl text-center">

                    <span className="inline-flex rounded-full bg-[#365947]/10 px-4 py-2 text-sm font-semibold text-[#365947]">
                        Buying Guide
                    </span>


                    <h2 className="mt-5 font-serif text-4xl font-bold text-[#1E1E1E]">
                        How To Choose The Perfect Wall Shelf?
                    </h2>


                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        Consider these important factors before choosing a wall shelf
                        for your home.
                    </p>

                </div>



                {/* Cards */}

                <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">


                    {guides.map((guide, index) => {

                        const Icon = guide.icon;


                        return (

                            <div
                                key={index}
                                className="rounded-3xl border border-stone-200 bg-[#F8F6F2] p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#365947] text-white">

                                    <Icon size={28} />

                                </div>


                                <h3 className="mt-6 text-xl font-bold text-[#1E1E1E]">
                                    {guide.title}
                                </h3>


                                <p className="mt-4 leading-7 text-gray-600">
                                    {guide.description}
                                </p>


                            </div>

                        );

                    })}


                </div>


            </div>


        </section>
    );
}