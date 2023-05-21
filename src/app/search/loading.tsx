export default function Loading() {
  return (
    <div className="flex justify-center">
      <div className="animate-pulse w-5/6 h-screen">
        <div className="flex flex-row min-h-screen">
          <div className="flex flex-col w-1/6 min-w-[220px] p-6 bg-white shadow-lg space-y-6">
            <div>
              <div className="h-4 mt-2 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 mt-2 bg-gray-300 rounded w-3/4"></div>
            </div>
            <div>
              <div className="h-4 mt-2 bg-gray-300 rounded w-3/4"></div>
            </div>
          </div>
          <div className="bg-gray-100 w-5/6 flex flex-col items-center p-4 gap-4"></div>
        </div>
      </div>
    </div>
  );
}
