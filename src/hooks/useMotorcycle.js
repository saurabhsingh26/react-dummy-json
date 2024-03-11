import { useState, useEffect } from "react";
const useMotorcycle = () => {
  const [motorcycle, setMotorcycle] = useState([]);
  useEffect(() => {
    fetchMotorcycle();
  }, []);
  const fetchMotorcycle = async () => {
    const response = await fetch(
      "https://dummyjson.com/products/category/motorcycle"
    );
    const results = await response.json();
    setMotorcycle(results?.products);
  };

  return motorcycle;
};

export default useMotorcycle;
