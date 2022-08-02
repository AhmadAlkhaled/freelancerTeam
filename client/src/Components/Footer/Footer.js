import './Footer.scss';
import Logo from './Orange Digital Code Logo Template.png';

const Footer = () => { 
    
    return (
        <footer>
            <div className="boxes">
                <div className='box-1'>
                    <div className="logo-box">
                        <img src={Logo} alt="" />
                    </div>
                    
                    <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Ut <br/> elit tellus, luctus nec <br/> ullamcorper mattis, pulvinar <br /> dapibus leo.</p>
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
                    <a href="">Home</a>
                    <br />
                    <a href="">About</a>
                    <br />
                    <a href="">Contact</a>
                </div>
                <div className='box-3'>
                    <h3>Business</h3>
                    <a href="">Project</a>
                    <br />
                    <a href="">Our Team</a>
                    <br />
                    <a href="">Facte</a>
                    <br />
                    <a href="">Customers</a>
                </div>
                <div className='box-4'>
                    <h3>Get In Touch</h3>
                    <p>Rt. 66, Downtown, Washington,DC</p>
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