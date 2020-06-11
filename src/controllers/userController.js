const env = require( 'dotenv');
const sharp = require('sharp');

const userModel = require( '../models/user');
const serviceUser = require('../models/service_user')
const jwtUtil = require('../security/jwtAuth')

env.config();

const user = {


    createServiceUser: (req,res) => {
        const email = req.query.email;
        const apiKey = jwtUtil.generateApiKey();
        const newServiceUser =  new serviceUser({email, apiKey});
        newServiceUser.save().then(() => {
            res.json(newServiceUser)
        }).catch((error) => {
            res.json(error)
        })
    },

    getAllUsers: (req, res) => {
        userModel.find().select(['-avatar'])
          .then((users) => res.json({status: 'Success', message: 'List of Users', data: users}))
          .catch(err => res.status(400).json({status: 'Failed', message: err.message, data: null}));
    },
    getUser: (req, res) => {
       userModel.findById(req.params.id).then((user) => {
            res.json({status: 'Success', message: 'User Details', data: user})
        }).catch((err) => {
            res.status(400).json({status: 'Failed', message: err.message, data: null})
        })
    },
    addUser: (req, res) => {
        const { firstName, lastName, email, phone, age, status, address, gender, level } = req.body;
        const newUser = new userModel({firstName, lastName, email, phone, age, status, address, gender, level});
        newUser.save().then(() => res.json({status: 'Success', message: 'New user created!', data: newUser}))
        .catch( err => res.status(400).json({status: 'Failed', message: err.message, data: null}));
    },
    removeUser: (req, res) =>{
        userModel.findByIdAndDelete({_id: req.params.id}).then(()=> res.status(200).json({status: 'Success', message: 'User removed!', data: null}))
        .catch((err) => res.status(400).json({status: 'Failed', message: err.message, data: null}));
    },
    setUserFirstName: async (req, res) => {
        const user = await userModel.findOneAndUpdate({ _id: req.params.id }, {firstName : req.body.firstName}).then((user) => {
            res.status(200).json({status: 'Success', message: 'First name updated!', data: user});
        }).catch((err) => {
            res.status(400).json({status: 'Failed', message: err.message, data: null});
        });

    },

    setUserLastName: async (req, res) => {
        const user = await userModel.findOneAndUpdate({ _id: req.params.id }, {lastName : req.body.lastName}).then((user) => {
            res.status(200).json({status: 'Success', message: 'Last name updated!', data: user});
        }).catch((err) => {
            res.status(400).json({status: 'Failed', message: err.message, data: null});
        });

    },
    getUserFirstName: (req, res) =>{
        userModel.findOne({_id: req.params.id}).then(user => res.json({status: 'Success', message: 'User first name', data: user.firstName}))
        .catch((err) => res.status(400).json({status: 'Failed', message: err.message, data: null}));
    },
    getUserLastName: (req, res) =>{
        userModel.findOne({_id: req.params.id}).then(user => res.json({status: 'Success', message: 'User last name', data: user.lastName}))
        .catch((err) => res.status(400).json({status: 'Failed', message: err.message, data: null}));
    },
    setUserEmail: async (req, res) =>{
        const {email} = req.body;
        await userModel.findOne({_id: req.params.id}).then(user =>{
            user.email = email;
            user.save().then(()=> res.status(200).json({status: 'Success', 'Message': 'Email updated!', 'Data': user}))
            .catch((err) => res.status(400).json({status: 'Failed', message: err.message, data: null}));
        }).catch((err) => res.status(400).json({status: 'Failed', message: err.message, data: null}));
    },
    setUserPhone: (req, res) =>{
        const {phone} = req.body;
        userModel.findOne({_id: req.params.id}).then(user =>{
            user.phone = phone;
            user.save().then(()=> res.status(200).json({status: 'Success', 'Message': 'Phone number updated!', 'Data': user}))
            .catch((err) => res.status(400).json({status: 'Failed', message: err.message, data: null}));
        }).catch((err) => res.status(400).json({status: 'Failed', message: err, data: null}));
    },
    getUserEmail: (req, res) =>{
        userModel.findOne({_id: req.params.id}).then(user => res.json({status: 'Success', message: 'User email', data: user.email}))
        .catch((err) => res.status(400).json({status: 'Failed', message: err.message, data: null}));
    },
    getUserPhone: (req, res) =>{
        userModel.findOne({_id: req.params.id}).then(user => res.json({status: 'Success', message: 'User phone number', data: user.phone}))
        .catch((err) => res.status(400).json({status: 'Failed', message: err.message, data: null}));
    }, 
    setUserAge: (req, res) =>{
        const {age} = req.body;
        userModel.findOne({_id: req.params.id}).then(user =>{
            user.age = age;
            user.save().then(() =>
            res.status(200).json({status: 'Success', message: 'Age updated!', data: user}))
        }).catch((err) => res.status(400).json({status: 'Failed', message: err.message, data: null}));
    },
    getUserAge: (req, res) =>{
        userModel.findOne({_id: req.params.id}).then(user => res.json({status: 'Success', message: 'User age', data: user.age}))
        .catch((err) => res.status(400).json({status: 'Failed', message: err.message, data: null}));
    },
    setUserStatus: async (req, res) =>{
        const {status} = req.body;
        await userModel.findOne({_id: req.params.id}).then(users =>{
            users.status = status;
            users.save().then(()=> res.status(200).json({status: 'Success', message:'User status updated!', data: user}))
            .catch((err) => res.status(400).json({status: 'Failed', message: err.message, data: null}));
        }).catch((err) => res.status(400).json({status: 'Failed', message: err.message, data: null}));
    },
    getUserStatus: (req, res) =>{
        userModel.findOne({_id: req.params.id}).then(user => res.json({status: 'Success', message: 'User status', data: user.status}))
        .catch((err) => res.status(400).json({status: 'Failed', message: err.message, data: null}));
    },
    setUserLevel: async (req, res) =>{
        const {level} = req.body;
        await userModel.findOne({_id: req.params.id}).then(users =>{
            users.level = level;
            users.save().then(()=> res.status(200).json({status: 'Success', message:'User level updated!', data: user}))
            .catch((err) => res.status(400).json({status: 'Failed', message: 'An Error Occurred', data: null}));
        }).catch((err) => res.status(400).json({status: 'Failed', message: 'An Error Occurred', data: null}));
    },
    getUserLevel: (req, res) =>{
        userModel.findOne({_id: req.params.id}).then(user => res.json({status: 'Success', message: 'User level', data: user.level}))
        .catch((err) => res.status(400).json({status: 'Failed', message: 'An Error Occurred', data: null}));
    },
    setUserGender: (req, res) =>{
        const {gender} = req.body;
        userModel.findOne({_id: req.params.id}).then(user =>{
            user.gender = gender;
            user.save().then(() =>
            res.status(200).json({status: 'Success', message: 'User gender updated!', data: user}))
        }).catch((err) => res.status(400).json({status: 'Failed', message: err.message, data: null}));
    },
    getUserGender: (req, res) =>{
        userModel.findOne({_id: req.params.id}).then(user => res.json({status: 'Success', message: 'User gender', data: user.gender}))
        .catch((err) => res.status(400).json({status: 'Failed', message: err.message, data: null}));

    },
    setUserAddress: (req, res) =>{
        const {address} = req.body;
        userModel.findOne({_id: req.params.id}).then(user =>{
            user.address = address;
            user.save().then(() =>
            res.status(200).json({status: 'Success', message: 'User address updated!', data: user}))
        }).catch((err) => res.status(400).json({status: 'Failed', message: err.message, data: null}));
    },
    getUserAddress: (req, res) =>{
        userModel.findOne({_id: req.params.id}).then(user => res.json({status: 'Success', message: 'User address', data: user.address}))
        .catch((err) => res.status(400).json({status: 'Failed', message: err.message, data: null}));

    },
    getActiveUsers: (req, res) => {
        userModel.find({ status: 'ACTIVE'})
        .then(users => res.json({status: 'Success', message: 'List of active users', data: users}))
        .catch(err => res.status(400).json({status: 'Failed', message: err.message, data: null}))
    },
    getInActiveUsers: (req, res) => {
        userModel.find({ status: 'INACTIVE'})
        .then(users => res.json({status: 'Success', message: 'List of inactive users', data: users}))
        .catch(err => res.status(400).json({status: 'Failed', message: err.message, data: null}))
    },
    getInternUsers: (req, res) => {
        userModel.find({ level: "INTERN"})
        .then(users => res.json({status: 'Success', message: 'List of interns', data: users}))
        .catch(err => res.status(400).json({status: 'Failed', message: err.message, data: null}))
    },
    getMentorUsers: (req, res) => {
        userModel.find({ level: "MENTOR"})
        .then(users => res.json({status: 'Success', message: 'List of mentors', data: users}))
        .catch(err => res.status(400).json({status: 'Failed', message: err.message, data: null}))
    },
    getUserAvatar: async (req, res)=>{
        try{
            const user = await userModel.findById(req.params.id)
            if(!user || !user.avatar){
                throw new Error()
            }
            res.set('Content-Type','image/png');
            res.send(user.avatar)
        }catch(err){
            res.status(400).json({status: 'Failed', message: err.message, data: null})
        }
    },
        
    setUserAvatar: async (req, res)=>{

        const url = req.protocol+ "://"+req.get('host')+req.originalUrl
        try{
            const buffer = await sharp(req.file.buffer).resize({width:250, height: 250}).png().toBuffer();
            const user = await userModel.findOne({_id: req.params.id});
            user.avatar = buffer;
            user.url = url;
            await user.save().then(()=> res.status(200).json({status: 'Success', message:'Avatar updated!', data:{url}}))
        }catch(err){
            res.status(400).json({status: 'Failed', message: err.message, data: null})
        }
    },

    removeUserAvatar: async (req, res)=>{
        try{
            const user = await userModel.findById(req.params.id);
            user.avatar = undefined;
            user.url = "NA";
            await user.save();
            res.status(200).send({status: 'Success', message: 'Profile image deleted successfully', data: null})
        }catch(err){
            res.status(400).json({status: 'Failed', message: err.message, data: null})
        }
    }
    
};

module.exports = user;
