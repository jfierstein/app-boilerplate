const passport = require('passport');
const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local');
const userService = require('business/services/userService');

passport.use(new LocalStrategy(
  async (email, password, done) => {
    try {
      const user = await userService.findUserByEmail(email);
      if(!user) return done(new Error('Incorrect email or password'));
      if(!user.passwordHash) return done(new Error('Email/password login not supported'));
      if(!bcrypt.compareSync(password, user.passwordHash)) return done(new Error('Incorrect email or password'));
      return done(null, user);
    }
    catch(err) { return done(err) }
  }
));

passport.serializeUser((user, done) => {
  const { email } = user;
  done(null, { email });
});

passport.deserializeUser( async (user, done) => {
  try {
    const result = await userService.findOne({ email: user.email });
    if(result) 
      done(null, result);
    else return done(new Error("No result"));
  }
  catch(err) { return done(err) }
});

module.exports = passport;