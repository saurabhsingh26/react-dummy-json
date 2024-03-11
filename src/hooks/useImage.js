import { useState, useEffect } from "react";
const useImage = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetchImages();
  }, []);
  const fetchImages = async () => {
    const response = await fetch("https://dummyjson.com/image/150");
    const results = await response.blob();
    setImages(results);
  };

  return images;
};

export default useImage;
