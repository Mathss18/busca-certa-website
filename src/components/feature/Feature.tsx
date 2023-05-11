"use client";

import React from "react";

interface FeatureCardProps {
  imageUrl: string;
  alt: string;
  title: string;
  description: string;
}

function FeatureCard({ imageUrl, alt, title, description }: FeatureCardProps) {
  return (
    <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
      <img src={imageUrl} alt={alt} className="w-12 h-12 object-contain" />
      <div>
        <h4 className="font-medium capitalize text-lg">{title}</h4>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  );
}

function Feature() {
  const features = [
    {
      imageUrl: "assets/images/icons/delivery-van.svg",
      alt: "Frete Grátis",
      title: "Frete Grátis",
      description: "em todo território nacional",
    },
    {
      imageUrl: "assets/images/icons/money-back.svg",
      alt: "Obtenha Descontos",
      title: "Obtenha Descontos",
      description: "até 50% de desconto",
    },
    {
      imageUrl: "assets/images/icons/service-hours.svg",
      alt: "Suporte",
      title: "Suporte 24 horas",
      description: "via whatsapp ou email",
    },
  ];

  return (
    <div className="mx-auto px-4 py-16">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto justify-center">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </div>
  );
}

export default Feature;
