import { Route, Routes } from 'react-router-dom'
import AddPosts from './Components/AddPosts'
import AllPosts from './Components/AllPosts'

const AllRoute = () => {
  return (
   
    <Routes>
    <Route exact path="/" element={<AddPosts/>} />
    <Route exact path="/AddPosts" element={<AddPosts/>} />
    <Route exact path="/AllPosts" element={<AllPosts/>} />
    {/* <Route exact path="/students/:id/edit" element={EditStudent} /> */}
    </Routes>
 
  )
}

export default AllRoute