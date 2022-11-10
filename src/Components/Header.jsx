import { Link } from "react-router-dom"



const Header = () => {
  return (
    <div>

        <Link to="/AddPosts">Create Blog</Link>
        <Link to="/AllPosts">ViewAllBlogs</Link>
    </div>
  )
}

export default Header