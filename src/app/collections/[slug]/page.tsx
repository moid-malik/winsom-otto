import Banner from "@/components/shared/Banner";
import Products from "@/components/shared/Products";

const page = async ({ params }: { params: { slug: string } }) => {
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
  
export default page;  