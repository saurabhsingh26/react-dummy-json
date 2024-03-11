import { useState, useEffect } from "react";
const useCart = () => {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetchCarts();
  }, []);
  const fetchCarts = async () => {
    const response = await fetch("https://dummyjson.com/carts");
    const results = await response.json();
    setCarts(results?.carts);
  };

  return carts;
};

export default useCart;
