"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getCategories } from "../services/api";


const Categories = () => {
    const [categories , setCategories] = useState([])

    useEffect(()=>{
        fetchCategories()
    },[])

    const fetchCategories = async() =>{
        const data = await getCategories()
        try{
            setCategories(data)
        } catch(error) {
            console.log(error)
        }
    }
  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
        <h1 className="text-3xl font-bold mb-5 ">Categories</h1>
      <div className="flex flex-wrap items-center gap-4">

        {categories.map((category,index) => (
          <Link
            key={index}
            href={`/product/category/${category.slug}`}
            className="w-30 h-20 rounded-md flex flex-wrap items-center text-center justify-center bg-white shadow hover:bg-green-600 hover:text-white transition font-bold capitalize"
          >
            {category.name}
          </Link>
        ))}

      </div>

    </div>
  );
};

export default Categories;