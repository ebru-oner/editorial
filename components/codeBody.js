import { shantell } from "../utils/fonts";
import classnames from "classnames";
import styles from "../styles/code-styles.module.css";

const CodeBody = ({ content }) => {
  const messageLines = content.split("\n").map((line, index) => (
    <p
      key={index}
      className={classnames(
        shantell.className,
        line.trim().startsWith("//") ? styles.comment : styles.codesnippet
      )}
    >
      {line}
    </p>
  ));
  return <div className={styles.code}>{messageLines}</div>;
};

export default CodeBody;
