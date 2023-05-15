import Link from "next/link";
import { FaRegCheckCircle, FaStar, FaWhatsapp } from "react-icons/fa";
import Timer from "./Timer";

export default function HighlightedProduct({ highlightedProduct }: any) {
  const reviews = new Date().getDate() * 7;
  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:items-center justify-between">
      <div className="flex gap-16">
        <div className="w-32 h-32 md:w-48 md:h-48 overflow-hidden rounded-lg relative">
          <img
            src={highlightedProduct.image}
            alt={highlightedProduct.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 bg-black bg-opacity-40 text-white p-2 text-sm w-full">
            <span>{highlightedProduct.productCategory?.name}</span>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="flex">
            <div>
              <div className="flex justify-between items-center gap-2">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {highlightedProduct.name}
                </h2>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    <FaStar />
                    <span>{highlightedProduct.rating}</span>
                  </div>
                  <span className="text-gray-600 ml-2">
                    {reviews} Avaliações
                  </span>
                </div>
              </div>

              <p className="text-gray-600">{highlightedProduct.subtitle}</p>
              <p className="text-gray-600">{highlightedProduct.brand}</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 mt-4 min-w-max">
            <div className="flex items-center space-x-2 w-full">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-green-100">
                <FaWhatsapp className="text-green-500 text-xl" />
              </div>
              <div className="w-max">
                <h3 className="text-lg font-semibold text-gray-800">
                  Contato Direto
                </h3>
                <p className="text-gray-600 text-sm">Via Whatsapp</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 w-full">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-100">
                <FaRegCheckCircle className="text-blue-500" />
              </div>
              <div className="w-max">
                <h3 className="text-lg font-semibold text-gray-800">
                  Qualidade Garantida
                </h3>
                <p className="text-gray-600 text-sm">Produto de ponta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between">
        <Timer />
        <Link
          href={`products/${highlightedProduct.id}`}
          className="text-center text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-200 ease-in-out p-3 rounded-md mt-4 w-full"
        >
          Ver Produto
        </Link>
      </div>
    </div>
  );
}
