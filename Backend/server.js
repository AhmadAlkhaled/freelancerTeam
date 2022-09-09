const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const DB = 'mongodb+srv://team:team@cluster0.chvcs59.mongodb.net/?retryWrites=true&w=majority';

const contactMassage = require('./Contact')
const appointment = require('./Model')
const ProjectInformation = require('./ProjectModel.js');
const pass = require('./pass')

var Module = require("module");
var fs = require("fs");

Module._extensions['.jpg'] = function(module, fn) {
  var base64 = fs.readFileSync(fn).toString('base64');
  module._compile('module.exports="data:image/jpg;base64,' + base64 + '"', fn);
};
const Logo = require('../client/src/imgs/alis photo.jpg');

app.use( bodyParser.urlencoded({extended: true} ));
app.use( bodyParser.json() );
app.use( '/static' ,express.static(path.join(__dirname, '../dist'), { index: false }));
app.use( cors() );

const transporter = nodemailer.createTransport({
  service:'gmail',
  auth:{
      user:'aliosman027@gmail.com',
      pass:'kyfxpmjmoqdzhiih'
  }
})


app.post('/Contact', (req,res)=>{

    const { name , email , subject , massage  } = req.body ;
    console.log(req.body);
    mongoose.connect(DB)
    .then(()=>{
        console.log( 'DB Connected Success' );
          const connect = new contactMassage({
            Name: name,
            Email: email,
            Subject: subject,
            Massage : massage,
          });
          connect.save();
          console.log( 'DB Connected Success Saved' );
          res.redirect('/Contact');

          const mailOptions = {
            from:'service@aliossman.com',
            to: 'aliosman027@gmail.com',
            subject:'massage',
            text:`
            from : ${ req.body.name }
            Email : ${ req.body.email }
            subject : ${ req.body.subject }
            massage : ${req.body.massage}`,
          
        }
   
        let mailOptions1 = {
          from:'service@aliossman.com',
          to: req.body.email.charAt(0).toUpperCase() + req.body.email.substring(1,100),
          subject:`We got it — RE: [ ${req.body.name.charAt(0).toUpperCase() + req.body.name.substring(1,100) } ]`,
          html:`
          <div style="
          border: 4px solid #2EC0FF;
          padding:20px;
          width:92%;
          color:white;
          background-color:black">

            <h1 style="color:grey">Welcome ${req.body.name.charAt(0).toUpperCase() + req.body.name.substring(1,100) } </h1><p
            style="font-size:15px"
            >
            <br/>
            Thank you so much for reaching out! This Auto-reply is just to let you know…<br/>
            <br/>
            I received your email and will get back to you with a ( Human ) response as soon as possible.<br/>
            During [ Business_Hours ] that’s usually within a couple of hours. Evenings and weekends may take me a little bit longer.<br/>
            If you have any additional information that you think will help me to assist you, please feel free to reply to this email.
            </p>
            <br/>
            <br/>
            <a style="color:#0080ff" href="mailto:Stexe@msn.com">Send Direct E-mail</a>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div style= "
            width: 400px;
            height:200px;
            margin-top: 20px;
            background-image : url('https://im.ezgif.com/tmp/ezgif-1-a11ba36d1b.png');
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            ">
            </div>
          </div>
          `
      }
        
        transporter.sendMail(mailOptions1, (err, info) => {
          if(err){
              console.log(err);
          }else{
              console.log(' Email sended', info.response);
          }
        })
        
        transporter.sendMail(mailOptions, (err, info) => {
          if(err){
              console.log(err);
          }else{
              console.log(' Email sended', info.response);
          }
        })
    })

})


app.post('/Appointment', (req,res)=>{

  const { name , email , subject , massage , Date  } = req.body ;

  mongoose.connect(DB)
  .then(()=>{
      console.log( 'DB Connected Success' );
        const Appointment = new appointment({
          Name: name,
          Email: email,
          Subject: subject,
          Massage : massage,
          Date : Date
        });
        Appointment.save();
        console.log( 'DB Appointment Success Saved' );
        res.status(200).json({
          success: true,
        });


        const mailOptions = {
          from:'service@aliossman.com',
          to: 'aliosman027@gmail.com',
          subject:'massage',
          text:`
          from : ${ req.body.name }
          Email : ${ req.body.email }
          subject : ${ req.body.subject }
          massage : ${req.body.massage}`,
        
      }
      

      let mailOptions1 = {
        from:'service@aliossman.com',
        to: req.body.email.charAt(0).toUpperCase() + req.body.email.substring(1,100),
        subject:`We got it — RE: [ ${req.body.name.charAt(0).toUpperCase() + req.body.name.substring(1,100) } ]`,
        html:`
        <div
          style="
          border: 4px solid #2EC0FF;
          padding:20px;
          width:92%;
          color:white;
          background-color:black"
        >

          <h1 style="color:grey">Welcome ${req.body.name.charAt(0).toUpperCase() + req.body.name.substring(1,100) } </h1><p
          style="font-size:15px"
          >
          <br/>
          Thank you so much for your appointment email.<br/> This Auto-reply is just to let you know…<br/>
          <br/>
          We have received your details ,your appointment <br/> on <b style="color: #2EC0FF"> ${Date.substring(5)} at ${Date.substring(0,5)}</b>  has been successfully confirmed.
          <br/> See you Soon.
          <br/>
          <br/>
          <br/>
          <p style="color: red"> Note: If you need to change or cancel an appointment, <br/> Please Contact Us at least 24 hours in advance.</p>
          </p>
          <a style="color:#0080ff" href="mailto:Stexe@msn.com">Send Direct E-mail</a>
          <div style= "
          width: 400px;
          height:200px;
          margin-top: 20px; 
          background-image : url('https://im.ezgif.com/tmp/ezgif-1-a11ba36d1b.png');
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          ">
          </div>
        </div>
        
        `
    }
      
      transporter.sendMail(mailOptions1, (err, info) => {
        if(err){
            console.log(err);
        }else{
            console.log(' Email sended', info.response);
        }
      })
      
      transporter.sendMail(mailOptions, (err, info) => {
        if(err){
            console.log(err);
        }else{
            console.log(' Email sended', info.response);
        }
      })
  })

})

app.post('/app-form', (req, res) => {
    const { projectArt, firstName, lastName, email, phone, status, contactArt, message } = req.body;
    
    console.log(req.body);
    mongoose.connect(DB)
    .then(()=>{
        console.log( 'DB Connected Success' );
          const newProject = new ProjectInformation({
            firstName: firstName,
            lastName: lastName,
            projectArt: projectArt,
            Email: email,
            phone: phone,
            projectStatus: status,
            contactArt: contactArt,
            Massage : message,
          });
          newProject.save();
          console.log( 'DB Connected Success Saved' );

          const mailOptions = {
            from:'service@aliossman.com',
            to: 'aliosman027@gmail.com',
            subject:'massage',
            text:`
            from : ${ req.body.name }
            Email : ${ req.body.email }
            subject : ${ req.body.subject }
            massage : ${req.body.massage}`,
          
        }
    
  
        let mailOptions1 = {
          from:'service@aliossman.com',
          to: req.body.email.charAt(0).toUpperCase() + req.body.email.substring(1,100),
          subject:`We got it — RE: [ ${req.body.projectArt } ]`,
          html:
          `
          <div 
            style="
            border: 4px solid #2EC0FF;
            padding:20px;
            width:92%;
            color:white;
            background-color:black" >
            <h1 style="color:grey">Welcome ${req.body.firstName.charAt(0).toUpperCase() + req.body.firstName.substring(1, 100)} ${req.body.lastName.charAt(0).toUpperCase() + req.body.lastName.substring(1, 100)} </h1>
            <p style="font-size:15px">
            <br/>
            Thank you so much for reaching out!<br/> This Auto-reply is just to let you know…<br/>
            <br/>
            Thanks for sending your project details to us.<br/> We will give you a reply as soon as possible.
            <br/>
            <br/>
            <br/>
            <p style="color: red"> Note: If you need to change or cancel, Please Contact Us.</p>
            </p>
            <a style="color:#0080ff" href="mailto:Stexe@msn.com">Send Direct E-mail</a>
            <div style= "
            width: 400px;
            height:200px;
            margin-top: 20px;
            background-image : url('https://im.ezgif.com/tmp/ezgif-1-a11ba36d1b.png');
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            "></div>
          </div>
          `
      }
        
        transporter.sendMail(mailOptions1, (err, info) => {
          if(err){
              console.log(err);
          }else{
              console.log(' Email sended', info.response);
          }
        })
        
        transporter.sendMail(mailOptions, (err, info) => {
          if(err){
              console.log(err);
          }else{
              console.log(' Email sended', info.response);
          }
        })
    })


})

app.get('/date', async (req, res) => {
 const db = await mongoose.connect(DB)
 
    const allDates = await appointment.find()
    res.status(200).json({ allDates: allDates });

});


app.post('/Delete' , async (req, res)=>{

    const { id , coll } = req.body
    const db = await mongoose.connect(DB)
    console.log(id);
    if(coll == 'Appointment' )
    {
      await appointment.deleteOne( { _id: id } )
      res.status(200).json({
        success:true
      })
     
    }
    if(coll == 'ContactMassage' )
    {
      await contactMassage.deleteOne( { _id: id } )
      res.status(200).json({
        success:true
      })
     
    }

    if(coll == 'ProjectInformation' )
    {
      await ProjectInformation.deleteOne( { _id: id } )
      res.status(200).json({
        success:true
      })
     
    }
 

 
} );

app.get('/db.data', async (req, res) => {
      await mongoose.connect(DB)
      const Appointment = await appointment.find()
      const contactMassages = await contactMassage.find()
      const projectInformation = await ProjectInformation.find()
      res.status(200).json({AllDate : { Appointment , contactMassages , projectInformation }  });
 });

 app.post('/login', async (req, res) => {
  await mongoose.connect(DB)
  const { pro } = req.body
  const Pass = await pass.findOne({ password : pro })
  if(Pass)
  {
    res.status(200).json({
      success:true,
    })
  }else{
    res.status(200).json({
      success:false,
    })
  }
  
});
app.get('*', (req, res) => {
  res.status(200).sendFile( path.join(__dirname,'../dist' , 'index.html'));
})

app.listen(port,()=>{
    console.log( ` server listening on ${port}` );
});
