const env = require( 'dotenv');

const userModel = require( '../models/user');

env.config();

const user = {

    getAllUsers: (req, res) => {
        userModel.find()
          .then((users) => res.json({status: 'Success', message: 'List of Users', data: users}))
          .catch(err => res.status(400).json({status: 'Failed', message: err, data: null}));
    },
    getUser: (req, res) => {
       userModel.findById(req.params.id).then((user) => {
            res.json({status: 'Success', message: 'User Details', data: user})
        }).catch((err) => {
            res.status(400).json({status: 'Failed', message: err, data: null})
        })
    },
    addUser: (req, res) => {
        const { firstName, lastName, email, phone, age, status, address, gender } = req.body;
        const newUser = new userModel({firstName, lastName, email, phone, age, status, address, gender});
        newUser.save().then(() => res.json({'Status': 'Success', 'Message': 'New user created!', 'Data': user}))
        .catch( err => res.status(400).json({'Status': 'Failed', 'Message': 'Error: ' + err, 'Data': ''}));
    },
    setUserFirstName: async (req, res) => {
        const user = await userModel.findOneAndUpdate({ _id: req.params.id }, {firstName : req.body.firstName});
        res.status(200).send(user);
    },

    setUserLastName: async (req, res) => {
        const user = await userModel.findOneAndUpdate({ _id: req.params.id }, {lastName : req.body.lastName});
        res.status(200).send(user);
    },
    setUserEmail: async (req, res) =>{
        const {email} = req.body;
        await userModel.findOne({_id: req.params.id}).then(user =>{
            user.email = email;
            user.save().then(()=> res.status(200).json({'Status': 'Success', 'Message': 'Email updated!', 'Data': email}))
            .catch((err) => res.status(400).json({'Status': 'Failed', 'Message': 'Error: ' + err, 'Data': ''}));
        }).catch((err) => res.status(400).json({'Status': 'Failed', 'Message': 'Error: ' + err, 'Data': ''}));
    },
    setUserPhone: async (req, res) =>{
      const {phone} = req.body;
      await userModel.findOne({_id: req.params.id}).then(user =>{
            user.phone = phone;
            user.save().then(()=> res.status(200).json({'Status': 'Success', 'Message': 'Phone number updated!', 'Data': phone}))
            .catch((err) => res.status(400).json({'Status': 'Failed', 'Message': 'Error: ' + err, 'Data': ''}));
        }).catch((err) => res.status(400).json({'Status': 'Failed', 'Message': 'Error: ' + err, 'Data': ''}));
    },
    getUserFirstName: (req, res) =>{
        userModel.findOne({_id: req.params.id}).then(user => res.json(user.firstName))
        .catch((err) => res.status(400).json('err:' + err));
    },
    getUserLastName: (req, res) =>{
        userModel.findOne({_id: req.params.id}).then(user => res.json(user.lastName))
        .catch((err) => res.status(400).json('err:' + err));
    },
    getUserEmail: (req, res) =>{
        userModel.findOne({_id: req.params.id}).then(user => res.json(user.email))
        .catch((err) => res.status(400).json('err:' + err));
    },
    getUserPhone: (req, res) =>{
        userModel.findOne({_id: req.params.id}).then(user => res.json(user.phone))
        .catch((err) => res.status(400).json('err:' + err));
    },
    getUserAge: (req, res) =>{
        userModel.findOne({_id: req.params.id}).then(user => res.json(user.age))
        .catch((err) => res.status(400).json('err:' + err));

    },
    setUserAge: async (req, res) =>{
      const {age} = req.body;
      await userModel.findOne({_id: req.params.id}).then(user =>{
            user.age = age;
            user.save().then(() =>
            res.status(200).json(user))
        }).catch((err) => res.status(400).json('err:' + err));
    },
    removeUser: (req, res) =>{
        userModel.findByIdAndDelete({_id: req.params.id}).then(()=> res.status(200).json('User deleted!'))
        .catch((err) => res.status(400).json('err:' + err));
    },

    setUserStatus: async (req, res) =>{
        const {status} = req.body;
        await userModel.findOne({_id: req.params.id}).then(users =>{
            users.status = status;
            users.save().then(()=> res.status(200).json({status, msg:'User status updated!'}))
            .catch((err) => res.status(400).json('err:' + err));
        }).catch((err) => res.status(400).json('err:' + err));
    },
    getUserStatus: (req, res) =>{
        userModel.findOne({_id: req.params.id}).then(user => res.json(user.status))
        .catch((err) => res.status(400).json('err:' + err));
    },
    setUserGender: (req, res) =>{
        const {gender} = req.body;
        userModel.findOne({_id: req.params.id}).then(user =>{
            user.gender = gender;
            user.save().then(() =>
            res.status(200).json(user))
        }).catch((err) => res.status(400).json('err:' + err));
    },
    getUserGender: (req, res) =>{
        userModel.findOne({_id: req.params.id}).then(user => res.json(user.gender))
        .catch((err) => res.status(400).json('err:' + err));

    },
    setUserAddress: (req, res) =>{
        const {address} = req.body;
        userModel.findOne({_id: req.params.id}).then(user =>{
            user.address = address;
            user.save().then(() =>
            res.status(200).json(user))
        }).catch((err) => res.status(400).json('err:' + err));
    },
    getUserAddress: (req, res) =>{
        userModel.findOne({_id: req.params.id}).then(user => res.json(user.address))
        .catch((err) => res.status(400).json('err:' + err));

    },
    getActiveUsers: (req, res) => {
        userModel.find({ status: 'ACTIVE'})
        .then(users => res.json(users))
        .catch(err => res.status(400).json(`Error: ${err}`))
    },
    getInActiveUsers: (req, res) => {
        userModel.find({ status: 'INACTIVE'})
        .then(users => res.json(users))
        .catch(err => res.status(400).json(`Error: ${err}`))
    },
    getInternUsers: (req, res) => {
        userModel.find({ level: "intern"})
        .then(users => res.json(users))
        .catch(err => res.status(400).json(`Error: ${err}`))
    },
    getMentorUsers: (req, res) => {
        userModel.find({ level: "mentor"})
        .then(users => res.json(users))
        .catch(err => res.status(400).json(`Error: ${err}`))
    }
};

module.exports = user;
