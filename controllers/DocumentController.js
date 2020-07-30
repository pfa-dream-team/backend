const express = require('express')
const mongoose = require("mongoose")
const User = require('../models/User')
const Document = require('../models/Document')
// Getting One Document
exports.getDocument = async (req,res )=>{
  try {
      document = await Document.findById(req.params.id)
      //JSON.parse(JSON.stringify(cvs))
      res.json(document)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
}
// Getting aLL Documents
exports.getAllDocuments = async (req,res )=>{
  try {
      documents = await Document.find()
      res.json(documents)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
}
// Adding new Document
exports.postAddDocument = async (req,res) =>{
    try {
    //user = await User.findById(req.body.user_id)
    document = new Document({
        name : req.body.name,
        url : req.body.url,
        description : req.body.description,
        cible : req.body.cible
    })
    Saved_Document = await document.save();
    const user = await User.findByIdAndUpdate(req.body.user_id,{
        $push: {
          documents: document
      } })
    await user.save();
    result = await Document.find()
    if (result == null) {
        return res.status(404).json({ message: 'Cannot save education' })
      }else{
        return res.json(result)
      }
    } catch (error) {
        return res.status(500).json({ message: error.message })
        
    }
    
    

}

// Delleting One user
exports.deleteDocument = async (req, res) =>{
  try {
     //const document = await Document.findById(req.params.id)
     await Document.deleteOne({ _id: req.params.id })
     documents = await Document.find();
     res.status(200).json(documents)
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  
}
// Adding new Document
exports.patchEditDocument = async (req,res) =>{
    try {
    document = await Document.findById(req.params.id)
    document.name = req.body.name
    document.url = req.body.url
    document.description = req.body.description
    document.cible = req.body.cible
    Saved_Document = await document.save();
    result = await Document.find()
    if (result == null) {
        return res.status(404).json({ message: 'Cannot save education' })
      }else{
        return res.json(result)
      }
    } catch (error) {
        return res.status(500).json({ message: error.message })
        
    }
    
    

}
// Getting User Documents
exports.getAllUserDocuments = async (req,res )=>{
  try {
      user = await User.findById(req.params.id).populate('documents')
      res.json(user)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
}