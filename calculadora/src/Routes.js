import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";

export default () => {
    //routas de navegação
    return (
        <Routes>            
            <Route path="/" element={<Home/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
        </Routes>
    );
}
