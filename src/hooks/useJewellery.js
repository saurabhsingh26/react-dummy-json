import { useState, useEffect } from "react";

const useJewellery = () => {
  const [jewellery, setJewellery] = useState([]);
  useEffect(() => {
    fetchJewellery();
  }, []);
  const fetchJewellery = async () => {
    const response = await fetch(
      "https://dummyjson.com/products/category/womens-jewellery"
    );

    const results = await response.json();
    setJewellery(results?.products);
  };
  return jewellery;
};

export default useJewellery;
