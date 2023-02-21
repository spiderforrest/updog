require('dotenv').config()

module.exports = async (req: any, res: any, next: any) => {
  try {
    const cookie = req.cookies.userCookie;
    // Check the httpOnly session cookie for the current user
    if (!cookie) throw new Error('You must be signed in to continue');

    // Verify the JWT token stored in the cookie, then attach to each request
    const user = jwt.verify(cookie, process.env.JWT_SECRET);
    req.user = user;

    next();
  } catch(err) {
    // err.status = 401;
    next(err);
  }
};
