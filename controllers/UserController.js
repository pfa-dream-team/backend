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


exports.getAuthentification = (req, res, next)=>{
    res.send('Authentification')
};
exports.postAuthentification = async (req, res, next)=>{
    const email = req.body.email
    const password = req.body.password
    User.findOne({email : email}).then(user =>{
        bcrypt.compare(password, user.password).then(result =>{
            if( result == true){
                res.status(200).json(user);
            }else{
                res.status(400).json({message : "wrong password"});
            }
            
        }).catch(error =>{
            {
                res.status(404).json({message : error.message});
            }
        })

    }).catch(error =>{
        res.status(404).json({message: error.message});
    })
};