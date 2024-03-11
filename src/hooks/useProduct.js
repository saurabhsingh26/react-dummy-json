import { useState, useEffect } from "react";
const useProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const results = await response.json();
    setProducts(results?.products);
  };

  return products;
};

export default useProduct;
