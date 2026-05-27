"use client";

import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchProduct , setSearchProduct] = useState(null)

  useEffect(() => {
    fetchProducts();
  },[searchProduct]);

  const fetchProducts = async () => {
    try {
      const data = await getProducts(searchProduct);
      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-20 text-2xl font-bold">
        Loading...
      </div>
    );
  }
  // if(products.length === 0){
  //   return(
  //     <div className="text-center text-red py-20 text-2xl font-bold">
  //       Product Not Found
  //     </div>
  //     ) 
  // }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-3xl font-bold">Our Products</h2>
        <input type="search"
        onChange={(e)=>setSearchProduct(e.target.value)}
        placeholder='search product'
        className="w-70 h-5 p-5 rounded-lg border" />
      </div>
    {products.length === 0 ? <div className="text-center text-red-500 py-20 text-2xl font-bold">
        Product Not Found
      </div>:''}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;