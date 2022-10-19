import React, { useState } from 'react';
import About from './Pages/about/About';
import './App.scss';
import {Home} from './Pages/Home/Home';
import {Nav} from '../../client/src/Components/Nav/Nav';
import Contact from './Pages/contact/Contact';
import Footer from '../../client/src/Components/Footer/Footer';
import AppForm from '../src/Pages/app-form/AppForm';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import   { useEffect } from 'react';
import { TerminPage } from './Components/Termin/Termin';
import { DB } from './Pages/db/db';
// import translate from 'translate-google';


const App = () => {

    const [hamburgerAnimation, setHamburgerAnimation] = useState (false);


    useEffect(()=>{

        const x = document.querySelectorAll('p');

    })
    return(
        <div className="App">
      
 
            
            <BrowserRouter>

                <Nav setHamburgerAnimation={setHamburgerAnimation} hamburgerAnimation={hamburgerAnimation}/> 

                    <Routes>
                        <Route path="/" element={<Home setHamburgerAnimation={setHamburgerAnimation}/>}></Route>
                        <Route path="/About" element={<About setHamburgerAnimation={setHamburgerAnimation}/>}></Route>
                        <Route path="/Contact" element={<Contact setHamburgerAnimation={setHamburgerAnimation}/>}></Route>
                        <Route path="/app-form" element={<AppForm setHamburgerAnimation={setHamburgerAnimation}/>}></Route>
                        <Route path="/Appointment" element={<TerminPage/>}></Route>
                        <Route path="/db" element={<DB/>}></Route>
                        
                        
                    </Routes>

                <Footer/>

            </BrowserRouter>
           

                         
             
        </div>
    )
}
export default  App ; 