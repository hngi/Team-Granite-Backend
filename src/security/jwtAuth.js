const jwtUtil = require('jsonwebtoken')
const secret = 'Team-granite-microservice'
const { RandomToken } = require('@sibevin/random-token')

const createToken = async ({email, apiKey}) => {

    const token = await jwtUtil.sign({email,apiKey},secret, {
        expiresIn: '23h',
        subject: 'Auth Token',
    }, (error, token) => {

        if (error){
            throw new Error(error)
        }
        return token;
    })

}

const generateApiKey = () => {
    return RandomToken.gen({length: 32});
}

module.exports = {
    createToken: createToken,
    generateApiKey: generateApiKey
}