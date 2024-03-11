import { useState, useEffect } from "react";

const useWatch = () => {
  const [mens, setMens] = useState([]);
  const [womens, setWomens] = useState([]);
  const watch = [...mens, ...womens];
  useEffect(() => {
    fetchShoes();
  }, []);
  const fetchShoes = async () => {
    const responseMens = await fetch(
      "https://dummyjson.com/products/category/mens-watches"
    );
    const responseWomens = await fetch(
      "https://dummyjson.com/products/category/womens-watches"
    );
    const resultsMens = await responseMens.json();
    const resultsWomens = await responseWomens.json();
    setMens(resultsMens?.products);
    setWomens(resultsWomens?.products);
  };
  return watch;
};

export default useWatch;
