'use strict';

const userService = require('business/services/userService');

const authenticate = (req, res, next) => {
    if (req.isAuthenticated()) 
        next();
    else {
        res.clearCookie("connect.sid");
        return res.sendStatus(401);
    }
}

const ensureLoggedIn = (req, res, next) => {
    if(req.isAuthenticated() && req.user)
        next();
    else {
        res.clearCookie("connect.sid");
        return res.sendStatus(401);
    }
}

const ensureAdmin = (req, res, next) => {
    if(req.isAuthenticated() && req.user && req.user.isAdmin)
        next();
    else {
        res.clearCookie("connect.sid");
        return res.redirect('/');
    }
}

const ensureClaim = (req, res, next, claim) => {
    if((req.isAuthenticated() && req.user && req.user.isAdmin) || req.user.claims.includes(claim))
        next();
    else {
        res.clearCookie("connect.sid");
        return res.sendStatus(401);
    }
}

module.exports = {
    authenticate,
    ensureLoggedIn,
    ensureAdmin,
    ensureClaim
}