import { useState, useEffect } from "react";
const useQuotes = () => {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    fetchQuotes();
  }, []);
  const fetchQuotes = async () => {
    const response = await fetch("https://dummyjson.com/quotes");
    const results = await response.json();
    setQuotes(results?.quotes);
  };

  return quotes;
};

export default useQuotes;
