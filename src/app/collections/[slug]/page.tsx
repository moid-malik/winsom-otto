import Banner from "@/components/shared/Banner";
import Products from "@/components/shared/Products";

interface Props {
  params: Promise<{
    slug: string;
  }>
}

const Page = async ({ params }: Props) => {
  const { slug } = await params;
  
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
