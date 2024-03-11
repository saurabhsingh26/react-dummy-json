const usePost = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, []);
  const fetchPosts = async () => {
    const response = await fetch("https://dummyjson.com/posts");
    const results = await response.json();
    setPosts(results?.posts);
  };

  return posts;
};

export default usePost;
