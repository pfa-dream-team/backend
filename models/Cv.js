const mongoose = require("mongoose")

const Tag = mongoose.model(
    "Cv",
    new mongoose.Schema({
        name : { type : String , unique : false, required : true },
        last_name : { type : String , unique : false, required : true },
        position : { type : String , unique : false, required : true },
        address : { type : String , unique : false, required : true },
        email : { type : String , unique : false, required : true },
        tel : { type : Number , unique : false, required : false },
        linkedin : { type : String , unique : false, required : true },
        facebook : { type : String , unique : false, required : true },
        eductaion : [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Education"
            }
        ],
        experience : [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Experience"
            }
        ],
        competence : [
            String
        ]
      
    })
  );
  
  module.exports = Tag;