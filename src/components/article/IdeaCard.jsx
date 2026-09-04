const IdeaCard = ({ idea }) => {
    const hasIndia = idea.shopLook?.india?.length > 0;
    const hasUS = idea.shopLook?.us?.length > 0;

    // Old format support
    const hasOldFormat =
        Array.isArray(idea.shopLook) &&
        idea.shopLook.length > 0;

    const hasShopLook = hasIndia || hasUS || hasOldFormat;

    const showCountryHeadings = hasIndia && hasUS;

    return (
        <section className="py-20">
            <div className="max-w-6xl mx-auto px-5">

                {/* ================= IDEA ================= */}

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
                        className="rounded-3xl mx-auto mt-8 w-full max-w-2xl"
                    />

                    <p className="mt-6 text-lg text-gray-600">
                        {idea.description}
                    </p>

                    <div className="font-bold text-2xl pt-4">
                        Pro Tip :-
                    </div>

                    <ul className="mt-6 space-y-3">
                        {idea.tips?.map((tip, index) => (
                            <li key={`tip-${idea.id}-${index}`}>
                                ✓ {tip}
                            </li>
                        ))}
                    </ul>
                </div>


                {/* ================= SHOP THE LOOK ================= */}

                {hasShopLook && (
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

                        {hasIndia && (
                            <div className={hasUS ? "mb-10" : ""}>

                                {showCountryHeadings && (
                                    <div className="flex items-center gap-2 mb-5">
                                        <span className="text-xl">
                                            🇮🇳
                                        </span>

                                        <h4 className="text-xl font-semibold">
                                            Shop in India
                                        </h4>
                                    </div>
                                )}

                                <div className="bg-white rounded-3xl p-6 grid grid-cols-2 md:grid-cols-4 gap-5">

                                    {idea.shopLook.india.map((product, index) => (
                                        <a
                                            href={product.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            key={`india-${idea.id}-${index}`}
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


                        {/* ================= USA ================= */}

                        {hasUS && (
                            <div>

                                {showCountryHeadings && (
                                    <div className="flex items-center gap-2 mb-5">
                                        <span className="text-xl">
                                            🇺🇸
                                        </span>

                                        <h4 className="text-xl font-semibold">
                                            Shop in the US
                                        </h4>
                                    </div>
                                )}

                                <div className="bg-white rounded-3xl p-6 grid grid-cols-2 md:grid-cols-4 gap-5">

                                    {idea.shopLook.us.map((product, index) => (
                                        <a
                                            href={product.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            key={`us-${idea.id}-${index}`}
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


                        {/* ================= OLD FORMAT ================= */}

                        {hasOldFormat && (
                            <div className="bg-white rounded-3xl p-6 grid grid-cols-2 md:grid-cols-4 gap-5">

                                {idea.shopLook.map((product, index) => (
                                    <a
                                        href={product.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        key={`old-${idea.id}-${index}`}
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
                        )}

                    </div>
                )}

            </div>
        </section>
    );
};

export default IdeaCard;