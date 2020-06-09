const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.getUsers = async(req, res) => {
    const users = await User.find();
    res.status(200).send(users);
}

exports.createUser = async (req, res) => {
    const user = await (new User(req.body)).save();
    res.status(201).send(user);
};

exports.updateUser = async (req, res) => {
    const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true, // return the new user
        runValidators: true
      }).exec();
      res.status(200).send(user);
}

exports.removeUser = async (req, res) => {
    const user = await User.findOneAndRemove({ _id: req.params.id });
    const users = await User.find();
    res.status(200).send(users);
}

exports.getUser = async (req, res) => {
    const user = await User.findOne({ _id: req.params.id });
    res.status(200).send(user);
}

exports.getUserFirstName = async (req, res) => {
    const user = await User.findOne({ _id: req.params.id });
    res.status(200).send(user.firstName);
}

exports.setUserFirstname = async (req, res) => {
    const user = await User.findOneAndUpdate({ _id: req.params.id }, {firstName : req.body.firstName});
    res.status(200).send(user);
}

exports.getUserLastName = async (req, res) => {
    const user = await User.findOne({ _id: req.params.id });
    res.status(200).send(user.lastName);
}

exports.setUserLastname = async (req, res) => {
    const user = await User.findOneAndUpdate({ _id: req.params.id }, {lastName : req.body.lastName});
    res.status(200).send(user);
}

exports.getUserEmail=async(req,res,next)=>{
    const user = await User.findOne({_id:req.params.id});
    res.status(200).send(user.email);
}

exports.getphone = async (req, res) => {
    const user = await User.findOne({ _id: req.params.id });
    res.status(200).send(user.phone);
}

exports.setphone = async (req, res) => {
    const user = await User.findOneAndUpdate({ _id: req.params.id }, {phone : req.body.phone});
    res.status(200).send(user);
}

exports.getage = async (req, res) => {
    const user = await User.findOne({ _id: req.params.id });
    res.status(200).send(user.age);
}

exports.setage = async (req, res) => {
    const user = await User.findOneAndUpdate({ _id: req.params.id }, {age : req.body.age});
    res.status(200).send(user);
}

exports.getgender = async (req, res) => {
    const user = await User.findOne({ _id: req.params.id });
    res.status(200).send(user.gender);
}

exports.setgender = async (req, res) => {
    const user = await User.findOneAndUpdate({ _id: req.params.id }, {gender : req.body.gender});
    res.status(200).send(user);
