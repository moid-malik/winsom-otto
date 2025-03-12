import Products from "@/components/shared/Products";
import Banner from "@/components/shared/Banner";

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  const query = searchParams.q || "";

  return (
    <>
      <Banner />
      <div className="mt-12 w-full">
        <Products category="all" searchQuery={query} />
      </div>
    </>
  );
}
