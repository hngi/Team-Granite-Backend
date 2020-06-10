module.exports = mongoose.model('User', userSchema);
module.exports = {
    development: {
      port: process.env.PORT || 3000,
      saltingRounds: 10
    }
  }