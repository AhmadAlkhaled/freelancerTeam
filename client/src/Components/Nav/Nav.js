import Logo from '../../imgs/logo.png'
import './Nav.scss'
import React,  { useState, useEffect } from 'react'
import {motion} from 'framer-motion' 

const Nav = () => { 
    
    const [hamburger, setHamburger] = useState (true);
    const [mobileMode, setMobileMode] = useState (true);
    const [hamburgerAnimation, setHamburgerAnimation] = useState (false);

    const windowSize = ()=>{
        if(window.innerWidth < 700){
            
            setMobileMode(false)
        }
        else{
            
            setMobileMode(true)
        }
    }

    window.addEventListener('resize', () => {
        windowSize();
    })

    useEffect (() => {
        windowSize();
        const closeNav = document.querySelector('.App')
        closeNav.addEventListener('click', () =>{
            setHamburgerAnimation(false);
        })

    },[])

    return (
        <div className="nav">
            <div className="logo">
                <img src={Logo}/>
            </div>

            {
                hamburger ?
                <motion.div className={mobileMode ? 'navList' : 'nav_mobile' }
                initial={{height:'0px'}}
                animate={{height: hamburgerAnimation ? '580px' : '0px'}}
                transition={{duration:0.6}}
                
                
                >
                <a href='#'>Home</a>
                <a href='#'>About</a>
                <a href='#'>Contact</a>

                </motion.div>
                :
                null
            }
            
            <div className="hamburgerNav"
                onClick={()=>{
                    setHamburgerAnimation( !hamburgerAnimation );
                }}

            ><i class="fas fa-bars"></i></div>
            
        </div>
    )
 }

 export { Nav }