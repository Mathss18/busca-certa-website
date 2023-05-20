"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import Swal from "sweetalert2";
import { EstimateReviewContextType } from "./types";
import estimateService, { AcceptEstimateParams, DeclineEstimateParams } from "../../services/estimate/estimate.service";

const EstimateReviewContext = createContext({
  price: 0,
  setPrice: () => {},
  nonce: "",
  setNonce: () => {},
  estimate: null,
  error: false,
  isLoading: false,
  handleAccept: () => {},
  handleDecline: () => {},
  handleSupport: () => {},
} as EstimateReviewContextType);

function EstimateReviewContextProvider({ children }: { children: React.ReactNode }) {
  const [nonce, setNonce] = useState("");
  const [price, setPrice] = useState("0");

  const { mutate: ackEstimate } = useMutation(() => estimateService.ack(nonce!));
  const { data, error, isLoading, refetch } = useQuery(["estimate", nonce], () => estimateService.getOneByNonce(nonce!), {
    enabled: !!nonce,
  });
  const { mutate: acceptEstimate } = useMutation((params: AcceptEstimateParams) => estimateService.accept(params), {
    onSuccess: () => refetch(),
  });
  const { mutate: declineEstimate } = useMutation((params: DeclineEstimateParams) => estimateService.decline(params), {
    onSuccess: () => refetch(),
  });
  const { mutate: askForSupport } = useMutation(() => estimateService.ack(nonce!));

  function handleAccept() {
    if (parseFloat(price) === 0) {
      Swal.fire({
        title: "Atenção",
        text: "Você precisa informar um valor para aceitar o orçamento",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return;
    }
    Swal.fire({
      title: "Atenção",
      html: `
      <div>
        <p>Você tem certeza que deseja aceitar este orçamento?</p>
        <b style="color:green">Valor: R$: ${price}</b>
        <p>Seu cliente será notificado.</p>
      </div>
      `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sim",
      cancelButtonText: "Não",
    }).then((result) => {
      if (result.isConfirmed) {
        acceptEstimate({ nonce, price: parseFloat(price.replace(",", ".")) });
        refetch();
      }
    });
  }

  function handleDecline() {
    Swal.fire({
      title: "Atenção",
      html: `
      <div>
        <p>Você tem certeza que deseja recusar este orçamento?</p>
        <p style="color:red">Seu cliente será notificado.</p>
      </div>
      `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sim",
      cancelButtonText: "Não",
      input: "textarea",
      inputPlaceholder: "Digite aqui a razão da recusa...",
      inputValidator: (value) => {
        if (!value) {
          return "Você precisa escrever algo!";
        }
        return null;
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const reason = result.value;
        declineEstimate({ nonce, reason });
        refetch();
      }
    });
  }

  function handleSupport() {
    Swal.fire({
      title: "Atenção",
      html: `
      <div>
        <p>Como podemos te ajudar?</p>
        <p style="color:green">Nosso time entrará em contato com você.</p>
      </div>
      `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sim",
      cancelButtonText: "Não",
      input: "textarea",
      inputPlaceholder: "Escreva com o que podemos te ajudar...",
      inputValidator: (value) => {
        if (!value) {
          return "Você precisa escrever algo!";
        }
        return null;
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const reason = result.value;
        askForSupport(reason);
        refetch();
      }
    });
  }

  useEffect(() => {
    if (!nonce) return;
    ackEstimate();
  }, [nonce]);

  return (
    <EstimateReviewContext.Provider
      value={{
        price,
        setPrice,
        nonce,
        setNonce,
        estimate: data?.data.data,
        error: !!error,
        isLoading,
        handleAccept,
        handleDecline,
        handleSupport,
      }}
    >
      {children}
    </EstimateReviewContext.Provider>
  );
}

export function useEstimateReviewContext() {
  return useContext(EstimateReviewContext);
}

export default EstimateReviewContextProvider;
