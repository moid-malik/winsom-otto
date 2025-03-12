import Banner from "@/components/shared/Banner";
import Products from "@/components/shared/Products";

interface PageProps {
  params: {
    slug: string;
  }
}

const Page = ({ params }: PageProps) => {
  const { slug } = params;
  
  return (
    <>
      <Banner />
      <div className="mt-12 w-full">
        <Products category={slug} />
      </div>
    </>
  );
};

export default Page;
