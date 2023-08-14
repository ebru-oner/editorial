import CoverImage from "./coverImage";
import PostTitle from "./postTitle";

const PostHeader = ({ title, coverImage }) => {
  return (
    <div className="mb-8 md:mb-16 sm:mx-0">
      <PostTitle>{title}</PostTitle>
      <CoverImage title={title} src={coverImage} />
    </div>
  );
};

export default PostHeader;
