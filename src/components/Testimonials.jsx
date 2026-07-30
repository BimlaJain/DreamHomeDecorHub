"use client";

import { Star } from "lucide-react";


const testimonials = [
    {
        name: "Harshvardhan Singh",
        role: "Home Decor Lover",
        review:
            "Good quality product easy to install and use, was able to create nice display for my things using the corner of my house with help of this wall corner display."
    },

    {
        name: "Aditya Parab",
        role: "Home Decor Lover",
        review:
            "Good product according to the price assembled way you have to assemble this product go for it ."
    },

    {
        name: "Emily Davis",
        role: "Apartment Owner",
        review:
            "Perfect for small spaces. I love how it adds storage without making the room feel crowded."
    }
];


export default function Testimonials() {


    return (

        <section className="bg-[#F8F6F2] py-20">

            <div className="mx-auto max-w-7xl px-6">


                {/* Heading */}

                <div className="mx-auto max-w-3xl text-center">


                    <span className="inline-flex rounded-full bg-[#365947]/10 px-4 py-2 text-sm font-semibold text-[#365947]">
                        Customer Reviews
                    </span>


                    <h2 className="mt-5 font-serif text-4xl font-bold text-[#1E1E1E]">
                        What Our Readers Say
                    </h2>


                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        Real experiences from people who upgraded their spaces
                        with beautiful wall shelves. You can check these reviews on Amazon
                    </p>


                </div>




                {/* Reviews */}

                <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">


                    {testimonials.map((item, index) => (


                        <div
                            key={index}
                            className="rounded-3xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >


                            {/* Stars */}

                            <div className="flex gap-1">

                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        size={18}
                                        className="fill-yellow-400 text-yellow-400"
                                    />
                                ))}

                            </div>



                            {/* Review */}

                            <p className="mt-6 leading-8 text-gray-600">
                                "{item.review}"
                            </p>




                            {/* User */}

                            <div className="mt-6">

                                <h3 className="font-bold text-[#1E1E1E]">
                                    {item.name}
                                </h3>


                                <p className="text-sm text-gray-500">
                                    {item.role}
                                </p>

                            </div>



                        </div>


                    ))}


                </div>


            </div>


        </section>

    );
}