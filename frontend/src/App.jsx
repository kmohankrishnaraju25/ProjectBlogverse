import ProductCart from "./productcart"
import NavBar from "./NavBar"
import SignUp from "./SignUp"
import Signin from "./Signin"
import Home from "./Home"
import { Routes, Route } from "react-router-dom"
function App() {
  return (
    <Routes >
      {/* <NavBar/> */}
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Signin" element={<Signin />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
export default App
