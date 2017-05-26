let mongoose = require('mongoose');

let User = mongoose.model('User');
let Question = mongoose.model('Question');
let Answer = mongoose.model('Answer');

module.exports = {

    loginReg: (req, res) => {
        User.findOne({name: req.body.name}, (err, user) => {
            if(user == null){
                let newUser = new User(req.body);
                newUser.save( (err, savedUser) => {
                    if(err){
                        console.log(err);
                        return res.sendStatus(500);
                    } else {
                        req.session.user = savedUser;
                        // console.log(req.session);
                        return res.json(savedUser);
                    }
                })
            } else {
                req.session.user = user;
                // console.log(req.session);
                return res.json(user);
            }
        })
    },

    current: (req, res) => {
        if(!req.session.user){
            return res.status(401);
        } else {
            return res.json(req.session.user);
        }
    },

	logout: (req, res)=> {
		req.session.destroy();
		res.redirect('/')
	},

    addQuestion: (req, res) => {
        if(!req.session.user){
            return res.sendStatus(401);
        } else {
            let question = new Question (req.body);
            question._user = req.session.user._id;
            question._answer += 0
            console.log(question);
            question.save( (err, newQuestion) => {
                if(err){
                    console.log(err);
                } else {
                    res.json(newQuestion)
                }
            })
        }
    },

    getQuestions: (req,res) => {
        Question.find({}, (err, questions) => {
            if(err){
                console.log(err)
                return res.sendStatus(500);
            } else {
                return res.json(questions);
            }
        })
    },

    getOneQuestions: (req, res) => {
        Question.findOne({_id: req.params.id}, (err, current_question) => {
            if(err){
                console.log(err);
                return res.sendStatus(500);
            } else {
                // console.log(current_user);
                return res.json(current_question);
            }
        })
    },

    createAnswer: (req, res) => {
        Question.findOne({_id: req.params.message_id}, (err, question) => {
            if(err){
                console.log(err);
                return res.sendStatus(500);
            } else {
                let answer = new Answer(req.body);
                answer._user = req.session.user._id;
                answer.save( (err, savedAnswer) => {
                    if(err){
                        console.log(err);
                        return;
                    } else {
                        question.answers.push(savedAnswer);
                        question.save( (err, savedQuestion) => {
                            if(err){
                                console.log(err);
                                return;
                            } else {
                                return res.json(savedQuestion);
                            }
                        })
                    }
                })
            }
        })
    },

    // addUser: (req, res) => {
    //     var newUser = new User(req.body);
    //     console.log(req.body);
    //     newUser.save((err, users) => {
    //         if(err){
    //             console.log(err);
    //             return res.sendStatus(500);
    //         } else {
    //             return res.json(users);
    //         }
    //     })
    // },

    // getUsers: (req,res) => {
    //     User.find({}, (err, users) => {
    //         if(err){
    //             console.log(err)
    //             return res.sendStatus(500);
    //         } else {
    //             return res.json(users);
    //         }
    //     })
    // },

    // deleteUser: (req, res) => {
    //     console.log('hit controller')
    //     User.remove({_id: req.params.id}, (err, user) => {
    //         if(err){
    //             console.log(err)
    //             return res.sendStatus(500);
    //         } else {
    //             return res.json(user);
    //         }
    //     })
    // },

    // addProduct: (req, res) => {
    //     var newProd = new Product(req.body);
    //     // console.log(req.body);
    //     newProd.save((err, users) => {
    //         if(err){
    //             console.log(err);
    //             return res.sendStatus(500);
    //         } else {
    //             return res.json(users);
    //         }
    //     })
    // },

    // getProducts: (req,res) => {
    //     Product.find({}, (err, products) => {
    //         if(err){
    //             console.log(err)
    //             return res.sendStatus(500);
    //         } else {
    //             return res.json(products);
    //         }
    //     })
    // },

    // addOrder: (req, res) => {
    //     var orderUser;
    //     var orderProduct;

    //     User.findOne({_id: req.body._user}, (err, user) => {
    //         if(err){
    //             console.log(err);
    //             return res.sendStatus(500);
    //         } else {
    //             this.orderUser = user._id;
    //             Product.findOne({_id: req.body._product}, (err, product) => {
    //                 if(err){
    //                     console.log(err);
    //                     return res.sendStatus(500);
    //                 } else {
    //                     this.orderProduct = product._id;
    //                     product.quantity -= req.body.order;
    //                     product.save((err, newQuantity) => {
    //                         if(err){
    //                             console.log(err)
    //                             return;
    //                         } else {
    //                             var order = new Order({ _user: this.orderUser, order: req.body.order, _product: this.orderProduct });
    //                             console.log(order);
    //                             order.save((err, newOrders) => {
    //                                 if(err){
    //                                     console.log(err);
    //                                     return res.sendStatus(500);
    //                                 } else {

    //                                     return res.json(newOrders);
    //                                 }
    //                             })
    //                         }

    //                     })

    //                 }
    //             })
    //         }
            
    //     })

    // },
    
    // getOrders: (req,res) => {
    //     Order.find({}).populate('_user').populate('_product').exec( (err, users) => {
    //         if(err){
    //             console.log(err)
    //             return res.sendStatus(500);
    //         } else {
    //             return res.json(users);
    //         }
    //     })
    // },

};

