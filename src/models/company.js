const mongoose = require('mongoose');

const CompanySchema = mongoose.Schema({
    name:{ 
        type: String,
        default: "Granite"
    },
    team : {
        type: String,
        name: mongoose.Schema.Types.String, ref: 'team', 
        required: true 
    },
},
{
    timestamps: true
  });


  const Company = mongoose.model('Company', CompanySchema);

  module.exports= Company;