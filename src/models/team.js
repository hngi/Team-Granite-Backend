const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'user',
        unique: true,
        required: true,
    }]
});
TeamSchema.pre('save', function(next) {
    this.updated_at = Date.now();
    next();
});


module.exports = mongoose.model('Team', TeamSchema);
