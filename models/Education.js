const mongoose = require("mongoose")

const Tag = mongoose.model(
    "Education",
    new mongoose.Schema({
        diploma : { type : String , unique : false, required : true },
        institut : { type : String , unique : false, required : true },
        start : { type : Date , unique : false, required : false },
        end : { type : Date , unique : false, required : false },
    
    })
  );
  
  module.exports = Tag;