let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let AnswerSchema = new Schema({
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    answer: {type: String, required: true},
    details: {type: String},
    likes: {type: Boolean, required: false},
    
}, {timestamps: true});

mongoose.model('Answer', AnswerSchema);

