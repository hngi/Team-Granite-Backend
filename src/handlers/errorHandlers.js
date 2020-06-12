exports.catchErrors = (fn) => {
    return function(req, res, next) {
      return fn(req, res, next).catch(next);
    };
  };

  
exports.errHandler = (err,res)=>{
  let message = err.message
  if(err.message.includes("Cast to ObjectId failed")){
      message = "Invalid user id - an id should have 24 hexadecimal digits"
  }else if(err.message.includes("E11000 duplicate key")){
     message = "Email already exists"
  }
  res.status(400).json({status: 'Failed', message, data: null})
}
