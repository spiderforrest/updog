import express from "express";
const passport = require('passport');
const LocalStrategy = require('passport-local');
const crypto = require('crypto');
const router = express.Router();

// init database connection pool
const Pool = require("pg").Pool;
require('dotenv').config()
const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DB,
  password: process.env.PG_PASS,
  port: process.env.PG_PORT,
});


passport.use(new LocalStrategy(function verify(username: any, password: any, cb: any) {
  pool.query('SELECT * FROM users WHERE username = $1', [ username ], function(err: any, row: any) {
    if (err) { return cb(err); }
    if (!row) { return cb(null, false, { message: 'Incorrect username or password.' }); }

    crypto.pbkdf2(password, row.salt, 310000, 32, 'sha256', function(err: any, hashedPassword: any) {
      if (err) { return cb(err); }
      if (!crypto.timingSafeEqual(row.hashed_password, hashedPassword)) {
        return cb(null, false, { message: 'Incorrect username or password.' });
      }
      return cb(null, row);
    });
  });
}));

router.post('/authenticate', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/auth'
}));

module.exports = router;
