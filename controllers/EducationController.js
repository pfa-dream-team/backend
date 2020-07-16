const express = require('express')
const mongoose = require("mongoose")
const User = require('../models/User')
const Cv = require('../models/Cv')
const Education = require("../models/Education")

// Adding new Education feild to cv
exports.postAddEducation = async (req,res) =>{
    try {
    eductaion = new Education({
        diploma : req.body.diploma,
        institut : req.body.institut,
        start : req.body.start,
        end : req.body.end,
       
    })
    Saved_Education = await eductaion.save();
    const cv = await Cv.findByIdAndUpdate(req.body.cv_id,{
      $push: {
        eductaion: Saved_Education
    } })
    const Newcv = await Cv.findById(req.body.cv_id).populate('eductaion').populate('experience')
    if (Newcv !== null) {
      return res.json(Newcv)
    }
    } catch (error) {
        return res.status(500).json({ message: error.message })
        
    }
    
    

}
// Delleting One education
exports.deleteDeleteEducation = async (req, res) =>{
  try {
      await Education.findById(req.params.id)
      await Cv.update(req.body.id,{
      $pull: {
        eductaion: req.params.id
       } })
      await Education.deleteOne({ _id: req.params.id })
     const NewCv = await Cv.findById(req.body.id_cv)
     res.status(200).json(NewCv)
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  
}
// Editing One Education feild on a cv
exports.patchEditEducation = async (req, res) =>{
  try {
      const education = await Education.findById(req.params.id)
      education.diploma = req.body.diploma
      education.institut = req.body.institut
      education.start = req.body.start
      education.end = req.body.end
      const Saved_Education = await education.save();
      const Newcv = await Cv.findByIdAndUpdate(req.body.id,{
        $set: {
          eductaion: Saved_Education
      } })
      if (Newcv == null) {
          return res.status(404).json({ message: "Cannot save eductaion " })
        }else{
          return res.json(Newcv)
        }

    } catch (err) {
      return res.status(500).json({ message: err.message })

    }
  
}