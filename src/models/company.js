const mongoose = require('mongoose');

const CompanySchema = mongoose.Schema({
    name:{ 
        type: String,
        default: "GRANITE"
    },
    teams : [{
        type: mongoose.Schema.Types.ObjectId, ref: 'team',
        required: true 
    }],
},
{
    timestamps: true
  });


  const Company = mongoose.model('Company', CompanySchema);

  module.exports= Company;