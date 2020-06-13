const companyModel = require( '../models/company');
const teamModel = require('../models/team');
const userModel = require('../models/user');
const { errHandler } = require('../handlers/errorHandlers');

const company = {
    createTeam: async (req, res) => {
        const { name } = req.body;
        try{
            const newTeam = new teamModel({name});
            await newTeam.save()
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
    getCompanyName: async (req, res) => {
        try{
        const company = await companyModel.findOne({id:req.params.id})
            if(!company) return res.status(404).json({status: 'Failed', message: "Company name not found", data: null })
            res.json({status: 'Success', message: "Company name", data: company.name})
        }
        catch(err){
            errHandler(err, res)
        }
        
    },
    getAllCompanies: (req, res) => {
        companyModel.find().populate('teams').exec()
          .then((companies) => res.json({status: 'Success', message: 'List of Companies', data: companies}))
          .catch(err => res.status(400).json({status: 'Failed', message: err.message, data: null}));
    },
    getAllTeams: (req, res) => {
        teamModel.find()
          .then((teams) => res.json({status: 'Success', message: 'List of Teams', data: teams}))
          .catch(err => res.status(400).json({status: 'Failed', message: err.message, data: null}));
    },
    getUserTeam: async(req, res) =>{
        const user = await userModel.findOne({_id: req.params.id})
        if(!user) return res.status(404).json({status: 'Failed', message: "Team name not found", data: null })
        res.json({status: 'Success', message: "User team name", data: user.team})
    },
    getUserCompany: async(req, res) =>{
        const user = await userModel.findOne({_id: req.params.id})
        if(!user) return res.status(404).json({status: 'Failed', message: "Company name not found", data: null })
        res.json({status: 'Success', message: "User company name", data: user.company})
    },
    getTeamMembers: async(req, res) =>{
        const {name} = req.body;
        try{
            const team = await teamModel.findOne({name})
                if(!team) return res.status(404).json({status: 'Failed', message: "No team members found", data: null })
                res.json({status: 'Success', message: "Team members", data: team.users})
            }
            catch(err){
                errHandler(err, res)
            }

    },
    getCompanyMembers: async(req, res) =>{
        const {name} = req.body;
        try{
            const company = await companyModel.findOne({name}).populate('users')
                if(!company) return res.status(404).json({status: 'Failed', message: "No team members found", data: null })
                res.json({status: 'Success', message: "Company members", data: company.users})
            }
            catch(err){
                errHandler(err, res)
            }

    },
    setUserCompanyName: async (req, res) =>{
        const { name } = req.body;
        try{
            const user = await userModel.findOneAndUpdate({id: req.params.id })
            const company = new companyModel({name})
            company.save();
            user.company = name;
            user.save();
            if(!user) return res.status(404).json({status: 'Failed',  data: null })
            res.status(200).json({status: 'Success', message: 'User company updated!', data: user.team})
        }
        catch(err){
            errHandler(err, res)
        }

    },
    setUserTeamName: async (req, res) => {
        const teamNames = ['RED', 'BLUE', 'GREEN', 'GOLD'];
        const randomTeam = teamNames[Math.floor(Math.random() * teamNames.length)];
        console.log(randomTeam);
        try{
            const user = await userModel.findOneAndUpdate({id: req.params.id })
            const newteam = new teamModel({name: randomTeam})
            newteam.save();
            user.team = randomTeam;
            user.save();
            if(!user) return res.status(404).json({status: 'Failed',  data: null })
            res.status(200).json({status: 'Success', message: 'Team name updated!', data: user.team})
        }
        catch(err){
            errHandler(err, res)
        }
    }
};
module.exports = company;
