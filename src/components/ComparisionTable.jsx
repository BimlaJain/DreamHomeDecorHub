import { products } from "@/data/WallShelves";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ComparisonTable() {

    const compareProducts = products.wallShelves;


    return (
        <section id="comparision-table" className="bg-[#F8F6F2] py-20">

            <div className="mx-auto max-w-7xl px-6">


                {/* Heading */}

                <div className="mx-auto max-w-3xl text-center">

                    <span className="inline-flex rounded-full bg-[#365947]/10 px-4 py-2 text-sm font-semibold text-[#365947]">
                        Quick Comparison
                    </span>


                    <h2 className="mt-5 font-serif text-4xl font-bold text-[#1E1E1E]">
                        Compare All Wall Shelves
                    </h2>


                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        Compare features, pricing, and specifications to choose
                        the right wall shelf for your home.
                    </p>

                </div>



                {/* Table */}

                <div className="mt-12 overflow-x-auto rounded-3xl bg-white shadow-sm">


                    <table className="w-full container">


                        <thead>

                            <tr className="border-b bg-[#365947] text-white">

                                <th className="p-6 text-left">
                                    Product
                                </th>

                                <th className="p-6 text-left">
                                    Rating
                                </th>

                                <th className="p-6 text-left">
                                    Price
                                </th>

                                <th className="p-6 text-left">
                                    Material
                                </th>

                                <th className="p-6 text-left">
                                    Best For
                                </th>

                                <th className="p-6 text-left">
                                    Action
                                </th>

                            </tr>

                        </thead>



                        <tbody>


                            {compareProducts.map((product) => (

                                <tr
                                    key={product.id}
                                    className="border-b transition hover:bg-[#F8F6F2]"
                                >


                                    {/* Product */}

                                    <td className="p-6 font-semibold">

                                        <div className="max-w-xs">
                                            {product.title}
                                        </div>

                                    </td>



                                    {/* Rating */}

                                    <td className="p-6">

                                        ⭐ {product.rating}

                                    </td>



                                    {/* Price */}

                                    <td className="p-6 font-bold text-[#365947]">

                                        {product.price}

                                    </td>



                                    {/* Material */}

                                    <td className="p-6 text-gray-600">

                                        {product.material || "Premium Wood"}

                                    </td>



                                    {/* Best For */}

                                    <td className="p-6 text-gray-600">

                                        {product.bestFor || "Home Decor"}

                                    </td>



                                    {/* CTA */}

                                    <td className="p-6">


                                        <Link
                                            href={product.affiliateLink}
                                            target="_blank"
                                            rel="nofollow sponsored"
                                            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#365947] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#294437]"
                                        >

                                            Check Price

                                            <ArrowRight size={16} />

                                        </Link>


                                    </td>


                                </tr>

                            ))}


                        </tbody>


                    </table>


                </div>



            </div>

        </section>
    );
}