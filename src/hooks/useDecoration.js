const useDecoration = () => {
  const [decoration, setDecoration] = useState([]);
  useEffect(() => {
    fetchDecoration();
  }, []);
  const fetchDecoration = async () => {
    const response = await fetch(
      "https://dummyjson.com/products/category/home-decoration"
    );
    const results = await response.json();
    setDecoration(results?.products);
  };

  return decoration;
};

export default useDecoration;
