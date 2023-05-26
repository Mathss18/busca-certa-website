"use client";

import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchContext } from "@/modules/search/Search.context";
import useIsMobile from "@/hooks/useIsMobile.hook";

function SearchNavbar() {
  const { searchTerm, search } = useSearchContext();
  const [term, setTerm] = useState(searchTerm);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!searchTerm) return;
    setTerm(searchTerm);
  }, [searchTerm]);

  return (
    <div className="bg-base-100 flex items-center pt-2">
      <div className={`flex justify-start min-w-[84px] pl-4 ${!isMobile && "w-[33%]"}`}>
        <Link href="/">
          {isMobile ? (
            <Image src="/assets/images/logos/logo.svg" alt="logo" width={84} height={35} />
          ) : (
            <Image src="/assets/images/logos/logo-linha.svg" alt="logo" width={168} height={35} />
          )}
        </Link>
      </div>
      <div className="flex w-5/6 max-w-[600px]">
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          type="text"
          placeholder="Pesquise..."
          className="input input-bordered w-full"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              search(term);
            }
          }}
        />
        <button className="btn btn-ghost btn-circle" onClick={() => search(term)}>
          <div className="indicator">
            <FaSearch />
          </div>
        </button>
      </div>
    </div>
  );
}

export default SearchNavbar;
