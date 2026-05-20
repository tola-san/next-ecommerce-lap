import api from "@/lib/axios";

/*
 GET CART
*/
export const getCartItems = async () => {

  const response = await api.get("/carts/1");

  return response.data;
};

/*
 ADD TO CART
*/
export const addToCart = async (productId, quantity) => {

  const response = await api.post("/carts", {
    userId: 1,
    date: new Date(),
    products: [
      {
        productId,
        quantity,
      },
    ],
  });

  return response.data;
};

/*
 UPDATE CART
*/
export const updateCartItem = async (cartId, productId, quantity) => {

  const response = await api.put(`/carts/${cartId}`, {
    userId: 1,
    date: new Date(),
    products: [
      {
        productId,
        quantity,
      },
    ],
  });

  return response.data;
};

/*
 DELETE CART
*/
export const removeCartItem = async (cartId) => {

  const response = await api.delete(`/carts/${cartId}`);

  return response.data;
};