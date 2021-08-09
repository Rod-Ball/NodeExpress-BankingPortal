const express = require("express");
const router = express.Router();
const { accounts } = require('../data.js');

router.get('/savings', function(req, res){
    res.render('account',{account: accounts.savings});
}); 

router.get('/credit', function(req, res){
    res.render('account',{title: 'Account Credit Summary', account: accounts.credit});
}); 

router.get('/checking', function(req, res){
    res.render('account',{title: 'Account Checking Summary', account: accounts.checking});
}); 

module.exports = router;