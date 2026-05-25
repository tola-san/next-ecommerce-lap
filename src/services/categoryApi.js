import api from "@/lib/axios";


export const getCategories = async () => {

  const response = await api("/products/categories");   
  console.log("Categories API Response:", response); // Debug log
  return response;

};