import Image from "next/image";


export default function IdeaCard({
    id,
    number,
    title,
    image,
    description,
    tip,
})
{
    console.log("IdeaCard Render", { id, title, image });
    return (
        
        <section
            id={id}
            className="bg-white py-20 scroll-mt-28"
        >
            <div className="mx-auto max-w-6xl px-6">

                <div className="grid items-center gap-14 lg:grid-cols-2">

                    {/* Image */}

                    <div className="relative h-[500px] overflow-hidden rounded-3xl">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Content */}

                    <div>

                        <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
                            Idea {number}
                        </p>

                        <h2 className="mt-4 font-serif text-4xl font-light text-stone-900">
                            {title}
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-stone-600">
                            {description}
                        </p>

                        <div className="mt-8 rounded-2xl border-l-4 border-stone-900 bg-stone-100 p-6">

                            <p className="font-semibold text-stone-900">
                                Pro Tip
                            </p>

                            <p className="mt-2 leading-7 text-stone-600">
                                {tip}
                            </p>

                        </div>

                    </div>

                </div>

            </div>
        </section>
       
    );
}