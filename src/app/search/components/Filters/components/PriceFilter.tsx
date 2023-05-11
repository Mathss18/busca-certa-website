import CurrencyInput from "../../../../components/currency-input/CurrencyInput";

export default function PriceFilter() {
  return (
    <section className="w-full mb-8">
      <h2 className="text-lg font-semibold mb-4">Filtrar por preço</h2>

      {/* Implement your state logic here */}
      {/* const [priceFrom, setPriceFrom] = useState(0);
     const [priceTo, setPriceTo] = useState(1000); */}

      <div className="flex items-center justify-between mb-4">
        <div className="w-1/2 mr-2">
          <CurrencyInput label="De:" value={0} onValueChange={() => {}} />
        </div>
        <div className="w-1/2 ml-2">
          <CurrencyInput label="Até:" value={99.9} onValueChange={() => {}} />
        </div>
      </div>
    </section>
  );
}
