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
        <RecipeList recipes={recipes} />
      </main>
    </div>
  );
}
