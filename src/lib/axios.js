const BASE_URL = "https://dummyjson.com";

const api = async (endpoint, options = {}) => {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
  });

  if (!res.ok) {
    throw new Error(`HTTP Error: ${res.status}`);
  }

  return res.json();
};

export default api;