import './db.scss';

import { useState,useEffect } from 'react';
import axios from 'axios';


const DB = ()=>{

    const [ Data , setData ]= useState('Appointment');
    const [ DBData , setDBData ]= useState([]);
    const [ login , setLogin ]= useState(false);
    const [ del ,setdel ] = useState(false);
    const [ DeleteData , setDeleteData] = useState(false);
    const [ alert , setAlert] = useState(false);
    const [ alertText , setalertText] = useState('');
    

    const [ A , setA ]= useState([]);
    const [ C , setC ]= useState([]);
    const [ P , setP ]= useState([]);



useEffect(()=>{
    
    const d = prompt('');
    axios.post('/login' , { pro:d} )
    .then((res)=>{
        
        if(res.data.success)
        {
            setLogin(true);
        }else{
            setLogin(false);
            window.open("/", "_self");
        }
    })
 

},[])

const Delete = (e)=>{
    
    const app = document.querySelector('.App');
    app.style.cursor= 'wait';
  
    const data = {
        id:e,
        coll:Data
    }
    axios.post( '/Delete' , data ).then((res)=>{
        
        if(res.data.success)
        {
            app.style.cursor= 'default';
        }
      
    });
    setdel( !del )
}
   
        
   
    useEffect(()=>{

        // setInterval(()=>{
        //     setdel( !del )
        // },1000)

        axios.get( '/db.data' )
        .then((data)=>{
            const element = document.querySelector('.dbNav');
            setA(data.data.AllDate.Appointment)
            setC(data.data.AllDate.contactMassages)
            setP(data.data.AllDate.projectInformation)

            if(Data == 'Appointment')
            {
                setDBData(data.data.AllDate.Appointment);
                element.children[0].style.backgroundColor = 'black'
                element.children[4].style.backgroundColor = ''
                element.children[2].style.backgroundColor = ''
            }
            if(Data == 'ContactMassage')
            {
                setDBData(data.data.AllDate.contactMassages )
                element.children[2].style.backgroundColor = 'black'
                element.children[0].style.backgroundColor = ''
                element.children[4].style.backgroundColor = ''
            }
            if(Data == 'ProjectInformation')
            {
                setDBData(data.data.AllDate.projectInformation )
                element.children[4].style.backgroundColor = 'black'
                element.children[2].style.backgroundColor = ''
                element.children[0].style.backgroundColor = ''
            }
           
        })
    },[Data , del ])
  
    const deleteColl = ()=>{

        axios.post('/DeleteData' , {coll :  Data})
        .then((res)=>{
            setDeleteData(false);
            setAlert(false);
            setdel( !del )
        })
        
    }

    const deleteAll = ()=>{

        axios.post('/DeleteData' , {coll :'All'})
        .then((res)=>{
            setDeleteData(false);
            setAlert(false);
            setdel( !del )
        })
    }
 
 
    return(
        <div className='db' > 
            {
                (DeleteData)?
                <div className='DeleteAllBox' > 
                    <div className='Box' >
                        <i class="fas fa-times" onClick={()=>{ setDeleteData(false) }} ></i>
                        <button onClick={()=>{ 
                            setalertText(<p>Are you sure You want to Delete <span style={{color:'red'}}>All Databases</span> ?</p>),
                            setAlert(true);
                            setDeleteData(false)}} > Delete All Databases </button>
                        <button onClick={()=>{ 
                            setalertText( <p>Are you sure You want to Delete <span style={{color:'red'}} >{ Data }</span> Collection ?  </p>);
                            setAlert(true);
                            setDeleteData(false)
                         }} > Delete { Data } </button>
                    </div>
                </div>
                :
                null
            }
            { 
                alert?
                <div className='DeleteAllBox' > 
                <div className='alert' >
                    {alertText}
                    <div className='btnBox' > 
                        <button onClick={()=>{ setDeleteData(true); setAlert(false) }} > No </button>
                        <button className='Yes' onClick={()=>{ 
                            if(alertText.props.children[1].props.children  == 'All Databases')
                            {
                                deleteAll()
                            }else{
                                deleteColl()
                            }
                         }} > Yes </button>
                    </div>
                </div>
                </div>
                :
                null
            }
       
      
        {
            (login)?
                <>
                    <h2> Our database </h2>
                    <div className='dbNav' > 
                        <div className='dbNavBtn' onClick={ (e)=>{  setData(e.target.textContent) } } >Appointment</div><div className='num'> { A.length } </div>
                        <div className='dbNavBtn' onClick={ (e)=>{  setData(e.target.textContent) } }  >ContactMassage</div><div className='num'> { C.length } </div>
                        <div className='dbNavBtn' onClick={ (e)=>{  setData(e.target.textContent) } }  >ProjectInformation</div><div className='num'>{ P.length }</div>
                        <i class="fas fa-trash-alt" onClick={(e)=>{ setDeleteData(true) }} ></i>
                    </div>

                    <div className='dataInfo' >
                        {
                            ( DBData.length > 0 )?

                                DBData.map((e)=>{
                                    return(
                                        
                                            ( Data == 'ProjectInformation' )?
                                            <>
                                               <div className='InfoElement' >
                                               <i class="fas fa-trash-alt" onClick={(e)=>{ Delete(e.target.parentElement.children[2].textContent) }} ></i>
                                                <p className='createdAt' > 
                                                <snap>{ e.createdAt.substring(0,10) } </snap>
                                                <snap>{ e.createdAt.substring(11,16) }</snap>  
                                                </p>
                                                <snap className='id' >{ e._id }</snap>
                                                <p>firstName : { e.firstName }</p>  
                                                <p>lastName : { e.lastName }</p> 
                                                <p> projectArt : { e.projectArt } </p>
                                                <p> Email : { e.Email } </p>
                                                <p>phone : { e.phone }</p> 
                                                <p>projectStatus : { e.projectStatus }</p>
                                                <p> contactArt : { e.contactArt } </p>   
                                                <p> Massage : <br/> { e.Massage } </p>
                                            </div>

                                            </>

                                            :
                                         <>
                                            <div className='InfoElement' >
                                                <i class="fas fa-trash-alt" onClick={(e)=>{ Delete( e.target.parentElement.children[2].textContent ) }} ></i>
                                                <p className='createdAt' > 
                                                <snap>{ e.createdAt.substring(0,10) } </snap>
                                                <snap>{ e.createdAt.substring(11,16) }</snap>  
                                                </p>
                                                <snap className='id' >{ e._id }</snap>
                                                <p>Name : { e.Name }</p>  
                                                <p>Email : { e.Email }</p> 
                                                <p>Subject : { e.Subject }</p> 
                                                {
                                                    (Data == 'Appointment')?
                                                    <p>Date : { e.Date }</p> 
                                                    :null
                                                }
                                                  
                                            </div>
                                         </>
                                        
                                       
                                    )
                                })

                            :null
                        }
                    </div>
                </>

            :null
        }
           

        </div>
    )
}

export { DB }