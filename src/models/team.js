const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
    name: {
        type: String,
        enum: ['RED', 'BLUE', 'GREEN', 'GOLD'],
        required: true,
        trim: true
    },
    users: {
        type: [{type: mongoose.Schema.Types.ObjectId, ref: 'user'}],
        required: true,

    }
});
UserSchema.pre('save', function(next) {
    this.updated_at = Date.now();
    next();
});


module.exports = mongoose.model('Team', TeamSchema);