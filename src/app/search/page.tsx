import Products from "@/components/shared/Products";
import Banner from "@/components/shared/Banner";

interface SearchPageProps {
  searchParams: Promise<{
    q: string;
  }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const query = q || "";

  return (
    <>
      <Banner />
      <div className="mt-12 w-full">
        <Products category="all" searchQuery={query} />
      </div>
    </>
  );
}
