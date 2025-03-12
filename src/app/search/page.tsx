"use client";
import { useSearchParams } from "next/navigation";
import Products from "@/components/shared/Products";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-light tracking-tight text-gray-900 sm:text-4xl mb-4">
            Search Results
          </h1>
          <p className="text-xl text-gray-500 font-light tracking-wider">
            {query ? `Showing results for "${query}"` : "All Products"}
          </p>
        </div>
        <Products category="all" searchQuery={query} />
      </div>
    </div>
  );
};

export default SearchPage;
