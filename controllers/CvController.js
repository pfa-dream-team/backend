const express = require('express')
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
    user = await User.findById(req.body.id)
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
        return res.status(404).json({ message: 'Cannot find subscriber' })
      }else{
        return res.json(result)
      }
    } catch (error) {
        return res.status(500).json({ message: err.message })
        
    }
    
    

}