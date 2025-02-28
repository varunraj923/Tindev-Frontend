
import Body from "./Body"
import Profile from "./Profile";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";

const App = () =>{
    return(
        <BrowserRouter basename="/">
        <Routes>
        <Route path="/" element={<Body/>}>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/profile" element={<Profile/>}/>
        </Route>
          
        </Routes>
      </BrowserRouter>
      
    )
}

export default App