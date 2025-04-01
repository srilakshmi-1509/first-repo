import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import FirstPage from "./firstpage";
import SecondPage from "./secondpage";
import ThirdPage from "./thirdpage";
import FourthPage from "./fourthpage";



function app(){
    return(
        <div>
        
            <BrowserRouter>
            <Routes >
                <Route path="/" element={<Layout/>}>
                <Route path="/" element={<FirstPage/>}></Route>
                <Route path="/secondpage" element={<SecondPage/>}></Route>
                <Route path="/thirdpage" element={<ThirdPage/>}></Route>
                <Route path="/fourthpage" element={<FourthPage/>}></Route>
                </Route>
                

            
                
            </Routes>
            </BrowserRouter>
        </div>
    )

}
export default app;