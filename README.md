# Recipe Browser

Multilingual cooking recipe browser with locale-aware quantities, temperatures, and serving counts.

**[Live Demo](https://recipe-app.generaltranslation.dev)** | **[General Translation Docs](https://generaltranslation.com/docs)**

## About

A recipe browsing app that showcases how General Translation handles rich content translation — full recipe pages with ingredients, instructions, and tips all adapt to the user's language. Numeric quantities, temperatures, and serving counts are formatted with locale-aware `<Num>` and `<Plural>` components.

## GT Features Used

- `<T>` — JSX translation (wide wrapping of recipe content)
- `<Num>` — Locale-aware number formatting for quantities and temperatures
- `<Plural>` — Pluralization for servings count
- `<LocaleSelector>` — Language picker
- `getGT` / `useGT` — String translations for metadata, labels, and attributes
- `loadTranslations` — Local translation storage

## Getting Started

```bash
git clone https://github.com/gt-examples/recipe-app.git
cd recipe-app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Built With

- [Next.js](https://nextjs.org)
- [General Translation](https://generaltranslation.com) (gt-next)
- [Tailwind CSS](https://tailwindcss.com)
