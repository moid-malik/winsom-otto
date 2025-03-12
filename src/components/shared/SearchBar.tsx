"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import productsData from "@/data/data.json";

interface Product {
  id: number;
  name: string;
  slug: string;
  images: string[];
}

interface SearchBarProps {
  open: boolean;
  onClose: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ open, onClose }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const searchBarRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchBarRef.current && !searchBarRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, onClose]);

  useEffect(() => {
    if (query.trim()) {
      const filtered = (productsData as Product[]).filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  if (!open) return null;

  return (
    <div ref={searchBarRef} className="fixed inset-0 z-40 flex flex-col items-center justify-start p-4 bg-white/95">
      <div className="w-full max-w-2xl mt-6">
        <div className="flex items-center border border-gray-400 rounded-md p-2">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for products..."
            className="w-full p-2 outline-none"
          />
          <button onClick={onClose} className="ml-2 text-xl font-bold">
            &times;
          </button>
        </div>

        {query && (
          <div className="mt-2 bg-white shadow-lg rounded-md border border-gray-200">
            {suggestions.length > 0 ? (
              <>
                <div className="px-4 py-2 border-b text-gray-600 text-xs uppercase font-semibold">
                  Products
                </div>

                <ul>
                  {suggestions.map((product) => (
                    <li onClick={onClose} key={product.id} className="flex items-center gap-4 px-4 py-3 hover:bg-gray-100 cursor-pointer">
                      {product.images && product.images.length > 0 && (
                        <img src={product.images[0]} alt={product.name} className="w-12 h-12 object-cover rounded-md" />
                      )}
                      <Link href={`/item/${product.slug}`} className="text-gray-800">
                        {product.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="border-t px-4 py-3 text-sm text-blue-600 hover:underline cursor-pointer">
                  <Link onClick={onClose} href={`/search?q=${query}`}>Show all results for &ldquo;{query}&rdquo; →</Link>
                </div>
              </>
            ) : (
              <div className="p-4 text-gray-500 text-sm">No products found.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
