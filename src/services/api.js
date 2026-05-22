import api from "@/lib/axios";

export const getProducts = async () => {
  const data = await api("/products?limit=8");

  return data.products;
};

export const getProductsByCategory = async (category) => {
  const data = await api(`/products/category/${category}`);

  return data.products;
};

export const getProductById = async (id) => {
  return await api(`/products/${id}`);
};

export const getCategories = async () => {
  return await api("/products/categories");
};