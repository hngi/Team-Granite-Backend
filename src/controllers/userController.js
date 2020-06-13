const env = require( 'dotenv');
const sharp = require('sharp');

const userModel = require( '../models/user');
const serviceUser = require('../models/service_user')
const jwtUtil = require('../security/jwtAuth')
const { errHandler } = require('../handlers/errorHandlers');

env.config();


const user = {

    addServiceUser: (req, res) => {
        try {
            const email = req.body.email;
            const newUser = new serviceUser({
                email,
                apiKey: jwtUtil.generateApiKey()
            })
            newUser.save().then((user) => {
                res.json({status: 'Success', message: `Created Service User`, data: user})
            }).catch((e) => {
                res.status(400).json({status: 'Failed', message: `${e.message}`, data: null})
            })
        }catch (e) {
            res.status(400).json({status: 'Failed', message: `${e.message}`, data: null})
        }
        
    },

    generateToken: async (req,res) => {
        const email = req.query.email;
        await serviceUser.findOne({email}).then((user) => {

            if (!user){
                res.status(400).json({status: 'Failed', message: `User was Not found`, data: null})
                return;
            }

            try {
                res.json({status: 'Success', message: `Generated Token for ${email}`, data: jwtUtil.createToken(user.email, user.apiKey)});
            }catch (e) {
                res.status(400).json({status: 'Failed', message: `${e.message}`, data: null})
            }
        });
    },

    getAllUsers: (req, res) => {
        userModel.find().select(['-avatar'])
          .then((users) => res.json({status: 'Success', message: 'List of Users', data: users}))
          .catch(err => res.status(400).json({status: 'Failed', message: err.message, data: null}));
    },
    getUser: async (req, res) => {
        try{
            const user = await userModel.findById(req.params.id).select(['-avatar'])
            if(!user) return res.status(404).json({status: 'Failed', message: "user not found", data: null })
            res.json({status: 'Success', message: 'User Details', data: user})
        }
        catch(err){
           errHandler(err, res)
        }
    },
    addUser: async (req, res) => {
        const { firstName, lastName, email, phone, age, status, address, gender } = req.body;
        try{
            const newUser = new userModel({firstName, lastName, email, phone, age, status, address, gender});
            await newUser.save()
            res.json({status: 'Success', message: 'New user created!', data: newUser})
        }
        catch(err){
            errHandler(err, res)
        }
    },
    removeUser: async (req, res) =>{
        try{
            const user = await userModel.findByIdAndDelete({_id: req.params.id})
            if(!user) return res.status(404).json({status: 'Failed', message: "Delete failed: user not found", data: null })
            res.status(200).json({status: 'Success', message: 'User removed!', data: null})
        }
        catch(err){
            errHandler(err, res)
        }
    },
    setUserFirstName: async (req, res) => {
        try{
            const user = await userModel.findOneAndUpdate({ _id: req.params.id }, {firstName : req.body.firstName}, {new: true, runValidators: true}).select(['-avatar'])
            if(!user) return res.status(404).json({status: 'Failed', message: "First name not set: user not found", data: null })
            res.status(200).json({status: 'Success', message: 'First name updated!', data: user})
        }
        catch(err){
            errHandler(err, res)
        }
    },
    setUserLastName: async (req, res) => {
        try{
            const user = await userModel.findOneAndUpdate({ _id: req.params.id }, {lastName : req.body.lastName}, {new: true, runValidators: true}).select(['-avatar'])
            if(!user) return res.status(404).json({status: 'Failed', message: "Last name not set: user not found", data: null })
            res.status(200).json({status: 'Success', message: 'Last name updated!', data: user})
        }
        catch(err){
            errHandler(err, res)
        }
    },
    getUserFirstName: async (req, res) =>{
        try{
            const user = await userModel.findOne({_id: req.params.id})
            if(!user) return res.status(404).json({status: 'Failed', message: "user not found", data: null })
            res.json({status: 'Success', message: "User first name", data: user.firstName})
        }
        catch(err){
            errHandler(err, res)
        }
    },
    getUserLastName: async (req, res) =>{
        try{
            const user = await userModel.findOne({_id: req.params.id})
            if(!user) return res.status(404).json({status: 'Failed', message: "user not found", data: null })
            res.json({status: 'Success', message: "User last name", data: user.lastName})
        }
        catch(err){
            errHandler(err, res)
        }
    },
    setUserEmail: async (req, res) =>{
        try{
            const user = await userModel.findOneAndUpdate({ _id: req.params.id }, {email : req.body.email}, {new: true, runValidators: true}).select(['-avatar'])
            if(!user) return res.status(404).json({status: 'Failed', message: "Email not set: user not found", data: null })
            res.json({status: 'Success', message: "Email Updated!", data: user})
        }
        catch(err){
            errHandler(err, res)
        }
    },
    setUserPhone: async (req, res) =>{
        try{
            const user = await userModel.findOneAndUpdate({ _id: req.params.id }, {phone : req.body.phone}, {new: true, runValidators: true}).select(['-avatar'])
            if(!user) return res.status(404).json({status: 'Failed', message: "Phone not set: user not found", data: null })
            res.json({status: 'Success', message: "Phone number updated!", data: user})
        }
        catch(err){
            errHandler(err, res)
        }
    },
    getUserEmail: async (req, res) =>{
        try{
            const user = await userModel.findOne({_id: req.params.id})
            if(!user) return res.status(404).json({status: 'Failed', message: "user not found", data: null })
            res.json({status: 'Success', message: "User email", data: user.email})
        }
        catch(err){
            errHandler(err, res)
        }
    },
    getUserPhone: async (req, res) =>{
        try{
            const user = await userModel.findOne({_id: req.params.id})
            if(!user) return res.status(404).json({status: 'Failed', message: "user not found", data: null })
            res.json({status: 'Success', message: "User phone number", data: user.phone})
        }
        catch(err){
            errHandler(err, res)
        }
    }, 
    setUserAge: async (req, res) =>{
        try{
            const user = await userModel.findOneAndUpdate({ _id: req.params.id }, {age : req.body.age}, {new: true, runValidators: true}).select(['-avatar'])
            if(!user) return res.status(404).json({status: 'Failed', message: "Age not set: user not found", data: null })
            res.json({status: 'Success', message: "User Age updated!", data: user})
        }
        catch(err){
            errHandler(err, res)
        }
    },
    getUserAge: async (req, res) =>{
        try{
            const user = await userModel.findOne({_id: req.params.id})
            if(!user) return res.status(404).json({status: 'Failed', message: "user not found", data: null })
            res.json({status: 'Success', message: "User Age", data: user.age})
        }
        catch(err){
            errHandler(err, res)
        }
    },
    setUserStatus: async (req, res) =>{
        try{
            const user = await userModel.findOneAndUpdate({ _id: req.params.id }, {status : req.body.status}, {new: true, runValidators: true}).select(['-avatar'])
            if(!user) return res.status(404).json({status: 'Failed', message: "Status not set: user not found", data: null })
            res.json({status: 'Success', message: "User Status updated!", data: user})
        }
        catch(err){
            errHandler(err, res)
        }
    },
    getUserStatus: async (req, res) =>{
        try{
            const user = await userModel.findOne({_id: req.params.id})
            if(!user) return res.status(404).json({status: 'Failed', message: "user not found", data: null })
            res.json({status: 'Success', message: "User Status", data: user.status})
        }
        catch(err){
            errHandler(err, res)
        }
    },
    setUserGender: async (req, res) =>{
        try{
            const user = await userModel.findOneAndUpdate({ _id: req.params.id }, {gender : req.body.gender}, {new: true, runValidators: true}).select(['-avatar'])
            if(!user) return res.status(404).json({status: 'Failed', message: "Gender not set: user not found", data: null })
            res.json({status: 'Success', message: "User gender updated!", data: user})
        }
        catch(err){
            errHandler(err, res)
        }
    },
    getUserGender: async (req, res) =>{
        try{
            const user = await userModel.findOne({_id: req.params.id})
            if(!user) return res.status(404).json({status: 'Failed', message: "user not found", data: null })
            res.json({status: 'Success', message: "User gender", data: user.gender})
        }
        catch(err){
            errHandler(err, res)
        }
    },
    setUserAddress: async (req, res) =>{
        try{
            const user = await userModel.findOneAndUpdate({ _id: req.params.id }, {address : req.body.address}, {new: true, runValidators: true}).select(['-avatar'])
            if(!user) return res.status(404).json({status: 'Failed', message: "address not set: user not found", data: null })
            res.json({status: 'Success', message: "User address updated!", data: user})
        }
        catch(err){
            errHandler(err, res)
        }
    },
    getUserAddress: async (req, res) =>{
        try{
            const user = await userModel.findOne({_id: req.params.id})
            if(!user) return res.status(404).json({status: 'Failed', message: "user not found", data: null })
            res.json({status: 'Success', message: "User address", data: user.address})
        }
        catch(err){
            errHandler(err, res)
        }
    },
    getActiveUsers: async (req, res) => {
        try{
            const users =  await userModel.find({ status: 'ACTIVE'}).select(['-avatar'])
            res.json({status: 'Success', message: 'List of active users', data: users})
        }
        catch(err){
            errHandler(err, res)
        }
    },
    getInActiveUsers: async (req, res) => {
        try{
            const users =  await userModel.find({ status: 'INACTIVE'}).select(['-avatar'])
            res.json({status: 'Success', message: 'List of inactive users', data: users})
        }
        catch(err){
            errHandler(err, res)
        }
    },
    getUserAvatar: async (req, res)=>{
        try{
            const user = await userModel.findById(req.params.id)
            if(!user) return res.status(404).json({status: 'Failed', message: "user not found", data: null })
            if(!user.avatar) return res.status(404).json({status: 'Failed', message: "user does not have an avatar", data: null })
            res.set('Content-Type','image/png');
            res.send(user.avatar)
        }catch(err){
            errHandler(err, res)
        }
    },
        
    setUserAvatar: async (req, res)=>{
        try{
            const user = await userModel.findById(req.params.id);
            if(!user) return res.status(404).json({status: 'Failed', message: "Avatar not set: user not found", data: null })
            const url = req.protocol+ "://"+req.get('host')+req.originalUrl
            const buffer = await sharp(req.file.buffer).resize({width:200, height: 200}).png().toBuffer();
            user.avatar = buffer;
            user.url = url;
            await user.save().then(()=> res.status(200).json({status: 'Success', message:'Avatar updated!', data:{url}}))
        }catch(err){
            errHandler(err, res)
        }
    },

    removeUserAvatar: async (req, res)=>{
        try{
            const user = await userModel.findById(req.params.id);
            if(!user) return res.status(404).json({status: 'Failed', message: "Delete operation failed: user not found", data: null })
            user.avatar = undefined;
            user.url = "N/A";
            await user.save();
            res.status(200).send({status: 'Success', message: 'Profile image deleted successfully', data: null})
        }catch(err){
            errHandler(err, res)
        }
    },
    setUserLevel: async (req, res) =>{
        try{
            const user = await userModel.findOneAndUpdate({ _id: req.params.id }, {level : req.body.level}, {new: true, runValidators: true}).select(['-avatar'])
            if(!user) return res.status(404).json({status: 'Failed', message: "level not set: user not found", data: null })
            res.json({status: 'Success', message: "User level updated!", data: user})
        }
        catch(err){
            errHandler(err, res)
        }
    },
    getUserLevel: async (req, res) =>{
        try{
            const user = await userModel.findOne({_id: req.params.id})
            if(!user) return res.status(404).json({status: 'Failed', message: "user not found", data: null })
            res.json({status: 'Success', message: "User level", data: user.level})
        }
        catch(err){
            errHandler(err, res)
        }
    }
};



module.exports = user;
