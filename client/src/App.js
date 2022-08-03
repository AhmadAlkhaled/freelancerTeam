import React from 'react';
import About from './Pages/about/About';
import {Home} from './Pages/Home/Home';
import './App.scss'
import {Nav} from '../../client/src/Components/Nav/Nav'
import Footer from '../../client/src/Components/Footer/Footer'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import React,  { useState, } from 'react'

const App = () => {

    const [hamburgerAnimation, setHamburgerAnimation] = useState (false);

    return(
        <div className="App">

            <BrowserRouter>

                <Nav setHamburgerAnimation={setHamburgerAnimation} hamburgerAnimation={hamburgerAnimation}/> 

                    <Routes>
                        <Route path="/" element={<Home setHamburgerAnimation={setHamburgerAnimation}/>}></Route>

                        <Route path="/About" element={<About setHamburgerAnimation={setHamburgerAnimation}/>}></Route>

                    </Routes>

                <Footer/>

            </BrowserRouter>

                         
             
        </div>
    )
}
export default  App ; 