const companyModel = require( '../models/company');
const teamModel = require('../models/team');
const userModel = require('../models/user');

const company = {
    getCompanyName: async (req, res) => {
        try{
        const company = await companyModel.find()
            if(!company) return res.status(404).json({status: 'Failed', message: "Company name not found", data: null })
            res.json({status: 'Success', message: "User first name", data: company.name})
        }
        catch(err){
            errHandler(err, res)
        }
        
    },
    getUserTeam: (req, res) =>{
        const team = teamModel.findOne({_id: req.params.id})
        if(!team) return res.status(404).json({status: 'Failed', message: "Team name not found", data: null })
        res.json({status: 'Success', message: "User team name", data: team.name})
    },
    getTeamMembers: (req, res) =>{
        try{
            const team = await teamModel.findone(name)
                if(!team) return res.status(404).json({status: 'Failed', message: "No team members found", data: null })
                res.json({status: 'Success', message: "Team members", data: team.users})
            }
            catch(err){
                errHandler(err, res)
            }

    },
    setUserFirstName: async (req, res) => {
        try{
            const user = await userModel.findOneAndUpdate({ _id: req.params.id })
            const team = await teamModel.findone(name)
            user.team.random() = team.name;
            user.save()
            if(!user) return res.status(404).json({status: 'Failed',  data: null })
            res.status(200).json({status: 'Success', message: 'Team name updated!', data: user.team})
        }
        catch(err){
            errHandler(err, res)
        }
    }
};