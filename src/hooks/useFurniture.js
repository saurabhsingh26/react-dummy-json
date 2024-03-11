import { useState, useEffect } from "react";
const useFurniture = () => {
  const [furniture, setFurniture] = useState([]);
  useEffect(() => {
    fetchFurniture();
  }, []);
  const fetchFurniture = async () => {
    const response = await fetch(
      "https://dummyjson.com/products/category/furniture"
    );
    const results = await response.json();
    setFurniture(results?.products);
  };

  return furniture;
};

export default useFurniture;
