import { Home } from "./Home"
import {Routes, Route} from "react-router-dom"
import Cusine from "./Cusine"
import Searched from "./Searched"
import Recipe from "./Recipe"
import Login from "./Login"
import Register from "./Register"
import Profile from "./Profile"
import Admin from "./Admin"
import AdminProfile from "./AdminProfile"

function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Signup" element={<Register/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/cuisine/:type" element={<Cusine/>}/>
        <Route path="/searched/:search" element={<Searched/>}/>
        <Route path="/recipe/:name" element={<Recipe/>}/>
        <Route path="/Admin" element={<Admin/>}/>
        <Route path="/Admin/Profile" element={<AdminProfile/>}/>
      </Routes>
    </div>
  )
}

export default Pages