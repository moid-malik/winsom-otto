import Banner from "@/components/shared/Banner";
import Categories from "@/components/Home/Categories";
import Products from "@/components/shared/Products";

export default function Home() {
  return (
    <div className="">
      <Banner/>
      <Categories/>
      <Products category="new-arrival"/>
      <Products category="best-seller"/>
      <Products category="for-men"/>
    </div>
  );
}
