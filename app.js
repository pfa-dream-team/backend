const express = require('express')
const cors = require('cors');
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
//allow cores





//importing admin routes

//importing user routes
const UserRoutes = require('./routes/UserRoutes');
app.use(cors({origin: "*"}));
//app.options('*', cors());
app.use('/',UserRoutes);
// error handler

app.listen(8000, function () {
  console.log('Example app listening on port 3000!')
})
module.exports = app;