"use client";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import data from "@/data/data.json";
import { FaChevronDown, FaChevronUp, FaSlidersH, FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

interface ProductsProps {
  category: string;
  searchQuery?: string;
}

const Products = ({ category, searchQuery = "" }: ProductsProps) => {
  const validCategories = [
    "new-arrival",
    "best-seller",
    "for-men",
    "for-women",
  ];

  const [priceRange, setPriceRange] = useState(10000);
  const [inStock, setInStock] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [collectionPage, setCollectionPage] = useState(false);

  useEffect(() => {
    if (window.location.pathname.includes("/collections") || window.location.pathname.includes("/search")) {
      setCollectionPage(true);
    } else {
      setCollectionPage(false);
    }
  }, [window.location.pathname]);

  const filteredData = data
    .filter((item) => {
      const categoryMatch = category === "all" || item.category === category;
      const searchMatch = searchQuery 
        ? item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
        : true;
      return categoryMatch && searchMatch;
    })
    .filter((item) => item.price <= priceRange)
    .filter((item) => (inStock ? item.stock > 0 : true));

  const convertToNormalCase = (str: string) => {
    if (!str) return "";
    if (str === "all") return "All Products";
    return str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const displayedProducts = collectionPage ? filteredData : filteredData.slice(0, 4);

  return (
    <div className="w-full flex">
      {collectionPage && (
        <div className="hidden sticky lg:block w-2/5 p-6">
          <h2 className="text-lg font-thin mb-6 tracking-wider">Filters</h2>

          <div className="mb-6 border-b pb-4">
            <button
              className="flex justify-between w-full text-left text-md font-thin tracking-[.2px] text-gray-700"
              onClick={() => setIsAvailabilityOpen(!isAvailabilityOpen)}
            >
              Availability
              {isAvailabilityOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: isAvailabilityOpen ? "auto" : 0,
                opacity: isAvailabilityOpen ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden mt-3"
            >
              <label className="flex items-center gap-2 text-sm font-thin tracking-wider text-gray-700">
                <input
                  type="checkbox"
                  checked={inStock}
                  onChange={(e) => setInStock(e.target.checked)}
                  className="w-4 h-4 accent-black"
                />
                <span>In stock</span>
              </label>
            </motion.div>
          </div>

          <div className="mb-6">
            <button
              className="flex justify-between w-full text-left text-md font-thin tracking-[.2px] text-gray-700"
              onClick={() => setIsPriceOpen(!isPriceOpen)}
            >
              Price Range
              {isPriceOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: isPriceOpen ? "auto" : 0,
                opacity: isPriceOpen ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden mt-3 px-12"
            >
              <div className="relative w-full mt-4">
                <div
                  className="absolute w-[80px] z-[33] my-5 -top-9 transform -translate-x-1/2 px-3 py-1 bg-black text-white text-xs text-center rounded-md"
                  style={{ left: `${(priceRange / 10000) * 100}%` }}
                >
                  Rs. {priceRange}
                </div>
                <input
                  type="range"
                  min="0"
                  max="10000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full my-4 appearance-none h-1 bg-gray-300 rounded-md"
                />
              </div>
            </motion.div>
          </div>
        </div>
      )}

      <div className="w-full px-4 lg:px-8">
        <div className="lg:hidden mt-4 mb-2">
          <button
            className="flex items-center gap-2 px-4 py-2 border rounded-md shadow-sm text-sm font-thin tracking-wider text-gray-700 hover:bg-gray-100"
            onClick={() => setIsSidebarOpen(true)}
          >
            <FaSlidersH />
            <span>Filter</span>
          </button>
        </div>

        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 z-50 flex"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-1/2 max-w-xs bg-white shadow-lg p-6 h-full relative"
              >
                <button
                  className="absolute top-3 right-3 text-gray-500 hover:text-black"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <FaTimes size={18} />
                </button>

                <h2 className="text-lg font-thin mb-4 tracking-wider">Filters</h2>

                <div className="mb-6 border-b pb-4">
                  <button
                    className="flex justify-between w-full text-left text-sm font-thin tracking-wider text-gray-700"
                    onClick={() => setIsAvailabilityOpen(!isAvailabilityOpen)}
                  >
                    Availability
                    {isAvailabilityOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: isAvailabilityOpen ? "auto" : 0,
                      opacity: isAvailabilityOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden mt-3"
                  >
                    <label className="flex items-center gap-2 text-sm font-thin tracking-wider text-gray-700">
                      <input
                        type="checkbox"
                        checked={inStock}
                        onChange={(e) => setInStock(e.target.checked)}
                        className="w-4 h-4 accent-black"
                      />
                      <span>In stock</span>
                    </label>
                  </motion.div>
                </div>

                <div className="mb-6">
                  <button
                    className="flex justify-between w-full text-left text-sm font-thin tracking-wider text-gray-700"
                    onClick={() => setIsPriceOpen(!isPriceOpen)}
                  >
                    Price Range
                    {isPriceOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: isPriceOpen ? "auto" : 0,
                      opacity: isPriceOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden mt-3"
                  >
                    <div className="relative w-full mt-4">
                      <div
                        className="absolute w-[69px] z-[33] my-5 -top-9 transform -translate-x-1/2 px-3 py-1 bg-black text-white text-xs text-center rounded-md"
                        style={{ left: `${(priceRange / 4444) * 100}%` }}
                      >
                        Rs. {priceRange}
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="4444"
                        value={priceRange}
                        onChange={(e) => setPriceRange(Number(e.target.value))}
                        className="w-full my-4 appearance-none h-1 bg-black rounded-md"
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="w-full flex justify-center items-center my-8">
          <h1 className="text-3xl text-gray-900 font-light tracking-wide uppercase text-center">
            {searchQuery 
              ? ``
              : convertToNormalCase(category)}
          </h1>
        </div>

        <div className={`flex ${collectionPage ? "min-h-screen" : ""} flex-wrap justify-center lg:justify-start gap-6 py-4`}>
          {displayedProducts.length > 0 ? (
            displayedProducts.map((item, index) => <ProductCard key={index} item={item} />)
          ) : (
            <div className="w-full h-full">
              <p className="text-gray-500 font-semibold text-lg">No products found</p>
            </div>
          )}
        </div>

        {!collectionPage && (
          <div className="flex justify-center my-3">
            <Link
              href={`/collections/${category}`}
              className="text-black border border-black px-4 py-2 text-sm font-thin tracking-wide uppercase"
            >
              View All
            </Link>
          </div>
        )}
      </div>

      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          background: black;
          border: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
        }
        input[type="range"]::-moz-range-thumb {
          background: black;
          border: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
};

export default Products;
