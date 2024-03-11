import { useState, useEffect } from "react";
const useComment = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetchComments();
  }, []);
  const fetchComments = async () => {
    const response = await fetch("https://dummyjson.com/comments");
    const results = await response.json();
    setComments(results?.comments);
  };

  return comments;
};

export default useComment;
