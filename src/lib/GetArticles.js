import fs from "fs";
import path from "path";

export function getArticles() {
    const articlesPath = path.join(
        process.cwd(),
        "src",
        "data",
        "articles"
    );

    const files = fs
        .readdirSync(articlesPath)
        .filter(
            (file) =>
                file.endsWith(".js") &&
                file !== "index.js"
        );

    const articles = files
        .map((file) => {
            const filePath = path.join(
                articlesPath,
                file
            );

            delete require.cache[require.resolve(filePath)];

            const articleModule = require(filePath);

            return articleModule.default;
        })
        .filter(Boolean);

    return articles.sort(
        (a, b) =>
            new Date(b.updated) -
            new Date(a.updated)
    );
}