"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import Swal from "sweetalert2";
import EstimateModal from "@/components/estimate-modal/EstimateModal";
import { EstimateModalContextType, SelectedProduct, SelectedVariations } from "./types";
import estimateService from "../../services/estimate/estimate.service";

const EstimateModalContext = createContext({
  isModalOpen: false,
  setIsModalOpen: () => {},
  selectedProduct: null,
  setSelectedProduct: () => {},
  selectedVariations: [],
  setSelectedVariations: () => {},
  toggleSelectedVariation: () => {},
  submitEstimate: () => {},
  form: {},
  count: 1,
  setCount: () => {},
  minimumToEstimate: 1,
  isBeingSubmited: false,
} as EstimateModalContextType);

const ALLOWED_FILE_EXTENSIONS = ["application/pdf", "image/png", "image/jpeg", "text/csv"];

function EstimateModalContextProvider({ children }: { children: React.ReactNode }) {
  const [selectedVariations, setSelectedVariations] = useState<SelectedVariations[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<SelectedProduct | null>(null);
  const [count, setCount] = useState(1);
  const form = useForm();
  const { mutate: createEstimate, isLoading: isBeingSubmited } = useMutation(estimateService.create, {
    onSuccess: () => {
      setIsModalOpen(false);
      Swal.fire({
        title: "Orçamento Solicitado com Sucesso",
        text: "Estamos entrando em contato com você, verifique seu e-mail.",
        backdrop: true,
        icon: "success",
      });
    },
    onError: () => {
      Swal.fire({
        title: "Erro ao solicitar orçamento",
        text: "Tente novamente mais tarde",
        backdrop: true,
        icon: "error",
      });
    },
  });

  function submitEstimate() {
    if (Object.keys(form.formState.errors).length > 0) return;
    const { name, email, phone, companyName, companySegment, file, message } = form.getValues();
    if (file && file[0] && !ALLOWED_FILE_EXTENSIONS.includes(file[0].type)) {
      Swal.fire({
        title: "Erro ao solicitar orçamento",
        text: "Tipo de arquivo não permitido, tipos permitidos: PDF, PNG, JPEG, CSV",
        backdrop: true,
        icon: "error",
      });
      return;
    }
    const formData: any = new FormData();
    formData.append("clientName", name);
    formData.append("clientEmail", email);
    formData.append("clientPhone", phone.replace(/\D/g, ""));
    formData.append("clientCompanyName", companyName);
    formData.append("clientSegment", companySegment);
    formData.append("clientMessage", message);
    formData.append("productId", selectedProduct?.id!);
    formData.append("quantity", count.toString());
    formData.append("estimateProductVariations", JSON.stringify(selectedVariations));

    if (file && file[0]) formData.append("clientFile", file[0]);
    createEstimate(formData);
  }

  useEffect(() => {
    const handleEsc = (event: any) => {
      if (event.keyCode === 27) setIsModalOpen(false);
    };
    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    setSelectedVariations([]);
    setCount(selectedProduct?.minimumToEstimate || 1);
    form.reset();
  }, [selectedProduct]);

  useEffect(() => {
    if (!isModalOpen) {
      if (Object.keys(form.getValues()).length === 0) return;
      localStorage.setItem("estimateData", JSON.stringify(form.getValues()));
    }
    const estimateFromLocalStorage = localStorage.getItem("estimateData");
    if (!estimateFromLocalStorage) return;
    const { name, email, phone, companyName, companySegment } = JSON.parse(estimateFromLocalStorage);
    form.resetField("file");
    form.setValue("name", name);
    form.setValue("email", email);
    form.setValue("phone", phone);
    form.setValue("companyName", companyName);
    form.setValue("companySegment", companySegment);
    // form.setValue("message", message);
  }, [isModalOpen]);

  function toggleSelectedVariation(variationId: number, variationOptionId: number) {
    setSelectedVariations((prevVariations: SelectedVariations[]) => {
      const exists = prevVariations.find((v) => v.variationId === variationId);
      if (exists) {
        const clean = prevVariations.filter((v) => !(v.variationId === exists.variationId));

        if (variationOptionId !== exists.variationOptionId) {
          return [
            ...clean,
            {
              variationId,
              variationOptionId,
            },
          ];
        }

        return clean;
      }
      // If the variation-option pair doesn't exist, add it
      return [
        ...prevVariations,
        {
          variationId,
          variationOptionId,
        },
      ];
    });
  }
  return (
    <EstimateModalContext.Provider
      value={{
        selectedProduct,
        setSelectedProduct,
        isModalOpen,
        setIsModalOpen,
        selectedVariations,
        setSelectedVariations,
        toggleSelectedVariation,
        submitEstimate,
        form,
        count,
        setCount,
        minimumToEstimate: selectedProduct?.minimumToEstimate || 1,
        isBeingSubmited,
      }}
    >
      <EstimateModal />
      {children}
    </EstimateModalContext.Provider>
  );
}

export function useEstimateModalContext() {
  return useContext(EstimateModalContext);
}

export default EstimateModalContextProvider;
