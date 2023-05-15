export function SearchNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full space-y-4">
      <div className="animate-ping h-32 w-32 rounded-full bg-blue-400 opacity-75"></div>
      <h2 className="mt-6 text-3xl font-semibold text-gray-600 transform transition duration-500 hover:scale-105">
        Nenhum produto encontrado.
      </h2>
      <p className="mt-2 text-lg text-gray-500">
        Tente ajustar sua busca ou filtros para encontrar o que procura.
      </p>
    </div>
  );
}
