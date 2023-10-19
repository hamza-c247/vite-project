import React, { useEffect, useState } from "react";
import AllpostUsers from "./AllpostUsers";
import { useDispatch, useSelector } from "react-redux";
import SideMenu from "./Common/SideMenu";
import InfiniteScroll from "react-infinite-scroll-component";
import { AddData } from "../Redux/Initial/Userslice";

const AllPosts = () => {
  const dispatch = useDispatch();
  const Users = useSelector((state) => state.User.Users);
  const Data = useSelector((state) => state.User.Data);
  const [data, setData] = useState(Users.slice(0, 5));
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(AddData(data));
  }, [data]);

  const fetchMoreData = () => {
    setPage(page + 1), dispatch(AddData(data));

    setTimeout(() => {
      setData([...data, ...Users.slice(page * 5, page * 5 + 5)]);
    }, 2000);
  };
  console.log("page", page);
  console.log("Action user ", Data);
  console.log("...............>>>", data);


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
        <div>
        <InfiniteScroll
          dataLength={Data.length} //This is important field to render the next data
          next={() => fetchMoreData()}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {Data.map((user) => (
            <AllpostUsers key={user.id} user={user} />
          ))}
        </InfiniteScroll>
      </div>
      </div>
      <div>
        
      </div>
      {Data.length === 0 && <NoBlogs />}
    </>
  );
};

export default AllPosts;
