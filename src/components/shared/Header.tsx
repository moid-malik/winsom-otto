"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SearchBar from "./SearchBar";
import CartSlidesheet from "./CartSlideSheet";
import { FaBars, FaTimes } from "react-icons/fa";
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="w-full uppercase border-b border-gray-200">
        {/* TOP BLACK BAR */}
        <div className="w-full py-3 flex items-center justify-center text-center lg:text-sm uppercase font-semibold bg-black text-white text-xs sm:text-sm md:text-base tracking-[.2rem] px-4">
          <p>14 Days Return Policy | Pasand Na Aye To Wapas</p>
        </div>

        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between px-4 py-3">
          <button onClick={() => setMobileMenuOpen(true)} className="p-2">
            <FaBars className="h-6 w-6" />
          </button>

          <Link
              className={`${playfair.className} text-2xl py-4 px-6 tracking-wider font-medium group bg-black text-white hover:bg-black/90 transition-colors`}
              href={"/"}
            >
              WINSOM OTTO
            </Link>


          <div className="flex items-center gap-4">
            <button onClick={() => setSearchOpen(true)}>
              <Image src={"/search.png"} height={20} width={20} alt={"search"} />
            </button>
            <button onClick={() => setCartOpen(true)}>
              <svg
                className="h-6 w-6"
                viewBox="0 0 64 64"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
              >
                <path d="M11.375 17.863h41.25v36.75h-41.25z"></path>
                <path d="M22.25 18c0-7.105 4.35-9 9.75-9s9.75 1.895 9.75 9"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Slidesheet */}
        <div
          className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
        >
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div
            className={`absolute top-0 left-0 w-4/5 max-w-sm h-full bg-white transform transition-transform duration-300 ease-out ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
              }`}
          >
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium">Menu</h2>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2">
                  <FaTimes className="h-6 w-6" />
                </button>
              </div>
            </div>

            <nav className="px-4 py-6 space-y-4">
              <Link
                href="/"
                className="block py-2 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <div className="py-2">
                <p className="text-lg mb-2">Collections</p>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/collections/new-arrival"
                    className="block py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    New Arrivals
                  </Link>
                  <Link
                    href="/collections/best-seller"
                    className="block py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Best Seller
                  </Link>
                  <Link
                    href="/collections/for-men"
                    className="block py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    For Men
                  </Link>
                  <Link
                    href="/collections/for-women"
                    className="block py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    For Women
                  </Link>
                </div>
              </div>
              <Link
                href="/about"
                className="block py-2 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="block py-2 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link
                href="/account"
                className="block py-2 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Account
              </Link>
            </nav>
          </div>
        </div>

        {/* Desktop NAVBAR */}
        <div className="w-full lg:flex hidden items-center py-8 px-12 justify-between">
          {/* LEFT - Search Icon */}
          <div>
            <button onClick={() => setSearchOpen(!searchOpen)}>
              <Image src={"/search.png"} height={23} width={23} alt={"search"} />
            </button>
          </div>

          {/* CENTER NAVIGATION */}
          <div className="flex items-center gap-12 leading-none tracking-[0.18rem] text-[0.80rem] font-[400]">
            <Link href={"/"} className="relative group">
              <p className="relative text-black py-2">
                Home
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </p>
            </Link>

            {/* DROPDOWN MENU */}
            <div
              className="relative inline-block"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Link href="/collections/all" className="relative group">
                <div className="flex items-center gap-2">
                  <p className="py-2">All Collections</p>
                  <div className="w-[0.7rem]">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      role="presentation"
                      className="icon icon-chevron-down"
                      viewBox="0 0 28 16"
                    >
                      <path
                        d="m1.57 1.59 12.76 12.77L27.1 1.59"
                        strokeWidth="2"
                        stroke="#000"
                        fill="none"
                      ></path>
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Dropdown List */}
              <div
                className={`absolute left-0 mt-0 px-3 py-3 bg-white z-[35] shadow-md overflow-hidden transition-all duration-300 ${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                  }`}
              >
                <ul className="w-48 py-2">
                  <li>
                    <Link href="/collections/new-arrival" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">
                      New Arrivals
                    </Link>
                  </li>
                  <li>
                    <Link href="/collections/best-seller" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">
                      Best Seller
                    </Link>
                  </li>
                  <li>
                    <Link href="/collections/for-men" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">
                      For Men
                    </Link>
                  </li>
                  <li>
                    <Link href="/collections/for-women" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition">
                      For Women
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* LOGO */}
            <Link
              className={`${playfair.className} text-2xl py-4 px-6 tracking-wider font-medium group bg-black text-white hover:bg-black/90 transition-colors`}
              href={"/"}
            >
              WINSOM OTTO
            </Link>

            <Link href={"/about"} className="relative group">
              <p className="relative py-2">
                About us
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </p>
            </Link>

            <Link href={"/contact"} className="relative group">
              <p className="relative py-2">
                Contact us
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </p>
            </Link>
          </div>

          {/* RIGHT SIDE - Account & Cart */}
          <div className="flex gap-3 items-center">
            <Link href="/account/orders">
              <div className="min-w-[1.6rem]">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  role="presentation"
                  className="icon icon-user"
                  viewBox="0 0 64 64"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                >
                  <title>Account</title>
                  <path d="M35 39.84v-2.53c3.3-1.91 6-6.66 6-11.41 0-7.63 0-13.82-9-13.82s-9 6.19-9 13.82c0 4.75 2.7 9.51 6 11.41v2.53c-10.18.85-18 6-18 12.16h42c0-6.19-7.82-11.31-18-12.16Z"></path>
                </svg>
              </div>
            </Link>

            <button onClick={() => setCartOpen(true)}>
              <div className="min-w-[1.6rem]">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  role="presentation"
                  className="icon icon-bag-minimal"
                  viewBox="0 0 64 64"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                >
                  <title>Cart</title>
                  <path d="M11.375 17.863h41.25v36.75h-41.25z"></path>
                  <path d="M22.25 18c0-7.105 4.35-9 9.75-9s9.75 1.895 9.75 9"></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
      <SearchBar open={searchOpen} onClose={() => setSearchOpen(false)} />
      <CartSlidesheet open={cartOpen} setOpen={setCartOpen} />
    </>
  );
};

export default Header;
