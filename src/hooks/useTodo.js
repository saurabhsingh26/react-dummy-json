const useTodo = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetchTodos();
  }, []);
  const fetchTodos = async () => {
    const response = await fetch("https://dummyjson.com/todos");
    const results = await response.json();
    setTodos(results?.todos);
  };

  return todos;
};

export default useTodo;
