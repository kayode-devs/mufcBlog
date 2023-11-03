"use client";

import React, { useContext } from "react";
import { StateContext } from "../utils/context";

const SearchBar = () => {
  const { state, dispatch } = useContext(StateContext);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <input
      className="text-center w-[100%]  p-1 outline-zinc-400 border-zinc-300 border-solid border-[1px] rounded-[7px]"
      type="text"
      placeholder="Search for a material..."
    />
  );
};

export default SearchBar;
