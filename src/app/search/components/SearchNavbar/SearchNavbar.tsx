"use client";

import Link from "next/link";
import { FaSearch, FaBell } from "react-icons/fa";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchContext } from "@/modules/search/Search.context";

function SearchNavbar() {
  const { searchTerm, search } = useSearchContext();
  const [term, setTerm] = useState(searchTerm);

  useEffect(() => {
    if (!searchTerm) return;
    setTerm(searchTerm);
  }, [searchTerm]);

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link href="/">
          <Image
            src="/assets/images/logos/logo.png"
            alt="logo"
            width={168}
            height={35}
          />
        </Link>
      </div>
      <div className="navbar-center w-96">
        <div className="flex">
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            type="text"
            placeholder="Pesquise..."
            className="input input-bordered w-96"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                search(term);
              }
            }}
          />
          <button
            className="btn btn-ghost btn-circle"
            onClick={() => search(term)}
          >
            <div className="indicator">
              <FaSearch />
            </div>
          </button>
        </div>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <FaBell />
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default SearchNavbar;
