const mongoose = require("mongoose");
const { text } = require("express");

const Tag = mongoose.model(
    "Experience",
    new mongoose.Schema({
        position : { type : String , unique : false, required : true },
        agency : { type : String , unique : false, required : true },
        start : { type : Date , unique : false, required : false },
        end : { type : Date , unique : false, required : false },
        description : { type : String , unique : false, required : true },

    
    })
  );
  
  module.exports = Tag;