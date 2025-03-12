"use client";

import { useState } from "react";
import Link from "next/link";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex min-h-screen">
        {/* Mobile Menu Button */}
        <button
          className="absolute top-4 left-4 md:hidden p-2 text-gray-600"
          onClick={() => setSidebarOpen(true)}
        >
          {/* Menu Icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        {/* Sidebar - Desktop */}
        <div className="hidden md:flex md:w-64 md:flex-col bg-white border-r">
          <SidebarContent />
        </div>

        {/* Sidebar - Mobile (Slide-out) */}
        <div
          className={`fixed inset-y-0 left-0 z-50 w-64 bg-white p-4 shadow-lg transform transition-transform duration-300 ease-in-out
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
        >
          {/* Close Button */}
          <button className="absolute top-4 right-4" onClick={() => setSidebarOpen(false)}>
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <SidebarContent />
        </div>

        {/* Overlay (when sidebar is open) */}
        {sidebarOpen && (
          <div className="fixed inset-0 bg-black/30 md:hidden" onClick={() => setSidebarOpen(false)}></div>
        )}

        {/* Main Content */}
        <div className="flex flex-col flex-1">
          <main className="flex-1 py-6">{children}</main>
        </div>
      </div>
    </div>
  );
}

// Sidebar Content Component (Reused in Desktop & Mobile)
function SidebarContent() {
  return (
    <div className="flex flex-col flex-grow pt-5 overflow-y-auto">
      <nav className="flex-1 px-2 mt-5 space-y-1">
        <Link href="/account/orders" className="block px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100">
          Orders
        </Link>
        <Link href="/account/profile" className="block px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100">
          Profile
        </Link>
        <button className="w-full px-3 py-2 text-sm font-medium text-red-600 rounded-md hover:bg-red-50">
          Sign Out
        </button>
      </nav>
    </div>
  );
}
