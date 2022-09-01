import React, { useState, useEffect } from 'react';
import './AppForm.scss';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import desktop_pic from '../../imgs/desktop-pic.png'
import online_shop from '../../imgs/online-shop.png'
import home_page from '../../imgs/homepage.png'
import web_app from '../../imgs/web-app.png'
import mobile_app from '../../imgs/mobile-app.png'
import send_icon from '../../imgs/send-icon.jpeg'


const AppForm = () => {
    
    const [sent, setSent] = useState(false)
    const [projectArt, setProjectArt] = useState()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [status, setStatus] = useState()
    const [contactArt, setContactArt] = useState()
    const [message, setMessage] = useState()
    const [formImg, setFormImg] = useState(home_page)
    const [messageError, setMessageError] = useState(false)
    const [formError, setFormError] = useState (false)

    useEffect (() => {
        
        if(projectArt == 'Desktop Application' ){
            setFormImg(desktop_pic)
        }
        if(projectArt == 'Online Shop' ){
            setFormImg(online_shop)
        }
        if(projectArt == 'Home-Page / Website' ){
            setFormImg(home_page)
        }
        if(projectArt == 'Mobile Application' ){
            setFormImg(mobile_app)
        }
        if(projectArt == 'Web Application' ){
            setFormImg(web_app)
        }
        if(projectArt == 'Other' ){
            setFormImg(home_page)
        }

    },[projectArt])
   
    const ProjectInfo = {
        projectArt: projectArt,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        status: status,
        contactArt: contactArt,
        message: message
    }
    const SendProjectInfo = (e) => {
        e.preventDefault();
        if(projectArt && firstName && lastName && email && phone && status && contactArt && message ) {
            
            axios.post('/app-form', ProjectInfo)
            .then((res) => {
              console.log(res);
              console.log(ProjectInfo);
              setForm(home_page)
            })
            if(message.length > 50){
                setMessageError(false)
            }
            else {
                setMessageError(true)
            }
            setSent(true)
            setFormError(false)
            document.documentElement.scrollTop = 0
        }
        else {
            setSent(false)
            setFormError(true)
        }   
    }
  return (
    <div className="app-form">
          <div className="section-1">          
            </div>
            <div className="section-2">
    
            <form action="">
                {
                    sent ? 
                    <div className="sent-message" >
                       <h3> Thanks for contacting Us ! We will be in touch with you shortly.</h3>
                        <div className="sent-message-img"><img src={send_icon} alt="" /></div>
                        <NavLink to="/app-form"> <button onClick={() => {
                            setSent(false)
                            setFormImg(home_page)
                            window.location.reload()
                            }}>Done</button> </NavLink>
                    </div>
                    :
                    <>
                       <h2>Start Your Project</h2>
                        <label htmlFor="">Project Art <span>*</span></label>
                        <select name="" required onChange={(e) => 
                            setProjectArt(e.target.value)}>
                            <option  value='' disabled selected hidden >Choose Your Project Art</option>
                            <option >Desktop Application</option>
                            <option >Online Shop</option>
                            <option >Home-Page / Website</option>
                            <option >Mobile Application</option>
                            <option >Web Application</option>
                            <option >Other</option>
                        </select>
                        <div className="info">
                            <div className="inputs">
                                <label>First Name <span>*</span></label>
                                <br />
                                <input 
                                type="text" 
                                required
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                />

                            </div>
                            <div className="inputs">
                                <label htmlFor="">Last Name <span>*</span></label>
                                <br />
                                <input 
                                type="text" 
                                required
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div className="inputs">
                                <label htmlFor="">Email Address <span>*</span></label>
                                <br />
                                <input 
                                type="text" 
                                required
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="inputs">
                                <label htmlFor="">Phone Number <span>*</span></label>
                                <br />
                                <input 
                                type="text" 
                                required
                                placeholder="Phone Number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                        </div>
                        <label>Project Status <span>*</span></label>
                        <br />
                        <select required name="" id=""  onChange={(e) => setStatus(e.target.value)}>
                            <option value='' disabled selected hidden> Choose Your Project Status</option>
                            <option>I do not Have Project, yet</option>
                            <option>Should be over working</option>
                            <option>Other</option>
                        </select>
                        <br />
                        <label>How do you prefer to be contacted <span>*</span> </label>
                        <br/>
                        <select required name="" onChange={(e) => setContactArt(e.target.value)}>
                            <option value='' disabled selected hidden>Choose Your Contact Art </option>
                            <option>Email </option>
                            <option>Telefon</option>
                        </select>
                        { 
                            formError ?
                            <p className='timeerorrmsg'>Please Fill All Field's</p>
                            :
                            null
                        }
                        <br />
                        <label>Message <span>*</span></label>
                        <br/>
                        {messageError ? <p style={{ color: 'red' }}>Message Must be Over 50 Character</p> : null}
                        
                        <textarea required name="" id="" cols="30" rows="10" placeholder="Message" value={message}
                        onChange={(e) => {
                            setMessage(e.target.value)
                            if(message.length < 50) {
                              setMessageError(true)
                            }
                            else {
                                setMessageError(false)
                            }
                        }}
                        ></textarea>
                        <br />
                       <button onClick={(e) => {
                            SendProjectInfo(e)
                        }}>SEND</button> 
                    </>
                }
               
            </form>

                 {
                    !sent ?
                    <div className="section-pictures" 
                        style={{
                            backgroundImage: `url(${formImg})`,
                        }}>
                    </div>
                    :
                    null
                 }
              
        </div>
    </div>
  )
}

export default AppForm;