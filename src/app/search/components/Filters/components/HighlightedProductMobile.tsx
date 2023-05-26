import Link from "next/link";
import { FaRegCheckCircle, FaStar, FaWhatsapp } from "react-icons/fa";
import Timer from "./Timer";

export default function HighlightedProductMobile({ highlightedProduct }: any) {
  const reviews = new Date().getDate() * 7;
  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-md flex flex-col items-center space-y-4 justify-between">
      <div className="flex gap-4 w-full">
        <div className="w-32 h-32 overflow-hidden rounded-lg relative mb-4 flex-shrink-0">
          <img src={highlightedProduct.image} alt={highlightedProduct.name} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-40 text-white p-1 text-sm w-full">
            {highlightedProduct.productCategory?.name}
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{highlightedProduct.name}</h2>
          <p className="text-gray-500 text-sm">{highlightedProduct.brand}</p>
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400" />
            <span className="text-sm text-gray-700">{highlightedProduct.rating}</span>
            <span className="text-xs text-gray-500">({reviews} reviews)</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-around gap-2 mb-4 w-full">
        <div className="bg-blue-50 p-2 rounded-lg flex items-center gap-2">
          <div className="bg-green-100 p-2 rounded-full">
            <FaWhatsapp className="text-green-500" />
          </div>
          <div className="text-sm text-gray-700">Contato Direto via WhatsApp</div>
        </div>
        <div className="bg-blue-50 p-2 rounded-lg flex items-center gap-2">
          <div className="bg-blue-100 p-2 rounded-full">
            <FaRegCheckCircle className="text-blue-500" />
          </div>
          <div className="text-sm text-gray-700">Qualidade Garantida</div>
        </div>
      </div>
      <Timer />
      <Link
        href={`products/${highlightedProduct.id}`}
        className="w-full bg-blue-500 hover:bg-blue-600 transition-colors duration-200 ease-in-out py-2 rounded-md text-white text-center text-sm"
      >
        Ver Produto
      </Link>
    </div>
  );
}
