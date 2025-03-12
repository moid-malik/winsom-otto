import Image from "next/image";
import Link from "next/link";

type Item = {
  id: number;
  name: string;
  category: string;
  slug: string;
  images: string[];
  description: string;
  price: number;
  discount: number;
  size: string;
  reviews: number;
  notes: string;
  stock: number;
  sales: number;
};

const ProductCard = ({ item }: { item: Item }) => {
  const discountAmount = (item.price * item.discount) / 100;
  const discountedPrice = item.price - discountAmount;

  return (
    <Link
      href={`/item/${item.slug}`}
      className="relative flex flex-col py-3 px-2 w-[180px] sm:w-[220px] lg:w-[280px] lg:max-w-[280px] uppercase"
    >
      <div>
        <Image
          src={item.images[0]}
          width={250}
          height={150}
          alt={item.name}
          className="mx-auto"
        />
      </div>
      <span className={`${item.discount > 0 ? "absolute top-0 right-0 bg-black text-white px-[7px] text-xs py-[4px] font-semibold tracking-[.5px]" : "hidden"}`}>{item.stock > 0 ? "SALE" : "OUT OF STOCK"}</span>
      <p className="mx-auto tracking-[0.17em] font-normal py-2 text-[14px] sm:text-[16px] text-center">
        {item.name}
      </p>
      <div className="mx-auto tracking-[0.13em] font-normal flex flex-col flex-wrap sm:flex-nowrap items-center justify-center gap-1 text-[12px] sm:text-[14px]">
        <span className={`${item.discount > 0 ? "text-[#000] line-through whitespace-nowrap" : "hidden"}`}>
          Rs.{item.price.toFixed(2)}
        </span>
        <span className="text-[#000] font-semibold whitespace-nowrap">
          Rs.{discountedPrice.toFixed(2)}
        </span>
        <span className={`${item.discount > 0 ? "text-red-500 whitespace-nowrap" : "hidden"}`}>
          Save Rs.{discountAmount.toFixed(2)}
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
