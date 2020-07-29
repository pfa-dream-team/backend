const mongoose = require("mongoose")

const Tag = mongoose.model(
    "Document",
    new mongoose.Schema({
        name : { type : String , unique : false, required : true },
        url : { type : String , unique : false, required : true },
        description : { type : String , unique : false, required : false },
        cible: [
            String
        ]
    
    })
  );
  
module.exports = Tag;