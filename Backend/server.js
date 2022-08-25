const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const DB = 'mongodb://127.0.0.1:27017/ContactMassage';
const ContactMassage = require('./Model')
const appointment = require('./Model')


const ProjectInformation = require('./ProjectModel.js');

app.use( bodyParser.urlencoded({extended: true} ));
app.use( bodyParser.json() );
app.use( '/static' ,express.static(path.join(__dirname, '../dist'), { index: false }));
app.use( cors() );


app.get('*', (req, res) => {
    res.status(200).sendFile( path.join(__dirname,'../dist' , 'index.html'));
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
    })

})

app.post('/Appointment', (req,res)=>{

  const { name , email , subject , massage , Date  } = req.body ;
  console.log(req.body);
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
        res.redirect('/Appointment');
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
        //   res.redirect('/Contact');
    })


})

app.listen(port,()=>{
    console.log( ` server listening on ${port}` );
});
