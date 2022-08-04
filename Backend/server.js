const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const DB = 'mongodb://127.0.0.1:27017/ContactMassage';
const ContactMassage = require('./Model')

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

app.listen(port,()=>{
    console.log( ` server listening on ${port}` );
});
