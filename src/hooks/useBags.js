import { useState, useEffect } from "react";

const useBags = () => {
  const [bags, setBags] = useState([]);
  useEffect(() => {
    fetchBags();
  }, []);
  const fetchBags = async () => {
    const response = await fetch(
      "https://dummyjson.com/products/category/womens-bags"
    );

    const results = await response.json();
    setBags(results?.products);
  };
  return bags;
};

export default useBags;
