const ContactRouter = require('express').Router();
const contactController = require('../Controllers/ContactController');
ContactRouter.get('/contact',contactController.getContact)
ContactRouter.post('/addContact',contactController.addContact)


module.exports=ContactRouter;