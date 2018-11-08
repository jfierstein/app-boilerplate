'use strict';

const passport = require('passport');

const express = require('express');
const router = express.Router();

const request = require('lib/express/request');

const userService = require('business/services/userService.js');

/*
/ Authentication
*/
router.get('/badlogin', (req, res) => {
  res.sendStatus(401);
});

router.get('/status', request.authenticate, async (req, res) => {
  const user = await userService.findUserByEmail(req.user.email);
  res.json(user);
});

router.post('/login', (req, res, next) => {
  const { redirect } = req.query;
  passport.authenticate('local', (err, user) => {
    if (err) return res.status(500).send(err.message);
    req.logIn(user, (err) => {
      if (err) return res.status(500).send(err.message);
      if (!user) return res.redirect('/auth/badlogin');
      if (user.isAdmin) return res.redirect(redirect ? redirect : '/admin/properties');
      return res.status(202).send('login_success');
    });
  })(req, res, next);
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;