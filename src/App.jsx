import { useEffect, useState } from "react";

function App() {
  // Generate an array of image URLs
  const generateImageUrls = () => {
    const baseUrl = "src/assets/1 (";
    const extension = ").png";
    const imageUrls = [];

    for (let i = 1; i <= 209; i++) {
      imageUrls.push(`${baseUrl}${i}${extension}`);
    }

    return imageUrls;
  };

  const images = generateImageUrls();
  const [image, setImage] = useState("");

  function selectImage() {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setImage(randomImage);
  }

  useEffect(() => {
    selectImage();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-2 justify-center h-[calc(100vh-200px)] w-full">
        <img
          src={image}
          alt="image"
          className="h-[calc(100vh-200px)] rounded-md object-cover"
        />
        <button className="btn btn-neutral mt-2" onClick={selectImage}>
          Next Image
        </button>
      </div>
    </div>
  );
}

export default App;
