"use client";

import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { RootState } from "@/store/store";
import { setSearchTerm } from "@/slices/searchSlice";

function SearchNavbar() {
  const searchTerm = useSelector((state: RootState) => state.searchTerm.term);
  const [term, setTerm] = useState(searchTerm);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!searchTerm) return;
    setTerm(searchTerm);
  }, [searchTerm]);

  function search() {
    if (term === "") return;

    dispatch(setSearchTerm(term));
    router.push(`/search?term=${encodeURIComponent(term)}`);
  }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link className="btn btn-ghost normal-case text-xl" href="/">
          Facilite
        </Link>
      </div>
      <div className="navbar-center w-96">
        <div className="flex">
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-96"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                search();
              }
            }}
          />
          <button className="btn btn-ghost btn-circle" onClick={search}>
            <div className="indicator">
              <FaSearch />
            </div>
          </button>
        </div>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default SearchNavbar;
