import FloatingBackButton from "../../../components/FloatingBackButton";
import Navbar from "../../../components/Navbar";
import ProductCard from "../../../components/ProductCard";
import axios from "axios";

const CategoryProductsPage = async ({ params }) => {

  const { slug } = await params;

  // API Call
  const response = await axios.get(
    `https://dummyjson.com/products/category/${slug}`
  );

  const products = response.data.products;

  return (
    <div className="bg-[#f7f8f9] min-h-screen text-black">

      {/* Navbar */}
      <Navbar />
      <FloatingBackButton/>

      {/* Category Heading */}
      <div className="max-w-7xl mx-auto px-4 py-8">

        <h1 className="text-4xl font-bold capitalize mb-8">
          {slug.replaceAll("-", " ")}
        </h1>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

    </div>
  );
};

export default CategoryProductsPage;