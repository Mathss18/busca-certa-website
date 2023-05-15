"use client";

import { FaInfoCircle, FaQuestion, FaRegTimesCircle } from "react-icons/fa";
import { useEstimateModalContext } from "@/modules/estimate-modal/EstimateModal.context";
import {
  ProductsVariation,
  ProductVariationOption,
} from "@/modules/estimate-modal/types";
import ReactInputMask from "react-input-mask";
import { useEffect } from "react";
import { Controller } from "react-hook-form";

function EstimateModal() {
  const {
    isModalOpen,
    setIsModalOpen,
    selectedProduct,
    selectedVariations,
    toggleSelectedVariation,
    submitEstimate,
    form,
    count,
    setCount,
    minimumToEstimate,
    isBeingSubmited,
  } = useEstimateModalContext();

  function ModalHeader() {
    return (
      <div className="bg-gray-100 px-4 pt-5 pb-4 sm:p-6 sm:pb-4 relative flex items-center">
        <img
          src={selectedProduct?.supplier.logo}
          alt="company logo"
          className="h-10 w-10 mr-4 object-contain"
        />{" "}
        <h2 className="text-2xl">
          Solicitar orçamento para {selectedProduct?.supplier.companyName}
        </h2>{" "}
        <span
          className="text-3xl absolute top-0 right-0 p-4 cursor-pointer"
          onClick={() => setIsModalOpen(false)}
        >
          <FaRegTimesCircle />
        </span>
      </div>
    );
  }

  function adjustIfCountIsBellowMinimum() {
    if (count <= minimumToEstimate) {
      setCount(minimumToEstimate);
    }
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

            <form
              onSubmit={form.handleSubmit(submitEstimate)}
              className="sm:max-w-7xl sm:w-full inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle"
            >
              <ModalHeader />

              <div className="flex flex-col px-4 pt-5 pb-4 sm:p-6 sm:pb-4 overflow-auto">
                <div className="sm:flex sm:items-start">
                  <div className="flex flex-col w-64 h-64 mr-4 ">
                    <img
                      src={selectedProduct?.image}
                      alt="product image"
                      className="w-64 h-64 rounded-lg"
                    />{" "}
                    <div className="flex mt-2">
                      <button
                        type="button"
                        className="btn rounded-r-none"
                        onClick={() => {
                          setCount(count - 1);
                          adjustIfCountIsBellowMinimum();
                        }}
                      >
                        -
                      </button>
                      <div className="form-control w-full">
                        <input
                          value={count}
                          type="number"
                          placeholder="Quantidade"
                          className="input input-bordered w-full rounded-r-none rounded-l-none disabled"
                          step={1}
                          min={minimumToEstimate}
                          onChange={(e) => {
                            setCount(e.target.value as unknown as number);
                          }}
                          onBlur={() => {
                            adjustIfCountIsBellowMinimum();
                          }}
                        />
                      </div>
                      <button
                        type="button"
                        className="btn rounded-l-none"
                        onClick={() => setCount(count + 1)}
                      >
                        +
                      </button>
                    </div>
                    <div className="flex items-center">
                      <span className="label-text">Quantidade: {count} </span>
                      <span
                        className="label-text label tooltip tooltip-right"
                        data-tip={`A quantidade mínima para esse orçamento é ${minimumToEstimate}`}
                      >
                        <FaInfoCircle />
                      </span>
                    </div>
                    {selectedProduct?.productsVariations?.length! > 0 && (
                      <>
                        <div className="mt-2">
                          {selectedProduct?.productsVariations?.map(
                            (productVariation: ProductsVariation) => (
                              <div
                                key={productVariation.variation.id}
                                className="my-2"
                              >
                                <h3 className="text-lg font-bold text-gray-900">
                                  {productVariation.variation.name}:
                                </h3>
                                <div className="flex flex-wrap gap-2 mt-1">
                                  {productVariation.productVariationOptions.map(
                                    (option: ProductVariationOption) => {
                                      let exists = false;
                                      selectedVariations.forEach((item) => {
                                        if (
                                          item.variationId ===
                                            productVariation.variation.id &&
                                          item.variationOptionId ===
                                            option.variationOption.id
                                        ) {
                                          exists = true;
                                        }
                                      });
                                      return (
                                        <button
                                          type="button"
                                          key={option.variationOption.id}
                                          style={{
                                            borderColor: exists ? "green" : "",
                                            borderWidth: "2px",
                                          }}
                                          className="px-3 py-1 border border-gray-300 rounded-md text-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none"
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
                      {`${selectedProduct?.name} - ${selectedProduct?.subtitle}`}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text">Nome Completo *</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Nome Completo"
                          className={`input input-bordered w-full ${
                            form?.formState?.errors?.name
                              ? "border-red-500"
                              : ""
                          }`}
                          {...form.register("name", { required: true })}
                        />
                        {form?.formState?.errors?.name && (
                          <span className="text-red-500">
                            Preencha esse campo
                          </span>
                        )}
                      </div>
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text">Email *</span>
                        </label>
                        <input
                          type="email"
                          placeholder="Email"
                          className={`input input-bordered w-full ${
                            form?.formState?.errors?.email
                              ? "border-red-500"
                              : ""
                          }`}
                          {...form.register("email", {
                            required: true,
                            email: true,
                          })}
                        />
                        {form?.formState?.errors?.email && (
                          <span className="text-red-500">
                            Preencha esse campo
                          </span>
                        )}
                      </div>
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text">Celular *</span>
                        </label>
                        <Controller
                          name="phone"
                          control={form.control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <ReactInputMask {...field} mask="(99) 99999-9999">
                              {/* @ts-ignore */}
                              {(inputProps) => (
                                <input
                                  {...inputProps}
                                  type="text"
                                  placeholder="Celular *"
                                  className={`input input-bordered w-full ${
                                    form?.formState?.errors?.phone
                                      ? "border-red-500"
                                      : ""
                                  }`}
                                />
                              )}
                            </ReactInputMask>
                          )}
                        />
                        {form?.formState?.errors?.phone && (
                          <span className="text-red-500">
                            Digite um número válido
                          </span>
                        )}
                      </div>
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text">Nome da Empresa</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Nome da Empresa *"
                          className={`input input-bordered w-full ${
                            form?.formState?.errors?.companyName
                              ? "border-red-500"
                              : ""
                          }`}
                          {...form.register("companyName", { required: true })}
                        />
                        {form?.formState?.errors?.companyName && (
                          <span className="text-red-500">
                            Preencha esse campo
                          </span>
                        )}
                      </div>
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text">Segmento</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Segmento da Empresa"
                          className={`input input-bordered w-full ${
                            form?.formState?.errors?.companySegment
                              ? "border-red-500"
                              : ""
                          }`}
                          {...form.register("companySegment")}
                        />
                        {form?.formState?.errors?.companySegment && (
                          <span className="text-red-500">
                            Preencha esse campo
                          </span>
                        )}
                      </div>
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text">Anexo</span>
                        </label>
                        <input
                          type="file"
                          placeholder="Anexo"
                          className={`file-input file-input-bordered w-full ${
                            form?.formState?.errors?.file
                              ? "border-red-500"
                              : ""
                          }`}
                          {...form.register("file")}
                        />
                        {form?.formState?.errors?.file && (
                          <span className="text-red-500">
                            Preencha esse campo
                          </span>
                        )}
                      </div>
                      <div className="form-control w-full sm:col-span-2">
                        <label className="label">
                          <span className="label-text">Menssagem</span>
                        </label>
                        <textarea
                          className="textarea textarea-bordered"
                          placeholder="Digite sua menssagem para o fornecedor"
                          {...form.register("message")}
                        ></textarea>
                        {form?.formState?.errors?.message && (
                          <span className="text-red-500">
                            Preencha esse campo
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button type="submit" className="btn btn-primary" disabled={isBeingSubmited}>
                  Solicitar Orçamento
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default EstimateModal;
