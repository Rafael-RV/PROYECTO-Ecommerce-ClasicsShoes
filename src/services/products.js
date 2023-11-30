// services/products.js

import { useState, useEffect } from "react";

const API_URL = "https://clasics-shoes-api.onrender.com/v1/products";

export const useApiProducts = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const result = await response.json();
        setData(result.detail);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return { data };
};
