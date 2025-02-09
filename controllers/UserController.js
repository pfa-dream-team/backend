const express = require('express')
const User = require('../models/User')
const Cv = require('../models/Cv')
const bcrypt = require('bcryptjs')
var mongoose = require('mongoose');
const { findOne } = require('../models/User');
var deepPopulate = require('mongoose-deep-populate')(mongoose);


// Getting One user
exports.getUser = async (req, res) =>{
    try {
        user = await (await User.findById(req.params.id)).populate('cv')
        if (user == null) {
          return res.status(404).json({ message: 'Cannot find subscriber' })
        }else{
          return res.json(user)
        }
      } catch (err) {
        return res.status(500).json({ message: err.message })
      }
    
}
// Delleting One user
exports.deleteDeleteUser = async (req, res) =>{
    try {
       const result = await User.deleteOne({ _id: req.params.id })
       users = await User.find();
       res.status(200).json(users)
      } catch (err) {
        return res.status(500).json({ message: err.message })
      }
    
}
// Editing One user
exports.putEditUser = async (req, res) =>{
    try {
        user = await User.findById(req.params.id)
        user.name = req.body.name
        user.last_name = req.body.last_name
        user.email = req.body.email
        user.inscription_number = req.body.inscription
        user.birth = req.body.birth
        user.grade = req.body.grade
        user.role = req.body.role
        const NewUser = await user.save();
        const NewUsers = await User.find();
        res.status(200).json(NewUsers)
      } catch (err) {
        return res.status(500).json({ message: err.message })

      }
    
}
// Activating One user
exports.patchActivateUser = async (req, res) =>{
    try {
        user = await User.findById(req.params.id)
        user.active = req.body.active
        await user.save();
        const users = await User.find();
        res.status(200).json(users)
  
      } catch (err) {
        return res.status(500).json({ message: err.message })

      }
    
}

//Getting All users
exports.getAllUser = async (req,res )=>{
    try {
        users = await User.find().populate({ path: 'cv', populate: { path: 'experience' }}).exec()
        
        res.json(users)
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
}
// Adding new user
exports.postAddUser = async (req, res)=>{
    const password = req.body.password
    bcrypt.hash(password,12).then(hashed =>{

      const  user = new User(
            {
                name: req.body.name,
                last_name : req.body.last_name,
                birth : req.body.birth,
                password : hashed,
                email : req.body.email,
                inscription_number : req.body.inscription,
                grade : req.body.grade,
                role : "user",
                
                
            })
             user.save().then(NewUser =>{
                    res.status(201).json(NewUser)
                }).catch(error =>{
                    res.status(400).json({message : "failed to add user" + error.message});
                    //console.log(error)
                })
           

    }).catch(error =>{
        return res.status(500).json({message : "failed to hash password" + error.message});
    })
    
    
};
// Authentification
exports.putAuthentification = async (req, res, next)=>{
    const email = req.body.email
    const password = req.body.password
    /*User.findOne({email : email}).populate("cv").then(user =>{
        bcrypt.compare(password, user.password).then(result =>{
            if( result == true){
                const cv = await Cv.findById(user.cv._id).populate('eductaion').populate('experience')
                user.cv = cv;
                res.status(200).json(user);
            }else{
                res.status(400).json({message : "wrong password"});
            }
            
        }).catch(error =>{
            {
                res.status(500).json({message : "failed to compare password"+ error.message});
            }
        })

    }).catch(error =>{
        res.status(404).json({message: "user not found with this email "+error.message});
    })*/
    const user = await User.findOne({email : email});
    if (user !== null) {
      result = await bcrypt.compare(password, user.password)
      if (result === true) {
        if(user.cv !== undefined){
          const cv_id = user.cv._id
          const cv = await Cv.findById(cv_id).populate('eductaion').populate('experience')
          user.cv = cv;
        }
         res.status(200).json(user);
       }else{
         res.status(400).json({message : "wrong password"});
       }

    }else{
      res.status(404).json({message: "user not found with this email "+error.message});
    }
    
};