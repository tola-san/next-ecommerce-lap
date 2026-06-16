// src/services/banner.service.js

import axios from "axios";

const pexelsApi = axios.create({
  baseURL: "https://api.pexels.com/v1",
  headers: {
    Authorization: process.env.PIXEL_API_KEY, // Ensure this is set in your .env file
  },
});

export const getBannerImages = async (query = "fashion") => {
  const response = await pexelsApi.get("/search", {
    params: {
      query,
      per_page: 5,
      orientation: "landscape",
    },
  });

   console.log("Pexels API Response:", response.data); // Debugging log

  return response.data.photos;
};