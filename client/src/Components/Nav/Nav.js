import Logo from '../../imgs/logo.png'
import './Nav.scss'
import React,  { useState, useEffect } from 'react'
import {motion} from 'framer-motion' 
import { NavLink } from 'react-router-dom';

const Nav = (props) => { 
    
    const [hamburger, setHamburger] = useState (true);
    const [mobileMode, setMobileMode] = useState (true);
    

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
        
    },[])

    return (
        <div className="nav"
        onClick={() =>{
            props.setHamburgerAnimation(false)
        }}
        >
            <div className="logo" id="logo">
                <NavLink to='/'><img src={Logo} alt="Logo"/></NavLink>
            </div>

            {
                hamburger ?
                <motion.div className={mobileMode ? 'navList' : 'nav_mobile' }
                initial={{height:'0px'}}
                animate={{height: props.hamburgerAnimation ? '580px' : '0px'}}
                transition={{duration:0.6}}
                onClick={(e) =>{
                    props.setHamburgerAnimation(false)
                    e.stopPropagation();
                }}
                >
                <a href='/'>Home</a>
                <NavLink to='/About'>About</NavLink>
                <a href='#'>Contact</a>

                </motion.div>
                :
                null
            }
            
            <div className="hamburgerNav"
                onClick={(e)=>{
                    props.setHamburgerAnimation( !props.hamburgerAnimation );
                    e.stopPropagation();
                }}

            ><i class="fas fa-bars"></i></div>
            
        </div>
    )
 }

 export { Nav }