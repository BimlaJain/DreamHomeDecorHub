import { installationSteps } from "../../data/WallShelves";
export default function InstallationGuide() {

    return (

        <section className="bg-white py-20">

            <div className="mx-auto max-w-7xl px-6">


                {/* Heading */}

                <div className="mx-auto max-w-3xl text-center">


                    <span className="inline-flex rounded-full bg-[#365947]/10 px-4 py-2 text-sm font-semibold text-[#365947]">
                        Installation Guide
                    </span>


                    <h2 className="mt-5 font-serif text-4xl font-bold text-[#1E1E1E]">
                        How To Install A Wall Shelf?
                    </h2>


                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        Follow these simple steps to install your wall shelf safely
                        and create a beautiful display space.
                    </p>


                </div>




                {/* Steps */}

                <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-5">


                    {installationSteps.map((item, index) => {

                        const Icon = item.icon;


                        return (

                            <div
                                key={index}
                                className="relative rounded-3xl border border-stone-200 bg-[#F8F6F2] p-6 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >


                                {/* Step Number */}

                                <span className="absolute right-5 top-5 text-4xl font-bold text-[#365947]/20">
                                    {item.step}
                                </span>



                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#365947] text-white">

                                    <Icon size={26} />

                                </div>



                                <h3 className="mt-6 text-xl font-bold text-[#1E1E1E]">
                                    {item.title}
                                </h3>



                                <p className="mt-4 text-sm leading-7 text-gray-600">
                                    {item.description}
                                </p>


                            </div>

                        );

                    })}


                </div>



            </div>


        </section>

    );
}