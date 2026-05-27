import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
});

export const getProducts = async (searchProduct) => {
    if(searchProduct === null) {
        const response = await api.get("/products");
        return response.data.products;
    } else{
        const response = await api.get(`/products/search?q=${searchProduct}`)
        return response.data.products;
    }
    
};

export const getSingleProduct = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

export const getCategories = async() =>{
    const response = await api.get('/products/categories')
    return response.data
}

export default api;