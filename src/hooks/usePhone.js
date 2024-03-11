const usePhone = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    fetchPhones();
  }, []);
  const fetchPhones = async () => {
    const response = await fetch(
      "https://dummyjson.com/products/category/smartphones"
    );
    const results = await response.json();
    setPhones(results?.products);
  };

  return phones;
};

export default usePhone;
