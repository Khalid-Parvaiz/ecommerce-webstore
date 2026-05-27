import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden cursor-pointer">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-56 object-contain"
        />

        <div className="p-4">
          <h2 className="text-xl font-bold text-green-700 mb-2">
            ${product.price}
          </h2>

          <h3 className="font-semibold line-clamp-1">
            {product.title}
          </h3>

          <p className="text-gray-500 text-sm mt-2 line-clamp-2">
            {product.description}
          </p>

          <div className="mt-4 flex justify-between text-sm text-gray-400">
            <span>{product.brand}</span>
            <span>{product.category}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;