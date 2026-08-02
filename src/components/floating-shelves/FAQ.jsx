"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";


const faqs = [
    {
        question: "Are floating wall shelves easy to install?",
        answer:
            "Yes, most floating wall shelves are easy to install. With proper tools and instructions, you can install them securely within a short time."
    },
    {
        question: "How much weight can wall shelves hold?",
        answer:
            "The weight capacity depends on the shelf material, brackets, and wall type. Always check the manufacturer's recommended weight limit."
    },
    {
        question: "Which material is best for wall shelves?",
        answer:
            "Solid wood offers durability and a premium look, MDF is budget-friendly, and metal shelves are great for modern interiors."
    },
    {
        question: "Can wall shelves damage walls?",
        answer:
            "Proper installation with suitable screws and anchors minimizes wall damage. Avoid overloading shelves beyond their capacity."
    },
    {
        question: "How do I choose the right wall shelf size?",
        answer:
            "Measure your available wall space and consider the items you want to display before selecting the shelf size."
    }
];


export default function FAQ() {

    const [open, setOpen] = useState(null);


    return (

        <section id="faq" className="bg-[#F8F6F2] py-20">

            <div className="mx-auto max-w-4xl px-6">


                {/* Heading */}

                <div className="text-center">

                    <span className="inline-flex rounded-full bg-[#365947]/10 px-4 py-2 text-sm font-semibold text-[#365947]">
                        FAQ
                    </span>


                    <h2 className="mt-5 font-serif text-4xl font-bold text-[#1E1E1E]">
                        Frequently Asked Questions
                    </h2>


                    <p className="mt-4 text-lg text-gray-600">
                        Find answers to common questions before choosing your wall shelf.
                    </p>

                </div>




                {/* Accordion */}

                <div className="mt-12 space-y-4">


                    {faqs.map((faq, index) => (

                        <div
                            key={index}
                            className="rounded-2xl bg-white p-6 shadow-sm"
                        >

                            <button
                                onClick={() => setOpen(open === index ? null : index)}
                                className="flex w-full items-center justify-between text-left"
                            >

                                <h3 className="text-lg font-semibold text-[#1E1E1E]">
                                    {faq.question}
                                </h3>


                                {
                                    open === index
                                        ?
                                        <Minus size={20} />
                                        :
                                        <Plus size={20} />
                                }


                            </button>



                            {
                                open === index && (

                                    <p className="mt-4 leading-7 text-gray-600">
                                        {faq.answer}
                                    </p>

                                )
                            }


                        </div>

                    ))}


                </div>


            </div>

        </section>

    );
}