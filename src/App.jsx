import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import Captainslogin from "./pages/Captainslogin";
import Captainsignup from "./pages/Captainsignup";

export default function App() {
  return (
   <div>
    <Routes>
      <Route path="/" element ={<Home />}/>
      <Route path="/login" element ={<UserLogin/>}/>
      <Route path="/signup" element ={<UserSignup/>}/>
      <Route path="/captain-login" element ={<Captainslogin/>}/>
      <Route path="/captain-signup" element ={<Captainsignup/>}/>


    </Routes>
   </div>
  )
}
