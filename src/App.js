import React from "react";
import {Link ,Route, Routes, Router, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import "./styles/style.css"
import Login from "./pages/Login"
import Register from "./pages/Register";
import Page from "./pages/Page";
function App() {
  return (
   
        <div className="App">
        <Routes>
          <Route path={''} element={<Layout/>}>
            <Route path={'/'} element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/page" element={<Page/>}/>
          </Route> 
        </Routes> 
    </div>
   
    
  );
}

export default App;
