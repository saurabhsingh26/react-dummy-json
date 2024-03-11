import { useState, useEffect } from "react";
const useLighting = () => {
  const [lighting, setLighting] = useState([]);
  useEffect(() => {
    fetchLighting();
  }, []);
  const fetchLighting = async () => {
    const response = await fetch(
      "https://dummyjson.com/products/category/lighting"
    );
    const results = await response.json();
    setLighting(results?.products);
  };

  return lighting;
};

export default useLighting;
