import { T, Num, Plural } from "gt-next";
import { getGT } from "gt-next/server";
import { LocaleSelector } from "gt-next";

export default async function Home() {
  const gt = await getGT();

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      <header className="border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href="https://generaltranslation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-400 hover:text-neutral-200 transition-colors"
            >
              General Translation
            </a>
            <span className="text-neutral-700">/</span>
            <h1 className="text-sm font-semibold text-neutral-100">
              {gt("Recipe Browser")}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/gt-examples/recipe-app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-200 transition-colors"
              aria-label="View on GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <LocaleSelector />
          </div>
        </div>
      </header>

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Lemon Herb Roasted Chicken */}
          <div className="border border-neutral-800 rounded-lg p-6 bg-neutral-900/50 hover:border-neutral-700 transition-colors">
            <T>
              <h3 className="text-lg font-semibold text-neutral-100 mb-2">
                Lemon Herb Roasted Chicken
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                A classic roasted chicken with fresh herbs and bright lemon
                flavor. Crispy skin, juicy meat, and aromatic herbs make this a
                perfect weeknight dinner.
              </p>
            </T>
            <div className="flex flex-wrap gap-3 mb-5 text-xs">
              <T>
                <span className="px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300">
                  <Plural
                    n={4}
                    singular={<><Num>{4}</Num> serving</>}
                    plural={<><Num>{4}</Num> servings</>}
                  />
                </span>
                <span className="px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300">
                  <Num>{20}</Num> min prep
                </span>
                <span className="px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300">
                  <Num>{75}</Num> min cook
                </span>
                <span className="px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300">
                  <Num>{425}</Num> °F
                </span>
              </T>
            </div>
            <T>
              <h4 className="text-sm font-medium text-neutral-200 mb-3">Ingredients</h4>
              <ul className="space-y-1.5 mb-5">
                <li className="text-sm text-neutral-400">- <Num>{1}</Num> whole chicken</li>
                <li className="text-sm text-neutral-400">- <Num>{2}</Num> lemons</li>
                <li className="text-sm text-neutral-400">- <Num>{3}</Num> sprigs fresh rosemary</li>
                <li className="text-sm text-neutral-400">- <Num>{5}</Num> sprigs fresh thyme</li>
                <li className="text-sm text-neutral-400">- <Num>{6}</Num> garlic cloves</li>
                <li className="text-sm text-neutral-400">- <Num>{3}</Num> tbsp olive oil</li>
                <li className="text-sm text-neutral-400">- <Num>{2}</Num> tsp salt</li>
                <li className="text-sm text-neutral-400">- <Num>{1}</Num> tsp black pepper</li>
              </ul>
              <h4 className="text-sm font-medium text-neutral-200 mb-3">Instructions</h4>
              <ol className="space-y-2">
                <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium">1.</span> Preheat the oven. Pat the chicken dry with paper towels.</li>
                <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium">2.</span> Mix olive oil, minced garlic, chopped rosemary, and thyme in a small bowl.</li>
                <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium">3.</span> Rub the herb mixture all over the chicken, including under the skin.</li>
                <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium">4.</span> Squeeze one lemon over the chicken and place the other lemon, halved, inside the cavity.</li>
                <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium">5.</span> Roast until the internal temperature reaches <Num>{165}</Num> degrees and the skin is golden brown.</li>
                <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium">6.</span> Let rest for <Num>{10}</Num> minutes before carving and serving.</li>
              </ol>
            </T>
          </div>

          {/* Miso Glazed Salmon */}
          <div className="border border-neutral-800 rounded-lg p-6 bg-neutral-900/50 hover:border-neutral-700 transition-colors">
            <T>
              <h3 className="text-lg font-semibold text-neutral-100 mb-2">
                Miso Glazed Salmon
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                Sweet and savory miso glaze caramelizes beautifully on tender
                salmon fillets. A quick and elegant dish inspired by Japanese
                cuisine.
              </p>
            </T>
            <div className="flex flex-wrap gap-3 mb-5 text-xs">
              <T>
                <span className="px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300">
                  <Plural
                    n={2}
                    singular={<><Num>{2}</Num> serving</>}
                    plural={<><Num>{2}</Num> servings</>}
                  />
                </span>
                <span className="px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300">
                  <Num>{10}</Num> min prep
                </span>
                <span className="px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300">
                  <Num>{15}</Num> min cook
                </span>
                <span className="px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300">
                  <Num>{400}</Num> °F
                </span>
              </T>
            </div>
            <T>
              <h4 className="text-sm font-medium text-neutral-200 mb-3">Ingredients</h4>
              <ul className="space-y-1.5 mb-5">
                <li className="text-sm text-neutral-400">- <Num>{2}</Num> salmon fillets</li>
                <li className="text-sm text-neutral-400">- <Num>{3}</Num> tbsp white miso paste</li>
                <li className="text-sm text-neutral-400">- <Num>{2}</Num> tbsp mirin</li>
                <li className="text-sm text-neutral-400">- <Num>{1}</Num> tbsp soy sauce</li>
                <li className="text-sm text-neutral-400">- <Num>{1}</Num> tbsp brown sugar</li>
                <li className="text-sm text-neutral-400">- <Num>{1}</Num> tsp sesame oil</li>
                <li className="text-sm text-neutral-400">- <Num>{2}</Num> green onions</li>
              </ul>
              <h4 className="text-sm font-medium text-neutral-200 mb-3">Instructions</h4>
              <ol className="space-y-2">
                <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium">1.</span> Whisk together miso paste, mirin, soy sauce, brown sugar, and sesame oil.</li>
                <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium">2.</span> Place salmon fillets on a lined baking sheet and spread the glaze evenly over each fillet.</li>
                <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium">3.</span> Let the salmon marinate for at least <Num>{30}</Num> minutes in the refrigerator.</li>
                <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium">4.</span> Bake until the glaze caramelizes and the salmon flakes easily with a fork.</li>
                <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium">5.</span> Garnish with sliced green onions and serve immediately.</li>
              </ol>
            </T>
          </div>

          {/* Wild Mushroom Risotto */}
          <div className="border border-neutral-800 rounded-lg p-6 bg-neutral-900/50 hover:border-neutral-700 transition-colors">
            <T>
              <h3 className="text-lg font-semibold text-neutral-100 mb-2">
                Wild Mushroom Risotto
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                Creamy Arborio rice slowly cooked with a medley of wild
                mushrooms, white wine, and Parmesan cheese. Rich, earthy, and
                deeply satisfying.
              </p>
            </T>
            <div className="flex flex-wrap gap-3 mb-5 text-xs">
              <T>
                <span className="px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300">
                  <Plural
                    n={6}
                    singular={<><Num>{6}</Num> serving</>}
                    plural={<><Num>{6}</Num> servings</>}
                  />
                </span>
                <span className="px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300">
                  <Num>{15}</Num> min prep
                </span>
                <span className="px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300">
                  <Num>{40}</Num> min cook
                </span>
              </T>
            </div>
            <T>
              <h4 className="text-sm font-medium text-neutral-200 mb-3">Ingredients</h4>
              <ul className="space-y-1.5 mb-5">
                <li className="text-sm text-neutral-400">- <Num>{2}</Num> cups Arborio rice</li>
                <li className="text-sm text-neutral-400">- <Num>{500}</Num> g mixed wild mushrooms</li>
                <li className="text-sm text-neutral-400">- <Num>{6}</Num> cups vegetable broth</li>
                <li className="text-sm text-neutral-400">- <Num>{1}</Num> cup dry white wine</li>
                <li className="text-sm text-neutral-400">- <Num>{2}</Num> shallots</li>
                <li className="text-sm text-neutral-400">- <Num>{100}</Num> g Parmesan cheese</li>
                <li className="text-sm text-neutral-400">- <Num>{3}</Num> tbsp butter</li>
                <li className="text-sm text-neutral-400">- <Num>{0.25}</Num> cup fresh parsley</li>
              </ul>
              <h4 className="text-sm font-medium text-neutral-200 mb-3">Instructions</h4>
              <ol className="space-y-2">
                <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium">1.</span> Heat the broth in a saucepan and keep it warm over low heat.</li>
                <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium">2.</span> Saute sliced mushrooms in butter until golden, then set aside.</li>
                <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium">3.</span> Cook diced shallots in the same pan until soft and translucent.</li>
                <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium">4.</span> Add the rice and stir for <Num>{2}</Num> minutes until the grains are lightly toasted.</li>
                <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium">5.</span> Pour in the wine and stir until fully absorbed.</li>
                <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium">6.</span> Add warm broth one ladle at a time, stirring constantly and waiting until each addition is absorbed.</li>
                <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium">7.</span> Fold in the mushrooms, grated Parmesan, and remaining butter. Season to taste.</li>
                <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium">8.</span> Garnish with chopped parsley and serve immediately.</li>
              </ol>
            </T>
          </div>

          {/* Spiced Lamb Tagine */}
          <div className="border border-neutral-800 rounded-lg p-6 bg-neutral-900/50 hover:border-neutral-700 transition-colors">
            <T>
              <h3 className="text-lg font-semibold text-neutral-100 mb-2">
                Spiced Lamb Tagine
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                A slow-cooked North African stew with tender lamb, dried
                apricots, and warm spices. Fragrant with cinnamon, cumin, and
                saffron.
              </p>
            </T>
            <div className="flex flex-wrap gap-3 mb-5 text-xs">
              <T>
                <span className="px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300">
                  <Plural
                    n={8}
                    singular={<><Num>{8}</Num> serving</>}
                    plural={<><Num>{8}</Num> servings</>}
                  />
                </span>
                <span className="px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300">
                  <Num>{25}</Num> min prep
                </span>
                <span className="px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300">
                  <Num>{120}</Num> min cook
                </span>
                <span className="px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300">
                  <Num>{325}</Num> °F
                </span>
              </T>
            </div>
            <T>
              <h4 className="text-sm font-medium text-neutral-200 mb-3">Ingredients</h4>
              <ul className="space-y-1.5 mb-5">
                <li className="text-sm text-neutral-400">- <Num>{1}</Num> kg lamb shoulder</li>
                <li className="text-sm text-neutral-400">- <Num>{150}</Num> g dried apricots</li>
                <li className="text-sm text-neutral-400">- <Num>{2}</Num> onions</li>
                <li className="text-sm text-neutral-400">- <Num>{400}</Num> g canned tomatoes</li>
                <li className="text-sm text-neutral-400">- <Num>{2}</Num> cups chicken broth</li>
                <li className="text-sm text-neutral-400">- <Num>{2}</Num> tsp ground cinnamon</li>
                <li className="text-sm text-neutral-400">- <Num>{1}</Num> tsp ground cumin</li>
                <li className="text-sm text-neutral-400">- <Num>{0.5}</Num> tsp saffron threads</li>
                <li className="text-sm text-neutral-400">- <Num>{0.25}</Num> cup fresh cilantro</li>
                <li className="text-sm text-neutral-400">- <Num>{2}</Num> cups couscous</li>
              </ul>
              <h4 className="text-sm font-medium text-neutral-200 mb-3">Instructions</h4>
              <ol className="space-y-2">
                <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium">1.</span> Cut the lamb into large chunks and season with salt, pepper, cinnamon, and cumin.</li>
                <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium">2.</span> Brown the lamb in batches in a heavy pot or Dutch oven, then set aside.</li>
                <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium">3.</span> Cook sliced onions in the same pot until softened and lightly caramelized.</li>
                <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium">4.</span> Return the lamb to the pot and add tomatoes, broth, apricots, and saffron.</li>
                <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium">5.</span> Cover and cook in the oven until the lamb is very tender and falls apart easily.</li>
                <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium">6.</span> Prepare couscous according to package directions while the tagine finishes.</li>
                <li className="text-sm text-neutral-400"><span className="text-neutral-600 font-medium">7.</span> Serve the tagine over fluffy couscous, garnished with fresh cilantro.</li>
              </ol>
            </T>
          </div>
        </div>
      </main>
    </div>
  );
}
