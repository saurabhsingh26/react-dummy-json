const useTops = () => {
  const [tops, setTops] = useState([]);
  useEffect(() => {
    fetchTops();
  }, []);
  const fetchTops = async () => {
    const response = await fetch(
      "https://dummyjson.com/products/category/tops"
    );
    const results = await response.json();
    setTops(results?.products);
  };

  return tops;
};

export default useTops;
