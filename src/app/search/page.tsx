"use client";

import { useEffect, useRef } from "react";
import { AxiosResponse } from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useSearchContext } from "@/modules/search/Search.context";
import Filters from "./components/Filters/Filters";
import ProductCard from "./components/ProductCard/ProductCard";
import { BaseApiResponse } from "@/interfaces/BaseApiResponse.interface";
import SearchSkeleton from "./components/SearchSkeleton/SearchSkeleton";
import HighlightedProduct from "./components/Filters/components/HighlightedProduct";
import { SearchedProduct } from "@/modules/search/types";
import SearchNotFound from "./components/SearchNotFound/SearchNotFound";

export default function Search() {
  const { paginatedProducts, fetchNextPage, isLoading, highlightedProduct, productsCount } = useSearchContext();
  const sentinelRef = useRef<HTMLDivElement>(null);
  const params = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, [sentinelRef]);

  useEffect(() => {
    if (!params) return;
    if (!params.get("term")) {
      router.push(`/`);
    }
  }, [params]);

  if (isLoading || !highlightedProduct) {
    return <SearchSkeleton />;
  }
  return (
    <>
      <div className="flex flex-row min-h-screen">
        <Filters />
        <div className="bg-gray-100 w-5/6 flex flex-col items-center p-4 gap-4">
          {productsCount > 0 && <HighlightedProduct highlightedProduct={highlightedProduct} />}

          {productsCount > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3  gap-6 p-6 w-full overflow-y-auto">
              {paginatedProducts?.pages.map(
                (
                  page: AxiosResponse<
                    BaseApiResponse<{
                      count: number;
                      products: SearchedProduct[];
                    }>
                  >
                ) =>
                  page?.data?.data?.products?.map((product: SearchedProduct, index: number) => (
                    <ProductCard key={`${product.name}-${index}`} index={index} product={product} />
                  ))
              )}
            </div>
          ) : (
            <SearchNotFound />
          )}
          <div className="sentinel w-0 h-0" ref={sentinelRef} />
        </div>
      </div>
    </>
  );
}
