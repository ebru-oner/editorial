import { shantell } from "../utils/fonts";

const PostTitle = ({ children }) => {
  const styles = {
    fontSize: "2rem",
    marginTop: "1.5rem",
    marginBottom: "3rem",
    textAlign: "right",
    color: "#f9844a",
  };

  return (
    <h1 className={shantell.className} style={styles}>
      {children}
    </h1>
  );
};

export default PostTitle;
