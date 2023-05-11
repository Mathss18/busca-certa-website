export default function ProductCardSkeleton() {
  return (
    <div className="animate-pulse bg-gray-200 rounded-lg flex flex-col justify-between h-auto overflow-hidden relative">
      <div className="relative h-72 w-full">
        <div className="absolute top-0 left-0 w-full h-full" />
      </div>
      <div className="bg-gray-300 pb-2 px-4 h-1/3">
        <div className="w-full h-6 mt-3 bg-gray-200 rounded"></div>
        <div className="w-full h-6 mt-3 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}
