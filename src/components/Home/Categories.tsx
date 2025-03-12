const Categories = () => {
  const categories = [
    {
      name: "New Arrivals",
      image: "https://cdn4.beautinow.com/wp-content/uploads/2023/08/The_Ultimate_Guide_to_Perfume_Photography_aa48d40f4ef542b192ee69c49e911362.jpgv=1691390651",
      link: "/collections/new-arrival",
    },
    {
      name: "For Women",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtTuzmuXHxpYrb6KTDAHMCBzGzX310GNFToQ&s",
      link: "/collections/for-women",
    },
    {
      name: "For Men",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUrSYqvmtD4XqFc4AXrfMKSjefqR2ELqWO0A&s",
      link: "/collections/for-men",
    },
    {
      name: "View All",
      image: "https://cdn4.beautinow.com/wp-content/uploads/2023/08/The_Ultimate_Guide_to_Perfume_Photography_aa48d40f4ef542b192ee69c49e911362.jpgv=1691390651",
      link: "/collections/all",
    },
  ];

  return (
    <>
    <div className="p-4">
    <h1 className="text-4xl mx-auto text-center py-6 leading-none">Our Product Collections</h1>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
        {categories.map((category, index) => (
          <a
            key={index}
            href={category.link}
            className="relative group overflow-hidden"
          >
            {/* Image */}
            <div className="w-full h-28 md:h-64">
              <img
                src={category.image}
                alt={category.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300"></div>

            {/* Category Name in Center */}
            <span className="absolute inset-0 flex items-center justify-center text-black text-xs md:text-xl font-normal">
              <p className="bg-white px-2 py-1 md:px-4 md:py-1 tracking-widest text-[0.75rem] md:text-[0.970rem] uppercase">
                {category.name}
              </p>
            </span>
          </a>
        ))}
      </div>
    </div>
    </>
  );
};

export default Categories;
