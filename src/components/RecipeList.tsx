"use client";

import { useState } from "react";
import { T, Num, Plural } from "gt-next";
import Link from "next/link";
import CategoryFilter from "./CategoryFilter";
import type { Recipe } from "../data/recipes";

// Recipe card content - all text in <T> for translation
function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link
      href={`/recipe/${recipe.slug}`}
      className="block border border-neutral-800 rounded-lg p-6 bg-neutral-900/50 hover:border-neutral-600 transition-colors group"
    >
      <RecipeCardContent slug={recipe.slug} />
      <div className="flex flex-wrap gap-3 mt-4 text-xs">
        <T>
          <span className="px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300">
            <Plural
              n={recipe.servings}
              singular={<><Num>{recipe.servings}</Num> serving</>}
              plural={<><Num>{recipe.servings}</Num> servings</>}
            />
          </span>
          <span className="px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300">
            <Num>{recipe.prepMin}</Num> min prep
          </span>
          <span className="px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300">
            <Num>{recipe.cookMin}</Num> min cook
          </span>
        </T>
        {recipe.tempF && (
          <T>
            <span className="px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300">
              <Num>{recipe.tempF}</Num> °F
            </span>
          </T>
        )}
      </div>
      <T>
        <span className="inline-block mt-4 text-sm text-neutral-500 group-hover:text-neutral-300 transition-colors">
          View recipe →
        </span>
      </T>
    </Link>
  );
}

// Each recipe's title+description needs its own <T> with the actual content
function RecipeCardContent({ slug }: { slug: string }) {
  switch (slug) {
    case "lemon-herb-roasted-chicken":
      return (
        <T>
          <h3 className="text-lg font-semibold text-neutral-100 mb-2">
            Lemon Herb Roasted Chicken
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            A classic roasted chicken with fresh herbs and bright lemon flavor.
            Crispy skin, juicy meat, and aromatic herbs make this a perfect
            weeknight dinner.
          </p>
        </T>
      );
    case "miso-glazed-salmon":
      return (
        <T>
          <h3 className="text-lg font-semibold text-neutral-100 mb-2">
            Miso Glazed Salmon
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Sweet and savory miso glaze caramelizes beautifully on tender salmon
            fillets. A quick and elegant dish inspired by Japanese cuisine.
          </p>
        </T>
      );
    case "wild-mushroom-risotto":
      return (
        <T>
          <h3 className="text-lg font-semibold text-neutral-100 mb-2">
            Wild Mushroom Risotto
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Creamy Arborio rice slowly cooked with a medley of wild mushrooms,
            white wine, and Parmesan cheese. Rich, earthy, and deeply satisfying.
          </p>
        </T>
      );
    case "spiced-lamb-tagine":
      return (
        <T>
          <h3 className="text-lg font-semibold text-neutral-100 mb-2">
            Spiced Lamb Tagine
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            A slow-cooked North African stew with tender lamb, dried apricots,
            and warm spices. Fragrant with cinnamon, cumin, and saffron.
          </p>
        </T>
      );
    case "thai-green-curry":
      return (
        <T>
          <h3 className="text-lg font-semibold text-neutral-100 mb-2">
            Thai Green Curry
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            A fragrant coconut milk curry loaded with fresh vegetables, Thai
            basil, and aromatic green curry paste. Light yet deeply flavorful.
          </p>
        </T>
      );
    case "classic-beef-bourguignon":
      return (
        <T>
          <h3 className="text-lg font-semibold text-neutral-100 mb-2">
            Classic Beef Bourguignon
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            A rich French stew of beef braised in red wine with pearl onions,
            mushrooms, and bacon. Hearty, elegant, and perfect for cold evenings.
          </p>
        </T>
      );
    default:
      return null;
  }
}

export default function RecipeList({ recipes }: { recipes: Recipe[] }) {
  const [category, setCategory] = useState("all");
  const filtered =
    category === "all" ? recipes : recipes.filter((r) => r.category === category);

  return (
    <>
      <div className="mb-8">
        <CategoryFilter active={category} onChange={setCategory} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((recipe) => (
          <RecipeCard key={recipe.slug} recipe={recipe} />
        ))}
      </div>
      {filtered.length === 0 && (
        <T>
          <p className="text-center text-neutral-500 py-12">
            No recipes found in this category.
          </p>
        </T>
      )}
    </>
  );
}
