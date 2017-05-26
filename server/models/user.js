let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: {type: String, required: [true, "Username is required."] },

}, {timestamps: true});

mongoose.model('User', UserSchema);

