import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ArticleCard({
    image,
    category,
    title,
    readTime,
    slug,
}) {
    return (
        <article className="group overflow-hidden rounded-3xl border border-stone-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            <Link href={`/blog/${slug}`}>
                <div className="relative h-80 overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                    />
                </div>
            </Link>

            <div className="p-6">

                <span className="text-xs uppercase tracking-[0.2em] text-stone-500">
                    {category}
                </span>

                <h3 className="mt-3 text-2xl font-light leading-snug text-stone-900">
                    {title}
                </h3>

                <div className="mt-5 flex items-center justify-between">

                    <span className="text-sm text-stone-500">
                        {readTime}
                    </span>

                    <Link
                        href={`/blog/${slug}`}
                        className="inline-flex items-center gap-2 text-sm font-medium text-stone-900 transition group-hover:gap-3"
                    >
                        Read Article
                        <ArrowRight size={16} />
                    </Link>

                </div>

            </div>

        </article>
    );
}