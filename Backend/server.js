const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const DB = 'mongodb+srv://team:team@cluster0.chvcs59.mongodb.net/?retryWrites=true&w=majority';
const ContactMassage = require('./Model')
const appointment = require('./Model')
const ProjectInformation = require('./ProjectModel.js');

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
          const connect = new ContactMassage({
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
          html:`<h1 style="color:grey">Welcome ${req.body.name.charAt(0).toUpperCase() + req.body.name.substring(1,100) } </h1><p
          style="font-size:15px"
          >
          <br/>
          Thanks so much for reaching out! This Auto-reply is just to let you know…<br/>
          <br/>
          I received your email and will get back to you with a ( Human ) response as soon as possible.<br/>
          During [ Business_Hours ] that’s usually within a couple of hours. Evenings and weekends may take me a little bit longer.<br/>
          If you have any additional information that you think will help me to assist you, please feel free to reply to this email.
          </p>
          <a href="mailto:Stexe@msn.com">Send E-mail</a>
          <div style= "
          width: 370px;
          height:200px;
          background-image : url('https://i.ibb.co/qNFb8FQ/logo.png');
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
           ">
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
        html:`<h1 style="color:grey">Welcome ${req.body.name.charAt(0).toUpperCase() + req.body.name.substring(1,100) } </h1><p
        style="font-size:15px"
        >
        <br/>
        Thanks so much for reaching out! This Auto-reply is just to let you know…<br/>
        <br/>
        I received your email and will get back to you with a ( Human ) response as soon as possible.<br/>
        During [ Business_Hours ] that’s usually within a couple of hours. Evenings and weekends may take me a little bit longer.<br/>
        If you have any additional information that you think will help me to assist you, please feel free to reply to this email.
        </p>
        <a href="mailto:Stexe@msn.com">Send E-mail</a>
        <div style= "
        width: 370px;
        height:200px;
        background-image : url('https://i.ibb.co/qNFb8FQ/logo.png');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
         ">
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
          subject:`We got it — RE: [ ${req.body.projectArt } ${req.body.name} ${req.body.lastName} ]`,
          html:`<h1 style="color:grey">Welcome ${req.body.firstName.charAt(0).toUpperCase() + req.body.lastName.charAt(0).toUpperCase() } </h1><p
          style="font-size:15px"
          >
          <br/>
          Thanks so much for reaching out! This Auto-reply is just to let you know…<br/>
          <br/>
          I received your email and will get back to you with a ( Human ) response as soon as possible.<br/>
          During [ Business_Hours ] that’s usually within a couple of hours. Evenings and weekends may take me a little bit longer.<br/>
          If you have any additional information that you think will help me to assist you, please feel free to reply to this email.
          </p>
          <a href="mailto:Stexe@msn.com">Send E-mail</a>
          <div style= "
          width: 370px;
          height:200px;
          background-image : url('https://i.ibb.co/qNFb8FQ/logo.png');
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
           ">
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

})

app.get('*', (req, res) => {
  res.status(200).sendFile( path.join(__dirname,'../dist' , 'index.html'));
})

app.listen(port,()=>{
    console.log( ` server listening on ${port}` );
});
