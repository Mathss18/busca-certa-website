"use client";

import { useEffect, useRef, useState } from "react";
import { AxiosResponse } from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { FaChevronCircleDown } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useSearchContext } from "@/modules/search/Search.context";
import Filters from "./components/Filters/Filters";
import ProductCard from "./components/ProductCard/ProductCard";
import { BaseApiResponse } from "@/interfaces/BaseApiResponse.interface";
import SearchSkeleton from "./components/SearchSkeleton/SearchSkeleton";
import HighlightedProduct from "./components/Filters/components/HighlightedProduct";
import { SearchedProduct } from "@/modules/search/types";
import SearchNotFound from "./components/SearchNotFound/SearchNotFound";
import useIsMobile from "@/hooks/useIsMobile.hook";
import HighlightedProductMobile from "./components/Filters/components/HighlightedProductMobile";
import FiltersMobile from "./components/Filters/FiltersMobile";

export default function Search() {
  const { paginatedProducts, fetchNextPage, isLoading, highlightedProduct, productsCount } = useSearchContext();
  const sentinelRef = useRef<HTMLDivElement>(null);
  const params = useSearchParams();
  const router = useRouter();
  const isMobile = useIsMobile();
  const [filterOpen, setFilterOpen] = useState(false);
  useEffect(() => {
    // Get a target element that you want to persist scrolling for (such as your app root)
    const targetElement = document.querySelector("#root");

    if (filterOpen) disableBodyScroll(targetElement);
    else enableBodyScroll(targetElement);
  }, [filterOpen]);

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
      <div className="flex flex-row min-h-screen overflow-hidden">
        {!isMobile && <Filters />}
        <AnimatePresence>{isMobile && filterOpen && <FiltersMobile />}</AnimatePresence>
        <div className="bg-gray-100 flex flex-col items-center p-4 gap-4  w-screen">
          {productsCount > 0 && !isMobile ? <HighlightedProduct highlightedProduct={highlightedProduct} /> : null}
          {productsCount > 0 && isMobile ? <HighlightedProductMobile highlightedProduct={highlightedProduct} /> : null}

          {productsCount > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-6 p-4 w-full overflow-y-auto">
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
          {isMobile && (
            <div className="fixed bottom-0 right-0 z-50 m-2">
              <button
                onClick={() => setFilterOpen((prev) => !prev)}
                className="btn btn-primary text-white px-4 w-auto h-12 rounded-full active:shadow-lg"
              >
                <div className="mr-2">
                  <motion.div animate={{ rotate: filterOpen ? 180 : 0 }}>
                    <FaChevronCircleDown />
                  </motion.div>
                </div>
                <span>Filtros</span>
              </button>
            </div>
          )}
          <div className="sentinel w-0 h-0" ref={sentinelRef} />
        </div>
      </div>
    </>
  );
}
