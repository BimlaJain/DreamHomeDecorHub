import Image from "next/image";

export default function IdeaCard({
    number,
    title,
    image,
    description,
    tip,
}) {
    return (
        <section
            id={`idea-${number}`}
            className="border-b border-stone-200 py-20"
        >
            <div className="mx-auto max-w-5xl px-6">

                <span className="text-sm uppercase tracking-[0.3em] text-stone-500">
                    Idea {number}
                </span>

                <h2 className="mt-4 text-4xl font-light text-stone-900">
                    {title}
                </h2>

                <div className="relative mt-10 h-[300px] overflow-hidden rounded-[28px] md:h-[550px]">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover" 
                      
                    />
                </div>

                <p className="mt-10 text-lg leading-9 text-stone-700">
                    {description}
                </p>

                <div className="mt-10 rounded-2xl bg-[#F8F6F2] p-6">
                    <h3 className="text-sm uppercase tracking-[0.25em] text-stone-500">
                        Styling Tip
                    </h3>

                    <p className="mt-3 text-stone-700">
                        {tip}
                    </p>
                </div>

            </div>
        </section>
    );
}