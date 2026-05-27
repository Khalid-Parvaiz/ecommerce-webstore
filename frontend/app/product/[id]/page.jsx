import FloatingBackButton from "../../components/FloatingBackButton";
import Navbar from "../../components/Navbar";
import { getSingleProduct } from "../../services/api";

const ProductDetails = async ({ params }) => {

  const { id } = await params;

  const product = await getSingleProduct(id);

  return (
    <div className="bg-[#f7f8f9] min-h-screen text-black">
      <Navbar />
      <FloatingBackButton/>

      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">

        <div className="bg-white rounded-2xl overflow-hidden shadow">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-[500px] object-contain"
          />
        </div>

        <div>
          <div className="bg-white rounded-2xl shadow p-6">

            <h1 className="text-4xl font-bold text-green-700 mb-4">
              ${product.price}
            </h1>

            <h2 className="text-2xl font-semibold mb-4">
              {product.title}
            </h2>

            <p className="text-gray-600 leading-7">
              {product.description}
            </p>

            <div className="mt-6 space-y-3">
              <p>
                <span className="font-bold">Brand:</span> {product.brand ? product.brand : 'Local'}
              </p>

              <p>
                <span className="font-bold">Category:</span> {product.category}
              </p>

              <p>
                <span className="font-bold">Rating:</span> {product.rating}
              </p>
            </div>

            <button className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl text-lg font-semibold">
              Chat with Seller
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;