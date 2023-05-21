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
      className="group cursor-pointer relative h-40 rounded-lg overflow-hidden shadow-lg transition transform duration-200 ease-in-out hover:scale-105"
      onClick={click}
    >
      <img src={image} alt={name} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center hover:bg-opacity-50 transition">
        <p className="text-2xl text-white font-bold">{name}</p>
      </div>
    </div>
  );
}

function CategoryGrid() {
  const { categories } = useHomeContext();
  const { search } = useSearchContext();

  return (
    <div className="mx-auto px-4 py-16 w-5/6">
      <h2 className="text-3xl font-bold text-gray-800 uppercase mb-10 text-center">Escolha uma categoria</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.name} {...category} click={() => search(category.name)} />
        ))}
      </div>
    </div>
  );
}

export default CategoryGrid;
