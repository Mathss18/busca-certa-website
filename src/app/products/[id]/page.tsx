"use client";

import { useQuery } from "react-query";
import { useParams } from "next/navigation";
import * as Icons from "react-icons/fa";
import productService from "@/services/product/product.service";
import StarRating from "@/components/star-rating/StarRating";

type ProductVariation = {
  id: number;
  active: boolean;
  variation: {
    name: string;
  };
  productVariationOptions: ProductVariationOptions[];
};

type ProductVariationOptions = {
  id: number;
  active: boolean;
  variationOption: {
    name: string;
  };
};

export default function ProductPage() {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery(["product", id], () =>
    productService.getOne(id)
  );

  if (error) return <div>Error loading product</div>;
  if (isLoading) return <div>Loading...</div>;

  const product = data?.data?.data;

  return (
    <div className="min-h-screen px-4 bg-slate-200">
      <div className="flex flex-col md:flex-row items-start md:items-start justify-center gap-8 py-16">
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <img
            className="rounded-lg shadow-md ring-1 ring-black ring-opacity-5 hover:scale-105 transition transform duration-200 ease-out cursor-pointer mb-8"
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
          />
          {product.productsVariations.length > 0 && (
            <>
              <h2 className="text-xl font-bold text-gray-900 mt-5">
                Variações do produto
              </h2>
              <div className="mt-2">
                {product.productsVariations.map(
                  (productVariation: ProductVariation, i: number) => (
                    <div key={i} className="my-2">
                      <h3 className="text-lg font-bold text-gray-900">
                        {productVariation.variation.name}:
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {productVariation.productVariationOptions.map(
                          (option: ProductVariationOptions, j: number) => (
                            <button
                              key={j}
                              className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                              {option.variationOption.name}
                            </button>
                          )
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>
            </>
          )}
          {product.productFeatures.length > 0 && (
            <>
              <h2 className="text-xl font-bold text-gray-900 mt-5">
                Mais características
              </h2>
              <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 text-base text-gray-500 mt-2 text-center">
                {product.productFeatures.map((feature: any) => {
                  const Icon =
                    feature.features.icon in Icons
                      ? Icons[feature.features.icon]
                      : Icons.FaQuestion; // Default icon
                  return (
                    <div
                      className="flex flex-col items-center"
                      key={feature.features.id}
                    >
                      <Icon className="text-2xl mb-2" />
                      <span>{feature.features.name}</span>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-extrabold mb-2">{product.name}</h1>
          <div className="flex justify-start items-center gap-1">
            <StarRating rating={product.rating} />
          </div>
          <p className="text-gray-500 my-2">
            Baseado nas avaliçãoes de clientes
          </p>
          <h2 className="text-xl font-bold text-gray-900">
            Sobre esse produto
          </h2>
          <p className="text-base text-gray-500 mt-2">{product.subtitle}</p>
          <p className="text-base text-gray-500 mt-2">
            Categoria: {product.productCategory.name}
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-5">Fornecedor</h2>
          <div className="flex items-center gap-4 mt-2">
            <img
              src={product.supplier.logo}
              alt="Supplier logo"
              className="w-16 h-16 object-cover rounded-md"
            />
            <div>
              <p className="text-base text-gray-500">
                {product.supplier.companyName}
              </p>
              <p className="text-base text-gray-500">
                {product.supplier.street}, {product.supplier.number}
              </p>
              <p className="text-base text-gray-500">
                {product.supplier.city}, {product.supplier.state}
              </p>
            </div>
          </div>
          <div
            className="mt-4"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
          <div className="mt-6">
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Solicitar Orçamento Grátis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
