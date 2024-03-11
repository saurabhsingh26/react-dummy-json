import { useState, useEffect } from "react";

const useDress = () => {
  const [mens, setMens] = useState([]);
  const [womens, setWomens] = useState([]);
  const dresses = [...mens, ...womens];
  useEffect(() => {
    fetchDress();
  }, []);
  const fetchDress = async () => {
    const responseMens = await fetch(
      "https://dummyjson.com/products/category/mens-shirts"
    );
    const responseWomens = await fetch(
      "https://dummyjson.com/products/category/womens-dresses"
    );
    const resultsMens = await responseMens.json();
    const resultsWomens = await responseWomens.json();
    setMens(resultsMens?.products);
    setWomens(resultsWomens?.products);
  };
  return dresses;
};

export default useDress;
