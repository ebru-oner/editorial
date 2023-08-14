import { shantell } from "../utils/fonts";
import markdownStyles from "../styles/markdown-styles.module.css";

const PostBody = ({ content }) => {
  return (
    <div className={shantell.className}>
      <div
        className={markdownStyles.markdown}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default PostBody;
