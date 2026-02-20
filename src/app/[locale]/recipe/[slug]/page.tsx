import { T, Num, Plural } from "gt-next";
import { getGT } from "gt-next/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "../../../../components/Header";
import { getRecipeBySlug, recipes } from "../../../../data/recipes";
import type { Metadata } from "next";

export function generateStaticParams() {
  return recipes.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const gt = await getGT();
  const titles: Record<string, string> = {
    "lemon-herb-roasted-chicken": gt("Lemon Herb Roasted Chicken"),
    "miso-glazed-salmon": gt("Miso Glazed Salmon"),
    "wild-mushroom-risotto": gt("Wild Mushroom Risotto"),
    "spiced-lamb-tagine": gt("Spiced Lamb Tagine"),
    "thai-green-curry": gt("Thai Green Curry"),
    "classic-beef-bourguignon": gt("Classic Beef Bourguignon"),
  };
  const title = `${titles[slug] || slug} | General Translation`;
  return { title };
}

export default async function RecipePage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);
  if (!recipe) notFound();

  const gt = await getGT();

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-300 transition-colors mb-8"
        >
          <T>← Back to all recipes</T>
        </Link>

        {/* Tags row */}
        <div className="flex flex-wrap gap-3 mb-6 text-xs">
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

        {/* Recipe-specific content */}
        <RecipeContent slug={slug} />

        {/* Nutrition */}
        <div className="mt-10 border border-neutral-800 rounded-lg p-6 bg-neutral-900/50">
          <T>
            <h3 className="text-base font-semibold text-neutral-100 mb-4">
              Nutrition per serving
            </h3>
          </T>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 text-center">
            <NutritionItem label={gt("Calories")} value={String(recipe.calories)} unit={gt("kcal")} />
            <NutritionItem label={gt("Protein")} value={recipe.protein} />
            <NutritionItem label={gt("Fat")} value={recipe.fat} />
            <NutritionItem label={gt("Carbs")} value={recipe.carbs} />
            <NutritionItem label={gt("Fiber")} value={recipe.fiber} />
          </div>
        </div>
      </main>
    </div>
  );
}

function NutritionItem({ label, value, unit }: { label: string; value: string; unit?: string }) {
  return (
    <div>
      <div className="text-lg font-semibold text-neutral-100">
        {value}{unit ? <span className="text-xs text-neutral-500 ml-1">{unit}</span> : null}
      </div>
      <div className="text-xs text-neutral-500">{label}</div>
    </div>
  );
}

function RecipeContent({ slug }: { slug: string }) {
  switch (slug) {
    case "lemon-herb-roasted-chicken":
      return <LemonHerbChicken />;
    case "miso-glazed-salmon":
      return <MisoSalmon />;
    case "wild-mushroom-risotto":
      return <MushroomRisotto />;
    case "spiced-lamb-tagine":
      return <LambTagine />;
    case "thai-green-curry":
      return <ThaiGreenCurry />;
    case "classic-beef-bourguignon":
      return <BeefBourguignon />;
    default:
      return null;
  }
}

function LemonHerbChicken() {
  return (
    <T>
      <h1 className="text-3xl font-bold text-neutral-100 mb-3">
        Lemon Herb Roasted Chicken
      </h1>
      <p className="text-base text-neutral-400 leading-relaxed mb-8">
        A classic roasted chicken with fresh herbs and bright lemon flavor.
        Crispy skin, juicy meat, and aromatic herbs make this a perfect weeknight dinner.
      </p>
      <h2 className="text-lg font-semibold text-neutral-100 mb-4">Ingredients</h2>
      <ul className="space-y-2 mb-8">
        <li className="text-sm text-neutral-400">- <Num>{1}</Num> whole chicken (about <Num>{1.8}</Num> kg)</li>
        <li className="text-sm text-neutral-400">- <Num>{2}</Num> lemons</li>
        <li className="text-sm text-neutral-400">- <Num>{3}</Num> sprigs fresh rosemary</li>
        <li className="text-sm text-neutral-400">- <Num>{5}</Num> sprigs fresh thyme</li>
        <li className="text-sm text-neutral-400">- <Num>{6}</Num> garlic cloves</li>
        <li className="text-sm text-neutral-400">- <Num>{3}</Num> tbsp olive oil</li>
        <li className="text-sm text-neutral-400">- <Num>{2}</Num> tsp salt</li>
        <li className="text-sm text-neutral-400">- <Num>{1}</Num> tsp black pepper</li>
      </ul>
      <h2 className="text-lg font-semibold text-neutral-100 mb-4">Instructions</h2>
      <ol className="space-y-3 mb-8">
        <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium mr-2">1.</span>Preheat the oven to <Num>{425}</Num> °F. Pat the chicken dry with paper towels.</li>
        <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium mr-2">2.</span>Mix olive oil, minced garlic, chopped rosemary, and thyme in a small bowl.</li>
        <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium mr-2">3.</span>Rub the herb mixture all over the chicken, including under the skin.</li>
        <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium mr-2">4.</span>Squeeze one lemon over the chicken and place the other lemon, halved, inside the cavity.</li>
        <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium mr-2">5.</span>Roast until the internal temperature reaches <Num>{165}</Num> °F and the skin is golden brown.</li>
        <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium mr-2">6.</span>Let rest for <Num>{10}</Num> minutes before carving and serving.</li>
      </ol>
      <h2 className="text-lg font-semibold text-neutral-100 mb-4">Tips</h2>
      <ul className="space-y-2">
        <li className="text-sm text-neutral-400">- Bring the chicken to room temperature before roasting for more even cooking.</li>
        <li className="text-sm text-neutral-400">- Truss the legs with kitchen twine to help the chicken cook evenly.</li>
        <li className="text-sm text-neutral-400">- Save the pan drippings to make a quick gravy by whisking in flour and broth.</li>
      </ul>
    </T>
  );
}

function MisoSalmon() {
  return (
    <T>
      <h1 className="text-3xl font-bold text-neutral-100 mb-3">
        Miso Glazed Salmon
      </h1>
      <p className="text-base text-neutral-400 leading-relaxed mb-8">
        Sweet and savory miso glaze caramelizes beautifully on tender salmon
        fillets. A quick and elegant dish inspired by Japanese cuisine.
      </p>
      <h2 className="text-lg font-semibold text-neutral-100 mb-4">Ingredients</h2>
      <ul className="space-y-2 mb-8">
        <li className="text-sm text-neutral-400">- <Num>{2}</Num> salmon fillets (about <Num>{170}</Num> g each)</li>
        <li className="text-sm text-neutral-400">- <Num>{3}</Num> tbsp white miso paste</li>
        <li className="text-sm text-neutral-400">- <Num>{2}</Num> tbsp mirin</li>
        <li className="text-sm text-neutral-400">- <Num>{1}</Num> tbsp soy sauce</li>
        <li className="text-sm text-neutral-400">- <Num>{1}</Num> tbsp brown sugar</li>
        <li className="text-sm text-neutral-400">- <Num>{1}</Num> tsp sesame oil</li>
        <li className="text-sm text-neutral-400">- <Num>{2}</Num> green onions</li>
        <li className="text-sm text-neutral-400">- <Num>{1}</Num> tsp sesame seeds</li>
      </ul>
      <h2 className="text-lg font-semibold text-neutral-100 mb-4">Instructions</h2>
      <ol className="space-y-3 mb-8">
        <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium mr-2">1.</span>Whisk together miso paste, mirin, soy sauce, brown sugar, and sesame oil.</li>
        <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium mr-2">2.</span>Place salmon fillets on a lined baking sheet and spread the glaze evenly over each fillet.</li>
        <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium mr-2">3.</span>Let the salmon marinate for at least <Num>{30}</Num> minutes in the refrigerator.</li>
        <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium mr-2">4.</span>Preheat the oven to <Num>{400}</Num> °F. Bake until the glaze caramelizes and the salmon flakes easily with a fork.</li>
        <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium mr-2">5.</span>Garnish with sliced green onions and sesame seeds. Serve immediately.</li>
      </ol>
      <h2 className="text-lg font-semibold text-neutral-100 mb-4">Tips</h2>
      <ul className="space-y-2">
        <li className="text-sm text-neutral-400">- Use wild-caught salmon for the best flavor and texture.</li>
        <li className="text-sm text-neutral-400">- For a deeper flavor, marinate the salmon overnight in the refrigerator.</li>
        <li className="text-sm text-neutral-400">- Serve with steamed rice and pickled ginger for a complete meal.</li>
      </ul>
    </T>
  );
}

function MushroomRisotto() {
  return (
    <T>
      <h1 className="text-3xl font-bold text-neutral-100 mb-3">
        Wild Mushroom Risotto
      </h1>
      <p className="text-base text-neutral-400 leading-relaxed mb-8">
        Creamy Arborio rice slowly cooked with a medley of wild mushrooms, white
        wine, and Parmesan cheese. Rich, earthy, and deeply satisfying.
      </p>
      <h2 className="text-lg font-semibold text-neutral-100 mb-4">Ingredients</h2>
      <ul className="space-y-2 mb-8">
        <li className="text-sm text-neutral-400">- <Num>{2}</Num> cups Arborio rice</li>
        <li className="text-sm text-neutral-400">- <Num>{500}</Num> g mixed wild mushrooms</li>
        <li className="text-sm text-neutral-400">- <Num>{6}</Num> cups vegetable broth</li>
        <li className="text-sm text-neutral-400">- <Num>{1}</Num> cup dry white wine</li>
        <li className="text-sm text-neutral-400">- <Num>{2}</Num> shallots, finely diced</li>
        <li className="text-sm text-neutral-400">- <Num>{100}</Num> g Parmesan cheese, grated</li>
        <li className="text-sm text-neutral-400">- <Num>{3}</Num> tbsp butter</li>
        <li className="text-sm text-neutral-400">- <Num>{0.25}</Num> cup fresh parsley, chopped</li>
      </ul>
      <h2 className="text-lg font-semibold text-neutral-100 mb-4">Instructions</h2>
      <ol className="space-y-3 mb-8">
        <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium mr-2">1.</span>Heat the broth in a saucepan and keep it warm over low heat.</li>
        <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium mr-2">2.</span>Saute sliced mushrooms in butter until golden, then set aside.</li>
        <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium mr-2">3.</span>Cook diced shallots in the same pan until soft and translucent.</li>
        <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium mr-2">4.</span>Add the rice and stir for <Num>{2}</Num> minutes until the grains are lightly toasted.</li>
        <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium mr-2">5.</span>Pour in the wine and stir until fully absorbed.</li>
        <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium mr-2">6.</span>Add warm broth one ladle at a time, stirring constantly and waiting until each addition is absorbed.</li>
        <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium mr-2">7.</span>When the rice is creamy and al dente, fold in the mushrooms, grated Parmesan, and remaining butter.</li>
        <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium mr-2">8.</span>Garnish with chopped parsley and serve immediately.</li>
      </ol>
      <h2 className="text-lg font-semibold text-neutral-100 mb-4">Tips</h2>
      <ul className="space-y-2">
        <li className="text-sm text-neutral-400">- Never wash mushrooms under running water. Wipe them clean with a damp cloth instead.</li>
        <li className="text-sm text-neutral-400">- Stir the risotto constantly for the creamiest texture.</li>
        <li className="text-sm text-neutral-400">- Use a mix of chanterelles, porcini, and shiitake for the most complex flavor.</li>
      </ul>
    </T>
  );
}

function LambTagine() {
  return (
    <T>
      <h1 className="text-3xl font-bold text-neutral-100 mb-3">
        Spiced Lamb Tagine
      </h1>
      <p className="text-base text-neutral-400 leading-relaxed mb-8">
        A slow-cooked North African stew with tender lamb, dried apricots, and
        warm spices. Fragrant with cinnamon, cumin, and saffron.
      </p>
      <h2 className="text-lg font-semibold text-neutral-100 mb-4">Ingredients</h2>
      <ul className="space-y-2 mb-8">
        <li className="text-sm text-neutral-400">- <Num>{1}</Num> kg lamb shoulder, cubed</li>
        <li className="text-sm text-neutral-400">- <Num>{150}</Num> g dried apricots</li>
        <li className="text-sm text-neutral-400">- <Num>{2}</Num> onions, sliced</li>
        <li className="text-sm text-neutral-400">- <Num>{400}</Num> g canned tomatoes</li>
        <li className="text-sm text-neutral-400">- <Num>{2}</Num> cups chicken broth</li>
        <li className="text-sm text-neutral-400">- <Num>{2}</Num> tsp ground cinnamon</li>
        <li className="text-sm text-neutral-400">- <Num>{1}</Num> tsp ground cumin</li>
        <li className="text-sm text-neutral-400">- <Num>{0.5}</Num> tsp saffron threads</li>
        <li className="text-sm text-neutral-400">- <Num>{0.25}</Num> cup fresh cilantro</li>
        <li className="text-sm text-neutral-400">- <Num>{2}</Num> cups couscous</li>
      </ul>
      <h2 className="text-lg font-semibold text-neutral-100 mb-4">Instructions</h2>
      <ol className="space-y-3 mb-8">
        <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium mr-2">1.</span>Cut the lamb into large chunks and season with salt, pepper, cinnamon, and cumin.</li>
        <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium mr-2">2.</span>Brown the lamb in batches in a heavy pot or Dutch oven, then set aside.</li>
        <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium mr-2">3.</span>Cook sliced onions in the same pot until softened and lightly caramelized.</li>
        <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium mr-2">4.</span>Return the lamb to the pot and add tomatoes, broth, apricots, and saffron.</li>
        <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium mr-2">5.</span>Cover and cook in the oven at <Num>{325}</Num> °F for about <Num>{2}</Num> hours until the lamb is very tender.</li>
        <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium mr-2">6.</span>Prepare couscous according to package directions while the tagine finishes.</li>
        <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium mr-2">7.</span>Serve the tagine over fluffy couscous, garnished with fresh cilantro.</li>
      </ol>
      <h2 className="text-lg font-semibold text-neutral-100 mb-4">Tips</h2>
      <ul className="space-y-2">
        <li className="text-sm text-neutral-400">- Lamb shoulder is ideal because the connective tissue breaks down during slow cooking.</li>
        <li className="text-sm text-neutral-400">- Toast the spices in a dry pan before adding for a more intense aroma.</li>
        <li className="text-sm text-neutral-400">- This dish tastes even better the next day as the flavors continue to develop.</li>
      </ul>
    </T>
  );
}

function ThaiGreenCurry() {
  return (
    <T>
      <h1 className="text-3xl font-bold text-neutral-100 mb-3">
        Thai Green Curry
      </h1>
      <p className="text-base text-neutral-400 leading-relaxed mb-8">
        A fragrant coconut milk curry loaded with fresh vegetables, Thai basil,
        and aromatic green curry paste. Light yet deeply flavorful.
      </p>
      <h2 className="text-lg font-semibold text-neutral-100 mb-4">Ingredients</h2>
      <ul className="space-y-2 mb-8">
        <li className="text-sm text-neutral-400">- <Num>{400}</Num> ml coconut milk</li>
        <li className="text-sm text-neutral-400">- <Num>{3}</Num> tbsp green curry paste</li>
        <li className="text-sm text-neutral-400">- <Num>{200}</Num> g firm tofu, cubed</li>
        <li className="text-sm text-neutral-400">- <Num>{1}</Num> Japanese eggplant, sliced</li>
        <li className="text-sm text-neutral-400">- <Num>{1}</Num> red bell pepper, sliced</li>
        <li className="text-sm text-neutral-400">- <Num>{100}</Num> g green beans, trimmed</li>
        <li className="text-sm text-neutral-400">- <Num>{2}</Num> tbsp fish sauce</li>
        <li className="text-sm text-neutral-400">- <Num>{1}</Num> tbsp palm sugar</li>
        <li className="text-sm text-neutral-400">- <Num>{0.5}</Num> cup Thai basil leaves</li>
        <li className="text-sm text-neutral-400">- <Num>{2}</Num> kaffir lime leaves</li>
      </ul>
      <h2 className="text-lg font-semibold text-neutral-100 mb-4">Instructions</h2>
      <ol className="space-y-3 mb-8">
        <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium mr-2">1.</span>Heat a splash of coconut milk in a wok or large pan over medium-high heat.</li>
        <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium mr-2">2.</span>Add the green curry paste and stir-fry for <Num>{1}</Num> minute until fragrant.</li>
        <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium mr-2">3.</span>Pour in the remaining coconut milk and bring to a gentle simmer.</li>
        <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium mr-2">4.</span>Add the eggplant and green beans. Cook for <Num>{5}</Num> minutes until slightly tender.</li>
        <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium mr-2">5.</span>Add the tofu, bell pepper, fish sauce, palm sugar, and kaffir lime leaves.</li>
        <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium mr-2">6.</span>Simmer for another <Num>{5}</Num> minutes. Remove from heat and stir in Thai basil.</li>
        <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium mr-2">7.</span>Serve over steamed jasmine rice.</li>
      </ol>
      <h2 className="text-lg font-semibold text-neutral-100 mb-4">Tips</h2>
      <ul className="space-y-2">
        <li className="text-sm text-neutral-400">- Frying the curry paste in coconut cream first releases more flavor from the aromatics.</li>
        <li className="text-sm text-neutral-400">- Substitute chicken or shrimp for the tofu if you prefer a non-vegetarian version.</li>
        <li className="text-sm text-neutral-400">- Fresh Thai basil is essential. Do not substitute with Italian basil.</li>
      </ul>
    </T>
  );
}

function BeefBourguignon() {
  return (
    <T>
      <h1 className="text-3xl font-bold text-neutral-100 mb-3">
        Classic Beef Bourguignon
      </h1>
      <p className="text-base text-neutral-400 leading-relaxed mb-8">
        A rich French stew of beef braised in red wine with pearl onions,
        mushrooms, and bacon. Hearty, elegant, and perfect for cold evenings.
      </p>
      <h2 className="text-lg font-semibold text-neutral-100 mb-4">Ingredients</h2>
      <ul className="space-y-2 mb-8">
        <li className="text-sm text-neutral-400">- <Num>{1}</Num> kg beef chuck, cubed</li>
        <li className="text-sm text-neutral-400">- <Num>{750}</Num> ml red Burgundy wine</li>
        <li className="text-sm text-neutral-400">- <Num>{200}</Num> g thick-cut bacon, diced</li>
        <li className="text-sm text-neutral-400">- <Num>{250}</Num> g pearl onions, peeled</li>
        <li className="text-sm text-neutral-400">- <Num>{250}</Num> g cremini mushrooms, quartered</li>
        <li className="text-sm text-neutral-400">- <Num>{3}</Num> carrots, cut into chunks</li>
        <li className="text-sm text-neutral-400">- <Num>{4}</Num> garlic cloves, minced</li>
        <li className="text-sm text-neutral-400">- <Num>{2}</Num> tbsp tomato paste</li>
        <li className="text-sm text-neutral-400">- <Num>{2}</Num> cups beef broth</li>
        <li className="text-sm text-neutral-400">- <Num>{2}</Num> tbsp flour</li>
        <li className="text-sm text-neutral-400">- <Num>{3}</Num> sprigs fresh thyme</li>
        <li className="text-sm text-neutral-400">- <Num>{2}</Num> bay leaves</li>
      </ul>
      <h2 className="text-lg font-semibold text-neutral-100 mb-4">Instructions</h2>
      <ol className="space-y-3 mb-8">
        <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium mr-2">1.</span>Marinate the beef in wine with thyme and bay leaves in the refrigerator for at least <Num>{4}</Num> hours or overnight.</li>
        <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium mr-2">2.</span>Remove the beef from the marinade and pat dry. Reserve the wine.</li>
        <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium mr-2">3.</span>Cook the bacon in a Dutch oven until crispy, then set aside.</li>
        <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium mr-2">4.</span>Brown the beef in the bacon fat in batches. Do not overcrowd the pot.</li>
        <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium mr-2">5.</span>Saute the carrots, pearl onions, and garlic until lightly browned.</li>
        <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium mr-2">6.</span>Stir in the tomato paste and flour. Cook for <Num>{2}</Num> minutes.</li>
        <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium mr-2">7.</span>Add the reserved wine, broth, beef, and bacon. Bring to a simmer.</li>
        <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium mr-2">8.</span>Cover and braise in the oven at <Num>{325}</Num> °F for <Num>{2.5}</Num> hours until the beef is fork-tender.</li>
        <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium mr-2">9.</span>Add the mushrooms in the last <Num>{30}</Num> minutes of cooking.</li>
        <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium mr-2">10.</span>Serve with crusty bread or buttered egg noodles.</li>
      </ol>
      <h2 className="text-lg font-semibold text-neutral-100 mb-4">Tips</h2>
      <ul className="space-y-2">
        <li className="text-sm text-neutral-400">- Use a full-bodied Burgundy or Pinot Noir for the best results.</li>
        <li className="text-sm text-neutral-400">- Marinating overnight makes a noticeable difference in depth of flavor.</li>
        <li className="text-sm text-neutral-400">- This stew reheats beautifully and is even better on the second day.</li>
      </ul>
    </T>
  );
}
