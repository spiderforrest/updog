const express = require('express');
const app = express();
// Routes and middleware
const cookieParser = require('cookie-parser');
const notFound = require('./middleware/not-found');
const error = require('./middleware/error');
const testRoute: any = require('./route/test');
const authRoute: any = require('./route/auth');

// Built in middleware
app.use(express.json());
app.use(cookieParser());

// req.isAuthenticated is provided from the auth router
app.get('/', (req: any, res: any) => {
  // res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});


app.use('/api/v1/auth', authRoute);

// testing messages for now
app.use('/test', testRoute);

// Error handling & 404 middleware for when
// a request doesn't match any app routes
// app.use(notFound);
app.use(error);

app.listen(3000, () => {
  console.log("server started");
});
