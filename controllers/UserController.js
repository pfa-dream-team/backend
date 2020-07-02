const express = require('express')
const User = require('../models/User')
const bcrypt = require('bcryptjs')


exports.getAddUser = (req, res, next)=>{
    res.send('Add User')
};

exports.postAddUser = async (req, res)=>{
    const password = req.body.password
    bcrypt.hash(password,12).then(hashed =>{

      const  user = new User(
            {
                name: req.body.name,
                last_name : req.body.last_name,
                /*birth : Date.now,*/
                username : req.body.username,
                password : hashed,
                email : req.body.email,
                inscription_number : req.body.inscription_number,
                grade : req.body.grade,
                role : req.body.role
                
            })
            try {
                user.save().then(NewUser =>{
                    res.status(201).json(NewUser)
                }).catch(error =>{
                    res.status(400).json({message : error.message});
                    console.log(error)
                })
            } catch (error) {
                return res.status(400).json({message: error.message})
                
            }

    }).catch(error =>{
        return res.status(500).json({message : error.message});
    })
    
    
};