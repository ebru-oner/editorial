import CoverImage from "./coverImage";
import PostTitle from "./postTitle";

const PostHeader = ({ title, coverImage }) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <CoverImage title={title} src={coverImage} />
    </>
  );
};

export default PostHeader;
