import { Route, Routes } from 'react-router-dom'
import AddPosts from './Components/AddPosts'
import AllPosts from './Components/AllPosts'
import EditUserPost from './Components/EditUserPost'

const AllRoute = () => {
  return (
   
    <Routes>
    <Route exact path="/" element={<AddPosts/>} />
    <Route exact path="/AddPosts" element={<AddPosts/>} />
    <Route exact path="/AllPosts" element={<AllPosts/>} />
    <Route exact path="/Users/:id/edit" element={<EditUserPost/>} />
    </Routes>
 
  )
}

export default AllRoute