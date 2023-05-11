"use client";

import React from "react";
import { useHomeContext } from "@/modules/home/Home.context";
import { useSearchContext } from "@/modules/search/Search.context";

type CategoryCardProps = {
  image: string;
  name: string;
  click: () => void;
};

function CategoryCard({ image, name, click }: CategoryCardProps) {
  return (
    <div
      className="relative rounded-md overflow-hidden group h-36"
      onClick={click}
    >
      <img src={image} alt={name} className="w-full" />
      <a className="absolute cursor-pointer inset-0 bg-black bg-opacity-50 flex items-center justify-center text-3xl text-white group-hover:bg-opacity-70 transition">
        {name}
      </a>
    </div>
  );
}

function CategoryGrid() {
  const { categories } = useHomeContext();
  const { search } = useSearchContext();

  return (
    <div className="mx-auto px-4 pb-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        Escolha uma categoria
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {categories.map((category) => (
          <CategoryCard
            key={category.name}
            {...category}
            click={() => search(category.name)}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryGrid;
