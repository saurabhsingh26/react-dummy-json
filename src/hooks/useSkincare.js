import { useState, useEffect } from "react";
const useSkincare = () => {
  const [skincare, setSkincare] = useState([]);
  useEffect(() => {
    fetchSkincare();
  }, []);
  const fetchSkincare = async () => {
    const response = await fetch(
      "https://dummyjson.com/products/category/skincare"
    );
    const results = await response.json();
    setSkincare(results?.products);
  };

  return skincare;
};

export default useSkincare;
