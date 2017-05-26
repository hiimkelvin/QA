let controller = require('../controllers/controller');

module.exports = app => {
    app.post('/api/login', controller.loginReg);
    app.get('/api/current', controller.current);
    app.get('/api/question', controller.getQuestions);
    app.post('/api/question', controller.addQuestion);
	app.get('/logout', controller.logout);
    app.get('/api/question/show/:id', controller.getOneQuestions);
    app.post('/api/answer/:id', controller.createAnswer);
    // app.post('/api/comments/:message_id', controller.createComment);
    // app.get('/api/messages', controller.getMessages);
    
};