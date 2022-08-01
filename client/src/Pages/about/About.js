import React, { useState } from 'react';
import './About.scss';
import StartProject from '../../Components/start/Start';
const About = () => {

   const [click, setClick] = useState(false)

  return (
    <div className="about">

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
               <img src="https://www.cursorsystems.de/wp-content/uploads/2022/01/shutterstock_791606392-edited-1024x768.jpg" alt="" />
            </div>

            <div className="service-text">
                <div className="title">
                <h1>Why Choose Us?</h1>
                <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.
                </p>
                </div>

                <div className="service-divs">
                    <div className="service-box">
                        <p>Best Quality Designs</p>
                        <i className="fas fa-plus-circle"
                        onClick={() => {setClick(!click)}}
                        ></i>
                        {
                            click ? 
                             <div className="hiden-box">
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper 
                                </p>
                             </div>
                             :
                             null
                        }
                       
                    </div>
                    
                    <div className="service-box">
                        <p>24x7 Live Support</p>
                        <i className="fas fa-plus-circle"></i>
                    </div>
                    <div className="service-box">
                        <p>Result Oriented Projects</p>
                        <i className="fas fa-plus-circle"></i>
                    </div>
                    <div className="service-box">
                        <p>Award Winning Support Team</p>
                        <i className="fas fa-plus-circle"></i>
                    </div>
                    <div className="service-box">
                        <p>Best ROI Techniques</p>
                        <i className="fas fa-plus-circle"></i>
                    </div>
                    <div className="service-box">
                        <p>Experienced Professionals</p>
                        <i className="fas fa-plus-circle"></i>
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
                    <p> <b>87</b> Satisfied Clients </p>
                </div>
                <div className="number">
                    <p> <b>150</b> Projects Completed </p>
                </div>
                <div className="number">
                    <p> <b>28</b> Accolades Earned </p>
                </div>
                <div className="number">
                    <p> <b>56K+</b> Lines of Code </p>
                </div>
            </div>
        </div>

       <StartProject />
    </div>
  )
}

export default About;