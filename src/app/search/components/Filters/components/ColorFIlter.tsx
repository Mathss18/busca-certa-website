export default function ColorFilter() {
  return (
    <section className="w-full mb-8">
      <h2 className="text-lg font-semibold mb-4">Filtrar por cor</h2>
      <div className="flex flex-wrap">
        {/* Replace the color values with the actual colors you want to use */}
        {["red", "blue", "green", "yellow", "black", "white"].map((color) => (
          <button
            key={color}
            className={`w-6 h-6 m-1 border border-gray-300 rounded-full ${color}`}
            // Implement your filter logic here
            // onClick={() => handleColorFilterChange(color)}
          ></button>
        ))}
      </div>
    </section>
  );
}
