import './Footer.scss';
import Logo from '../../imgs/logo.png';
import { NavLink } from 'react-router-dom';

const Footer = () => { 
    
    return (
        <footer>
            <div className="boxes">
                <div className='box-1'>
                    <div className="logo-box">

                        <a href='#logo'
                            onClick={()=>{
                                
                                if(window.location.href != 'http://localhost:3000/' ){
                                    window.open('/','_self')
                                }
                            }}
                        ><img src={Logo} alt="Logo"/></a>
                    </div>
                    
                    <p>We are a global team of experts that lives up to its value by setting the industries’ future benchmarks today.</p>
                    <div className='icons'>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-google"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-linkedin"></i>
                    </div>
                </div>
                <div className='box-2'>
                    <h3>Company</h3>
                    <a href="/">Home</a>
                    <br />
                    <a href="/About">About</a>
                    <br />
                    <a href="/Contact">Contact</a>
                </div>
                <div className='box-3'>
                    <h3>Business</h3>
                    {/* <a href="">Project</a> */}
                    {/* <br /> */}
                    <a href="#team"
                      onClick={()=>{
                                
                        if(window.location.href != 'http://localhost:3000/About' ){
                            window.open('/About#team','_self')
                        }
                    }}
                    >Our Team</a>
                    <br />
                    <a className="costomer-link"
                        onClick={()=>{
                            console.log(window.location.href);
                            if(window.location.href != 'http://localhost:3000/' ){
                                window.open('http://localhost:3000/#customers','_self') 
                            }
                            else {
                                window.open('http://localhost:3000/#customer-1','_self')
                            }
                        }}
                    >Customers</a>
                </div>
                <div className='box-4'>
                    <h3>Get In Touch</h3>
                    <p>Berlin, Germany</p>
                    <p>info@example.com​</p> 
                    <p>1-800-1234-567</p>
                    <p>+001 987-654-3210</p>
                </div>
            </div>
            <div className="footer-line"></div>
            <div className="box-5">
                <p>Copyright © 2022 FreeLancer Team</p>
                <p>Powered by | FreeLancer Team</p>
            </div>
            
        </footer>
    )
 }

 export default Footer; 