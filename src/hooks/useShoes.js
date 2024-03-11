import { useState, useEffect } from "react";

const useShoes = () => {
  const [mens, setMens] = useState([]);
  const [womens, setWomens] = useState([]);
  const shoes = [...mens, ...womens];
  useEffect(() => {
    fetchShoes();
  }, []);
  const fetchShoes = async () => {
    const responseMens = await fetch(
      "https://dummyjson.com/products/category/mens-shoes"
    );
    const responseWomens = await fetch(
      "https://dummyjson.com/products/category/womens-shoes"
    );
    const resultsMens = await responseMens.json();
    const resultsWomens = await responseWomens.json();
    setMens(resultsMens?.products);
    setWomens(resultsWomens?.products);
  };
  return shoes;
};

export default useShoes;
