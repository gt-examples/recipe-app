import { T } from "gt-next";
import Header from "../../components/Header";
import RecipeList from "../../components/RecipeList";
import { recipes } from "../../data/recipes";

export default async function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-10">
          <T>
            <h2 className="text-2xl font-semibold text-neutral-100 mb-3">
              Explore Recipes
            </h2>
            <p className="text-base text-neutral-400 max-w-xl leading-relaxed">
              Browse our collection of recipes from around the world. Ingredient
              quantities, cooking temperatures, and serving sizes adapt to your
              language and locale.
            </p>
          </T>
        </div>
        <footer className="mt-16 border-t border-neutral-800 pt-8 pb-4 text-xs text-neutral-600 leading-relaxed">
          <T>
            <p>
              Built with{" "}
              <a href="https://generaltranslation.com" className="underline hover:text-neutral-400" target="_blank" rel="noopener noreferrer">General Translation</a>
              {" "}and{" "}
              <a href="https://nextjs.org" className="underline hover:text-neutral-400" target="_blank" rel="noopener noreferrer">Next.js</a>
              . Styled with{" "}
              <a href="https://tailwindcss.com" className="underline hover:text-neutral-400" target="_blank" rel="noopener noreferrer">Tailwind CSS</a>
              . Recipe inspiration from{" "}
              <a href="https://www.allrecipes.com" className="underline hover:text-neutral-400" target="_blank" rel="noopener noreferrer">Allrecipes</a>
              {" "}and{" "}
              <a href="https://www.seriouseats.com" className="underline hover:text-neutral-400" target="_blank" rel="noopener noreferrer">Serious Eats</a>
              .
            </p>
          </T>
        </footer>
        <RecipeList recipes={recipes} />
      </main>
    </div>
  );
}
