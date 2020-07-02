const express = require('express')
const app = express()
const mongoose = require('mongoose')
require("dotenv").config()

mongoose.connect(process.env.DATABASE_URL ,{ useNewUrlParser: true, useUnifiedTopology: true  })
//creating a mongo bd connection
const db = mongoose.connection
//recupering the result and warning on erro 
db.on('error',(error) =>{
    console.error(error);
})
//once success and open
db.once('open',()=>{
    console.log("database opened")
})

//parse the serveur to accep json
app.use(express.json())
//importing admin routes

//importing user routes
const UserRoutes = require('./routes/UserRoutes');
app.use('/',UserRoutes);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})