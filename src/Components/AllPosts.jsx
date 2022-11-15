import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import AllpostUsers from "./AllpostUsers";
import { useSelector } from "react-redux";
import SideMenu from "./Common/SideMenu";
import InfiniteScroll from "react-infinite-scroll-component";

const AllPosts = () => {
  const Users = useSelector((state) => state.User.Users);
  const [data, setData] = useState(Users);
  const [page, setPage] = useState(0),
    maxPage = Math.ceil(data.length / 5);

  console.log("maxpage", maxPage);

  const onPrevPage = () => {
    setPage((page + 5 - 1) % maxPage);
  };

  const fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      setPage((page + 1) % maxPage);
    }, 1500);
  };
  console.log("page", (page + 1) % maxPage);

  console.log("sliceeee", data.slice(page * 5, 5 * (page + 1)));

  const NoBlogs = () => {
    return (
      <>
        <div className="no-blogs">No blog available</div>
      </>
    );
  };

  return (
    <>
      <div className="menubar">
        <SideMenu></SideMenu>
      </div>
      <div className="Blog-heading">
        <h2>
          {" "}
          <i>Recent Blogs</i>
        </h2>
      </div>
      <div className="blog-data">
        <InfiniteScroll
          dataLength={Users.length} //This is important field to render the next data
          next={fetchMoreData}
          hasMore={true}
          onScroll={onPrevPage}
          loader={<h4>Loading...</h4>}
        >
          {data.slice(page * 5, 5 * (page + 1)).map((user) => (
            <AllpostUsers key={user.id} user={user} />
          ))}
        </InfiniteScroll>
      </div>
      {Users.length === 0 && <NoBlogs />}
    </>
  );
};

export default AllPosts;
