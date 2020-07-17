const mongoose = require("mongoose");
const { text } = require("express");

const Tag = mongoose.model(
    "Experience",
    new mongoose.Schema({
        position : { type : String , unique : false, required : true },
        agency : { type : String , unique : false, required : true },
        start : { type : String , unique : false, required : false },
        end : { type : String , unique : false, required : false },
        description : { type : String , unique : false, required : true },

    
    })
  );
  
  module.exports = Tag;