import React, { useState, useEffect } from 'react';
import './About.scss';
import NumberCounter from 'number-counter';
import StartProject from '../../Components/start/Start';
import TeamInfo from './TeamInfo';
import { motion } from "framer-motion";

const About = (props) => {

   const [scroll, setScroll] = useState(false)
 
   const serviceDes = (e) => {
      if(e.target.classList.value != 'service-box'){
        const p = e.target.parentElement.children[2]
        const icon = e.target.parentElement.children[1]
            if(p.style.height !== '100px'){
                p.style.height = '100px'
                p.style.paddingTop = '10px'
                icon.style.transform = 'rotate( 180deg)'
            }
            else {
                p.style.height = '0'
                p.style.paddingTop = '0px'
                icon.style.transform = 'rotate( 0deg)'
            }
      }
   
   }
 
   window.addEventListener('scroll', () =>
    {
        if( document.documentElement.scrollTop > 3100 && window.innerWidth < 700 )
        {
            setScroll(true);
        }

        if( document.documentElement.scrollTop > 1800 && window.innerWidth > 700 )
        {
            setScroll(true);
        }
    });
   

  return (
    <div className="about"
        onClick={(e) =>{
            props.setHamburgerAnimation(false)
            e.stopPropagation();
        }}
    >

        <div className="about-section">
            <motion.div className="about-text"
              initial={{ x: '-30%', opacity:0 }}
              animate={{ x: '0' , opacity:1  }} 
              transition={{ duration: 0.5  }}
            >
                <h1>About Us</h1>
                <h4>Welcome to FreeLancer Team</h4>
                <p>We're a creative studio that specializes in Software Development. <br /> We are passionate about what we do, and you can expect the highest quality work from us every time.
                </p>
           </motion.div>
        </div>

        <div className="out-mission">
            <div className="missions-card">
                <div className="card-line"></div>
                <h2>Who Are We</h2>
                <p>
                We are a global IT and digital transformation champion that supports our customers in realizing technology’s huge potential for a smarter and more sustainable world
                </p>
            </div>
            <div className="missions-card">
                <div className="card-line"></div>
                <h2>Our Mission</h2>
                <p>
                We help businesses and organizations understand, implement and manage technology in order to be more productive, cost-effective and competitive.
                </p>
            </div>
            <div className="missions-card">
                <div className="card-line"></div>
                <h2>What We Do</h2>
                   <ul>
                        <li>Software Development</li>
                        <li>Website Development</li>
                        <li>Applications Development</li>
                        <li>UI UX Design</li>
                        <li>eCommerce Store</li>
                        <li>Tech Support</li>
                   </ul>
            </div>               
        </div>

        <div className="process-section">
            <h1>Our 6-D Process</h1>
            <div className="cards-main">
                <div className="process-card">             
                    <span>01.</span>
                    <h3>Discover</h3>
                    <p>Every custom software project starts with tech and business scrutiny of the idea behind the solution. This way, we ensure its feasibility to prevent our customers from walking the avenue of a potential budget loss.</p>
                </div>
                <div className="process-card">  
                    <span>02.</span>
                    <h3>Define</h3>
                    <p>Definition of a high quality design and inspires and motivates users to create more content matches your brand's style guide is well researched and gives users a stellar experience. </p>
                </div>
                <div className="process-card">             
                    <span>03.</span>
                    <h3>Design</h3>
                    <p>Defining the product vision to meet the customer’s business goals. Setting up a detailed project delivery roadmap and breaking the process down into manageable deliverables.</p>
                </div>
                <div className="process-card">  
                    <span>04.</span>
                    <h3>Develop</h3>
                    <p>Having all the requirements transformed into the product implementation, our software engineers move fast yet wisely, harnessing the full potential of the Scrum methodology.</p>
                </div>
                <div className="process-card">               
                    <span>05.</span>
                    <h3>Deploy</h3>
                    <p>web development deploying we have a mixed bag of backend and frontend developers who specialize in deploying web development projects.</p>
                </div>
                <div className="process-card">           
                    <span>06.</span>
                    <h3>Deliver</h3>
                    <p>Deliver Quality Software Development Services: We are a boutique Software and web development company that helps business and organizations create easy to use and functional websites for their organization. </p>
                </div>
            </div>   
        </div>

        <div className="service-section">
            <div className="service-img"></div>
              <div className="service-text">
                <div className="title-1">
                   <h1>Why Choose Us?</h1>
                   <p>Our teams of developers and designers with extensive years of experience working on multiple types of web application. I can show you how much we care about your vision and goals by our engagement levels with setting goals together, fully understanding your needs, and reliability in our methods.</p>
                </div>

                <div className="service-divs">
                    <div className="service-box" onClick={(e) => {serviceDes(e)}}>
                        <p className="title">Best Quality Designs</p>
                        <i className="fas fa-angle-down"></i>          
                        <p className='description'>Web development company that designs and develops enterprise level mobile applications and powerful web applications taking care of clients ranging from SMBs to large enterprises by providing the best quality design, development and support services in Germany .</p>
                    </div>
                    
                    <div className="service-box" onClick={(e) => {serviceDes(e)}}>
                        <p className="title">24x7 Live Support</p>
                        <i className="fas fa-angle-down"></i>
                        <p className='description'>With 24×7 web site support, you can have an answer to any problem that your hosted website might be experiencing on the spot 24 hours a day.</p>
                    </div>

                    <div className="service-box" onClick={(e) => {serviceDes(e)}}>
                        <p className="title">Result Oriented Projects</p>
                        <i className="fas fa-angle-down"></i>
                        <p className='description'>We are digital creative Team helps you achieve your business goals through our prime services.</p>
                    </div>

                    <div className="service-box" onClick={(e) => {serviceDes(e)}}>
                        <p className="title">Best Techniques</p>
                        <i className="fas fa-angle-down"></i>
                        <p className='description'>Raw and unbiased information on web development. We show beginners how to do things the right way.</p>                  
                    </div>

                    <div className="service-box" onClick={(e) => {serviceDes(e)}}>
                        <p className="title">Experienced Professionals</p>
                        <i className="fas fa-angle-down"></i>
                         <p className='description'>We're a team of experienced, intelligent people who want to build great software with you.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="info-section">
            <div className="info-text">
               <h2>Some Numbers</h2>
               <p>Some Numbers about Web Development We've made.</p>
            </div>

            <div className="info-numbers">

                <div className="number">
                     <b>
                        { scroll ? <NumberCounter end={87} delay={2} className="increment" /> : 0}
                    </b>  
                    <p className="num-title">Satisfied Clients </p>
                </div>

                <div className="number">
                     <b>
                        { scroll ? <NumberCounter end={150} delay={2} className="increment" /> : 0}
                    </b> <br /> 
                    <p className="num-title-2">Projects Completed</p>
                </div>

                <div className="number">
                     <b>
                        { scroll ? <NumberCounter end={25} delay={2} className="increment" /> : 0}
                    </b> <br /> 
                    <p className="num-title">Accolades Earned</p>
                </div>

                <div className="number">
                     <b>
                    { scroll ? <NumberCounter end={52} delay={2}  className="increment" /> : 0}
                    K+</b> <br /> 
                    <p>Lines of Code </p>
                </div>
            </div>
        </div>

        <div className="team-section" id='team'>
            <div className="team-text">
                <h1>OUR TEAM</h1>
                <p>We are UX/UI Software Developer's, Web Designer's, Programmer's and We are Experts in : <br /> <b>HTML - CSS - JAVASCRIPT - SASS - REACT - NODE.JS - MONGODB - EXPRESS - FIGMA - WORDPRESS - ADOBEXD - STENCIL</b> </p>
                <div className="line">
                    <div className="subline"></div>
                </div>
            </div>
            <div className="cards-main">
               {
                TeamInfo.map((card, i) => {
                    return(
                        <div className="card" key={i}>
                            <div className="img-box">
                              <img src={card.img} alt="" />
                            </div>
                                <h3>{card.name}</h3>
                                <p>{card.job}</p>
                                <p> {card.description} </p>
                            <div className="icons">
                            
                                { 
                                  card.website ?
                                    card.website
                                    :
                                    null
                                }
                                
                                {
                                   card.linkedin ? 
                                    card.linkedin
                                    :
                                    null
                                }
                             
                                {
                                  card.github ? 
                                    card.github
                                    :
                                    null
                                }
                                    
                            </div> 
                        </div>
                            )
                        })
               }

            </div>
        </div>
       <StartProject />
    </div>
  )
}

export default About;
