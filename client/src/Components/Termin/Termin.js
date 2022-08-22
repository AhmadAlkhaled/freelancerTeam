import  './Termin.scss';
import React, { useState , useEffect} from 'react';
import DatePicker from 'sassy-datepicker';
import axios from 'axios';

const Termin = ()=>{
  
    return(
        <div className='Termin' > 
        <div className='opacity' >
            <div className='btn'  onClick={()=>{
            window.open('/Appointment','_self')
            }} >
            <i class="fas fa-calendar-alt"></i>
            Make An Appointment
            </div>
        </div>
        </div>
    )
}

export { Termin }


const TerminPage = ()=>{

    const [date, setDate] = useState(new Date());
    const [Time, setTime] = useState('');
    const [submit, setsubmit] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
    const Appointment = {
      name: name,
      email: email,
      subject: subject,
      message: message,
      Date: `  ${Time}  ${date.getDate()} ${ months[date.getMonth()] }  ${ date.getFullYear() }  ` ,
    }
   

    const SendMessage = (e) => {
        e.preventDefault();
       
      if(name && email && subject && message) {
        console.log(Appointment);
        axios.post('/Appointment', Appointment)
        .then((res) => {
          console.log(res);
        })
      }
    }

    
    const onChange = newDate => {
        setDate(newDate);
    };
    setTimeout(() => {
        const x = document.querySelector('.sdp ');
        x.style.width ='500px';
    }, 10);
   

   
const  time = (e)=>{
    const btns = document.querySelectorAll('.disabled');
    for (let i = 0; i < btns.length; i++) {
    btns[i].classList='time1'
    }
    if(e.target.classList.value == 'time1')
    {
        setTime(e.target.textContent);
        e.target.classList='disabled'
    }
}
   

    return(
        <div className='TerminPage' > 
        <div className='min' > 
       
       <h2>    <i class="fas fa-calendar-alt"></i>  {Time}  {date.getDate()} { months[date.getMonth()] }  { date.getFullYear() } </h2>
      
            <DatePicker onChange={onChange} value={date} options={{ weekStartsFrom: 'Monday' }} />

            <div className='time' onClick={time} >
                <div className='time1' >10:00 </div>
                <div className='time1' >11:00 </div>
                <div className='time1' >13:00 </div>
                <div className='time1' >14:00 </div>
                <div className='time1' >15:00 </div>
            </div>
            <form  onSubmit={()=>{setsubmit(true)}} >
                     
                      <input 
                        type="text"    
                        placeholder="Name" 
                        name="name" 
                        required 
                        onChange={(e) => setName(e.target.value)}
                        />
                      <br />
                      <input 
                        type="text" 
                        placeholder='Email' 
                        name="email" 
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        />
                      <br />
                      <input 
                        type="text" 
                        placeholder='Subject' 
                        name="subject" 
                        required
                        onChange={(e) => setSubject(e.target.value)}
                        />
                      <br />
                      <textarea 
                        id="" 
                        cols="30" 
                        rows="10" 
                        placeholder="Massage" 
                        name="massage" 
                        required
                        onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                      <br />
                      <div className='buttBox' >
                      <button  onClick={SendMessage} type='submit' className='butt' > Submit </button>
                      </div>
                    </form>
          
            
        </div>
        
        
      
        </div>
    )
}

export { TerminPage }