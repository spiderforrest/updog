import express, { Express, Request, Response } from "express";
const app: Express = express();
const testRoute: any = require('./route/test');
const { auth, requiresAuth } = require('express-openid-connect');
require('dotenv').config()

// config for auth0
const authConfig = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTH_SECRET,
  baseURL: process.env.AUTH_BASE_URL,
  clientID: process.env.AUTH_CLIENT_ID,
  issuerBaseURL: process.env.AUTH_ISSUER_URL
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(authConfig));


app.use(express.json()); //accept json

// req.isAuthenticated is provided from the auth router
app.get('/', (req: any, res: any) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

// testing messages for now
app.use('/test', testRoute);

app.get('/profile', requiresAuth(), (req: any, res: any) => {
  res.send(JSON.stringify(req.oidc.user));
  console.log(req.oidc.user);
});

app.listen(3000, () => {
  console.log("server started");
});
