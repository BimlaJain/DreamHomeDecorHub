const CommonMistakes = ({ mistakes }) => {


    return (

        <section className="py-20">


            <div className="max-w-6xl mx-auto px-5">


                <div className="mb-12">

                    <p className="uppercase tracking-widest text-sm text-gray-500">
                        Avoid These Mistakes
                    </p>


                    <h2 className="text-4xl font-bold mt-3">
                        Common Mistakes to avoid
                    </h2>


                    <p className="mt-4 text-gray-600 max-w-2xl">
                        Avoid these common design mistakes to create a space that feels comfortable, stylish and balanced.
                    </p>

                </div>



                <div className="grid md:grid-cols-2 gap-6">


                    {
                        mistakes.map((item) => (

                            <div
                                key={item.id}
                                className="rounded-3xl bg-[#f8f5ef] hover:shadow-2xl p-7">
                                <div className="h-10 w-10 rounded-full  bg-black text-white flex items-center justify-center mb-5">

                                    {item.id}

                                </div>



                                <h3 className="text-xl font-semibold">
                                    {item.title}
                                </h3>


                                <p className="mt-3 text-gray-600 leading-relaxed">
                                    {item.description}
                                </p>


                            </div>


                        ))

                    }


                </div>


            </div>


        </section>

    )

}


export default CommonMistakes;