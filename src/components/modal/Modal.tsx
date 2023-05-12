"use client";

import { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { useSearchContext } from "@/modules/search/Search.context";

type ProductVariation = {
  id: number;
  active: boolean;
  variation: {
    id: number;
    name: string;
    active: boolean;
  };
  productVariationOptions: ProductVariationOptions[];
};

type ProductVariationOptions = {
  id: number;
  active: boolean;
  variationOption: {
    id: number;
    name: string;
    active: boolean;
  };
};

function Modal() {
  const {
    isModalOpen,
    setIsModalOpen,
    selectedProduct,
    selectedVariations,
    toggleSelectedVariation,
  } = useSearchContext();
  const [count, setCount] = useState(1);
  function increment() {
    setCount((prevCount) => prevCount + 1);
  }
  function decrement() {
    if (count <= 1) return;
    setCount((prevCount) => prevCount - 1);
  }
  function changeCount(e: any) {
    const { value } = e.target;
    setCount(+value);
  }

  function ModalHeader() {
    return (
      <div className="bg-gray-100 px-4 pt-5 pb-4 sm:p-6 sm:pb-4 relative flex items-center">
        <img
          src={selectedProduct.supplier.logo}
          alt="company logo"
          className="h-10 w-10 mr-4 object-contain"
        />{" "}
        <h2 className="text-2xl">{selectedProduct.supplier.companyName}</h2>{" "}
        <span
          className="absolute top-0 right-0 p-4 cursor-pointer"
          onClick={() => setIsModalOpen(false)}
        >
          <FaRegTimesCircle />
        </span>
      </div>
    );
  }

  function ModalBody() {
    return (
      <div className="flex flex-col px-4 pt-5 pb-4 sm:p-6 sm:pb-4 overflow-auto">
        <div className="sm:flex sm:items-start">
          <div className="flex flex-col w-64 h-64 mr-4 ">
            <img
              src={selectedProduct.image}
              alt="product image"
              className="w-64 h-64 rounded-lg"
            />{" "}
            <div className="flex mt-2">
              <button className="btn rounded-r-none" onClick={decrement}>
                -
              </button>
              <div className="form-control w-full">
                <input
                  value={count}
                  type="number"
                  placeholder="Nome"
                  className="input input-bordered w-full rounded-r-none rounded-l-none"
                  step={1}
                  min={1}
                  onChange={changeCount}
                  onBlur={() => {
                    if (count <= 0) setCount(1);
                  }}
                />
              </div>
              <button className="btn rounded-l-none" onClick={increment}>
                +
              </button>
            </div>
            <label className="label">
              <span className="label-text">Quantidade: {count} </span>
            </label>
            {selectedProduct.productsVariations.length > 0 && (
              <>
                <div className="mt-2">
                  {selectedProduct.productsVariations.map(
                    (productVariation: ProductVariation, i: number) => (
                      <div key={i} className="my-2">
                        <h3 className="text-lg font-bold text-gray-900">
                          {productVariation.variation.name}:
                        </h3>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {productVariation.productVariationOptions.map(
                            (option: ProductVariationOptions, j: number) => {
                              selectedVariations.forEach((item) => {
                                if (
                                  item.variationId ===
                                    productVariation.variation.id &&
                                  item.optionId === option.variationOption.id
                                ) {
                                  console.log("item", item);
                                }
                              });
                              return (
                                <button
                                  key={j}
                                  className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                  onClick={() => {
                                    toggleSelectedVariation(
                                      productVariation.variation.id,
                                      option.variationOption.id
                                    );
                                  }}
                                >
                                  {option.variationOption.name}
                                </button>
                              );
                            }
                          )}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </>
            )}
          </div>
          <div className="w-full flex-grow">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              {`${selectedProduct.name} - ${selectedProduct.subtitle}`}
            </h3>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Nome</span>
                </label>
                <input
                  type="text"
                  placeholder="Nome"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Whatsapp</span>
                </label>
                <input
                  type="text"
                  placeholder="Whatsapp"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Nome da Empresa</span>
                </label>
                <input
                  type="text"
                  placeholder="Nome da Empresa"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Segmento</span>
                </label>
                <input
                  type="text"
                  placeholder="Segmento"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Anexo</span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-bordered w-full"
                />
              </div>
              <div className="form-control w-full sm:col-span-2">
                <label className="label">
                  <span className="label-text">Menssagem</span>
                </label>
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="Digite sua menssagem para o fornecedor"
                ></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  function ModalFooter() {
    return (
      <div className="bg-gray-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setIsModalOpen(false)}
        >
          Solicitar Orçamento
        </button>
      </div>
    );
  }

  return (
    <>
      {isModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="sm:max-w-7xl sm:w-full inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle">
              <ModalHeader />
              <ModalBody />
              <ModalFooter />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
