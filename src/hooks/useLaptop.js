const useLaptop = () => {
  const [laptops, setLaptops] = useState([]);
  useEffect(() => {
    fetchLaptops();
  }, []);
  const fetchLaptops = async () => {
    const response = await fetch(
      "https://dummyjson.com/products/category/laptops"
    );
    const results = await response.json();
    setLaptops(results?.products);
  };

  return laptops;
};

export default useLaptop;
