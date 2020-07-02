const mongoose = require("mongoose")

const Tag = mongoose.model(
    "User",
    new mongoose.Schema({
        name : { type : String , unique : false, required : true },
        last_name : { type : String , unique : false, required : true },
        birth : { type : Date , unique : false, required : false },
        username : { type : String , unique : true, required : true },
        password : { type : String , unique : false, required : true },
        email : { type : String , unique : true, required : true },
        inscription_number : { type : String , unique : false, required : true },
        grade : { type : Number , unique : false, required : true },
        role : { type : String , unique : false, required : true },
        join_date : { type : Date , unique : false, default : Date.now },


        
    })
  );
  
  module.exports = Tag;