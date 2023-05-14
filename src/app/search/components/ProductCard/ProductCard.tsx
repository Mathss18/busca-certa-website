"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEstimateModalContext } from "@/modules/estimate-modal/EstimateModal.context";
import { SearchedProduct } from "@/modules/search/types";

function ProductCard({ product, index }: { product: SearchedProduct; index: number }) {
  const router = useRouter();
  const { setSelectedProduct, setIsModalOpen } = useEstimateModalContext();
  return (
    <motion.div
      className="flex flex-col overflow-hidden rounded-xl shadow-lg transform transition-all duration-300 ease-in-out group bg-white h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ scale: 1.05 }}
    >
      <div
        className="relative h-60 overflow-hidden rounded-t-xl cursor-pointer"
        onClick={() => {
          router.push(`/products/${product.id}`);
        }}
      >
        <motion.img
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          src={product.image}
          alt={product.name}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-transparent group-hover:from-transparent group-hover:to-black" />
        <motion.p className="absolute bottom-0 left-0 text-black p-2 mb-1 font-semibold text-lg transition-all duration-300 bg-gray-200 bg-opacity-75">
          {product.name}
        </motion.p>
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <motion.p className="text-gray-500 text-lg w-full break-words group-hover:text-gray-600 transition-all duration-300">
            {product.subtitle}
          </motion.p>
          <motion.p className="text-gray-500 text-lg w-full break-words group-hover:text-gray-600 transition-all duration-300">
            Marca: {product.brand}
          </motion.p>
        </div>
        <div className="flex items-center mt-4">
          <motion.img
            className="h-8 w-8 mr-2 rounded-full group-hover:scale-110 transition-transform duration-300 ease-in-out"
            src={product.supplier.logo}
            alt={product.supplier.companyName}
          />
          <motion.p className="font-semibold text-gray-800 group-hover:text-gray-900 transition-all duration-300">
            {product.supplier.companyName}
          </motion.p>
        </div>
      </div>
      <motion.button
        className="m-4 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform duration-300 ease-in-out transform group-hover:scale-105"
        onClick={(e) => {
          e.stopPropagation();
          setIsModalOpen(true);
          setSelectedProduct(product);
        }}
      >
        Orçamento
      </motion.button>
    </motion.div>
  );
}

export default ProductCard;
