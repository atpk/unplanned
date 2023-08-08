import GalleryItem from "./components/GalleryItem";

const Gallery = () => {
  // Sample gallery data (replace with your actual data)
  const galleryData = [
    { id: 1, title: "Image 1", imageSrc: "/logo.jpeg" },
    { id: 2, title: "Image 2", imageSrc: "/logo.jpeg" },
    { id: 3, title: "Image 3", imageSrc: "/logo.jpeg" },
    // Add more gallery items here
  ];

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Gallery</h2>
      <div className="row">
        {galleryData.map((item) => (
          <GalleryItem
            key={item.id}
            title={item.title}
            imageSrc={item.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
