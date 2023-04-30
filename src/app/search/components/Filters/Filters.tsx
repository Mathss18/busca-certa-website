export default function Filters() {
  return (
    <div className="bg-yellow-200 h-screen w-1/5 flex flex-col items-center  gap-4">
      <h1 className="text-2xl font-bold">Tênis</h1>
      <h1 className="text-sm font-bold">26.257 resultados</h1>
      <div className="w-4/5">
        <h1 className="text-sm font-bold">Categorias</h1>
        <div>
          <h1 className="text-sm">Esportes / Corrida / Tênis</h1>
        </div>
      </div>
      <div className="w-4/5">
        <h1 className="text-sm font-bold">Produtos </h1>
        <div>
          <h1 className="text-sm">Sapato (12)</h1>
        </div>
        <div>
          <h1 className="text-sm">Corda (5)</h1>
        </div>
        <div>
          <h1 className="text-sm">Meia (1)</h1>
        </div>
      </div>
    </div>
  );
}
