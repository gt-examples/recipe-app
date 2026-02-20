"use client";

import { useGT } from "gt-next/client";
import { T } from "gt-next";

export default function CategoryFilter({
  active,
  onChange,
}: {
  active: string;
  onChange: (cat: string) => void;
}) {
  const gt = useGT();

  const labels: Record<string, string> = {
    all: gt("All"),
    poultry: gt("Poultry"),
    seafood: gt("Seafood"),
    vegetarian: gt("Vegetarian"),
    meat: gt("Meat"),
  };

  return (
    <div className="flex flex-wrap gap-2">
      {Object.entries(labels).map(([key, label]) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          className={`px-3.5 py-1.5 rounded-full text-sm transition-colors ${
            active === key
              ? "bg-neutral-100 text-neutral-900 font-medium"
              : "bg-neutral-800 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-700"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
