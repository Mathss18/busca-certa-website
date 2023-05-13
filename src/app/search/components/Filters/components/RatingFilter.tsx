export default function RatingFilter({ ...rest }: { [x: string]: any }) {
  return (
    <section className="w-full mb-8" {...rest}>
      <h2 className="text-lg font-semibold mb-4">Avaliação dos clientes</h2>
      <div>
        {[5, 4, 3, 2, 1].map((rating) => (
          <div key={rating} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={`rating-${rating}`}
              className="mr-2"
              // Implement your filter logic here
              // onChange={(e) => handleRatingFilterChange(rating, e.target.checked)}
            />
            <label
              htmlFor={`rating-${rating}`}
              className="text-base text-gray-700"
            >
              {`${Array(rating).fill("⭐️").join("")} (${rating})`}
            </label>
          </div>
        ))}
      </div>
    </section>
  );
}
