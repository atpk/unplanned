interface Props {
  name: string;
  content: string;
  avatar: string;
}
const Testimonial = ({ name, content, avatar }: Props) => {
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
      <img
        src={avatar}
        alt={name}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          marginBottom: "10px",
        }}
      />
      <p style={{ fontSize: "18px", marginBottom: "10px" }}>{content}</p>
      <strong style={{ fontSize: "16px", fontWeight: "bold" }}>{name}</strong>
    </div>
  );
};

export default Testimonial;
