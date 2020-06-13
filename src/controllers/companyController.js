const companyModel = require( '../models/company');
const teamModel = require('../models/team');
const userModel = require('../models/user');
const ObjectId = require('mongodb').ObjectID
const { errHandler } = require('../handlers/errorHandlers');

const company = {
    createTeam: async (req, res) => {
        const { name } = req.body;
        const companyId = req.params.id
        try{
            const newTeam = new teamModel({name});
            await newTeam.save()

            const company = await companyModel.findOne({_id: companyId})

            company.teams = company.teams.concat(newTeam)
            await company.save()

            res.json({status: 'Success', message: 'New team created!', data: newTeam})
        }
        catch(err){
            errHandler(err, res)
        }
    },
    createCompany: async (req, res) => {
        const { name } = req.body;
        try{
            const company = new companyModel({name});
            await company.save()
            res.json({status: 'Success', message: 'New company created!', data: company})
        }
        catch(err){
            errHandler(err, res)
        }
    },
    getCompany: async (req, res) => {
        const companyId = req.params.id
        try{
            const company = await companyModel.findOne({_id: companyId})
            if(!company) return res.status(404).json({status: 'Failed', message: "Company not found", data: null })
            res.json({status: 'Success', message: "Company", data: company})
        }
        catch(err){
            errHandler(err, res)
        }
        
    },
    getAllCompanies: (req, res) => {
        companyModel.find()
          .then((companies) => res.json({status: 'Success', message: 'List of Companies', data: companies}))
          .catch(err => res.status(400).json({status: 'Failed', message: err.message, data: null}));
    },
    getAllTeams: async (req, res) => {

        const companyId = req.params.id

        try {
            const company = await companyModel.findById(companyId)
            if(!company) return res.status(404).json({status: 'Failed', message: "Company not found", data: null })

            const companyTeams = []
            for (let teamId in company.teams) {
                companyTeams[teamId] = await teamModel.findById(company.teams[teamId])
            }

            res.json({status: 'Success', message: 'List of Teams', data: companyTeams})

        }catch (err) {
            errHandler(err,req)
        }
    },
    getUserTeam: async(req, res) =>{
        const user = await userModel.findOne({_id: req.params.id})
        if(!user) return res.status(404).json({status: 'Failed', message: "User not found", data: null })
        const team = await teamModel.findById(user.team)
        if(!team) return res.status(404).json({status: 'Failed', message: "Team not found", data: null })
        res.json({status: 'Success', message: "User team name", data: team})
    },
    getUserCompany: async(req, res) =>{
        const user = await userModel.findOne({_id: req.params.id})
        if(!user) return res.status(404).json({status: 'Failed', message: "User not found", data: null })

        const company = await companyModel.findById(user.company)
        if(!company) return res.status(404).json({status: 'Failed', message: "Company not found", data: null })

        res.json({status: 'Success', message: "User company", data: company})
    },
    getTeamMembers: async(req, res) =>{
        const teamId = req.params.id
        try{
            const team = await teamModel.findById(teamId)
            if(!team) return res.status(404).json({status: 'Failed', message: "Team Not Found", data: null })

            const teamMembers = []

            for (let userId in team.users) {
                teamMembers[userId] = await userModel.findById(team.users[userId])
            }

            res.json({status: 'Success', message: "Team members", data: teamMembers})
        }
        catch(err){
            errHandler(err, res)
        }

    },
    getCompanyMembers: async(req, res) =>{
        const companyId = req.params.id
        try{
            const company = await companyModel.findById(companyId)
            if(!company) return res.status(404).json({status: 'Failed', message: "Company not Found", data: null })

            const companyUsers = []

            for (let userId in company.users) {
                companyUsers[userId] = await userModel.findById(company.users[userId])
            }

            res.json({status: 'Success', message: "Company members", data: companyUsers})
        }
        catch(err){
            errHandler(err, res)
        }

    },
    setUserCompany: async (req, res) =>{

        const userId = req.params.userId
        const companyId = req.params.companyId

        try{
            const company = await companyModel.findOne({_id:companyId})
            const user = await userModel.findById(userId)

            if(!user) return res.status(404).json({status: 'Failed', message:'User not found',  data: null })
            if(!company) return res.status(404).json({status: 'Failed', message:'Company not found',  data: null })

            company.users = company.users.concat(user)
            user.company = company

            await company.save()
            await user.save();

            res.status(200).json({status: 'Success', message: 'User Company Updated', data: company})
        }
        catch(err){
            errHandler(err, res)
        }

    },
    setUserTeam: async (req, res) => {

        const userId = req.params.userId
        const teamId = req.params.teamId

        try{
            const team = await teamModel.findOne({_id:teamId})
            const user = await userModel.findById(userId)

            if(!user) return res.status(404).json({status: 'Failed', message:'User not found',  data: null })
            if(!team) return res.status(404).json({status: 'Failed', message:'Team not found',  data: null })

            team.users = team.users.concat(user)
            user.team = team

            await team.save()
            await user.save();

            res.status(200).json({status: 'Success', message: 'User Team Updated', data: team})
        }
        catch(err){
            errHandler(err, res)
        }
    }
};
module.exports = company;
