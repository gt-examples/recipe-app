export type Recipe = {
  slug: string;
  category: string;
  servings: number;
  prepMin: number;
  cookMin: number;
  tempF?: number;
  calories: number;
  protein: string;
  fat: string;
  carbs: string;
  fiber: string;
};

export const recipes: Recipe[] = [
  {
    slug: "lemon-herb-roasted-chicken",
    category: "poultry",
    servings: 4,
    prepMin: 20,
    cookMin: 75,
    tempF: 425,
    calories: 380,
    protein: "42g",
    fat: "21g",
    carbs: "3g",
    fiber: "1g",
  },
  {
    slug: "miso-glazed-salmon",
    category: "seafood",
    servings: 2,
    prepMin: 10,
    cookMin: 15,
    tempF: 400,
    calories: 320,
    protein: "34g",
    fat: "14g",
    carbs: "18g",
    fiber: "1g",
  },
  {
    slug: "wild-mushroom-risotto",
    category: "vegetarian",
    servings: 6,
    prepMin: 15,
    cookMin: 40,
    calories: 410,
    protein: "12g",
    fat: "16g",
    carbs: "52g",
    fiber: "3g",
  },
  {
    slug: "spiced-lamb-tagine",
    category: "meat",
    servings: 8,
    prepMin: 25,
    cookMin: 120,
    tempF: 325,
    calories: 450,
    protein: "38g",
    fat: "18g",
    carbs: "35g",
    fiber: "5g",
  },
  {
    slug: "thai-green-curry",
    category: "vegetarian",
    servings: 4,
    prepMin: 15,
    cookMin: 25,
    calories: 290,
    protein: "10g",
    fat: "18g",
    carbs: "24g",
    fiber: "4g",
  },
  {
    slug: "classic-beef-bourguignon",
    category: "meat",
    servings: 6,
    prepMin: 30,
    cookMin: 150,
    tempF: 325,
    calories: 520,
    protein: "44g",
    fat: "22g",
    carbs: "28g",
    fiber: "4g",
  },
];

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return recipes.find((r) => r.slug === slug);
}

export const categories = ["all", "poultry", "seafood", "vegetarian", "meat"] as const;
export type Category = (typeof categories)[number];
