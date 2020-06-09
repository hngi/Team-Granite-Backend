const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.getUsers = async(req, res) => {
    const users = await User.find();
    res.status(200).send(users);
}

exports.createUser = async (req, res) => {
    const user = await (new User(req.body)).save();
    res.status(200).send(user);
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