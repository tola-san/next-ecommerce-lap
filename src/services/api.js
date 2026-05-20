import api from "@/lib/axios";

export const getProducts = async () => {
  const response = await api.get("/products");
  return response.data;
};


export const getProductsByCategory = async (category) => {
  const response = await api.get(`/products/category/${category}`);
  return response.data;
}



export const getProductById = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
}

export const getCategories = async () => {
  const response = await api.get("/products/categories");
  return response.data;
};