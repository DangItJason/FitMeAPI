var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    exercises: {
        sunday: [String],
        monday: [String],
        tuesday: [String],
        wednesday: [String],
        thursday: [String],
        friday: [String],
        saturday: [String],
    }
})

var UserModel = mongoose.model('UserDB', UserSchema);

module.exports = UserModel;