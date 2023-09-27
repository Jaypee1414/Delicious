import { Home } from "./Home"
import {Routes, Route} from "react-router-dom"
import Cusine from "./Cusine"
import Searched from "./Searched"
import Recipe from "./Recipe"
import Login from "./Login"
import Register from "./Register"

function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Signup" element={<Register/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/cuisine/:type" element={<Cusine/>}/>
        <Route path="/searched/:search" element={<Searched/>}/>
        <Route path="/recipe/:name" element={<Recipe/>}/>
      </Routes>
    </div>
  )
}

export default Pages