"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useSearchContext } from "@/modules/search/Search.context";

function ProductCard({ product, index }: any) {
  const router = useRouter();
  const { setSelectedProduct, setIsModalOpen } = useSearchContext();
  return (
    <motion.div
      className="cursor-pointer bg-gradient-to-r from-gray-500 to-gray-400 rounded-lg flex flex-col justify-between h-auto overflow-hidden relative shadow-[0_20px_30px_-15px_rgba(0,0,0,0.5)]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      onClick={() => {
        router.push(`/products/${product.id}`);
      }}
    >
      <div className="relative h-72 w-full">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className="p-4 flex-1">
        <h2 className="font-bold text-2xl mb-2 text-center text-black">
          {product.name}
        </h2>
        <p className="text-gray-200 text-lg w-full break-words">
          {product.description}
        </p>
      </div>
      <div className="bg-gradient-to-r from-gray-500 to-gray-400 pb-2 px-4 flex justify-between items-center">
        <div className="flex items-center">
          {product.supplier.logo && (
            <img
              className="h-12 w-12 mr-2 object-contain"
              src={product.supplier.logo}
              alt={product.supplier.companyName}
            />
          )}
          <div>
            <p className="font-bold text-xl text-white">
              {product.supplier.companyName}
            </p>
          </div>
        </div>
        <button
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={(e) => {
            e.stopPropagation();
            setIsModalOpen(true);
            setSelectedProduct(product);
          }}
        >
          Orçamento
        </button>
      </div>
    </motion.div>
  );
}

export default ProductCard;
