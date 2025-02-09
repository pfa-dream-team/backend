const mongoose = require("mongoose")


const Tag = mongoose.model(
    "User",
    new mongoose.Schema({
        name : { type : String , unique : false, required : true },
        last_name : { type : String , unique : false, required : true },
        birth : { type : String , unique : false, required : false },
        password : { type : String , unique : false, required : true },
        email : { type : String , unique : true, required : true },
        inscription_number : { type : String , unique : false, required : true },
        grade : { type : String , unique : false, required : true },
        role : { type : String , unique : false, required : true },
        join_date : { type : Date , unique : false, default : Date.now },
        active : { type : Boolean , unique : false, default : 0 },
        cv : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Cv"
        },
        documents : [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Document"
            }
        ],    
    })
  );
  module.exports = Tag;