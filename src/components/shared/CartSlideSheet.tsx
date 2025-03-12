"use client";
import { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import Link from 'next/link';

export default function CartSlidesheet({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  if (!open) return null;

  const products = [
    {
      id: 1,
      name: 'Shalimar',
      price: 'Rs. 4,369',
      image: 'https://elyscents.pk/cdn/shop/files/royaloud.jpg?v=1720595888&width=360',
      quantity: 1
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={() => setOpen(false)}
      />
      
      <div className="fixed inset-y-0 right-0 max-w-md w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="px-4 py-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium">Shopping Cart</h2>
              <button onClick={() => setOpen(false)} className="p-2">
                <FaTimes className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-4 py-6">
            {products.map((product) => (
              <div key={product.id} className="flex py-6 border-b">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div className="flex justify-between text-base font-medium">
                    <h3>{product.name}</h3>
                    <p className="ml-4">{product.price}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border rounded-md">
                      <button className="px-3 py-1 hover:bg-gray-100">-</button>
                      <span className="px-3 py-1 border-x">{product.quantity}</span>
                      <button className="px-3 py-1 hover:bg-gray-100">+</button>
                    </div>
                    <button className="text-red-600 hover:text-red-500">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 px-4 py-6">
            <div className="flex justify-between text-base font-medium">
              <p>Subtotal</p>
              <p>Rs. 4,369</p>
            </div>
            <p className="mt-1 text-sm text-gray-500">Shipping calculated at checkout</p>
            
            <Link 
              href="/checkout"
              className="mt-6 flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white hover:bg-black/90"
            >
              Checkout
            </Link>
            
            <button
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-center w-full text-sm text-gray-500 hover:text-gray-600"
            >
              Continue Shopping
              <span className="ml-1">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
