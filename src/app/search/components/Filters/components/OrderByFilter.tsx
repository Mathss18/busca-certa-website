export default function OrderByFilter({ ...rest }: { [x: string]: any }) {
  return (
    <section className="w-full mb-8" {...rest}>
      <h2 className="text-lg font-semibold mb-4">Ordenar por</h2>
      <select
        className="select select-bordered w-full"
        // Implement your sorting logic here
        // onChange={(e) => handleSortChange(e.target.value)}
      >
        <option value="default">Padrão</option>
        {/* <option value="price_low_high">Preço: Menor para Maior</option>
        <option value="price_high_low">Preço: Maior para Menor</option>
        <option value="rating_high_low">Avaliação: Maior para Menor</option> */}
      </select>
    </section>
  );
}
