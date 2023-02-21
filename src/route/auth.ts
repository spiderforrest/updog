import express from "express";
const authRoute = express.Router();
const { signUp, signIn } = require("../services/crud")
require('dotenv').config()

function genCookie(res: any, token: string) {
  res
    .cookie('userCookie', token, {
      httpOnly: true,
      secure: process.env.SECURE_COOKIES === 'true',
      sameSite: process.env.SECURE_COOKIES === 'true' ? 'none' : 'strict',
      maxAge: process.env.TOKEN_MAX_AGE
    })
    .json({ message: 'Signed in successfully!' });
}

authRoute.post("/signUp", async (req: any, res: any, next: any) => {
  try {
    const token = await signUp(res, req.body.username, req.body.email, req.body.password);
    genCookie(res, token)
  } catch(err){
    next(err);
  }
});

authRoute.post("/signIn", async (req: any, res: any, next: any) => {
  try {
    const token = await signIn(res, req.body.username || req.body.email, req.body.password);
    genCookie(res, token)
  } catch(err){
    next(err);
  }
});


module.exports = authRoute;
