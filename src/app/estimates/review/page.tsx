"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect } from "react";
import CurrencyInput from "../../components/currency-input/CurrencyInput";
import { useEstimateReviewContext } from "@/modules/estimate-review/EstimateReview.context";
import { toLocalCurrency } from "../../../helpers/string.helper";

export default function Page({ searchParams }: any) {
  const { price, setPrice, setNonce, estimate, isLoading, error, handleAccept, handleDecline, handleSupport } = useEstimateReviewContext();
  const nonce = searchParams?.nonce;
  const router = useRouter();
  useEffect(() => {
    // if (!nonce) router.push("/");
    setNonce(nonce);
  }, [nonce]);

  if (isLoading || !estimate) return <h1 className="text-center text-3xl my-10">Carregando...</h1>;
  if (error) {
    router.push("/");
    return <h1 className="text-center text-3xl my-10 text-red-500">Erro ao carregar</h1>;
  }

  return (
    <div className="min-h-screen bg-gray-200">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <Image src="/assets/images/logos/logo-linha.svg" alt="logo" width={168} height={35} />
            {/* <h1 className="text-2xl font-semibold text-gray-900">Responda este orçamento para notificarmos o cliente</h1> */}
          </div>
        </div>
      </header>
      <div className="flex flex-col sm:flex-row h-screen">
        <div className="w-full sm:w-1/2 bg-gray-300 p-8">
          {/* <h2 className="text-3xl font-bold text-gray-900 mb-6">Informações do Produto e Cliente</h2> */}
          <div className="mb-8 flex justify-center">
            <div className="h-60 w-60 overflow-hidden rounded-full border-2 border-blue-500 shadow-lg">
              <img src={estimate.product.image} alt={estimate.product.name} className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-900">{estimate.product.name}</h3>
              <p className="text-xl text-blue-600 font-bold">Quantidade: {estimate.quantity}</p>
            </div>
            <p className="text-lg text-gray-600">{estimate.product.subtitle}</p>
            {estimate.estimateProductVariations.map((variation: any) => (
              <div key={variation.variationOption.id} className="flex justify-start items-center">
                <p className="text-lg text-gray-600">
                  {variation.variation.name}: <b>{variation.variationOption.name}</b>
                </p>
              </div>
            ))}
            <div className="mt-6 bg-blue-50 p-4 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Mensagem do Cliente</h3>
              <p className="text-base text-gray-600">{estimate.clientMessage}</p>
            </div>
            <div className="mt-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Informações do Cliente</h3>
              <dl className="mt-2 text-base text-gray-600 space-y-2">
                <div className="flex justify-start items-center">
                  <p className="font-bold">
                    Nome: <b>{estimate.clientName}</b>
                  </p>
                </div>
                <div className="flex justify-start items-center">
                  <p className="font-bold">
                    Email: <b>{estimate.clientEmail}</b>
                  </p>
                </div>
                <div className="flex justify-start items-center">
                  <p className="font-bold">
                    Telefone: <b>{estimate.clientPhone}</b>
                  </p>
                </div>
                <div className="flex justify-start items-center">
                  <p className="font-bold">
                    Empresa: <b>{estimate.clientCompanyName}</b>
                  </p>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {estimate.status === "pending" && (
          <div className="w-full sm:w-1/2 bg-gray-100 p-8 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Opções do Fornecedor</h2>
            <div className="grid grid-cols-1 gap-6">
              <div className="group flex flex-col bg-white rounded-lg p-4 shadow text-gray-900 transition-all ease-in-out duration-200 transform hover:scale-105">
                <h3 className="font-semibold text-lg">Aceitar o Orçamento</h3>
                <CurrencyInput
                  className="input input-success mt-2 px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                  label="Informe o preço:"
                  value={price as number}
                  onValueChange={(value: number) => {
                    setPrice(value);
                  }}
                />
                <button
                  onClick={handleAccept}
                  className="btn btn-success bg-green-600 text-white mt-4 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium"
                >
                  Aceitar
                </button>
              </div>
              <div className="group flex flex-col bg-white rounded-lg p-4 shadow text-gray-900 transition-all ease-in-out duration-200 transform hover:scale-105">
                <h3 className="font-semibold text-lg">Recusar o Orçamento</h3>
                <p className="text-sm">Negue este orçamento. Você não poderá alterar isso depois.</p>
                <button
                  onClick={handleDecline}
                  className="btn btn-error bg-red-600 text-white mt-4 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium"
                >
                  Recusar
                </button>
              </div>
              <div className="group flex flex-col bg-white rounded-lg p-4 shadow text-gray-900 transition-all ease-in-out duration-200 transform hover:scale-105">
                <h3 className="font-semibold text-lg">Precisa de mais informações</h3>
                <p className="text-sm">Solicite mais informações sobre este orçamento.</p>
                <button
                  onClick={handleSupport}
                  className="btn btn-info bg-blue-600 text-white mt-4 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium"
                >
                  Solicitar Informações
                </button>
              </div>
            </div>
          </div>
        )}

        {estimate.status === "accepted" && (
          <div className="w-full sm:w-1/2 bg-green-100 p-8 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold text-green-900 mb-8">Ótimas Notícias!</h2>
            <p className="text-lg text-gray-900">Você aceitou este orçamento. Seu cliente foi notificado.</p>
            <p className="text-md text-gray-900">Não se esqueça de entrar em contato com seu cliente</p>
            <p className="text-md text-gray-900">
              Sua proposta foi <b>{toLocalCurrency(estimate.price)}</b>
            </p>
          </div>
        )}

        {estimate.status === "declined" && (
          <div className="w-full sm:w-1/2 bg-red-100 p-8 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold text-red-900 mb-8">Que pena!</h2>
            <p className="text-lg text-gray-900">Você recusou este orçamento. Seu cliente foi notificado.</p>
          </div>
        )}
      </div>
    </div>
  );
}
