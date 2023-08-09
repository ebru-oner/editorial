import CoverImage from "./cover-image";

const PostHeader = ({ title, coverImage }) => {
  return (
    <div className="mb-8 md:mb-16 sm:mx-0">
      <CoverImage title={title} src={coverImage} />
    </div>
  );
};

export default PostHeader;
