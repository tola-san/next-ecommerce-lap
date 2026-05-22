import api from "@/lib/axios";

export const getProducts = async () => {
  return await api("/products");
};

export const getProductsByCategory = async (category) => {
  return await api(`/products/category/${category}`);
};

export const getProductById = async (id) => {
  return await api(`/products/${id}`);
};

export const getCategories = async () => {
  return await api("/products/categories");
};