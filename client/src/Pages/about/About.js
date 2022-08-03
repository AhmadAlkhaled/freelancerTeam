import React, { useState, useEffect } from 'react';
import './About.scss';
import NumberCounter from 'number-counter';
import StartProject from '../../Components/start/Start';


const About = (props) => {

   const [click, setClick] = useState(true)
   const [scroll, setScroll] = useState(false)
//    console.log(count);
   const serviceDes = (e) => {
      
    const p = e.target.parentElement.children[2]
    const icon = e.target.parentElement.children[1]
        if(click){
            p.style.height = '100px'
            p.style.padding = '10px'
            setClick(false)
            icon.style.transform = 'rotate( 180deg)'
        }
        else {
            p.style.height = '0'
            setClick(true)
            p.style.padding = '0'
            icon.style.transform = 'rotate( 0deg)'
        }
   }

//   window.addEventListener('scroll',()=> {
//     if(window.scrollY > 3100){
//       setScroll(true)
//     }
//     else{
//         setScroll(false)
//     }
//    });
   
   window.addEventListener('scroll', ()=>{

    if( document.body.scrollTop > 3100 || document.documentElement.scrollTop > 3100 )
    {
        console.log('fffff');
        setScroll(true)
    }else{
        setScroll(false)
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
            <div className="about-text">
                <h1>About Us</h1>
                <h4>Welcome to The Digital Agency</h4>
                <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue. Aliquam ornare hendrerit augue.
                </p>
           </div>
        </div>

        <div className="out-mission">
            <div className="missions-card">
                <div className="card-line"></div>
                <h2>Who Are We</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut elit tellus, luctus nec ullam corper mattis, pulvinar. Etiam erat lectus, finibus eget commodo quis, tinci dunt eget leo. Nullam quis vulpu tate orci, ac accum san quam.
                    </p>
            </div>
            <div className="missions-card">
                <div className="card-line"></div>
                <h2>Our Mission</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut elit tellus, luctus nec ullam corper mattis, pulvinar. Etiam erat lectus, finibus eget commodo quis, tinci dunt eget leo. Nullam quis vulpu tate orci, ac accum san quam.
                    </p>
            </div>
            <div className="missions-card">
                <div className="card-line"></div>
                <h2>What We Do</h2>
                   <ul>
                        <li>UI UX Design</li>
                        <li>Website Development</li>
                        <li>Marketing</li>
                        <li>Social Media</li>
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
                <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.
                </p>
            </div>
            <div className="process-card">
                
                <span>02.</span>
                <h3>Define</h3>
                <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.
                </p>
            </div>
            <div className="process-card">
               
                <span>03.</span>
                <h3>Design</h3>
                <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.
                </p>
            </div>
            <div className="process-card">
                
                <span>04.</span>
                <h3>Develop</h3>
                <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.
                </p>
            </div>
            <div className="process-card">
                
                <span>05.</span>
                <h3>Deploy</h3>
                <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.
                </p>
            </div>
            <div className="process-card">
               
                <span>06.</span>
                <h3>Deliver</h3>
                <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.
                </p>
            </div>
        </div>
           
        </div>

        <div className="service-section">
            <div className="service-img">
               {/* <img src="" alt="" /> */}
            </div>

            <div className="service-text">
                <div className="title-1">
                <h1>Why Choose Us?</h1>
                <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.
                </p>
                </div>

                <div className="service-divs">
                    <div className="service-box">
                        <p className="title">Best Quality Designs</p>
                        <i className="fas fa-angle-down"
                        onClick={(e) => {serviceDes(e)}}
                        ></i>
                       
                            <p className='description'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper 
                            </p>

                    </div>
                    
                    <div className="service-box">
                        <p className="title">24x7 Live Support</p>
                        <i className="fas fa-angle-down"
                        onClick={(e) => {serviceDes(e)}}
                        ></i>
                        <p className='description'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper 
                            </p>
                    </div>
                    <div className="service-box">
                        <p className="title">Result Oriented Projects</p>
                        <i className="fas fa-angle-down"
                        onClick={(e) => {serviceDes(e)}}
                        ></i>
                        <p className='description'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper 
                            </p>
                    </div>
                    <div className="service-box">
                        <p className="title">Award Winning Support Team</p>
                        <i className="fas fa-angle-down"
                           onClick={(e) => {serviceDes(e)}}
                           ></i>
                           <p className='description'>
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper 
                               </p>
                    </div>
                    <div className="service-box">
                        <p className="title">Best ROI Techniques</p>
                        <i className="fas fa-angle-down"
                        onClick={(e) => {serviceDes(e)}}
                        ></i>
                        <p className='description'>
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper 
                               </p>
                        
                    </div>
                    <div className="service-box">
                        <p className="title">Experienced Professionals</p>
                        <i className="fas fa-angle-down"
                        onClick={(e) => {serviceDes(e)}}
                        ></i>
                         <p className='description'>
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper 
                               </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="info-section">
            <div className="info-text">
               <h2>Some Numbers</h2>
               <p>Lorem ipsum dolor sit amet, consec tetur adipis.</p>
            </div>

            <div className="info-numbers">
                <div className="number">
                    <p> <b>
                    { scroll ? <NumberCounter end={87} delay={3} className="increment" /> : 0}
                        </b> Satisfied Clients </p>
                </div>
                <div className="number">
                    <p> <b>
                    { scroll ? <NumberCounter end={150} delay={3} className="increment" /> : 0}
                        </b> Projects Completed </p>
                </div>
                <div className="number">
                    <p> <b>
                    { scroll ? <NumberCounter end={25} delay={3} className="increment" /> : 0}
                        </b> Accolades Earned </p>
                </div>
                <div className="number">
                    <p> <b>
                    { scroll ? <NumberCounter end={52} delay={3} className="increment" /> : 0}
                        K+</b> Lines of Code </p>
                </div>
            </div>
        </div>

       <StartProject />

    </div>
  )
}

export default About;