const express = require('express');
const router = express.Router();

//User Model
const User = require('../../../model/userModel');

//Get UsersList from api/users

router.get('/',(req,res)=>{
    User.find()
        .then(User=> res.json(User))
});

router.get('/:Name', (req,res)=>{
    User.find({Name : req.params.Name})
        .then(User => res.json({data: User, success: true}))
})

//Post users to api/user
router.post('/',(req,res)=>{
    const {Name, Gender, Phone_Number, Email, Address, Nationality, Date_Of_Birth, Education_Background } = req.body;
    const newUser = new User({
        Name,
        Gender,
        Phone_Number,
        Email,
        Address,
        Nationality,
        Date_Of_Birth,
        Education_Background
    });

    if(!Name){
        return res.send({
            success: false,
            message: "Error: Name cannot be blank."
        });
    }
    if(!Gender){
        return res.send({
            success: false,
            message: "Error: Gender needs to be selected."
        });
    }
    if(!Phone_Number){
        return res.send({
            success: false,
            message: "Error: Phone number cannot be blank."
        });
    }
    if(!Email){
        return res.send({
            success: false,
            message: "Error: Email cannot be blank."
        });
    }
    if(!Address){
        return res.send({
            success: false,
            message: "Error: Address cannot be blank."
        });
    }
    if(!Nationality){
        return res.send({
            success: false,
            message: "Error: Nationality needs to be selected."
        });
    }
    if(!Date_Of_Birth){
        return res.send({
            success: false,
            message: "Error: Date of birth cannot be blank."
        });
    }
    if(!Education_Background){
        return res.send({
            success: false,
            message: "Error: Education background cannot be blank."
        });
    }
    newUser.save()
    .then(User => res.json(User));
});

module.exports = router;