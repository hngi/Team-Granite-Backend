const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const serializeUser = (user) => {
    const { _id } = user;
    return {
      _id,
      isAdmin: user.role === 1,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: user.phone,
      age: user.age
    };
  };
exports.getUsers = async(req, res) => {
    const users = await User.find();
    res.status(201).send(users);
}

exports.createUser = async (req, res) => {
  const user = new User(req.body);
  bcrypt.genSalt(saltRounds, (error, salt) => {
    if (error) return next(error);
    return bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) next(err);
      user.password = hash;
      user.save((er, doc) => {
        if (er) return res.status(400).json({ success: false, message: 'email already exists' });
          req.session.user = serializeUser(doc);
          return res.status(201).json({
            message: 'registration successful!',
            user: serializeUser(doc)
          });
      });
    });
  });
};

exports.login = (req, res) => {
    User.findOne({ email: req.body.email }, (error, user) => {
      if (!user) {
        return res.status(400).json({
          loginSuccess: false,
          message: 'Authentication failed, email not found'
        });
      }
      return bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
        if (err || !isMatch) return res.json({ loginSuccess: false, message: 'Wrong password' });
  
        req.session.user = serializeUser(user);
        return res.status(200).json({
          message: 'login successful',
          data: serializeUser(user)
        });
      });
    });
  };

  exports.getUser = async (req, res) => {
    res.status(200).json(req.session.user);
}

exports.updateUser = async (req, res) => {
    const { email } = req.session.user
    const user = await User.findOneAndUpdate({ email }, req.body, {
        new: true, // return the new user
        runValidators: true
      }).exec();
      res.status(201).send(user);
}

exports.removeUser = async (req, res) => {
    const { isAdmin } = req.session.user;
    if(!isAdmin) return res.status(401).send('Access to unauthorized content denied!')
    await User.findOneAndRemove({ _id: req.params.id });
    const users = await User.find();
    return res.status(201).send(users);
}


exports.getUserFirstName = async (req, res) => {
    res.status(200).json(req.session.user);
}

exports.setUserFirstname = async (req, res) => {
    const { email } = req.session.user
    const { firstName} = req.body
    User.findOneAndUpdate({ email }, { $set: { firstName } }, (err, doc) => {
        req.session.user.firstName = firstName;
        return res.status(200).send(doc);
    });
}

exports.logout = (req, res) => req.session.destroy((err) => {
    if (err) return res.status(400).json({ logoutSuccess: false, err });
    return res.status(200).json({ message: 'logout successful' });
  });
  