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
const CvRoutes = require('./routes/CvRoutes');
const EducationRoutes = require('./routes/EducationRoutes');
const ExperienceRoutes = require('./routes/ExperienceRoutes');



app.use(cors({origin: "*"}));
//app.options('*', cors());
mongoose.set('useFindAndModify', false);
app.use('/',UserRoutes);
app.use('/cv',CvRoutes);
app.use('/education',EducationRoutes);
app.use('/experience',ExperienceRoutes);

// error handler

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})
module.exports = app;