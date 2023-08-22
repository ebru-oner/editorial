import classnames from "classnames";

import { shantell } from "../utils/fonts";
import markdownStyles from "../styles/markdown-styles.module.css";

const PostTitle = ({ children }) => {
  return (
    <div className={classnames(shantell.className, markdownStyles.markdown)}>
      <h1>{children}</h1>
    </div>
  );
};

export default PostTitle;
