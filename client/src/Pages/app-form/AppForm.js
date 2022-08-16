import React, { useState, useEffect } from 'react';
import './AppForm.scss';
import axios from 'axios';
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
        <div className="section-1"></div>
        <div className="section-2">
            <form action="">
                {
                    sent ? 
                    <img src="https://thumbs.dreamstime.com/b/message-sent-notification-vector-icon-wbsite-design-element-120000357.jpg" alt="" />
                    :
                    <>
                       <h2>Project Form</h2>
                        <label htmlFor="">Project Art</label>
                        <select name="" id="" onChange={(e) => setProjectArt(e.target.value)}>
                            <option>Choose your Project Art</option>
                            <option>desktop aplication</option>
                            <option>online shop</option>
                            <option>homepage/website</option>
                            <option>mobile aplication</option>
                            <option>web aplication</option>
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
                        <label>Project state</label>
                        <br />
                        <select required name="" id="" onChange={(e) => setStatus(e.target.value)}>
                            <option>Project state</option>
                            <option>ich habe noch kein</option>
                            <option>soll Über arbeiten werden</option>
                            <option>sonstiges</option>
                        </select>
                        <br />
                        <label>wie möchten kontaktieren werden</label>
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
                        }}>SEND</button>
                    </>
                }
               
            </form>
        </div>
    </div>
  )
}

export default AppForm;