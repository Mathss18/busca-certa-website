"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "@/slices/searchSlice";
import { RootState } from "@/store/store";
import Filters from "./components/Filters/Filters";

export default function Search() {
  const searchTerm = useSelector((state: RootState) => state.searchTerm.term);
  const params = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const searchTermInUrl = params.get("term");
    if (searchTermInUrl) {
      dispatch(setSearchTerm(searchTermInUrl));
    }
  }, []);

  const products = [
    {
      id: 1,
      name: "Product 1",
      image:
        "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
      price: "10.00",
    },
    {
      id: 2,
      name: "Product 2",
      image:
        "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
      price: "15.00",
    },
    {
      id: 3,
      name: "Product 3",
      image:
        "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
      price: "20.00",
    },
    {
      id: 4,
      name: "Product 4",
      image:
        "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
      price: "25.00",
    },
  ];

  return (
    <>
      <div className="bg-red-200 h-24 flex flex-col">
        <h1>Top content</h1>
      </div>
      <div className="bg-red-200 h-screen flex flex-row">
        <Filters />
        <div className="bg-blue-200 h-screen w-4/5 flex flex-col items-center">
          <h1>Search Term, {searchTerm}</h1>
          <div className="grid grid-cols-3 gap-4 w-full p-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-md p-4 rounded-lg"
              >
                <img
                  className="w-full h-48 object-cover mb-4 rounded-md"
                  src={product.image}
                  alt={product.name}
                />
                <h2 className="font-semibold text-xl mb-2">{product.name}</h2>
                <p className="font-bold text-lg">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
