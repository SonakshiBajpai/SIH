"use client";
import { useState } from "react";

export default function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search"
      value={query}
      onChange={handleChange}
      className="w-full p-2 rounded-md border border-gray-700 bg-gray-900 text-white focus:outline-none"
    />
  );
}
