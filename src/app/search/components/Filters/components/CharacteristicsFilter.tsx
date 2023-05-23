export default function CharacteristicsFilter() {
  return (
    <section className="w-full mb-8">
      <h2 className="text-lg font-semibold mb-4">Características</h2>
      <div>
        {/* Replace the feature values with the actual features you want to use */}
        {["Waterproof", "Eco-friendly", "Vegan", "Hypoallergenic"].map((feature) => (
          <div key={feature} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={`feature-${feature}`}
              className="mr-2"
              // Implement your filter logic here
              // onChange={(e) => handleFeatureFilterChange(feature, e.target.checked)}
            />
            <label htmlFor={`feature-${feature}`} className="text-base text-gray-700">
              {feature}
            </label>
          </div>
        ))}
      </div>
    </section>
  );
}
