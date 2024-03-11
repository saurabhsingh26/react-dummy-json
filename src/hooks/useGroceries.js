const useGroceries = () => {
  const [groceries, setGroceries] = useState([]);
  useEffect(() => {
    fetchGroceries();
  }, []);
  const fetchGroceries = async () => {
    const response = await fetch(
      "https://dummyjson.com/products/category/groceries"
    );
    const results = await response.json();
    setGroceries(results?.products);
  };

  return groceries;
};

export default useGroceries;
