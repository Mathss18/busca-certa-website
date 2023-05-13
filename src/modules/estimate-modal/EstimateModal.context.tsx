"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import EstimateModal from "@/components/estimate-modal/EstimateModal";
import { SelectedProduct, SelectedVariations } from "./types";

type EstimateModalContextType = {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  selectedProduct: SelectedProduct | null;
  setSelectedProduct: (value: SelectedProduct) => void;
  selectedVariations: SelectedVariations[];
  setSelectedVariations: (value: SelectedVariations[]) => void;
  toggleSelectedVariation: (variationId: number, optionId: number) => void;
  submitEstimate: () => void;
  form: any;
  count: number;
  increment: () => void;
  decrement: () => void;
  changeCount: (e: number) => void;
};

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
  increment: () => {},
  decrement: () => {},
  changeCount: () => {},
} as EstimateModalContextType);

function EstimateModalContextProvider({ children }: { children: React.ReactNode }) {
  const [selectedVariations, setSelectedVariations] = useState<SelectedVariations[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<SelectedProduct | null>(null);
  const [count, setCount] = useState(1);
  const form = useForm();

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }
  function decrement() {
    if (count <= 1) return;
    setCount((prevCount) => prevCount - 1);
  }
  function changeCount(e: any) {
    const { value } = e.target;
    setCount(value);
  }

  function submitEstimate() {
    if (form.formState.errors) return;
    console.log({ ...form.getValues(), quantity: count, variations: selectedVariations });
  }

  useEffect(() => {
    const handleEsc = (event: any) => {
      if (event.keyCode === 27) setIsModalOpen(false);
    };
    window.addEventListener("keydown", handleEsc);

    // Clean up the effect
    return () => window.removeEventListener("keydown", handleEsc);
  }, []); // Empty array ensures effect is only run on mount and unmount

  useEffect(() => {
    setSelectedVariations([]);
    setCount(1);
    form.reset();
  }, [selectedProduct]);

  useEffect(() => {
    if (!isModalOpen) {
      console.log("aqui");
      localStorage.setItem("estimateData", JSON.stringify(form.getValues()));
    }
    const estimateFromLocalStorage = localStorage.getItem("estimateData");
    if (!estimateFromLocalStorage) return;
    const { name, email, phone, companyName, companySegment } = JSON.parse(estimateFromLocalStorage);
    form.setValue("name", name);
    form.setValue("email", email);
    form.setValue("phone", phone);
    form.setValue("companyName", companyName);
    form.setValue("companySegment", companySegment);
  }, [isModalOpen]);

  function toggleSelectedVariation(variationId: number, optionId: number) {
    setSelectedVariations((prevVariations: SelectedVariations[]) => {
      const exists = prevVariations.find((v) => v.variationId === variationId);
      if (exists) {
        const clean = prevVariations.filter((v) => !(v.variationId === exists.variationId));

        if (optionId !== exists.optionId) {
          return [
            ...clean,
            {
              variationId,
              optionId,
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
          optionId,
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
        increment,
        decrement,
        changeCount,
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
