const express = require('express')
const mongoose = require("mongoose")
const User = require('../models/User')
const Cv = require('../models/Cv')
const Experience = require("../models/Experience")

// Adding new Experience feild to cv
exports.postAddExperience = async (req,res) =>{
    try {
    experience = new Experience({
        position : req.body.position,
        agency : req.body.agency,
        start : req.body.start,
        end : req.body.end,
        description : req.body.description
       
    })
    Saved_Experience = await experience.save();
    await Cv.findByIdAndUpdate(req.body.id,{
      $push: {
        experience : Saved_Experience
    } })
    const Newcv = await Cv.findById(req.body.id)
    if (Newcv == null) {
        return res.status(404).json({ message: "Cannot save experience " })
      }else{
        return res.json(Newcv)
      }
    } catch (error) {
        return res.status(500).json({ message: error.message })
        
    }
    
    

}
// Delleting One Experience feild 
exports.deleteDeleteExperience = async (req, res) =>{
  try {
      await Experience.findById(req.params.id)
      await Cv.update(req.body.id,{
      $pull: {
        experience: req.params.id
       } })
      await Experience.deleteOne({ _id: req.params.id })
     const NewCv = await Cv.findById(req.body.id_cv)
     res.status(200).json(NewCv)
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  
}
// Editing One Experience feild 
exports.patchEditExperience = async (req, res) =>{
  try {
      const experience = await Experience.findById(req.params.id)
      experience.position = req.body.position
      experience.agency = req.body.agency
      experience.start = req.body.start
      experience.end = req.body.end
      experience.description = req.body.description
      const Saved_Experience = await experience.save();
      const Newcv = await Cv.findByIdAndUpdate(req.body.id,{
        $set: {
          experience: Saved_Experience
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