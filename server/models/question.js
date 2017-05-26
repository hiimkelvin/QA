let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let QuestionSchema = new Schema({
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    question: {type: String, required: true},
    description: {type: String },
    answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
    
}, {timestamps: true});

mongoose.model('Question', QuestionSchema);

