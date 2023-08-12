import PhotoAlbum from "react-photo-album";

function Album() {
  const photos = [
    {
      src: "/images/1.jpg",
      width: 800,
      height: 600,
    },
    {
      src: "/images/2.jpg",
      width: 1600,
      height: 900,
    },
    {
      src: "/images/3.jpg",
      width: 500,
      height: 600,
    },
    {
      src: "/images/4.jpg",
      width: 1000,
      height: 900,
    },
    {
      src: "/images/5.jpg",
      width: 800,
      height: 600,
    },
    {
      src: "/images/6.jpg",
      width: 1600,
      height: 900,
    },
    {
      src: "/images/7.jpg",
      width: 600,
      height: 600,
    },
    {
      src: "/images/8.jpg",
      width: 1200,
      height: 900,
    },
  ];

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <PhotoAlbum layout="rows" photos={photos} />
    </div>
  );
}

export default Album;
