const useFragrance = () => {
  const [fragrances, setFragrances] = useState([]);
  useEffect(() => {
    fetchFragrances();
  }, []);
  const fetchFragrances = async () => {
    const response = await fetch(
      "https://dummyjson.com/products/category/fragrances"
    );
    const results = await response.json();
    setFragrances(results?.products);
  };

  return fragrances;
};

export default useFragrance;
