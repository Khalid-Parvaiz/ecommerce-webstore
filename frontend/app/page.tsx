import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Categories from "./components/Categories"
 
export default function Home() {
  return (
    <div className="bg-[#f7f8f9] min-h-screen text-black">
      <Navbar />
      {/* <Categories/> */}
      <Hero />
      <Categories />
      <Products />
    </div>
  );
}