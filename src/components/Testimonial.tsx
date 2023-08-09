interface Props {
  name: string;
  content: string;
  avatar: string;
}
const Testimonial = ({ name, content, avatar }: Props) => {
  const contentStyle = { fontSize: "18px", marginBottom: "10px" };
  const nameStyle = { fontSize: "16px", fontWeight: "bold" };
  const imgStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginBottom: "10px",
  };
  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "20px",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
        backgroundColor: "#f8f8f8",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <img src={avatar} alt={name} style={imgStyle} />
      <p style={contentStyle}>{content}</p>
      <strong style={nameStyle}>{name}</strong>
    </div>
  );
};

export default Testimonial;
