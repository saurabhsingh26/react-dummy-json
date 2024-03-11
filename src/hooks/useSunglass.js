const useSunglass = () => {
  const [sunglasses, setSunglasses] = useState([]);
  useEffect(() => {
    fetchSunglasses();
  }, []);
  const fetchSunglasses = async () => {
    const response = await fetch(
      "https://dummyjson.com/products/category/sunglasses"
    );
    const results = await response.json();
    setSunglasses(results?.products);
  };

  return sunglasses;
};

export default useSunglass;
