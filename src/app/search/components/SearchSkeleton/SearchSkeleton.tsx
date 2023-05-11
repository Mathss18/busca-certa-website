import ProductCardSkeleton from "../ProductCard/components/ProductCardSkeleton/ProductCardSkeleton";

export default function SearchSkeleton() {
  return (
    <div className="flex flex-row">
      <div className="bg-gray-300 min-h-screen min-w-[200px] w-1/5 flex flex-col items-center gap-4 py-8 px-4 animate-pulse"></div>
      <div className="bg-gray-100 w-4/5 flex flex-col items-center p-4 gap-4">
        <div className="bg-gray-200 h-24 w-full animate-pulse"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-6 p-6 w-full overflow-y-auto">
          {Array(12)
            .fill(0)
            .map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
        </div>
      </div>
    </div>
  );
}
