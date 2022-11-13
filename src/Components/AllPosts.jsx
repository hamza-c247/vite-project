import React from "react";
import { Grid } from "@material-ui/core";
import AllpostUsers from "./AllpostUsers";
import { useSelector } from "react-redux";
import SideMenu from "./Common/SideMenu";

const AllPosts = () => {
  const Users = useSelector((state) => state.User.Users);
  console.log(Users);

  const NoBlogs = ()=>{
    return(
      <>
      <div className="no-blogs">
        No blog available
      </div>
      </>
    )
  }

  return (
    <>
      <div className="menubar">
        <SideMenu></SideMenu>
      </div>
      <div className="Blog-heading">
        <h3> <i>Recent Blogs</i></h3>
      </div>
      <div className="blog-data">
        {Users.map((user) => (
          <AllpostUsers key={user.id} user={user} />
        ))}
      </div>
      {Users.length === 0 && <NoBlogs/>}
    </>
  );
};

export default AllPosts;
