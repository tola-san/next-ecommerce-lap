import api from "@/lib/axios";


export const getCategories = async () => {

  const response = await api("/products/categories");   
  
  return response;

};