// error handler middleware
const { GeneralError } = require('../utils/errors')

const handleErrors = (err, req, res, next) => {
  if (err instanceof GeneralError) {
    return res.status(err.status || 500).json({
      error: {
        status: err.status || 500,
        success: false,
        message: err.message || 'Internal Server Error'
      }
    })
  }

  return res.status(err.status || 500).json({
    error: {
      status: err.status || 500,
      ok: false,
      message: err.message || 'Internal Server Error'
    }
  })
}

module.exports = handleErrors
