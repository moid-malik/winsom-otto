import { use } from "react";
import data from "@/data/data.json";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = data.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Product Image */}
        <div className="aspect-square relative overflow-hidden rounded-lg shadow-lg">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            priority
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <h1 className={`${playfair.className} text-4xl font-light tracking-wide text-gray-900`}>
            {product.name}
          </h1>

          <div className="mt-6 flex items-baseline">
            <p className={`${playfair.className} text-3xl tracking-wider text-gray-900`}>
              Rs. {product.price.toLocaleString()}
            </p>
            {product.discount > 0 && (
              <span className="ml-4 text-sm font-light text-red-600 tracking-wider">
                {product.discount}% OFF
              </span>
            )}
          </div>

          {/* Stock Status */}
          <div className="mt-6">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs tracking-wider ${
              product.stock > 0 ? 'bg-emerald-50 text-emerald-900' : 'bg-red-50 text-red-900'
            }`}>
              {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>

          {/* Description */}
          <div className="mt-8">
            <h3 className={`${playfair.className} text-lg font-medium text-gray-900`}>Description</h3>
            <p className="mt-3 text-base text-gray-600 leading-relaxed tracking-wide">
              {product.description}
            </p>
          </div>

          {/* Notes */}
          <div className="mt-8">
            <h3 className={`${playfair.className} text-lg font-medium text-gray-900`}>Notes</h3>
            <p className="mt-3 text-base text-gray-600 leading-relaxed tracking-wide">
              {product.notes}
            </p>
          </div>

          {/* Additional Info */}
          <div className="mt-10 pt-8 border-t border-gray-100">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <span className="block text-sm text-gray-500 mb-1">Size</span>
                <span className="text-sm font-medium text-gray-900">{product.size}</span>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <span className="block text-sm text-gray-500 mb-1">Rating</span>
                <span className="text-sm font-medium text-gray-900">{product.reviews} / 5</span>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <span className="block text-sm text-gray-500 mb-1">Sold</span>
                <span className="text-sm font-medium text-gray-900">{product.sales}+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
