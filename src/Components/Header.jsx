import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header-wrapper">
        <Link type="button" to="/AddPosts">
          Create Blog
        </Link>
        <Link type="button" to="/AllPosts">
          ViewAllBlogs
        </Link>
      </div>
    </>
  );
};

export default Header;
