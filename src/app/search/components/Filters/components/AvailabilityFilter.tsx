export default function AvailabilityFilter() {
  return (
    <section className="w-full mb-8">
      <h2 className="text-lg font-semibold mb-4">Disponibilidade</h2>
      <div>
        <input
          type="checkbox"
          id="in_stock"
          className="mr-2"
          // Implement your filter logic here
          // onChange={(e) => handleAvailabilityFilterChange(e.target.checked)}
        />
        <label htmlFor="in_stock" className="text-base text-gray-700">
          Em estoque
        </label>
      </div>
    </section>
  );
}
