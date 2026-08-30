const IdeaCard = ({ idea }) => {
    return (
        <section className="py-20">
            <div className="max-w-6xl mx-auto px-5">
                {/* IDEA */}
                <div>
                    <span className="text-sm uppercase tracking-widest text-gray-500">
                        Idea {idea.id}
                    </span>
                    <h2 className="text-4xl font-bold mt-3">
                        {idea.title}
                    </h2>
                    <img
                        src={idea.image}
                        alt={idea.title}
                        width={700}
                        height={400}
                        className="rounded-3xl mx-auto mt-8 w-full max-w-2xl " />
                    <p className="mt-6 text-lg text-gray-600">
                        {idea.description}
                    </p>
                    <div className="font-bold text-2xl pt-4">Pro Tip :-</div>
                    <ul className="mt-6 space-y-3">
                        {
                            idea.tips.map((tip, index) => (
                                <li key={index}>
                                    ✓ {tip}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {/* SHOP THE LOOK */}
                {(
                    idea.shopLook?.length > 0 ||
                    idea.shopLook?.india?.length > 0 ||
                    idea.shopLook?.us?.length > 0
                ) && (
                        <div className="mt-16 rounded-3xl bg-[#f8f5ef] p-8">

                            {/* Header */}
                            <div className="mb-8">
                                <p className="text-sm uppercase tracking-widest">
                                    Shop The Look
                                </p>

                                <h3 className="text-3xl font-bold">
                                    Shop These Useful Finds
                                </h3>
                            </div>


                            {/* ================= INDIA ================= */}

                            {(
                                idea.shopLook?.india?.length > 0 ||
                                idea.shopLook?.length > 0
                            ) && (
                                    <div className="mb-10">

                                        <div className="flex items-center gap-2 mb-5">
                                            <span className="text-xl">
                                                🇮🇳
                                            </span>

                                            <h4 className="text-xl font-semibold">
                                                Shop in India
                                            </h4>
                                        </div>


                                        <div className="bg-white rounded-3xl p-6 grid grid-cols-2 md:grid-cols-4 gap-5">

                                            {/* NEW FORMAT */}
                                            {idea.shopLook?.india?.map((product, index) => (
                                                <a
                                                    href={product.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    key={`india-${index}`}
                                                    className="group block"
                                                >
                                                    <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50">
                                                        <img
                                                            src={product.image}
                                                            alt={product.name}
                                                            className="w-full h-full object-contain group-hover:scale-110 transition duration-500"
                                                        />
                                                    </div>

                                                    <p className="mt-3 text-sm font-medium text-center">
                                                        {product.name}
                                                    </p>
                                                </a>
                                            ))}


                                            {/* OLD ARTICLES */}
                                            {Array.isArray(idea.shopLook) &&
                                                idea.shopLook.map((product, index) => (
                                                    <a
                                                        href={product.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        key={`old-${index}`}
                                                        className="group block"
                                                    >
                                                        <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50">
                                                            <img
                                                                src={product.image}
                                                                alt={product.name}
                                                                className="w-full h-full object-contain group-hover:scale-110 transition duration-500"
                                                            />
                                                        </div>

                                                        <p className="mt-3 text-sm font-medium text-center">
                                                            {product.name}
                                                        </p>
                                                    </a>
                                                ))
                                            }

                                        </div>
                                    </div>
                                )}


                            {/* ================= USA ================= */}

                            {idea.shopLook?.us?.length > 0 && (
                                <div>

                                    <div className="flex items-center gap-2 mb-5">
                                        <span className="text-xl">
                                            🇺🇸
                                        </span>

                                        <h4 className="text-xl font-semibold">
                                            Shop in the US
                                        </h4>
                                    </div>


                                    <div className="bg-white rounded-3xl p-6 grid grid-cols-2 md:grid-cols-4 gap-5">

                                        {idea.shopLook.us.map((product, index) => (
                                            <a
                                                href={product.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                key={`us-${index}`}
                                                className="group block"
                                            >

                                                <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50">
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                        className="w-full h-full object-contain group-hover:scale-110 transition duration-500"
                                                    />
                                                </div>

                                                <p className="mt-3 text-sm font-medium text-center">
                                                    {product.name}
                                                </p>

                                            </a>
                                        ))}

                                    </div>
                                </div>
                            )}

                        </div>
                    )}
            </div>
        </section>
    )
}
export default IdeaCard;