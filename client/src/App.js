import React, { useState } from 'react';
import About from './Pages/about/About';
import './App.scss';
import {Home} from './Pages/Home/Home';
import {Nav} from '../../client/src/Components/Nav/Nav';
import Contact from './Pages/contact/Contact';
import Footer from '../../client/src/Components/Footer/Footer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


const App = () => {

    const [hamburgerAnimation, setHamburgerAnimation] = useState (false);

    return(
        <div className="App">

            <BrowserRouter>

                <Nav setHamburgerAnimation={setHamburgerAnimation} hamburgerAnimation={hamburgerAnimation}/> 

                    <Routes>
                        <Route path="/" element={<Home setHamburgerAnimation={setHamburgerAnimation}/>}></Route>
                        <Route path="/About" element={<About setHamburgerAnimation={setHamburgerAnimation}/>}></Route>
                        <Route path="/Contact" element={<Contact setHamburgerAnimation={setHamburgerAnimation}/>}></Route>
                    </Routes>

                <Footer/>

            </BrowserRouter>

                         
             
        </div>
    )
}
export default  App ; 