import './Home.scss'
import StartProject from '../../Components/start/Start'
import img1 from '../../imgs/res1.png'
import img2 from '../../imgs/res2.png'
import wordpress from '../../imgs/wordpress.png'
import javascript from '../../imgs/javascript.png'
import mongodb from '../../imgs/mongodb.png'
import nodejs from '../../imgs/nodejs.png'
import html from '../../imgs/html.png'
import css from '../../imgs/css.png'
import sass from '../../imgs/sass.png'
import figma from '../../imgs/figma.png'
import react from '../../imgs/react.png'
import xd from '../../imgs/xd.png'
import stencil from '../../imgs/stencil.png'

const Home = (props) => { 
    
    return (
        
        <div className="home"
            onClick={(e) =>{
                props.setHamburgerAnimation(false)
                e.stopPropagation();
            }}
        >
            
                <div className="background">
                    <div className="background2">

                        <div className="opacity">
                            
                      
                            <div className="alltexts">
                                <p className="text1"> Fast & Secure Web-Apps & Websites </p>
                                <p className="text2"> Create Amazing Business Websites </p>
                                <p className="text3"> Talk to us, we will find a suitable solution! </p>
                                <br/><br/><br/>
                                <button>GET STARTED</button>
                            </div>
                        </div>

                    </div>

                <div className="suction2">

                    <div className="subject">
                        <p className="subject2">This is how your software is developed</p>
                        <p className="subject3">Every software idea needs a good partner !</p>
                    </div>

                    <div className="ideaCards">
                        
                        <div className="cards">
                            <img src="https://www.quiskamp.com/wp-content/uploads/2021/03/ablauf-1-300x153.webp"></img>
                            <p className="cardSubject">1. You'r Idea</p>
                            <p className="cardText">You have an idea and are looking for a suitable IT partner to implement it.
                            </p>
                        </div>

                        <div className="cards">
                            <img src="https://www.quiskamp.com/wp-content/uploads/2021/03/ablauf-2-300x153.webp"></img>
                            <p className="cardSubject">2. Project Requirements</p>
                            <p className="cardText">We plan with you and help with the creation of specifications.
                            </p>
                        </div>

                        <div className="cards">
                            <img src="https://www.quiskamp.com/wp-content/uploads/2021/03/ablauf-3-300x153.webp"></img>
                            <p className="cardSubject">3. Design Phase</p>
                            <p className="cardText">The requirements become an interactive prototype for customers, board members or investors.
                            </p>
                        </div>

                        <div className="cards">
                            <img src="https://www.quiskamp.com/wp-content/uploads/2021/03/ablauf-4-300x153.webp"></img>
                            <p className="cardSubject">4. Phase of Development</p>
                            <p className="cardText">The prototype is converted into a finished software solution.
                            </p>
                        </div>

                        <div className="cards">
                            <img src="https://www.quiskamp.com/wp-content/uploads/2021/03/ablauf-5-300x153.webp"></img>
                            <p className="cardSubject">5. Test & optimize software</p>
                            <p className="cardText">Our quality management ensures a smooth start.
                            </p>
                        </div>

                        <div className="cards">
                            <img src="https://www.quiskamp.com/wp-content/uploads/2021/03/ablauf-6-300x153.webp"></img>
                            <p className="cardSubject">6. Publication</p>
                            <p className="cardText">You will receive a briefing on the software and we will help with the publication.
                            </p>
                        </div>
                    </div>

                </div>

                <div className="suction3">
                    <div className="subject">
                            <p className="subject2">Full Responsive Websites</p>
                        </div>

                            <div className="resposiveCards">
                            <div className="resImgs">
                            <img src={img1}/>
                            </div>
                            <div className="resImgs">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLGTMLckA-0aX423RLrh9tLvlKsTg5_wEFOA&usqp=CAU"/>
                            </div>
                            <div className="resImgs">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKmsdN7VQdMemCHZ88D_e4Aeg7ndMcSv7U9A&usqp=CAU"/>
                            </div>
                            <div className="resImgs">
                            <img src="https://wolkenhart.com/webdesignblog/wp-content/uploads/2013/06/19.jpg"/>
                            </div>
                            <div className="resImgs">
                            <img src={img2}/>
                            </div>
                        </div>
                            <p className="subject2" style={{width:'100%',marginBottom:'30px'}}>Our Technology Stack </p>

                            <div className="programming_icons">
                            
                                <div className="programming_icon"><img src={html}></img></div>
                                <div className="programming_icon"><img src={css}></img></div>
                                <div className="programming_icon"><img src={sass}></img></div>
                                <div className="programming_icon"><img src={javascript}></img></div>
                                <div className="programming_icon"><img src={nodejs}></img></div>
                                <div className="programming_icon"><img src={mongodb}></img></div>
                                <div className="programming_icon"><img src={react}></img></div>
                                <div className="programming_icon"><img src={stencil}></img></div>
                                <div className="programming_icon"><img src={figma}></img></div>
                                <div className="programming_icon"><img src={xd}></img></div>
                                <div className="programming_icon"><img src={wordpress}></img></div>
                                
                            </div>
                    </div>

                        <div className="suction4">
                            <p className="suction4Subject">That's what our satisfied customers say</p>
                            <br/>
                            

                            <div className="slider">

                                <input type="radio" name="slider" title="slide1" defaultChecked="checked" className="slider__nav" />
                                <input type="radio" name="slider" title="slide2" className="slider__nav" />
                                <input type="radio" name="slider" title="slide3" className="slider__nav" />
                                <input type="radio" name="slider" title="slide4" className="slider__nav" />

                                <div className="slider__inner">
                                    
                                    <div className="slider__contents">
                                    <h2 className="slider__caption">John Doe</h2>
                                    <p className="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
                                    </div>

                                    <div className="slider__contents">
                                    <h2 className="slider__caption">Susan Smith</h2>
                                    <p className="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
                                    </div>

                                    <div className="slider__contents">
                                    <h2 className="slider__caption">Anna Johnson</h2>
                                    <p className="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
                                    </div>

                                    <div className="slider__contents">
                                    <h2 className="slider__caption">Mariah Benchos</h2>
                                    <p className="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
                                    </div>

                                </div>

                            </div>

                        </div>
                        <StartProject/>
            </div>     
        </div>
    )
 }

 export { Home }