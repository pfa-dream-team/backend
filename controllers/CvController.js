const express = require('express')
const mongoose = require("mongoose")
const User = require('../models/User')
const Cv = require('../models/Cv')
// Getting aLL CVS
exports.getAllCvs = async (req,res )=>{
  try {
      cvs = await Cv.find();
      res.json(cvs)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
}
// Adding new Cv
exports.postAddCv = async (req,res) =>{
    try {
    user = await User.findById(req.body.user_id)
    cv = new Cv({
        address : req.body.address,
        email : user.email,
        tel : req.body.tel,
        linkedin : req.body.linkedin,
        facebook : req.body.facebook
    })
    Saved_Cv = await cv.save();
    user.cv = Saved_Cv;
    result = await user.save();
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
exports.deleteDeleteCv = async (req, res) =>{
  try {
     const cv = await Cv.findById(req.params.id)
     const user = await User.findOne({email: cv.email})
     user.cv  = null
     Newuser = await user.save()
     const result = await Cv.deleteOne({ _id: req.params.id })
     cvs = await Cv.find();
     res.status(200).json(cvs)
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  
}
// Editing One cv
exports.patchEditUser = async (req, res) =>{
  try {
      const cv = await Cv.findById(req.params.id)
      const user = await User.findOne({email: cv.email})
      cv.address = req.body.address
      cv.tel = req.body.tel
      cv.linkedin = req.body.linkedin
      user.facebook = req.body.facebook
      const NewCv = await cv.save();
      user.cv = NewCv;
      const NewUser = await user.save();
      res.status(200).json(NewUser)

    } catch (err) {
      return res.status(500).json({ message: err.message })

    }
  
}