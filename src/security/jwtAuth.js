const jwtUtil = require('jsonwebtoken')
const { RandomToken } = require('@sibevin/random-token')

const createToken =  (email, apiKey) => {

    return jwtUtil.sign({email:email, apiKey:apiKey}, process.env.JWT_SECRET, {
        expiresIn: '23h',
        subject: 'Auth Token',
    });
}

const decodeToken = (token) => {
    try{
        return jwtUtil.verify(token, process.env.JWT_SECRET);
    }catch (e) {
        throw new Error(e);
    }

}

const generateApiKey = () => {
    return RandomToken.gen({length: 32});
}

module.exports = {
    createToken: createToken,
    generateApiKey: generateApiKey,
    decodeToken
}