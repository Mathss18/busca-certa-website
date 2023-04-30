"use client";

import React from "react";

interface CategoryCardProps {
  imageUrl: string;
  alt: string;
  title: string;
  href: string;
}

function CategoryCard({ imageUrl, alt, title, href }: CategoryCardProps) {
  return (
    <div className="relative rounded-sm overflow-hidden group">
      <img src={imageUrl} alt={alt} className="w-full" />
      <a
        href={href}
        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
      >
        {title}
      </a>
    </div>
  );
}

function CategoryGrid() {
  const categories = [
    {
      imageUrl: "assets/images/category/category-1.jpg",
      alt: "category 1",
      title: "Bedroom",
    },
    {
      imageUrl: "assets/images/category/category-2.jpg",
      alt: "category 2",
      title: "Mattress",
    },
    {
      imageUrl: "assets/images/category/category-3.jpg",
      alt: "category 3",
      title: "Outdoor",
    },
    {
      imageUrl: "assets/images/category/category-4.jpg",
      alt: "category 4",
      title: "Sofa",
    },
    {
      imageUrl: "assets/images/category/category-5.jpg",
      alt: "category 5",
      title: "Living Room",
    },
    {
      imageUrl: "assets/images/category/category-6.jpg",
      alt: "category 6",
      title: "Kitchen",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        Escolha uma categoria
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {categories.map((category) => (
          <CategoryCard key={category.title} {...category} href="#" />
        ))}
      </div>
    </div>
  );
}

export default CategoryGrid;
