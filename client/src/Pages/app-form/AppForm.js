import React, { useState, useEffect } from 'react';
import './AppForm.scss';
import axios from 'axios';

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
    const [formImg, setFormImg] = useState()

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
    const SendProjectInfo = () => {
        if(projectArt && firstName && lastName && email && phone && status && contactArt && message) {
            axios.post('/app-form', ProjectInfo)
            .then((res) => {
              console.log(res);
              console.log(ProjectInfo);
            })
        }
    }
  return (
    <div className="app-form">
        <div className="section-1">
            <div className="section-pictures" 
            style={{
                backgroundImage: `url(${formImg})`,
            }}>
            </div>
        </div>
        <div className="section-2">
            <form action="">
                {
                    sent ? 
                    <img src={send_icon} alt="" />
                    :
                    <>
                       <h2>Project Form</h2>
                        <label htmlFor="">Project Art</label>
                        <select name="" id="" onChange={(e) => 
                            setProjectArt(e.target.value)}>
                            <option>Choose your Project Art</option>
                            <option>Desktop Application</option>
                            <option>Online Shop</option>
                            <option>Home-Page / Website</option>
                            <option>Mobile Application</option>
                            <option>Web Application</option>
                            <option>Other</option>
                        </select>
                        <div className="info">
                            <div className="inputs">
                                <label>First Name</label>
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
                                <label htmlFor="">Last Name</label>
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
                                <label htmlFor="">Email Address</label>
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
                                <label htmlFor="">Phone Number</label>
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
                        <label>Project State</label>
                        <br />
                        <select required name="" id="" onChange={(e) => setStatus(e.target.value)}>
                            <option>Project state</option>
                            <option>ich habe noch kein</option>
                            <option>soll Über arbeiten werden</option>
                            <option>sonstiges</option>
                        </select>
                        <br />
                        <label>How do you prefer to be contacted </label>
                        <br/>
                        <select required name="" onChange={(e) => setContactArt(e.target.value)}>
                            <option>Contact Art </option>
                            <option>Email </option>
                            <option>Telefon</option>
                        </select>
                        <br />
                        <label>Message</label>
                        <br/>
                        <textarea required name="" id="" cols="30" rows="10" placeholder="Message" value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        <br />
                        <button onClick={() => {
                            SendProjectInfo()
                            setSent(true)
                            setFormImg()
                        }}>SEND</button>
                    </>
                }
               
            </form>
        </div>
    </div>
  )
}

export default AppForm;