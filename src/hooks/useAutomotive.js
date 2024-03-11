import { useState, useEffect } from "react";
const useAutomotive = () => {
  const [automotive, setAutomotive] = useState([]);
  useEffect(() => {
    fetchAutomotive();
  }, []);
  const fetchAutomotive = async () => {
    const response = await fetch(
      "https://dummyjson.com/products/category/automotive"
    );
    const results = await response.json();
    setAutomotive(results?.products);
  };

  return automotive;
};

export default useAutomotive;
